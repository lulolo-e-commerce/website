# Contact API

Receives the website's contact form and emails each message to `MAIL_TO`.
Replies go straight to the visitor. Nothing is stored.

Needs Node 22.18 or newer (it runs the TypeScript directly).

## Try it locally

```sh
npm install
npm run dev
```

Without `SMTP_HOST` set, emails are printed to the console instead of sent.

## Deploy on a VPS (Debian/Ubuntu)

1. **DNS.** At Alibaba Cloud DNS, add an `A` record `api` → your VPS's IPv4
   address (and `AAAA` for IPv6 if it has one).
2. **Install Node and Caddy.** Node 22.18+ from NodeSource or your distro,
   and Caddy from https://caddyserver.com/docs/install.
3. **Copy the service.**
   ```sh
   sudo useradd --system --home /opt/lulolo-api lulolo
   sudo mkdir -p /opt/lulolo-api
   sudo cp -r package.json package-lock.json src /opt/lulolo-api/
   cd /opt/lulolo-api && sudo npm ci --omit=dev
   sudo cp /path/to/server/.env.example /opt/lulolo-api/.env
   sudo nano /opt/lulolo-api/.env          # fill in SMTP_PASS and check the rest
   sudo chown -R lulolo: /opt/lulolo-api && sudo chmod 600 /opt/lulolo-api/.env
   ```
4. **Start it.**
   ```sh
   sudo cp deploy/lulolo-api.service /etc/systemd/system/
   sudo systemctl daemon-reload && sudo systemctl enable --now lulolo-api
   sudo cp deploy/Caddyfile /etc/caddy/Caddyfile && sudo systemctl reload caddy
   ```
5. **Check it.** `curl https://api.lulolo.com/health` should print `{"ok":true}`.
   Logs: `journalctl -u lulolo-api -f`.
6. **Point the site at it.** In `src/content.ts`, set `contact.form.endpoint`
   to `https://api.lulolo.com/contact` and deploy the site.

Ports 80 and 443 must be open for Caddy. Outgoing port 465 must be open for
SMTP; some VPS providers block outgoing mail ports until you ask.
