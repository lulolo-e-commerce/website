// All site copy lives here.
// TODO: point callUrl at a booking page (e.g. Calendly or Cal.com) if you have one.

export const site = {
  name: 'LULOLO',
  title: 'LULOLO | Web apps, data pipelines and AI agents',
  description:
    'LULOLO is an IT consultancy that works closely with AI. We build web applications, data pipelines and AI agents.',
  email: 'info@lulolo.com',
  callUrl: 'mailto:info@lulolo.com?subject=Intro%20call',
  // Shown in the footer. Leave empty to hide.
  location: '',
};

export const hero = {
  headline: 'A small team, multiplied by AI. Enterprise-grade results.',
  cta: 'Talk to us now!',
  // Intro under the headline: "We design and build {services}. Built in {languages}."
  // Services and languages are highlighted on the page.
  lede: {
    lead: 'We design and build',
    services: ['web applications', 'data pipelines', 'AI agents'],
    languagesLead: 'Built in',
    languages: ['Rust', 'Scala', 'Java'],
  },
  // Callouts on the hero drawing, one per speciality.
  drawing: {
    pipeline: 'Data pipelines',
    app: 'Web applications',
    agent: 'AI agents',
  },
};

export const about = {
  heading: 'We build with AI every day.',
  body: [
    'AI is part of how we work, from writing and reviewing code to testing and documentation. That experience goes into your project: we know where AI saves time and where it needs a person to check the result.',
    'Most projects use all three of our specialities. Data has to be collected and cleaned before an agent can use it, and people need a web app to see and steer the results. We build the whole path, so nothing gets lost between teams.',
  ],
  // TODO: add facts such as founding year, location or team size.
  facts: [
    { term: 'Specialities', detail: 'Web applications, data pipelines, AI agents' },
    { term: 'Ways to work', detail: 'Fixed-scope projects, or engineers embedded in your team' },
  ],
};

export const services = {
  heading: 'What we build',
  columns: ['Service', 'What it covers', 'You end up with'],
  items: [
    {
      name: 'Web application development',
      detail:
        'Customer portals, internal tools and SaaS products, from first design through to production.',
      outcome: 'A tested, deployed app your team can run and extend',
    },
    {
      name: 'Data pipeline development',
      detail:
        'Pipelines that collect, clean and move data between your systems, on a schedule or in real time.',
      outcome: 'Data you can trust, with monitoring when something breaks',
    },
    {
      name: 'AI agent development',
      detail:
        'Agents that read documents, use your tools and complete multi-step tasks, with guardrails and human review where it matters.',
      outcome: 'An agent in production, measured against real tasks',
    },
  ],
};

export const contact = {
  heading: 'Tell us what you want to build.',
  body:
    'A few lines about the problem, your data and the systems involved is enough. We’ll reply to arrange a call and tell you honestly whether we’re a good fit.',
  secondary: 'Book a 30-minute call',
  form: {
    // Paste a form service URL here (e.g. https://formspree.io/f/xxxxxxx) to
    // receive submissions. While it's empty, sending opens the visitor's email
    // app with the message filled in.
    endpoint: 'https://formspree.io/f/mdeadpwr',
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
      message: 'What do you want to build?',
      messageHint: 'The problem, the data involved and the systems it touches.',
    },
    errors: {
      name: 'Enter your name.',
      email: 'Enter an email address we can reply to, like name@company.com.',
      message: 'Tell us a little about the project, at least a sentence.',
    },
  },
};
