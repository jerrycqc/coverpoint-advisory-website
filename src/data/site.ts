export const site = {
  name: 'Coverpoint Advisory',
  domain: 'coverpointadvisory.com',
  url: 'https://coverpointadvisory.com',
  tagline: 'Coverage that holds up when it’s tested.',
  description:
    'Coverpoint Advisory places and manages commercial property, liability, and cyber coverage for mid-market B2B companies, and stays on the policy through every claim and renewal.',
  email: 'hello@coverpointadvisory.com',
} as const;

export const nav = [
  { href: '#coverage', label: 'Coverage' },
  { href: '#approach', label: 'Approach' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
] as const;

export const hero = {
  eyebrow: 'Commercial Insurance & Risk Advisory for Mid-Market B2B',
  body: 'We place and manage commercial property, liability, and cyber coverage for mid-market B2B companies, and we stay on the policy with you through every claim, renewal, and audit. No handoff to a call center once you sign.',
  ctaPrimary: { label: 'Request a Coverage Review', href: '#contact' },
  ctaSecondary: { label: 'See What We Cover', href: '#coverage' },
  stats: [
    { value: '48 hrs', label: 'average claims response time' },
    { value: '$2M+', label: 'average coverage placed per client' },
    { value: '100%', label: 'policies re-reviewed at every renewal' },
  ],
} as const;

export const coverage = {
  heading: 'What We Cover',
  intro: 'We build coverage around how your business actually operates, not a generic package policy.',
  items: [
    { name: 'Commercial Property', detail: 'Buildings, equipment, and inventory, including business interruption.' },
    { name: 'General & Professional Liability', detail: 'Bodily injury, property damage, and errors & omissions exposure.' },
    { name: 'Cyber & Data Breach', detail: 'First- and third-party cyber coverage, incident response costs included.' },
    { name: 'Directors & Officers (D&O)', detail: 'Protection for leadership decisions and governance exposure.' },
    { name: 'Workers’ Compensation', detail: 'Statutory coverage, tuned to your actual payroll and job classes.' },
    { name: 'Umbrella & Excess Liability', detail: 'Additional limits layered above your primary policies.' },
  ],
} as const;

export const valueAdd = [
  {
    title: 'We work for you, not the carrier',
    body: 'As your broker, we represent your interests in every negotiation, every renewal, and every claim, not the insurance company’s loss ratio.',
  },
  {
    title: 'One advisor through every claim',
    body: 'When something goes wrong, you call the same person who placed your policy, not a 1-800 number. We advocate directly with the adjuster on your behalf.',
  },
  {
    title: 'Reviewed every year, not just at renewal',
    body: 'Your business changes. We re-assess your exposure annually so your coverage keeps up, instead of renewing the same policy on autopilot.',
  },
  {
    title: 'Built for mid-market complexity',
    body: 'We work with companies that have outgrown a generic small-business package but aren’t yet served well by enterprise brokerages.',
  },
] as const;

export const process = {
  heading: 'How We Build Your Coverage',
  steps: [
    { step: '01', title: 'Risk Assessment', body: 'We walk through your operations, contracts, and past claims to understand your real exposure, not just your industry code.' },
    { step: '02', title: 'Market the Policy', body: 'We shop your risk across multiple carriers to find the right combination of price, terms, and claims track record.' },
    { step: '03', title: 'Bind Coverage', body: 'We review every line of the policy with you before anything is signed, so there are no surprises in the fine print.' },
    { step: '04', title: 'Ongoing Risk Management', body: 'We flag gaps as your business grows, hires, or signs new contracts that change your exposure.' },
    { step: '05', title: 'Claims Advocacy', body: 'If you ever need to file a claim, we manage the process directly with the carrier so you can stay focused on your business.' },
  ],
} as const;

export const contact = {
  heading: 'Request a Coverage Review',
  body: 'Send us a bit about your business and current policies, and we will tell you plainly where you are well covered and where you are exposed.',
  email: site.email,
  formNote: 'We personally review every submission, usually within one business day.',
} as const;
