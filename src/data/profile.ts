/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the portfolio — no component changes needed.
 */

export const profile = {
  name: 'A Navya',
  badge: 'SDET',
  role: 'Software Engineer in Test / SDET',
  subheadline: 'Software Engineer in Test | SDET | QA Automation',
  location: 'Mangalore, Karnataka, India',
  description:
    'I build reliable software through intelligent test automation, end-to-end testing, API validation, and thorough quality engineering.',
  /** The first tagline is the primary headline; the rest rotate beneath it. */
  taglines: [
    'Breaking Software Before Users Do.',
    "Quality Is Not a Phase. It's an Engineering Practice.",
    'Automate. Test. Break. Improve.',
  ],
} as const

/**
 * Replace these placeholders with your real links.
 * `resumeUrl` and `photoUrl` point at files in /public.
 */
export const links = {
  email: 'navyaa.online@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anavya',
  github: 'https://github.com/navyappu',
  resumeUrl: '/resume.pdf',
  /** Set to '' to fall back to the monogram placeholder. */
  photoUrl: '/profile.jpg',
} as const

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const

/** Lines typed out by the hero terminal. */
export const terminalScript = [
  { type: 'command', text: 'npm run test:e2e' },
  { type: 'pass', text: 'Authentication tests' },
  { type: 'pass', text: 'Dashboard tests' },
  { type: 'pass', text: 'API validation' },
  { type: 'pass', text: 'Regression suite' },
  { type: 'summary', text: 'All tests passed.' },
] as const

export type TerminalLine = (typeof terminalScript)[number]

export const about = {
  lead: "I'm a Software Engineer in Test. My job starts where the happy path ends.",
  paragraphs: [
    "I work on web applications from the outside in — clicking through them like a user, then automating the parts that should never break again. Most of what I do sits between writing Playwright suites that run on every release and sitting with a feature long enough to find the input nobody thought to try.",
    'I hold a BE in Information Science & Engineering and have worked in QA and SDET roles since. I like the part of the job where a vague bug report turns into a reproducible case, and the part where a flaky suite finally becomes something the team trusts.',
    'Quality, to me, is not a gate at the end of a sprint. It is the set of decisions that make a release boring — which is exactly how a release should feel.',
  ],
  principles: [
    {
      title: 'Find it before users do',
      body: 'Edge cases, unhappy paths, and the inputs nobody expects — these are the tests worth writing.',
    },
    {
      title: 'Automate what repeats',
      body: 'Manual testing finds the bug once. Automation makes sure it never comes back unnoticed.',
    },
    {
      title: 'Coverage over count',
      body: 'A hundred shallow tests prove less than a handful that follow a real user journey end to end.',
    },
    {
      title: 'Debug, then report',
      body: 'A good bug report carries the reproduction, the environment, and the evidence — not just a screenshot.',
    },
  ],
} as const

export type Experience = {
  company: string
  role: string
  period: string
  location?: string
  summary: string
  responsibilities: string[]
  tags: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    company: 'DevVoid',
    role: 'Quality Assurance',
    period: 'January 2026 — Present',
    summary:
      'Own QA for assigned projects end to end: manual and automated testing, release validation, and growing the Playwright suite.',
    responsibilities: [
      'Perform manual and automated testing for web applications.',
      'Build and maintain Playwright E2E test suites.',
      'Test happy paths, unhappy paths, edge cases, and regression scenarios.',
      'Validate features across local, staging, and production environments.',
      'Retest staging branches before release.',
      'Perform API and UI validation.',
      'Investigate failures and identify bugs.',
      'Maintain pre-release QA checklists.',
      'Track QA tasks and coordinate testing across multiple features.',
      'Review released features and verify acceptance criteria.',
      'Contribute to improving automated test coverage.',
      'Take ownership of QA activities for assigned projects.',
    ],
    tags: ['Playwright', 'E2E Testing', 'API Testing', 'Release Validation', 'Linear'],
    current: true,
  },
  {
    company: '7EDGE',
    role: 'Software Engineer in Test / SDET',
    period: 'October 2024 — April 2026',
    summary:
      'Worked across software quality and test automation, partnering with developers through feature validation and releases.',
    responsibilities: [
      'Worked on software quality and test automation.',
      'Performed functional, regression, UI, API and E2E testing.',
      'Created and maintained automated test cases.',
      'Investigated defects and verified fixes.',
      'Worked closely with developers during feature validation and releases.',
    ],
    tags: ['Test Automation', 'Regression Testing', 'API Testing', 'Defect Analysis'],
  },
  {
    company: 'RDL Technologies Pvt. Ltd.',
    role: 'Full Stack Web Development Intern',
    period: 'Internship — Sahyadri, Mangalore',
    summary:
      'Built Age Harbor, an old age home management system, covering both the application and the data layer.',
    responsibilities: [
      'Developed Age Harbor — an old age home management system — using PHP and MySQLi.',
      'Designed database schemas and wrote the queries behind resident and staff records.',
      'Built and validated CRUD flows end to end, from form input through to stored data.',
    ],
    tags: ['PHP', 'MySQLi', 'Full Stack'],
  },
]

export type SkillGroup = {
  title: string
  hint: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Testing',
    hint: 'The core craft',
    skills: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'E2E Testing',
      'API Testing',
      'Integration Testing',
      'UI Testing',
      'Test Case Design',
    ],
  },
  {
    title: 'Automation',
    hint: 'What runs on every release',
    skills: ['Playwright', 'JavaScript', 'TypeScript', 'Automated E2E Testing'],
  },
  {
    title: 'Tools',
    hint: 'Day to day',
    skills: ['Git', 'GitHub', 'Linear', 'Railway', 'Axiom'],
  },
  {
    title: 'Development',
    hint: 'Background that helps me test',
    skills: ['PHP', 'MySQL', 'Django', 'Android'],
  },
]

