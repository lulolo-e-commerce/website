// All site copy lives here.
// TODO: point callUrl at a booking page (e.g. Calendly or Cal.com) if you have one,
// and change contact.secondary back to something like 'Book a 30-minute call'.

export const site = {
  name: 'LULOLO',
  title: 'LULOLO | VPS hosting with engineers on demand',
  description:
    'Fast VPS hosting from €9.99 a month. When you need software built, buy a point card and a real engineer delivers web applications, data pipelines or AI agents.',
  email: 'info@lulolo.com',
  callUrl: 'mailto:info@lulolo.com?subject=Intro%20call',
  // Shown in the footer. Leave empty to hide.
  location: '',
};

export const hero = {
  eyebrow: 'Cloud servers, engineers on demand',
  headline: 'Your server. Our engineers.',
  cta: 'See plans',
  more: 'Talk to an engineer',
  // Intro under the headline: "{lead} {price}. {middle} {services}."
  // The price and services are highlighted on the page.
  lede: {
    lead: 'A fast VPS from',
    price: '€9.99 a month',
    middle: 'When you need something built, buy points and a real engineer delivers it:',
    services: ['web applications', 'data pipelines', 'AI agents'],
  },
  // Callouts on the hero drawing, one per speciality.
  drawing: {
    pipeline: 'Data pipelines',
    app: 'Web applications',
    agent: 'AI agents',
  },
};

// TODO: the Plus and Pro tiers and all point card prices are placeholders.
// Replace them with your real numbers before launch.
export const pricing = {
  eyebrow: 'Pricing',
  heading: 'One subscription. Points when you need more.',
  vps: {
    heading: 'VPS plans',
    body: 'Billed monthly. Every plan comes with unlimited traffic.',
    period: '/month',
    choose: 'Choose',
    // `featured` highlights one plan; `badge` is the label shown on it.
    badge: 'Start here',
    plans: [
      {
        name: 'Basic',
        price: '€9.99',
        featured: true,
        specs: ['4 CPU cores', '8 GB RAM', '100 GB SSD', '200 Mbit/s port', 'Unlimited traffic'],
      },
      {
        name: 'Plus',
        price: '€19.99',
        specs: ['8 CPU cores', '16 GB RAM', '200 GB SSD', '500 Mbit/s port', 'Unlimited traffic'],
      },
      {
        name: 'Pro',
        price: '€39.99',
        specs: ['16 CPU cores', '32 GB RAM', '400 GB SSD', '1 Gbit/s port', 'Unlimited traffic'],
      },
    ],
  },
  points: {
    heading: 'Point cards',
    body: 'Points pay for development work. Tell us what you need, an engineer replies with an estimate in points, and builds it once you agree.',
    rate: '1 point = 1 hour of engineer time',
    perPoint: 'per point',
    choose: 'Buy',
    cards: [
      { points: 10, price: 490 },
      { points: 50, price: 2250 },
      { points: 100, price: 4000 },
    ],
  },
};

// Whole euros for point card prices, e.g. €2,250.
export const euros = (n: number) =>
  new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);

// How each plan and card is named in the contact form's "Interested in" list.
export const planLabel = {
  vps: (p: { name: string; price: string }) => `VPS ${p.name} (${p.price}${pricing.vps.period})`,
  points: (c: { points: number; price: number }) => `${c.points}-point card (${euros(c.price)})`,
};

