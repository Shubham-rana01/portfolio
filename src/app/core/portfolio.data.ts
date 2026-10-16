import { Profile } from './portfolio.model';

/** Single source of truth for every piece of personal content on the site. */
export const PROFILE: Profile = {
  name: 'Shubham Rana',
  initials: 'SR',
  title: 'Senior Software Engineer',
  tagline: 'Building scalable, reusable enterprise solutions with Angular, Java and Spring Boot.',
  summary:
    'I help teams turn ageing, hard-to-maintain systems into platforms that scale. Five years of enterprise delivery — currently modernising supply chain software for Honda North America, previously building ETL pipelines and enterprise integrations for Fortune 500 clients at Infosys.',
  now: 'Modernising a supply chain platform for Honda North America, and taking on select freelance work.',
  location: 'Karnal, Haryana, India',
  timezone: 'IST (UTC+5:30)',
  email: 'shubhamrana.tech@gmail.com',
  phone: '+91 82951 82910',
  resumeUrl: 'resume.pdf',
  siteUrl: 'https://shubhamrana01.github.io/portfolio/',
  availableForWork: true,

  // e.g. 'https://formspree.io/f/xxxxxxxx' — leave empty to open the visitor's mail client instead.
  contactFormEndpoint: '',

  socials: [
    { label: 'GitHub', url: 'https://github.com/Shubhamrana01', icon: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shubham-rana-b76a041b6',
      icon: 'linkedin',
    },
    { label: 'Email', url: 'mailto:shubhamrana.tech@gmail.com', icon: 'mail' },
  ],

  stats: [
    { value: '5+', label: 'Years of enterprise delivery' },
    { value: '500+', label: 'Daily users on live systems' },
    { value: '30min', label: 'Deployments, down from hours' },
    { value: '6', label: 'Professional certifications' },
  ],

  services: [
    {
      title: 'Legacy Modernisation',
      description:
        'Ageing JSP, Servlet and COBOL systems rebuilt as Angular and Spring Boot services — migrated safely while the business keeps running.',
      icon: 'refresh',
    },
    {
      title: 'Enterprise Web Applications',
      description:
        'Angular front ends and Spring Boot REST APIs, built as reusable modules on PostgreSQL, Oracle or SQL Server.',
      icon: 'code',
    },
    {
      title: 'Secure APIs & Access Control',
      description:
        'OAuth 2.0, OpenID Connect and role-based access designed in from the start, built for complex multi-role organisations.',
      icon: 'shield',
    },
    {
      title: 'Data Pipelines & Integrations',
      description:
        'ETL pipelines, Spring Batch jobs and OData connections between ERP, HR and reporting systems — scheduled, monitored and free of manual file hand-offs.',
      icon: 'server',
    },
    {
      title: 'Cloud Deployment & CI/CD',
      description:
        'Containerised releases on OpenShift or GCP with Jenkins pipelines that turn hour-long deployments into minutes.',
      icon: 'cloud',
    },
    {
      title: 'Technical Consulting',
      description:
        'Architecture reviews, performance tuning and mentoring to get a stuck team shipping again.',
      icon: 'zap',
    },
  ],

  engagements: [
    {
      title: 'Freelance project',
      description: 'Fixed scope, fixed price, delivered end to end.',
      icon: 'code',
    },
    {
      title: 'Contract / retainer',
      description: 'Ongoing capacity for your roadmap, by the week or month.',
      icon: 'refresh',
    },
    {
      title: 'Consulting',
      description: 'Architecture review, performance audit or a second opinion.',
      icon: 'shield',
    },
    {
      title: 'Full-time role',
      description: 'Senior engineering positions, remote or hybrid.',
      icon: 'award',
    },
  ],

  process: [
    {
      title: 'Understand',
      description:
        'A call to map the problem, the constraints and what success actually looks like for the business — not just the feature list.',
    },
    {
      title: 'Scope',
      description:
        'A written plan with milestones, a fixed estimate and the risks called out up front. No surprises halfway through.',
    },
    {
      title: 'Build',
      description:
        'Short iterations with working software you can review each week, tested and running in a real environment.',
    },
    {
      title: 'Hand over',
      description:
        'Documentation, pipelines and a walkthrough so your team can own the code without me in the room.',
    },
  ],

  skills: [
    {
      category: 'Frontend',
      items: ['Angular 14+', 'TypeScript', 'RxJS', 'NgRx', 'PrimeNG', 'Micro Frontends', 'SCSS'],
    },
    {
      category: 'Backend',
      items: [
        'Java 8 / 11 / 17',
        'Spring Boot',
        'Spring Security',
        'Spring Batch',
        'JPA / Hibernate',
        'REST APIs',
        'Microservices',
      ],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'Oracle', 'SQL Server', 'MySQL', 'MongoDB', 'Query Optimisation'],
    },
    {
      category: 'Security',
      items: ['OAuth 2.0', 'OpenID Connect', 'IBM OIDC', 'JWT', 'RBAC', 'Azure AD'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['OpenShift', 'Google Cloud', 'Docker', 'Jenkins', 'CI/CD', 'Helm', 'Git'],
    },
    {
      category: 'Integration & ETL',
      items: [
        'SAP SuccessFactors',
        'OData',
        'ETL pipelines',
        'QAD ERP',
        'Microsoft Graph API',
        'MFT',
        'Spring Batch',
        'XML / JSON',
      ],
    },
    {
      category: 'Practices',
      items: ['System Design', 'JUnit & Mockito', 'Code Review', 'Agile / Scrum', 'Mentoring'],
    },
    {
      category: 'AI-Assisted Delivery',
      items: ['GitHub Copilot', 'Claude', 'Prompt Engineering', 'Agent Workflows'],
    },
  ],

  // Client work is covered by NDA, so those entries intentionally have no public links.
  // Add `repoUrl` / `liveUrl` to the personal projects once their repositories are public.
  projects: [
    {
      title: 'Advanced Electronic Manifest',
      year: '2025',
      context: 'LTM · Honda North America',
      summary: 'Supply chain platform rebuilt from JSP, Servlets and COBOL batch jobs.',
      description:
        'Led the migration to Angular 14 and Spring Boot microservices on PostgreSQL, converting COBOL batch processes into Spring Batch services with parallel, chunk-oriented execution.',
      impact: [
        '~500 daily users migrated with no service interruption',
        'Nightly manual batch intervention eliminated',
        '10+ roles secured behind IBM OIDC and RBAC',
      ],
      tags: ['Angular 14', 'Spring Boot', 'Spring Batch', 'PostgreSQL', 'OpenShift'],
      highlight: true,
    },
    {
      title: 'Invoice Approval Engine',
      year: '2025',
      context: 'LTM · Honda North America',
      summary: 'Multi-tier approval workflow with delegation and document automation.',
      description:
        'Dynamic routing driven by configurable business rules, delegation roles and instant notifications, plus SharePoint attachment storage via Microsoft Graph with certificate-based Azure AD auth.',
      impact: [
        'Approval turnaround cut from days to hours',
        'Document upload and transfer fully automated',
      ],
      tags: ['Angular', 'TypeScript', 'Spring Boot', 'Microsoft Graph', 'Azure AD'],
      highlight: true,
    },
    {
      title: 'IDSS — Infosys Data Service Suite',
      year: '2021—2024',
      context: 'Infosys · Enterprise ETL platform',
      summary: 'ETL platform for moving and transforming data between enterprise client systems.',
      description:
        'Built the dynamic XML/JSON query generator that derives queries straight from nested XSD structures, connected the QAD ERP API for high-volume daily ingestion, and extended the connector layer as new client systems came on board.',
      impact: [
        'Query generator helped win two new enterprise clients',
        'Millions of records migrated for 5+ clients across SQL Server and Oracle',
      ],
      tags: ['Java', 'Spring Boot', 'ETL', 'XSD / XML', 'QAD ERP', 'SQL Server', 'Oracle'],
      highlight: true,
    },
    {
      title: 'SAP SuccessFactors Integration',
      year: '2022—2024',
      context: 'Infosys · IDSS module',
      summary:
        'Owned the SuccessFactors load and extract pipelines, and the OData layer behind them.',
      description:
        'Built bi-directional OData connections between SuccessFactors and SQL Server/Oracle. Scheduled load jobs picked up Excel source files, transformed them inside IDSS and pushed them into SuccessFactors; extract jobs pulled data back out of SuccessFactors into SQL tables or Excel files for downstream use. Owned defect resolution across the integration end to end.',
      impact: [
        'Recurring HR loads and extracts moved onto a scheduled pipeline',
        'Manual Excel hand-offs removed from the process',
      ],
      tags: ['SuccessFactors', 'OData', 'ETL', 'Java', 'SQL Server', 'Oracle', 'Excel'],
    },
    {
      title: 'Operations Portal & CI/CD',
      year: '2022—2023',
      context: 'Infosys · Internal platform',
      summary: 'Backend rebuild and delivery pipeline overhaul.',
      description:
        'Optimised data retrieval patterns, raised unit test coverage, and split the UI into micro frontends with Module Federation so teams could deploy independently.',
      impact: [
        'Deployment time cut from hours to 30 minutes',
        'Independent releases unblocked for multiple teams',
      ],
      tags: ['Angular', 'Module Federation', 'Jenkins', 'DevSecOps', 'JUnit'],
    },
    {
      title: 'Student Management System',
      year: '2021',
      context: 'Freelance · Rediff CAD, Karnal',
      summary: 'Records platform with automated certificate and receipt generation.',
      description:
        'Secured REST endpoints for student records plus document automation that replaced repetitive administrative paperwork.',
      impact: ['Manual certificate and receipt handling removed'],
      tags: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
    },
    {
      title: 'Wanderlust Travel',
      year: '2021',
      context: 'Personal project',
      summary: 'Travel package search with filtering by destination, budget and dates.',
      description:
        'Responsive Angular UI on a Spring Boot and PostgreSQL backend, integrating third-party APIs for live package data.',
      impact: ['Built end to end, from data model to responsive UI'],
      tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Bootstrap'],
    },
  ],

  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'LTM',
      project: 'Advanced Electronic Manifest — Legacy Modernisation',
      client: 'Honda North America',
      period: 'Jan 2025 — Present',
      location: 'India',
      achievements: [
        'Leading the migration of a JSP/Servlet application and COBOL batch jobs to Angular 14 and Spring Boot microservices for ~500 users.',
        'Rebuilt COBOL batch processes as Spring Batch services with parallel, chunk-oriented execution, removing nightly manual intervention.',
        'Designed an IBM OIDC authentication and RBAC layer covering 10+ roles, and an approval workflow engine that cut turnaround from days to hours.',
        'Shipped 20+ reusable Angular components and REST integrations with SharePoint and external MFT systems.',
      ],
      technologies: [
        'Angular 14',
        'Spring Boot',
        'Spring Batch',
        'PostgreSQL',
        'IBM OIDC',
        'Microsoft Graph',
        'OpenShift',
        'Jenkins',
      ],
    },
    {
      role: 'Technology Analyst',
      company: 'Infosys Ltd.',
      project: 'IDSS — Enterprise ETL Platform & Client Integrations',
      period: 'Sep 2021 — Jan 2025',
      location: 'India',
      achievements: [
        'Built a dynamic XML/JSON query generator from nested XSD structures inside IDSS, the ETL platform, helping acquire two enterprise clients.',
        'Owned the SAP SuccessFactors module end to end — OData-based loads from Excel sources, and extracts back out into SQL tables or Excel files, all on a scheduled pipeline.',
        'Connected the QAD ERP API for high-volume daily ingestion and ran migrations of millions of records for 5+ clients.',
        'Introduced micro frontends with Module Federation and Jenkins DevSecOps pipelines, cutting deployment time from hours to 30 minutes.',
        'Mentored three junior developers on Angular, Spring Boot and Agile delivery.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'ETL',
        'SuccessFactors',
        'OData',
        'Angular',
        'SQL Server',
        'Oracle',
        'Jenkins',
      ],
    },
  ],

  // Add real quotes from managers, clients or colleagues. The section hides itself while empty.
  testimonials: [],

  // Add a `url` to any entry once you have the public verification link.
  certifications: [
    { name: 'Google Cloud Associate Data Practitioner', issuer: 'Google Cloud' },
    { name: 'GitHub Copilot Associate', issuer: 'GitHub' },
    { name: 'Infosys Certified Angular Professional', issuer: 'Infosys' },
    { name: 'Infosys Certified Spring REST Professional', issuer: 'Infosys' },
    { name: 'Infosys Certified DevOps Professional', issuer: 'Infosys' },
    { name: 'MongoDB SI Associate', issuer: 'MongoDB University' },
  ],

  education: [
    {
      qualification: 'Master of Computer Applications',
      institution: 'DIT University, Dehradun',
      completed: 'June 2021',
      score: 'CGPA 7.4 / 10',
    },
    {
      qualification: 'B.Sc. Computer Science',
      institution: 'Chandigarh University',
      completed: 'May 2019',
      score: 'CGPA 7.6 / 10',
    },
  ],

  availability: {
    status: 'Taking on freelance and contract work alongside full-time opportunities',
    startDate: 'Freelance immediately · 90 days for full-time',
    workPreference: 'Remote, hybrid or on-site',
    relocation: 'Open within India and internationally',
    responseTime: 'Within one business day',
    languages: ['English — Fluent', 'Hindi — Native'],
  },
};