export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  problem: string
  approach: string
  tools: string[]
  strategy: string[]
  outcome: string
}

export const projects: Project[] = [
  {
    id: 'e2e-automation',
    title: 'E2E Test Automation',
    tagline: 'Playwright · Critical user journeys',
    description:
      'Designed and maintained Playwright-based end-to-end tests covering critical user journeys, happy paths, unhappy paths, edge cases, and regression scenarios.',
    problem:
      'Critical user journeys were being re-verified by hand on every release, which made regressions easy to miss and slowed down the path from merge to deploy.',
    approach:
      'Mapped the journeys that matter most to users, then built a Playwright suite around them — starting with the happy path, then layering in unhappy paths, edge cases and the regressions we had seen before. Tests were kept readable and independent so a failure points at one thing.',
    tools: ['Playwright', 'TypeScript', 'JavaScript', 'Git', 'GitHub'],
    strategy: [
      'Cover the highest-risk user journeys first, not the easiest ones to automate',
      'Pair each happy path with its unhappy path and boundary cases',
      'Keep tests independent and deterministic so failures stay meaningful',
      'Fold every reproduced bug back into the suite as a regression test',
    ],
    outcome:
      'Critical flows are now checked automatically instead of by memory, and failures surface with enough context to debug them directly from the run.',
  },
  {
    id: 'pre-release-qa',
    title: 'Pre-Release QA Validation',
    tagline: 'Release readiness · Staging validation',
    description:
      'Built structured pre-release validation workflows covering application functionality, API suites, client-side testing, critical user journeys, and release readiness.',
    problem:
      'Release checks depended on whoever was testing that day, so coverage varied between releases and it was hard to say what had actually been verified.',
    approach:
      'Turned release testing into a written checklist: application functionality, API suites, client-side behaviour, and the critical user journeys — each validated on the staging branch before it was promoted. Anything that failed went back with a reproduction attached.',
    tools: ['Playwright', 'API testing', 'Linear', 'Railway', 'Axiom'],
    strategy: [
      'Re-test the staging branch against the checklist before every release',
      'Validate across local, staging and production environments',
      'Verify each shipped feature against its acceptance criteria',
      'Keep the checklist current as the product grows',
    ],
    outcome:
      'Every release goes out against the same documented set of checks, so release readiness is something the team can point at rather than assume.',
  },
  {
    id: 'fuzz-testing',
    title: 'API & UI Fuzz Testing',
    tagline: 'Exploratory · Unexpected inputs',
    description:
      'Explored automated fuzz testing approaches for APIs and UI flows to identify unexpected inputs, edge cases, and application failures.',
    problem:
      'Scripted tests only exercise the inputs someone thought of in advance. Real users — and real attackers — send things nobody wrote a test case for.',
    approach:
      'Experimented with generating malformed, empty, oversized and wrongly-typed inputs against API endpoints and UI forms, then watched for unhandled errors, silent failures and responses that did not match the contract.',
    tools: ['REST APIs', 'JavaScript / TypeScript', 'Playwright', 'Axiom'],
    strategy: [
      'Push boundary values, wrong types and empty payloads at every input',
      'Compare actual API responses against the expected contract',
      'Watch logs for unhandled errors, not just failed assertions',
      'Promote anything reproducible into a permanent test case',
    ],
    outcome:
      'Surfaced input-handling gaps that scripted tests were never going to reach, and turned the reproducible ones into fixed cases in the suite.',
  },
  {
    id: 'coverage',
    title: 'Test Coverage Improvement',
    tagline: 'Gap analysis · Suite health',
    description:
      'Worked on increasing automated test coverage and identifying gaps in existing test suites.',
    problem:
      'The existing suite gave a sense of safety that did not always match reality — some flows were covered several times over while others had no automated check at all.',
    approach:
      'Audited what the suite actually exercised against the features in the product, listed the uncovered flows, and prioritised them by user impact and how often they change. Then filled the gaps and cleaned up tests that were duplicating each other.',
    tools: ['Playwright', 'TypeScript', 'Git', 'GitHub', 'Linear'],
    strategy: [
      'Map existing tests to real features to find the blank spots',
      'Prioritise gaps by user impact and change frequency',
      'Replace duplicated shallow tests with fewer meaningful ones',
      'Track coverage work as visible tasks rather than background cleanup',
    ],
    outcome:
      'Coverage gaps became a visible, prioritised list instead of an unknown, and the suite grew in the places where breakage actually costs something.',
  },
]

export const education = {
  degree: 'Bachelor of Engineering — Information Science & Engineering',
  year: '2024',
  cgpa: '7.85',
  highlights: [
    {
      title: 'EMOTION!',
      body: 'Android + Django application combining emotion recognition with a reminder system.',
      tags: ['Android', 'Django', 'Python'],
    },
    {
      title: 'Academic Research',
      body: 'Project work on elderly emotion recognition using deep learning.',
      tags: ['Deep Learning', 'Research'],
    },
    {
      title: 'Age Harbor',
      body: 'Old age home management system built during the RDL Technologies internship.',
      tags: ['PHP', 'MySQLi'],
    },
  ],
} as const

export const contact = {
  heading: "Let's Build Better Software.",
  text: "Have a project, testing challenge, or opportunity? I'd love to connect.",
} as const
