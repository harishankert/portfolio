import type { IconName } from './icons';

export type Accent = 'violet' | 'cyan' | 'amber' | 'green';

export const heroStats = [
  { value: '8+', label: 'Years Experience' },
  { value: '13', label: 'Certifications' },
  { value: '5', label: 'Industry Awards' },
];

export const whatIDo: { icon: IconName; label: string; accent: Accent }[] = [
  { icon: 'architecture', label: 'Solution Architecture & Platform Design', accent: 'violet' },
  { icon: 'layers', label: 'ServiceNow Architecture', accent: 'cyan' },
  { icon: 'link', label: 'Enterprise System Integrations', accent: 'amber' },
  { icon: 'bolt', label: 'Performance Engineering & Optimisation', accent: 'green' },
];

export const aboutParagraphs = [
  `I'm a Staff Software Engineer and Solutions Architect at <strong>ServiceNow</strong>, where I design and deliver scalable enterprise solutions that power next-generation IT operations. With 8+ years in the ServiceNow ecosystem, I specialise in bridging complex business requirements with elegant platform solutions.`,
  `My work spans the full spectrum — from architecting <em class="accent-violet">autonomous AI agent systems</em> and building custom scoped applications, to developing sophisticated integrations via REST, SOAP, PowerShell, SSH, and JDBC. I thrive at the intersection of platform engineering and AI.`,
  `Currently, I'm driving AIOps LEAP and autonomous IT capabilities at ServiceNow, and building Python + React-based intelligent analytics platforms with <em class="accent-cyan">GenAI-assisted development</em> — including leveraging Claude Code to accelerate design and implementation cycles.`,
];

export const aboutTags = ['Pune, India', 'ServiceNow', '8+ Years', 'CTA Certified'];

export const aboutHighlights: { icon: IconName; accent: Accent; title: string; desc: string }[] = [
  {
    icon: 'cpu',
    accent: 'violet',
    title: 'Agentic AI & Automation',
    desc: 'Built autonomous agent systems using Now Assist and AI-driven workflows. Implemented AIOps LEAP for intelligent event correlation and self-healing operations.',
  },
  {
    icon: 'architecture',
    accent: 'cyan',
    title: 'Platform Architecture',
    desc: 'Designed Deployment Configuration Health Analyzer adopted by 100+ DemoHub engineers. Architected cross-BU solutions for ITSM, ITOM, CSM, and SPM modules.',
  },
  {
    icon: 'bolt',
    accent: 'amber',
    title: 'Performance Engineering',
    desc: 'Achieved 50%+ improvement in ServiceNow instance performance through deep analysis and tuning. Led technical governance for quality across distributed teams.',
  },
  {
    icon: 'link',
    accent: 'green',
    title: 'Enterprise Integrations',
    desc: 'Built integrations spanning SAP HANA, Rapid7, MS Azure, OpsRamp, Cloud Insights and MS Teams — using REST, SOAP, JDBC, PowerShell, SSH, and Python.',
  },
];

export const skillGroups: { label: string; icon: IconName; accent: Accent; skills: string[] }[] = [
  {
    label: 'ServiceNow Platform',
    icon: 'gear',
    accent: 'violet',
    skills: ['ITSM', 'ITOM', 'CSM', 'HRSD', 'SecOps', 'Event Management', 'Discovery', 'Vulnerability Response', 'Flow Designer', 'IntegrationHub', 'Service Portal', 'Virtual Agent', 'Now Assist', 'Custom Scoped Apps'],
  },
  {
    label: 'AI & Automation',
    icon: 'cpu',
    accent: 'cyan',
    skills: ['Agentic AI Workflows', 'Autonomous Agent Dev', 'Generative AI', 'Prompt Engineering', 'AIOps', 'Now Assist', 'Vibe Coding', 'Machine Learning Ops'],
  },
  {
    label: 'Development',
    icon: 'code',
    accent: 'amber',
    skills: ['JavaScript', 'Python', 'AngularJS', 'Node.js', 'HTML5', 'CSS3', 'Bootstrap 3', 'D3.js', 'React', 'PowerShell'],
  },
  {
    label: 'Integrations & DevOps',
    icon: 'link',
    accent: 'green',
    skills: ['REST APIs', 'SOAP', 'JDBC', 'SSH', 'Webhooks', 'MS Teams', 'Azure', 'Cloud Insights', 'Rapid7', 'OpsRamp'],
  },
];

