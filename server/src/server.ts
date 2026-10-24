// Contact form backend: receives the site's form posts and emails each one to
// MAIL_TO over SMTP. Runs behind Caddy, which terminates HTTPS. Configuration
// comes from the environment; see .env.example.
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { Readable } from 'node:stream';
import nodemailer from 'nodemailer';

const env = process.env;
const port = Number(env.PORT ?? 8787);
const host = env.HOST ?? '127.0.0.1';
const allowedOrigins = (env.ALLOWED_ORIGINS ?? 'https://www.lulolo.com').split(',').map((o) => o.trim());
const mailTo = env.MAIL_TO ?? '';
const mailFrom = env.MAIL_FROM ?? env.SMTP_USER ?? '';

// Without SMTP_HOST, emails are printed to the console instead of sent, so the
// service can be tried locally without a mail account.
const transport = env.SMTP_HOST
  ? nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: Number(env.SMTP_PORT ?? 465),
      secure: Number(env.SMTP_PORT ?? 465) === 465,
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    })
  : nodemailer.createTransport({ jsonTransport: true });

if (env.SMTP_HOST && (!mailTo || !mailFrom)) {
  console.error('MAIL_TO and MAIL_FROM (or SMTP_USER) must be set when SMTP_HOST is.');
  process.exit(1);
}

const MAX_BODY = 64 * 1024;
const limits = { name: 200, email: 320, company: 200, plan: 200, message: 10_000 };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// At most RATE_MAX submissions per address per RATE_WINDOW, kept in memory.
const RATE_MAX = 5;
const RATE_WINDOW = 10 * 60 * 1000;
const recent = new Map<string, number[]>();
const limited = (ip: string) => {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > RATE_MAX;
};
setInterval(() => {
  const now = Date.now();
  for (const [ip, hits] of recent) if (hits.every((t) => now - t >= RATE_WINDOW)) recent.delete(ip);
}, RATE_WINDOW).unref();

// Caddy on the same machine passes the visitor's address in X-Forwarded-For.
const clientIp = (req: IncomingMessage) => {
  const remote = req.socket.remoteAddress ?? '';
  const loopback = remote === '127.0.0.1' || remote === '::1' || remote === '::ffff:127.0.0.1';
  const forwarded = String(req.headers['x-forwarded-for'] ?? '').split(',')[0].trim();
  return loopback && forwarded ? forwarded : remote;
};

const send = (res: ServerResponse, status: number, body: object) => {
  res.writeHead(status, { 'Content-Type': 'application/json' }).end(JSON.stringify(body));
};

// Reads the form body as the browser sent it, multipart or url-encoded.
const readForm = (req: IncomingMessage) =>
  new Request('http://localhost', {
    method: 'POST',
    headers: { 'content-type': req.headers['content-type'] ?? '' },
    body: Readable.toWeb(req) as ReadableStream,
    duplex: 'half',
  } as RequestInit).formData();

const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();

async function handleContact(req: IncomingMessage, res: ServerResponse) {
  const length = Number(req.headers['content-length']);
  if (!length) return send(res, 411, { error: 'Content-Length required.' });
  if (length > MAX_BODY) return send(res, 413, { error: 'Message too large.' });
  if (limited(clientIp(req))) return send(res, 429, { error: 'Too many messages. Try again later.' });

  let form: FormData;
  try {
    form = await readForm(req);
  } catch {
    return send(res, 400, { error: 'Could not read the form.' });
  }
  const field = (name: keyof typeof limits) => String(form.get(name) ?? '').trim().slice(0, limits[name]);
  const data = {
    name: oneLine(field('name')),
    email: oneLine(field('email')),
    company: oneLine(field('company')),
    plan: oneLine(field('plan')),
    message: field('message'),
  };

  // Spam trap: people never see this field, bots often fill it in. Pretend it worked.
  if (form.get('_gotcha')) return send(res, 200, { ok: true });

  const errors: string[] = [];
  if (!data.name) errors.push('name');
  if (!emailPattern.test(data.email)) errors.push('email');
  if (data.message.length < 10) errors.push('message');
  if (errors.length) return send(res, 422, { error: 'Invalid fields.', fields: errors });

  const details = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company && `Company: ${data.company}`,
    data.plan && `Interested in: ${data.plan}`,
  ].filter(Boolean);

  try {
    const info = await transport.sendMail({
      from: { name: 'LULOLO website', address: mailFrom || 'website@localhost' },
      to: mailTo || 'you@localhost',
      replyTo: { name: data.name, address: data.email },
      subject: `Website: ${data.plan || 'message'} from ${data.name}`,
      text: `${details.join('\n')}\n\n${data.message}\n`,
    });
    if (!env.SMTP_HOST) console.log('Email (not sent, no SMTP_HOST):', info.message.toString());
    send(res, 200, { ok: true });
  } catch (err) {
    console.error('Sending failed:', err);
    send(res, 502, { error: 'The message could not be sent.' });
  }
}

const server = createServer((req, res) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  const path = new URL(req.url ?? '/', 'http://localhost').pathname;

  if (path === '/health' && req.method === 'GET') return send(res, 200, { ok: true });
  if (path === '/contact') {
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type');
      res.setHeader('Access-Control-Max-Age', '86400');
      return res.writeHead(204).end();
    }
    if (req.method !== 'POST') return send(res, 405, { error: 'Use POST.' });
    if (origin && !allowedOrigins.includes(origin)) return send(res, 403, { error: 'Origin not allowed.' });
    handleContact(req, res).catch((err) => {
      console.error(err);
      if (!res.headersSent) send(res, 500, { error: 'Something went wrong.' });
    });
    return;
  }
  send(res, 404, { error: 'Not found.' });
});

server.listen(port, host, () => {
  console.log(`Contact API on http://${host}:${port} (${env.SMTP_HOST ? `SMTP ${env.SMTP_HOST}` : 'console mail'})`);
});
