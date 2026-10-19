// All site copy lives here.
// TODO: point callUrl at a booking page (e.g. Calendly or Cal.com) if you have one,
// and change contact.secondary back to something like 'Book a 30-minute call'.

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
  eyebrow: 'IT consultancy, built around AI',
  headline: 'Software, multiplied by AI.',
  cta: 'Tell us what you’re building',
  more: 'See what we build',
  // Intro under the headline: "{lead} {services}, {after}. {languagesLead} {languages}."
  // Services and languages are highlighted on the page.
  lede: {
    lead: 'Production-grade',
    services: ['web applications', 'data pipelines', 'AI agents'],
    after: 'delivered fast by a small team',
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
  eyebrow: 'How we work',
  heading: 'We build with AI every day.',
  // One chapter per idea. Each has its own animated diagram; `diagram` picks
  // which one and `notes` are the labels drawn on it.
  chapters: [
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
    {
      title: 'Two ways to work',
      body: 'Choose a fixed-scope project, where we agree the outcome up front and deliver it end to end through clear milestones. Or embed our engineers in your team, working in your repositories and processes alongside your own developers.',
      diagram: 'engage',
      label: 'Diagram: a fixed-scope project moving through milestones, and our engineers working inside your team.',
      notes: { scope: 'Fixed scope', embedded: 'Embedded in your team' },
    },
  ],
};

export const services = {
  eyebrow: 'Services',
  heading: 'What we build',
  outcomeLabel: 'You end up with',
  // `icon` picks the line drawing on each tile: app, pipeline or agent.
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
  ],
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Tell us what you want to build.',
  body:
    'A few lines about the problem, your data and the systems involved is enough. We’ll reply to arrange a call and tell you honestly whether we’re a good fit.',
  secondary: 'Ask for a 30-minute call by email',
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