export const proficiency: { name: string; pct: number; accent: Accent }[] = [
  { name: 'ServiceNow Platform', pct: 98, accent: 'violet' },
  { name: 'Agentic AI / Now Assist', pct: 90, accent: 'cyan' },
  { name: 'JavaScript / AngularJS', pct: 88, accent: 'amber' },
  { name: 'Python', pct: 82, accent: 'green' },
  { name: 'Enterprise Integrations', pct: 95, accent: 'violet' },
  { name: 'Flow Designer / IntegrationHub', pct: 95, accent: 'cyan' },
  { name: 'ITSM / ITOM Architecture', pct: 96, accent: 'amber' },
  { name: 'Prompt Engineering', pct: 85, accent: 'green' },
];

export const jobs: {
  role: string;
  company: string;
  period: string;
  location: string;
  accent: Accent;
  tag?: string;
  highlights: string[];
}[] = [
  {
    role: 'Staff Software Engineer',
    company: 'ServiceNow',
    period: 'Mar 2026 – Present',
    location: 'Pune',
    accent: 'violet',
    tag: 'Current',
    highlights: [
      'Architected Deployment Configuration Health Analyzer — adopted by 100+ engineers, supporting Solution Consultants globally with predictive governance and risk mitigation.',
      'Implemented AIOps LEAP and Autonomous IT capabilities for ITOM: AI-powered event correlation, anomaly detection, and self-healing workflows.',
      'Achieved 50%+ improvement in ServiceNow instance performance through deep analysis and tuning.',
      'Built Python + React intelligent analytics platform for multi-instance monitoring with GenAI-assisted development (Claude Code).',
      'Led cross-BU technical initiatives driving architecture alignment and scalable platform capabilities.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'ServiceNow',
    period: 'Dec 2023 – Mar 2026',
    location: 'Pune',
    accent: 'cyan',
    highlights: [
      'Established and led the Technical Governance Board for Tx WF in DemoHub — standardising development quality across teams.',
      'Spearheaded 30+ ITOM demo narratives used by 2,500+ Solution Consultants globally with 10,000+ collective narrative uses.',
      'Architected the Diagnostics Framework Application using Flows, ATF, and custom scripting — reducing demo failures and boosting SC productivity.',
      'Built CMDB, CSDM, and Service Map frameworks for Alectri with cloud-based AIOps models.',
      'Developed Cloud-centric Predictive AIOps demo on Azure with custom CSDM modelling from scratch.',
      'Worked on Agentic AI for ITOM + CMDB, contributing contextual AI experiences.',
    ],
  },
  {
    role: 'Senior ServiceNow Developer',
    company: 'NetApp',
    period: 'Oct 2021 – Dec 2023',
    location: 'Bengaluru',
    accent: 'amber',
    highlights: [
      'End-to-end implementation of the Vulnerability Response module with Rapid7 integration — won One IT Team Award by SVP.',
      'Implemented Advanced Work Assignment, Agent Chat, and Sidebar replacing Connect Support/Connect Chat.',
      'Built Cloud Insights integration with ServiceNow using Python (pysnow) deployed on Linux servers.',
      'Designed and implemented Custom Hardware Asset Management application.',
      'Implemented MS Teams integration to notify users when MID servers go down.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Infogain',
    period: 'Dec 2019 – Oct 2021',
    location: 'Noida',
    accent: 'green',
    highlights: [
      'Designed SAP HANA integration with ServiceNow via REST, PowerShell, and JDBC for database cloning request management.',
      "Implemented SAP Ascend platform integration with ServiceNow for CRUD and access automation.",
      'Implemented CSM and ITSM modules from scratch on a z Boot instance.',
      "Created Internationalization feature translating dynamic email content to recipients' preferred languages.",
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'InfoBeans',
    period: 'Mar 2018 – Nov 2019',
    location: 'Indore',
    accent: 'violet',
    highlights: [
      'Implementation and administration of ServiceNow platform.',
      'Created Catalog Items, Record Producers, Workflows, UI macros, Client Scripts, Script Includes.',
      'Customised Widgets and Pages in the Service Portal with inter-widget communication.',
      'Designed and implemented Custom Scoped Application for Reporting Cloud integration.',
      'Implemented Service Catalog and Service Portal for DHL Prague with smart categorisation logic.',
    ],
  },
];

export const projects: {
  title: string;
  period: string;
  company: string;
  icon: IconName;
  accent: Accent;
  badge: string;
  impact: string;
  description: string;
  bullets: string[];
  tags: string[];
}[] = [
  {
    title: 'Deployment Configuration Health Analyzer',
    period: 'Jan 2026 – Mar 2026',
    company: 'ServiceNow',
    icon: 'search',
    accent: 'violet',
    badge: 'AI · Platform Architecture',
    impact: '100+ engineers · Global scale',
    description: 'Designed and architected an intelligent application to evaluate deployment quality, impact, and adherence to best practices — ensuring reliable, consistent demo environments.',
    bullets: [
      'Intelligent validation logic for proactive misconfiguration and risk detection',
      'Predictive governance and risk mitigation reducing deployment failures',
      'Adopted by 100+ DemoHub engineers supporting thousands of SCs globally',
    ],
    tags: ['ServiceNow', 'Flow Designer', 'ATF', 'Scripting', 'Governance'],
  },
  {
    title: 'DemoHub Diagnostics Framework',
    period: 'Feb 2024 – Aug 2025',
    company: 'ServiceNow',
    icon: 'wrench',
    accent: 'cyan',
    badge: 'Automation · DevOps',
    impact: '2,500+ SCs · 10,000+ uses',
    description: 'Designed the Diagnostics Framework to auto-detect and resolve DemoHub issues — dramatically improving demo reliability and SC productivity at global scale.',
    bullets: [
      'Integrated Flows, ATF, and custom scripting to automate failure point resolution',
      'Reduced manual intervention across common DemoHub failure scenarios',
      'Conducted end-user enablement sessions for developers and support teams',
    ],
    tags: ['ServiceNow', 'Flow Designer', 'ATF', 'Scripting', 'Automation'],
  },
  {
    title: 'Cloud-centric Predictive AIOps',
    period: '2024',
    company: 'ServiceNow',
    icon: 'cloud',
    accent: 'amber',
    badge: 'AIOps · Azure · AI',
    impact: 'ITSM + ITOM + SPM',
    description: 'Developed a full Cloud-centric Predictive AIOps demo based on microservices architecture on Azure, with custom CSDM modelling and service mapping from scratch.',
    bullets: [
      'Built CMDB, CSDM, and Service Map for Alectri with cloud-based AIOps models',
      'Microservices-based architecture deployed on Azure with custom service mapping',
      'Delivered cross-product solution demos combining ITSM, ITOM, and SPM',
    ],
    tags: ['ServiceNow', 'Azure', 'CSDM', 'CMDB', 'AIOps', 'Microservices'],
  },
  {
    title: 'NetApp Vulnerability Response',
    period: 'Sep 2022 – May 2023',
    company: 'NetApp',
    icon: 'shield',
    accent: 'green',
    badge: 'Security · Enterprise',
    impact: 'One IT Team Award (SVP)',
    description: 'End-to-end implementation of the Vulnerability Response module with Rapid7 integration, custom solution for Vulnerability Solution Management, and NVD sync.',
    bullets: [
      'Full Rapid7 integration with NVD attribute synchronisation',
      'CI Lookup, Classification, Assignment, Risk Calculators, and Auto-Close rules',
      'Custom dashboards and reports for VP-level stakeholders',
    ],
    tags: ['ServiceNow', 'Rapid7', 'NVD', 'Security', 'ITSM'],
  },
  {
    title: 'Intelligent Analytics Platform',
    period: '2025 – Present',
    company: 'ServiceNow',
    icon: 'chart',
    accent: 'violet',
    badge: 'AI · Python · React',
    impact: 'Multi-instance · Real-time',
    description: 'Built a Python and React-based intelligent analytics platform for multi-instance ServiceNow environment monitoring with real-time anomaly detection and GenAI-assisted development.',
    bullets: [
      'Real-time anomaly detection and AI-driven pattern recognition',
      'Multi-instance performance monitoring and proactive issue identification',
      'GenAI-assisted development with Claude Code for accelerated iteration',
    ],
    tags: ['Python', 'React', 'Claude Code', 'GenAI', 'Analytics'],
  },
  {
    title: 'NetApp Enterprise Automation Suite',
    period: 'Dec 2019 – Apr 2021',
    company: 'Infogain + NetApp',
    icon: 'wrench',
    accent: 'cyan',
    badge: 'Integration · Enterprise',
    impact: 'Multi-system automation',
    description: 'Suite of enterprise integrations connecting ServiceNow with SAP HANA, SAP Ascend, OpsRamp, MS Azure Translation, and Cloud Insights across REST, JDBC, SOAP, and PowerShell.',
    bullets: [
      'SAP HANA database cloning management via REST, JDBC, and PowerShell',
      'MS Azure Dynamic Translation with outbound email language preference support',
      'OpsRamp cloud monitoring integration for NetApp Storage Clusters',
    ],
    tags: ['ServiceNow', 'SAP HANA', 'REST', 'JDBC', 'Azure', 'Python'],
  },
];

export const certsHighlight = [
  { name: 'ServiceNow Certified Technical Architect (CTA)', issuer: 'ServiceNow', accent: 'violet' as Accent },
  { name: 'Architecture Excellence (ArchX)', issuer: 'ServiceNow', accent: 'cyan' as Accent },
];

export const certsList: { name: string; issuer: string; accent: Accent }[] = [
  { name: 'Certified Application Developer', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'Certified System Administrator', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'CIS – IT Service Management', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'CIS – Event Management', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'CIS – Discovery', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'CIS – Application Portfolio Management', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'CIS – Hardware Asset Management', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'CIS – Vulnerability Response', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'CIS – Human Resources', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'CIS – Software Asset Management', issuer: 'ServiceNow', accent: 'cyan' },
  { name: 'ITIL Foundation in IT Service Management', issuer: 'AXELOS', accent: 'amber' },
];

export const awards: { title: string; from: string; date: string; desc: string; icon: IconName; accent: Accent }[] = [
  {
    title: 'One IT Team Award',
    from: 'Senior Vice President, NetApp',
    date: 'Jun 2023',
    desc: 'End-to-end implementation of IT Vulnerability Response — awarded by Senior Vice President.',
    icon: 'trophy',
    accent: 'amber',
  },
  {
    title: 'Spot Award',
    from: 'NetApp',
    date: 'Nov 2022',
    desc: 'Migration of Connect Chat to AWA + Agent Chat and implementation of Sidebar.',
    icon: 'star',
    accent: 'cyan',
  },
  {
    title: 'Spot Award',
    from: 'NetApp',
    date: 'Jun 2022',
    desc: 'Implementation of Cloud Insights integration with ServiceNow.',
    icon: 'star',
    accent: 'cyan',
  },
  {
    title: 'Spot Award',
    from: 'Infogain',
    date: 'Nov 2020',
    desc: 'End-to-end implementation of CSM module.',
    icon: 'star',
    accent: 'violet',
  },
  {
    title: 'Budding Engineer Award',
    from: 'Infogain',
    date: 'May 2020',
    desc: 'Implementation of 10+ automation use cases on the ServiceNow platform.',
    icon: 'star',
    accent: 'green',
  },
];

export const contactLinks: { label: string; value: string; href: string; icon: IconName; accent: Accent }[] = [
  { label: 'LinkedIn', value: 'linkedin.com/in/harishankert', href: 'https://linkedin.com/in/harishankert', icon: 'linkedin', accent: 'cyan' },
  { label: 'GitHub', value: 'github.com/harishankert', href: 'https://github.com/harishankert', icon: 'github', accent: 'amber' },
];