export const about = {
  eyebrow: 'How it works',
  heading: 'Buy points. A real engineer delivers.',
  // One chapter per idea. Each has its own animated diagram; `diagram` picks
  // which one and `notes` are the labels drawn on it.
  chapters: [
    {
      title: 'A real person, start to finish',
      body: 'Buy a point card and tell us what you need. An engineer talks it through with you, agrees the result and the points it will take, then builds it and delivers it to your server. You always deal with a person, never a ticket queue.',
      diagram: 'points',
      label: 'Diagram: points from your card go to an engineer, who talks with you and delivers the finished work to your server.',
      notes: { card: 'point card', person: 'engineer', talk: 'agree the result', server: 'delivered to your VPS' },
    },
    {
      title: 'AI in every step of the work',
      body: 'AI is part of how we work, from writing and reviewing code to testing, documentation and deployment. It is in the daily routine of every engineer, not a side experiment, and it is how a small team delivers the scope of a much larger one.',
      diagram: 'steps',
      label: 'Diagram: work moves through code, review, tests, docs and deploy, with an AI agent assisting at every step.',
      notes: { code: 'code', review: 'review', tests: 'tests', docs: 'docs', deploy: 'deploy', agent: 'AI assists' },
    },
    {
      title: 'A person checks the result',
      body: 'Using AI every day has taught us where it saves time and where it needs a person to check the result. That review step comes with us into your project: AI drafts and suggests, an engineer decides what ships, and anything not good enough goes back with notes.',
      diagram: 'review',
      label: 'Diagram: AI drafts pass an engineer, who ships the good ones and sends the rest back.',
      notes: { agent: 'AI drafts', person: 'engineer reviews', ship: 'ships', back: 'sent back with notes' },
    },
    {
      title: 'One team for the whole path',
      body: 'Most projects use all three of our specialities. Data has to be collected and cleaned before an agent can use it, and people need a web app to see and steer the results. We build the whole path, so nothing gets lost between teams.',
      diagram: 'path',
      label: 'Diagram: raw data is cleaned by a pipeline, used by an AI agent and shown in a web app, where people steer the agent.',
      notes: { pipeline: 'Data pipeline', agent: 'AI agent', app: 'Web app', steer: 'people steer' },
    },
  ],
};

export const services = {
  eyebrow: 'Services',
  heading: 'What your points buy',
  // Shown under the heading: "{languagesLead} {languages}."
  languagesLead: 'Built in',
  languages: ['Rust', 'Scala', 'Java'],
  outcomeLabel: 'You end up with',
  // `icon` picks the line drawing on each tile: app, pipeline, agent or idea.
  // A tile with `cta` links to the contact form.
  items: [
    {
      name: 'Web application development',
      icon: 'app',
      detail:
        'Customer portals, internal tools and SaaS products, from first design through to production.',
      outcome: 'A tested, deployed app your team can run and extend',
    },
    {
      name: 'Data pipeline development',
      icon: 'pipeline',
      detail:
        'Pipelines that collect, clean and move data between your systems, on a schedule or in real time.',
      outcome: 'Data you can trust, with monitoring when something breaks',
    },
    {
      name: 'AI agent development',
      icon: 'agent',
      detail:
        'Agents that read documents, use your tools and complete multi-step tasks, with guardrails and human review where it matters.',
      outcome: 'An agent in production, measured against real tasks',
    },
    {
      name: 'Or something you have in mind',
      icon: 'idea',
      detail:
        'A script, an integration, a migration or a fix. If it runs on a computer, describe it and an engineer will tell you what it takes.',
      outcome: 'An honest estimate in points before any work starts',
      cta: 'Tell us your idea',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Order a plan or tell us what to build.',
  body:
    'Pick a plan or a point card, or describe what you need. A real person replies to set up your server or send you an estimate in points.',
  secondary: 'Ask for a 30-minute call by email',
  form: {
    // Paste a form service URL here (e.g. https://formspree.io/f/xxxxxxx) to
    // receive submissions. While it's empty, sending opens the visitor's email
    // app with the message filled in.
    endpoint: 'https://office.lulolo.com/contact',
    submit: 'Send message',
    sending: 'Sending…',
    sent: 'Message sent. We’ll be in touch soon.',
    drafted: 'Your email app should open with the message filled in. Send it from there.',
    failed: 'The message didn’t send. Check your connection and try again, or email us directly.',
    fields: {
      name: 'Name',
      email: 'Work email',
      company: 'Company',
      companyHint: 'Optional',
      plan: 'Interested in',
      planNone: 'Not sure yet',
      message: 'What do you need?',
      messageHint: 'For development work: the problem, the data involved and the systems it touches.',
      // Filled into the message when someone picks a plan from Pricing.
      prefill: 'I’d like to order: {plan}.',
    },
    errors: {
      name: 'Enter your name.',
      email: 'Enter an email address we can reply to, like name@company.com.',
      message: 'Tell us a little about what you need, at least a sentence.',
    },
  },
};
