import {
  DivisionInfo,
  ProjectCaseStudy,
  AcademyCourse,
  InnovationLabProject,
  BlogPost,
} from '../types';

import heroImg from '../assets/images/circuit_mesh_hero_1787908273091.jpg';
import neuralLabImg from '../assets/images/neural_ai_lab_1787908295187.jpg';
import ecosystemImg from '../assets/images/connected_ecosystem_1787908311558.jpg';
import softwareImg from '../assets/images/software_code_cyber_1787908329803.jpg';
import logoFullImg from '../assets/images/omegalinks_pro_logo_tight.png';
import logoEmblemImg from '../assets/images/omegalinks_emblem_tight.png';
import logoOriginalImg from '../assets/images/omegalinks_pro_logo_1787910884635.jpg';

export const COMPANY_ASSETS = {
  heroBg: heroImg,
  neuralLab: neuralLabImg,
  connectedEcosystem: ecosystemImg,
  softwareCyber: softwareImg,
  logoFull: logoFullImg,
  logoEmblem: logoEmblemImg,
  logoOriginal: logoOriginalImg,
};

export const COMPANY_INFO = {
  name: 'OMEGALINKS DIGITAL TECHNOLOGY',
  shortName: 'OMEGALINKS',
  tagline: 'BUILDING DIGITAL SOLUTIONS. CREATING DIGITAL EXPERIENCES. EMPOWERING DIGITAL SKILLS.',
  supportingStatement:
    'Omegalinks Digital Technology combines software engineering, creative digital services, technology training, and innovative solutions to help individuals, businesses, and organizations thrive in a digital world.',
  coreConcept: 'CONNECTED DIGITAL INNOVATION',
  motto: 'ONE LINK. ENDLESS POSSIBILITIES.',
  brandPillars: ['INNOVATE', 'CREATE', 'EMPOWER'],
  journeySteps: [
    { step: '01', name: 'IDEA', desc: 'Conceptualize & Discover' },
    { step: '02', name: 'DESIGN', desc: 'Architecture & Visual Experience' },
    { step: '03', name: 'BUILD', desc: 'Full-Stack Software Engineering' },
    { step: '04', name: 'CONNECT', desc: 'Systems Integration & Deployment' },
    { step: '05', name: 'IMPACT', desc: 'Business Value & Digital Skills' },
  ],
  contact: {
    email: 'omegalinksse@gmail.com',
    primaryEmail: 'omegalinksse@gmail.com',
    alternateEmail: 'omegalinkstech@gmail.com',
    phone: '09060515335',
    phoneFormatted: '+234 906 051 5335',
    whatsapp: '2349060515335',
    location: 'Okene, Kogi State, Nigeria',
    remoteGlobal: 'Available for Remote Software Engineering & Digital Solutions Worldwide',
    availability: 'Open for Client Projects, Training & Enterprise Solutions',
    github: 'https://github.com/Omegalinksse?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/godwin-anehi-316951318',
  },
};

export const DIVISIONS: DivisionInfo[] = [
  {
    id: 'digital-technology',
    number: '01',
    title: 'DIGITAL TECHNOLOGY',
    subtitle: 'Software Engineering & Cloud Infrastructure',
    description:
      'Engineering robust, scalable software architectures, responsive web platforms, dynamic applications, and dependable database management systems.',
    iconName: 'Code2',
    color: 'text-cyan-400',
    accentGradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
    services: [
      {
        id: 'web-development',
        name: 'Website Development',
        division: 'digital-technology',
        description: 'Modern, ultra-fast, responsive web interfaces tailored for brands, institutions, and growing businesses.',
        deliverables: ['Responsive Frontend UI', 'Cross-browser Optimization', 'Clean Semantic Code', 'SEO-Ready Setup'],
        tools: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS'],
        popular: true,
      },
      {
        id: 'web-applications',
        name: 'Web Applications',
        division: 'digital-technology',
        description: 'Dynamic server-rendered and single-page applications with real-time data persistence and session security.',
        deliverables: ['Custom Application Logic', 'Authentication & User State', 'RESTful API Integration', 'Responsive Dashboard'],
        tools: ['Python', 'Flask', 'Django', 'JavaScript', 'SQLAlchemy'],
        popular: true,
      },
      {
        id: 'software-development',
        name: 'Software Development',
        division: 'digital-technology',
        description: 'Tailored software engineering addressing unique enterprise operational requirements and data automation.',
        deliverables: ['Requirement Specifications', 'System Architecture (DFDs)', 'Modular Backend', 'Comprehensive Testing'],
        tools: ['Python', 'C/C++', 'Structured CASE Tools', 'Linux'],
      },
      {
        id: 'mobile-app-development',
        name: 'Mobile Application Development',
        division: 'digital-technology',
        description: 'Progressive mobile-first web applications and cross-platform experiences that convert visitors into active users.',
        deliverables: ['Mobile UX Optimization', 'Offline Caching Capabilities', 'Touch-friendly UI', 'Push Alert Interfaces'],
        tools: ['Mobile Web Frameworks', 'REST APIs', 'Modern JavaScript'],
      },
      {
        id: 'database-solutions',
        name: 'Database Solutions',
        division: 'digital-technology',
        description: 'Relational database schema modeling, query optimization, normalization, and secure data storage.',
        deliverables: ['Relational Schema Design', 'Entity Relationship Diagrams', 'Data Integrity & Constraints', 'Migration Scripts'],
        tools: ['MySQL', 'SQLite', 'SQLAlchemy ORM', 'SQL'],
      },
      {
        id: 'ecommerce-solutions',
        name: 'E-Commerce Solutions',
        division: 'digital-technology',
        description: 'Powerful online commercial platforms with inventory synchronization, order tracking, and receipt generation.',
        deliverables: ['Product Catalog Management', 'Cart & Order Tracking', 'Payment Gateway Integration', 'Automated Receipts'],
        tools: ['Python/Flask', 'SQL', 'Payment APIs', 'Web Security'],
      },
      {
        id: 'cloud-solutions',
        name: 'Cloud Solutions',
        division: 'digital-technology',
        description: 'Cloud hosting setup, deployment automation, containerization, domain configuration, and continuous uptime monitoring.',
        deliverables: ['Cloud Deployment Configuration', 'SSL Certification & Security', 'Database Backup Automation', 'Server Diagnostics'],
        tools: ['Linux/Ubuntu', 'VirtualBox', 'Git/GitHub Actions', 'Cloud Run/VPS'],
      },
      {
        id: 'system-development',
        name: 'System Development',
        division: 'digital-technology',
        description: 'End-to-end operational systems such as multi-branch inventory, sales management, and organizational portals.',
        deliverables: ['Role-Based Access Control', 'Multi-tenant Data Separation', 'Audit Logging', 'Admin Dashboards'],
        tools: ['Python', 'Flask', 'MySQL', 'System Architecture Models'],
      },
      {
        id: 'it-support',
        name: 'IT Support and Maintenance',
        division: 'digital-technology',
        description: 'Preventative diagnostics, system troubleshooting, operating system maintenance, and code refactoring.',
        deliverables: ['Environment Configuration', 'Performance Diagnostics', 'Bug Remediation', 'Scheduled Updates'],
        tools: ['Linux CLI', 'Bash Shell', 'VS Code', 'Git Workflows'],
      },
      {
        id: 'technical-consulting',
        name: 'Technical Consulting',
        division: 'digital-technology',
        description: 'Expert technical feasibility studies, tech stack evaluation, and architectural guidance for new ventures.',
        deliverables: ['Technical Roadmap', 'Architecture Blueprint', 'Cost & Scalability Analysis', 'Security Review'],
        tools: ['System Analysis', 'DFD Modeling', 'Engineering Best Practices'],
      },
      {
        id: 'digital-transformation',
        name: 'Digital Transformation Solutions',
        division: 'digital-technology',
        description: 'Transitioning manual paper-based business operations into synchronized, automated digital workflows.',
        deliverables: ['Operational Workflow Audit', 'Digitization Strategy', 'Custom Software Platform', 'Staff Onboarding'],
        tools: ['Full-stack Software', 'Spreadsheet Engines', 'Cloud Databases'],
      },
    ],
  },
  {
    id: 'creative-media',
    number: '02',
    title: 'CREATIVE DIGITAL MEDIA',
    subtitle: 'Brand Identity & Visual Communications',
    description:
      'Translating brand values into memorable visual identities, professional vector graphic design, promotional video editing, and modern digital assets.',
    iconName: 'Palette',
    color: 'text-blue-400',
    accentGradient: 'from-blue-500/20 via-indigo-600/10 to-transparent',
    services: [
      {
        id: 'graphic-design',
        name: 'Graphic Design',
        division: 'creative-media',
        description: 'Precision visual design communicating clear business messages with balanced typography, contrast, and layout hierarchy.',
        deliverables: ['High-Resolution Vector Graphics', 'Digital & Print Formats', 'Consistent Color Schemes'],
        tools: ['CorelDRAW', 'Vector Graphics Tools', 'Modern Design Standards'],
        popular: true,
      },
      {
        id: 'logo-design',
        name: 'Logo Design & Brand Identity',
        division: 'creative-media',
        description: 'Distinctive, conceptual logos crafted with geometric precision, timeless balance, and comprehensive brand guidelines.',
        deliverables: ['Primary & Secondary Logo Marks', 'Vector Source Files (.CDR, .SVG, .PNG)', 'Color Palette & Typography System'],
        tools: ['CorelDRAW', 'Vector Geometry', 'Brand Strategy Frameworks'],
        popular: true,
      },
      {
        id: 'business-branding',
        name: 'Business Branding & Print Design',
        division: 'creative-media',
        description: 'Cohesive corporate identity packages including letterheads, business cards, branded packaging, and presentation kits.',
        deliverables: ['Business Cards & Stationary', 'Brand Style Guide', 'Signage & Merchandise Mockups'],
        tools: ['CorelDRAW', 'Print Pre-press Preparation', 'Vector Illustration'],
      },
      {
        id: 'flyer-poster-design',
        name: 'Flyer & Poster Design',
        division: 'creative-media',
        description: 'High-impact promotional materials engineered for physical print distribution and high-engagement digital campaigns.',
        deliverables: ['Event Flyers & Corporate Posters', 'Social Media Variations', 'CMYK Print-Ready Files'],
        tools: ['CorelDRAW', 'Digital Typography', 'Color Management'],
      },
      {
        id: 'social-media-design',
        name: 'Social Media Design',
        division: 'creative-media',
        description: 'Engaging visual templates and promotional graphics crafted for Instagram, LinkedIn, Facebook, and WhatsApp marketing.',
        deliverables: ['Custom Template Sets', 'Story & Banner Assets', 'Carousel Infographics'],
        tools: ['Digital Layout Software', 'Brand Asset Kits'],
      },
      {
        id: 'video-editing',
        name: 'Video Editing & Motion Graphics',
        division: 'creative-media',
        description: 'Professional video montage, dynamic motion graphics, intros, audio balancing, and promotional commercial videos.',
        deliverables: ['1080p/4K Rendered Video', 'Sound Design & Transitions', 'Subtitles & Dynamic Captions'],
        tools: ['Video Editing Suites', 'Motion Graphics Tools', 'Audio Processing'],
      },
      {
        id: 'coreldraw-design',
        name: 'CorelDRAW Vector Specialization',
        division: 'creative-media',
        description: 'Specialized advanced vector artwork, high-tolerance print layouts, technical illustrations, and sign-craft designs.',
        deliverables: ['Native .CDR Source Files', 'Scalable Production Vectors', 'Color Separation Prep'],
        tools: ['CorelDRAW Suite', 'Curves & Bezier Vector Modeling'],
      },
      {
        id: 'digital-content',
        name: 'Digital Content Creation',
        division: 'creative-media',
        description: 'Multi-channel promotional assets designed to elevate product announcements, launches, and customer engagement.',
        deliverables: ['Digital Banners', 'Interactive Infographics', 'Marketing Collateral'],
        tools: ['Multimedia Tools', 'Visual Design Suites'],
      },
    ],
  },
  {
    id: 'skills-training',
    number: '03',
    title: 'DIGITAL SKILLS & TRAINING',
    subtitle: 'Practical Computer & Technology Academy',
    description:
      'Empowering individuals, students, and corporate teams with hands-on computer science, software programming, data analytics, and digital design proficiencies.',
    iconName: 'GraduationCap',
    color: 'text-emerald-400',
    accentGradient: 'from-emerald-500/20 via-cyan-600/10 to-transparent',
    services: [
      {
        id: 'computer-fundamentals',
        name: 'Computer Fundamentals & Operations',
        division: 'skills-training',
        description: 'Essential foundational training covering hardware architecture, operating system operations, file management, and security.',
        deliverables: ['Hands-on Lab Practice', 'OS Navigation Mastery', 'Digital Literacy Certificate'],
        tools: ['Windows', 'Linux Basics', 'Hardware Modules'],
        popular: true,
      },
      {
        id: 'microsoft-office-mastery',
        name: 'Microsoft Office Productivity Suite',
        division: 'skills-training',
        description: 'In-depth practical mastery of Microsoft Word (formatting, reports), Excel (formulas, modeling), and PowerPoint (executive decks).',
        deliverables: ['Structured Formula Exercises', 'Professional Template Building', 'Data Management Skills'],
        tools: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
        popular: true,
      },
      {
        id: 'graphic-design-coreldraw-training',
        name: 'Graphic Design & CorelDRAW Academy',
        division: 'skills-training',
        description: 'Learn vector illustration, color theory, layout composition, branding principles, and practical client project workflows.',
        deliverables: ['Personal Portfolio Development', 'Real-world Client Project Simulations', 'Print Preparation Training'],
        tools: ['CorelDRAW', 'Vector Tools', 'Visual Typography'],
      },
      {
        id: 'programming-software-dev',
        name: 'Programming & Software Development',
        division: 'skills-training',
        description: 'Structured programming fundamentals covering algorithms, data structures, backend engineering, and version control.',
        deliverables: ['Working Code Repositories', 'Backend Architecture Projects', 'Git & GitHub Workflows'],
        tools: ['Python', 'C/C++', 'Flask', 'Git/GitHub'],
        popular: true,
      },
      {
        id: 'web-dev-training',
        name: 'Web Development (Frontend & Full-Stack)',
        division: 'skills-training',
        description: 'Modern web engineering starting from semantic HTML5 and CSS3 to dynamic JavaScript, DOM manipulation, and backend APIs.',
        deliverables: ['Live Deployed Web Projects', 'Responsive Layout Construction', 'Database Integration Skills'],
        tools: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Flask/Django'],
      },
      {
        id: 'data-analytics-training',
        name: 'Data Analytics & Spreadsheet Modeling',
        division: 'skills-training',
        description: 'Transforming raw data into actionable decision intelligence using advanced spreadsheet functions, pivot tables, and analysis.',
        deliverables: ['Analytical Dashboards', 'Data Cleaning Techniques', 'Visual Reporting Frameworks'],
        tools: ['Microsoft Excel', 'Data Interpretation', 'SQL Basics'],
      },
      {
        id: 'video-editing-training',
        name: 'Video Editing & Digital Media Production',
        division: 'skills-training',
        description: 'Practical training on cutting, transitions, color grading, audio synchronization, and creating engaging promotional reels.',
        deliverables: ['Edited Video Showreel', 'Motion Graphics Techniques', 'Audio Mastering Basics'],
        tools: ['Video Editing Platforms', 'Digital Audio Editors'],
      },
      {
        id: 'technology-skills-acquisition',
        name: 'Technology Skills Acquisition (Youth & Professionals)',
        division: 'skills-training',
        description: 'Structured vocational technology programs designed for career transitions, student development, and workplace readiness.',
        deliverables: ['Career Mentorship', 'Portfolio Reviews', 'Practical Examination & Certification'],
        tools: ['VS Code', 'Git', 'Linux CLI', 'Productivity Suites'],
      },
    ],
  },
  {
    id: 'growth-solutions',
    number: '04',
    title: 'DIGITAL GROWTH & SOLUTIONS',
    subtitle: 'Strategic Automation & Business Digitization',
    description:
      'Accelerating business expansion through targeted digital marketing, workflow automation, operational analytics, and continuous digital consulting.',
    iconName: 'TrendingUp',
    color: 'text-purple-400',
    accentGradient: 'from-purple-500/20 via-pink-600/10 to-transparent',
    services: [
      {
        id: 'business-digitization',
        name: 'Business Digitization & Process Modernization',
        division: 'growth-solutions',
        description: 'Eliminating operational bottlenecks by replacing paper ledgers with interconnected digital record systems.',
        deliverables: ['Operational Assessment', 'Digital Ledger Systems', 'Staff Workflow Manuals'],
        tools: ['Custom Web Tools', 'Database Engines', 'Excel Integration'],
        popular: true,
      },
      {
        id: 'workflow-automation',
        name: 'Workflow Automation Solutions',
        division: 'growth-solutions',
        description: 'Automating repetitive notifications, invoice calculations, receipt dispatches, and inventory re-order alerts.',
        deliverables: ['Automated Notification Triggers', 'Receipt Generation Pipeline', 'Scheduled Sync Tasks'],
        tools: ['Python Scripts', 'Cron/Bash Automation', 'Database Hooks'],
      },
      {
        id: 'data-analytics-business',
        name: 'Data Analytics & Reporting Systems',
        division: 'growth-solutions',
        description: 'Data aggregation and structured analytics revealing sales trends, seasonal patterns, and margin insights.',
        deliverables: ['Executive Summary Dashboards', 'Trend Projections', 'Inventory Velocity Reports'],
        tools: ['Advanced Excel', 'SQL Queries', 'Data Visualization'],
      },
      {
        id: 'digital-marketing-strategy',
        name: 'Digital Marketing & Growth Strategy',
        division: 'growth-solutions',
        description: 'Structured campaigns driving qualified local and online customer inquiries through search, social platforms, and content.',
        deliverables: ['Campaign Strategy Plan', 'Targeted Ad Creatives', 'Conversion Tracking Setup'],
        tools: ['Search Strategies', 'Social Media Systems', 'Analytics'],
      },
      {
        id: 'ecommerce-growth',
        name: 'E-Commerce Growth & Catalog Optimization',
        division: 'growth-solutions',
        description: 'Optimizing checkout flows, product photography presentation, and inventory synchronization for higher conversion rates.',
        deliverables: ['Checkout Friction Audit', 'Catalog Restructuring', 'Customer Retention Mechanisms'],
        tools: ['E-Commerce Engines', 'Data Tracking', 'POS Sync'],
      },
      {
        id: 'custom-digital-solutions',
        name: 'Customized Digital Solutions',
        division: 'growth-solutions',
        description: 'Bespoke hybrid technical and creative solutions engineered specifically around unique organizational problems.',
        deliverables: ['Custom Tailored Platform', 'End-to-End Implementation', 'Support & Training Retainer'],
        tools: ['Full Technology Stack', 'Dedicated Engineering Support'],
      },
    ],
  },
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'tracehop',
    name: 'TraceHop — Campus Lost & Found Platform',
    category: 'SOFTWARE',
    tagline: 'A centralized digital recovery system streamlining lost item reporting and claim validation across campus.',
    flagship: true,
    problem:
      'Campus communities and university students routinely experience the stress of losing vital personal assets—student ID cards, textbooks, keys, electronic devices, and wallets. Existing mechanisms were fragmented, relying on ad-hoc noticeboards or informal social media chat groups, resulting in high retrieval failure rates, lost academic time, and lack of verified ownership protocols.',
    researchAndAnalysis:
      'Conducted field interviews and student workflow analyses at Confluence University of Science and Technology (CUSTECH). Mapped the journey of both finders and owners to identify friction points: fear of false claims, lack of centralized searchable categorization, and absence of administrative custody logging.',
    systemDesign:
      'Architected a structured three-tier architecture: a responsive client interface for public item search and submission, a secured server-side application logic tier for claim verification, and a normalized relational database managing item states (Reported Lost, Found/Pending, Verified Claim, Returned).',
    solution:
      'Engineered and deployed TraceHop, a centralized web platform featuring structured item classification, photo uploads, timestamped location tracking, encrypted student credentials, and a dedicated administrative dashboard for campus security personnel to validate physical handovers.',
    technologies: ['Python', 'Flask', 'SQLite', 'SQLAlchemy', 'HTML5', 'CSS3', 'JavaScript', 'Git', 'Linux'],
    myRole: 'Founder, System Architect & Full-Stack Developer (End-to-end design, database modeling, backend engineering, testing, and deployment).',
    keyFeatures: [
      'Dual Reporting Flow: Dedicated, intuitive wizards for reporting missing items and logging found items.',
      'Structured Categorization: Fast filtering by category (Student IDs, Electronics, Documents, Keys, Clothing, Valuables).',
      'Claim Authentication & Proof Verification: Multi-point verification asking claimants unique identifying characteristics before releasing custodian details.',
      'Administrative Verification Console: Protected dashboard for authorized personnel to audit logs, approve claims, and mark recoveries.',
      'Responsive Mobile-First Interface: Engineered for rapid reporting directly from mobile devices across campus.',
      'Status History Tracking: Complete audit trail from initial submission to final verified return.',
    ],
    databaseArchitecture:
      'Designed a relational schema with normalized tables for Users, Categories, ReportedItems, ClaimRequests, AuditLogs, and CustodyLocations. Enforced foreign-key referential integrity, indexed search columns, and timestamp triggers.',
    backendArchitecture:
      'Built in Python using Flask micro-framework with SQLAlchemy ORM, clean MVC separation, modular route blueprints, input sanitization against XSS/SQL injection, and secure session state handling.',
    frontendUx:
      'Crafted a high-contrast, accessible user interface adhering to mobile responsiveness, clear card hierarchies, instant status badges, and rapid search filtering.',
    testingAndSecurity:
      'Implemented robust form validation, SQL injection prevention via parameterized ORM queries, file extension whitelisting for item images, and multi-device usability testing across Android and desktop browsers.',
    outcome:
      'Successfully validated a centralized, scalable model for campus asset recovery. Demonstrated how software engineering solves tangible community problems, turning chaotic informal reporting into an accountable, structured digital platform.',
    image: ecosystemImg,
    githubUrl: 'https://github.com/Omegalinksse?tab=repositories',
  },
  {
    id: 'omegatrack',
    name: 'OmegaTrack Enterprise — Multi-Branch Inventory & POS',
    category: 'SOFTWARE',
    tagline: 'Full-stack business management platform engineered for real-time inventory tracking and sales operations.',
    problem:
      'Small and medium enterprises operating across multiple service points struggle with manual stock counts, discrepancy in cash register balances, delayed reordering, and unauthorized price modifications.',
    solution:
      'Engineered OmegaTrack Enterprise: a robust inventory management and point-of-sale platform featuring role-based access control (Admin, Store Manager, Cashier), real-time stock deductions upon sale, automated digital receipt compilation, and low-inventory threshold triggers.',
    technologies: ['Python', 'Flask', 'SQLite', 'SQLAlchemy', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
    myRole: 'Lead Software Engineer (Requirements analysis, database schema, POS checkout algorithms, and role permission controls).',
    keyFeatures: [
      'Real-time Multi-branch Stock Ledger: Instant deductions across branch locations upon transaction completion.',
      'Role-Based Access Control (RBAC): Strict permission boundaries protecting profit margins and administrative configuration.',
      'Automated Receipt Generator: Clean formatted receipts generated instantly for printing or digital transmission.',
      'Low Stock Threshold Warnings: Visual warnings preventing unexpected stock-outs.',
      'Sales Velocity Reporting: Daily and weekly revenue summaries by category and cashier.',
    ],
    outcome:
      'Eliminated manual record discrepancies, enabled fast checkout workflows, and established a scalable foundation for multi-branch retail operations.',
    image: softwareImg,
    githubUrl: 'https://github.com/Omegalinksse?tab=repositories',
  },
  {
    id: 'student-ai-assistant',
    name: 'Student AI Assistant — Academic Workflow Companion',
    category: 'SOFTWARE',
    tagline: 'An intelligent academic support platform designed to streamline student study schedules and assignment planning.',
    problem:
      'Higher education students balance multiple complex course syllabi, assignments, and practical lab schedules without structured digital workflows, leading to missed deadlines and fragmented study routines.',
    solution:
      'Developed an intelligent student-oriented web application providing structured academic workflow guidance, study session milestones, interactive assignment decomposition, and responsive knowledge referencing.',
    technologies: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Modern Web Standards'],
    myRole: 'Creator & Full-Stack Developer (Concept ideation, student UX design, algorithmic task scheduling, and frontend development).',
    keyFeatures: [
      'Interactive Assignment Breakdown: Decomposes complex coursework tasks into sequential milestone checklists.',
      'Adaptive Study Schedule: Calculates optimal preparation intervals ahead of academic milestones.',
      'Course Knowledge Organizer: Centralized repository for lecture summaries, lab manuals, and reference links.',
      'Minimalist High-Focus Interface: Distraction-free dark mode designed for late-night academic productivity.',
    ],
    outcome:
      'Delivered an accessible, practical digital tool that bridges academic challenges with modern software design.',
    image: neuralLabImg,
    githubUrl: 'https://github.com/Omegalinksse?tab=repositories',
  },
  {
    id: 'omega-tech-fund',
    name: 'Omega Tech Fund — Asset Management Interface',
    category: 'WEB',
    tagline: 'Security-conscious financial asset interface for monitoring community investments and portfolio allocations.',
    problem:
      'Cooperative groups and community investment initiatives require transparent, auditable interfaces to monitor collective contributions, track asset yields, and generate member balance statements without costly commercial software.',
    solution:
      'Created a clean financial asset management dashboard providing structured ledger visualization, member contribution logs, portfolio performance metrics, and exportable financial summaries.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Relational Database Design', 'Git'],
    myRole: 'Software Developer (Data structuring, financial table design, security validation, and interactive charts).',
    keyFeatures: [
      'Member Contribution Ledger: Transparent historical records of deposits, payouts, and balances.',
      'Portfolio Allocation Visuals: Clear categorization of fund distribution across operational categories.',
      'Security-Conscious Architecture: Strict input sanitation and data verification safeguards.',
      'Exportable Financial Summaries: Easy spreadsheet and tabular data extraction for general meetings.',
    ],
    outcome:
      'Provided an intuitive, reliable solution fostering financial transparency and organizational accountability.',
    image: heroImg,
    githubUrl: 'https://github.com/Omegalinksse?tab=repositories',
  },
  {
    id: 'coreldraw-brand-suite',
    name: 'Omegalinks Brand Identity & Vector Design System',
    category: 'BRANDING',
    tagline: 'Comprehensive corporate visual identity, geometric vector marks, and multi-format promotional collateral.',
    problem:
      'Growing digital organizations need an authoritative visual identity that distinguishes them from amateur computer centers, communicating engineering rigor, digital connectivity, and forward-thinking innovation.',
    solution:
      'Conceptualized and executed the official Omegalinks Digital Technology brand system centered on the distinctive circular/infinity circuit emblem with dispersing digital pixel elements. Developed high-tolerance print flyers, service promotional collateral, and social media media kits.',
    technologies: ['CorelDRAW', 'Vector Geometry', 'CMYK Pre-Press', 'Digital Typography', 'Brand Guidelines'],
    myRole: 'Creative Director & Lead Brand Designer (Emblem design, typography hierarchy, flyer design, and print production).',
    keyFeatures: [
      'Official Circular/Infinity Circuit Emblem: Sculpted metallic chrome finish with embedded PCB circuit traces and pixel transformation.',
      'Complete Service Collateral Design: Professional marketing flyer structuring the four key divisions and core service pillars.',
      'High-Resolution Vector Assets: Scalable from mobile favicons up to massive outdoor signage without fidelity loss.',
      'Harmonious Color Space: Deep navy (#050814), electric blue (#2563eb), and vibrant cyan (#06b6d4) with controlled glow highlights.',
    ],
    outcome:
      'Established an unmistakable, high-impact brand presence that immediately positions Omegalinks as an elite, future-oriented technology organization.',
    image: heroImg,
  },
  {
    id: 'enterprise-data-analytics',
    name: 'Business Intelligence & Spreadsheet Analytics Engine',
    category: 'DATA & ANALYTICS',
    tagline: 'Advanced multi-variable spreadsheet models for business inventory velocity and financial forecasting.',
    problem:
      'Local retail and service enterprises often lack accessible, cost-effective data analytics tools to evaluate seasonal demand, identify high-margin services, and plan cash flow.',
    solution:
      'Designed structured analytical spreadsheet frameworks utilizing advanced Microsoft Excel models, dynamic pivot tables, multi-variable lookup formulas, and automated visual summary dashboards.',
    technologies: ['Microsoft Excel', 'Spreadsheet Modeling', 'Data Cleaning', 'Data Visualization', 'SQL Queries'],
    myRole: 'Data Analyst & Systems Specialist (Data normalization, dynamic formula construction, and executive dashboard design).',
    keyFeatures: [
      'Dynamic Financial Dashboards: Real-time visual cards highlighting gross margins, net returns, and operating costs.',
      'Inventory Turnover Modeling: Flags slow-moving SKUs and calculates optimal restock cycles.',
      'Automated Reporting Templates: One-click refresh routines for weekly operational meetings.',
      'Visual Data Interpretation: High-contrast bar and line graphs translating complex numbers into immediate insights.',
    ],
    outcome:
      'Empowered business managers to make informed, data-driven decisions that cut excess inventory holding costs.',
    image: softwareImg,
  },
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'course-comp-fundamentals',
    title: 'Computer Fundamentals & Digital Operations',
    category: 'Computer Fundamentals',
    level: 'Beginner',
    duration: '4 Weeks (24 Hours)',
    trainingFormat: 'In-Person & Lab',
    popular: true,
    description:
      'A practical foundation in computer architecture, operating system management, safe digital navigation, file structures, and essential productivity habits.',
    tools: ['Windows 11', 'Linux Basics', 'Hardware Diagnostics', 'Internet Safety'],
    learningOutcomes: [
      'Understand internal and external computer hardware components and operating mechanics',
      'Master desktop navigation, hierarchical file and folder structuring, and backup routines',
      'Configure peripherals, troubleshoot basic connectivity, and execute system maintenance',
      'Practice safe digital citizenship, virus prevention, and cloud file synchronization',
    ],
    syllabus: [
      { module: 'Module 1', topics: ['Computer Hardware Architecture & Peripherals', 'Operating Systems Overview'] },
      { module: 'Module 2', topics: ['File Management, Storage Devices & Directory Hierarchies'] },
      { module: 'Module 3', topics: ['Internet Browsing, Cloud Tools & Cybersecurity Best Practices'] },
      { module: 'Module 4', topics: ['System Troubleshooting, Diagnostic Utilities & Final Practical Evaluation'] },
    ],
  },
  {
    id: 'course-ms-office-pro',
    title: 'Microsoft Office Productivity Mastery (Word, Excel, PowerPoint)',
    category: 'Microsoft Office',
    level: 'Beginner',
    duration: '6 Weeks (36 Hours)',
    trainingFormat: 'In-Person & Lab',
    popular: true,
    description:
      'Master the indispensable enterprise productivity trio: professional document typography in Word, data modeling and formula calculations in Excel, and compelling executive presentations in PowerPoint.',
    tools: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
    learningOutcomes: [
      'Produce publication-grade documents, multi-page reports, tables, and formal correspondence in Word',
      'Build robust Excel spreadsheets utilizing VLOOKUP/XLOOKUP, IF conditions, dynamic formulas, and PivotTables',
      'Design impactful slide decks with custom themes, transitions, visual hierarchy, and data charts in PowerPoint',
      'Streamline real workplace workflows through keyboard shortcuts and structured templates',
    ],
    syllabus: [
      { module: 'Weeks 1-2', topics: ['Microsoft Word: Document Formatting, Styles, Tables, Table of Contents, Citations'] },
      { module: 'Weeks 3-5', topics: ['Microsoft Excel: Mathematical & Logical Formulas, VLOOKUP, Pivot Tables, Charts, Data Validation'] },
      { module: 'Week 6', topics: ['Microsoft PowerPoint: Visual Hierarchy, Slide Master Design, Interactive Presentations & Capstone Project'] },
    ],
  },
  {
    id: 'course-coreldraw-design',
    title: 'Graphic Design & Vector Branding with CorelDRAW',
    category: 'Graphic Design',
    level: 'Intermediate',
    duration: '8 Weeks (48 Hours)',
    trainingFormat: 'Hands-on Workshop',
    popular: true,
    description:
      'Immerse yourself into commercial graphic design. Learn vector geometry, color harmony, typography pairing, logo drafting, flyer composition, and prepress production using CorelDRAW.',
    tools: ['CorelDRAW', 'Vector Illustration Tools', 'Color Management Palettes'],
    learningOutcomes: [
      'Master the CorelDRAW interface, Pen tool, Bezier curves, Shaping tools, and precision node editing',
      'Design corporate logos, business identity systems, letterheads, and brand guidelines',
      'Create high-converting promotional flyers, posters, and social media creative graphics',
      'Prepare color separations, bleed margins, and print-ready high-resolution files for press',
    ],
    syllabus: [
      { module: 'Module 1', topics: ['Design Fundamentals: Balance, Contrast, Proximity, Color Theory & Typography'] },
      { module: 'Module 2', topics: ['CorelDRAW Mastery: Precision Vector Drawing, Node Shaping, Combine & Weld Tools'] },
      { module: 'Module 3', topics: ['Corporate Branding: Conceptual Logo Construction, Brand Identity Kits & Vector Icons'] },
      { module: 'Module 4', topics: ['Commercial Advertising: Event Flyers, Posters, Social Media Kits & Print Production'] },
    ],
  },
  {
    id: 'course-python-programming',
    title: 'Programming Foundations & Backend Engineering with Python',
    category: 'Programming',
    level: 'Intermediate',
    duration: '10 Weeks (60 Hours)',
    trainingFormat: 'Hybrid / Online',
    popular: true,
    description:
      'Develop strong software engineering thinking. Learn algorithmic problem solving, structured programming, Object-Oriented Design, and backend web services using Python and Flask.',
    tools: ['Python 3', 'Flask', 'VS Code', 'Git & GitHub', 'SQLite'],
    learningOutcomes: [
      'Write clean, idiomatic Python code with data types, control flow, functions, and exception handling',
      'Model real-world systems using Object-Oriented Programming (OOP), classes, and inheritance',
      'Build dynamic web applications and REST APIs using the Flask micro-framework',
      'Persist application data using relational SQLite databases and version-control code with Git & GitHub',
    ],
    syllabus: [
      { module: 'Weeks 1-3', topics: ['Python Syntax, Data Structures (Lists, Dicts, Tuples), Control Flow & Functions'] },
      { module: 'Weeks 4-5', topics: ['Object-Oriented Programming, Modules, File I/O & Exception Handling'] },
      { module: 'Weeks 6-8', topics: ['Web Backend Architecture with Flask: Routing, Templates, Request Handling & Sessions'] },
      { module: 'Weeks 9-10', topics: ['Database Integration with SQLite/SQLAlchemy, Git Workflow & Final Capstone Project'] },
    ],
  },
  {
    id: 'course-web-development',
    title: 'Modern Web Engineering: HTML5, CSS3, JavaScript & Responsive Design',
    category: 'Web Development',
    level: 'Beginner',
    duration: '8 Weeks (48 Hours)',
    trainingFormat: 'Hands-on Workshop',
    description:
      'Build production-ready, beautiful, responsive websites from the ground up using modern semantic HTML5, modern CSS3 (Flexbox/Grid), and interactive JavaScript.',
    tools: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'VS Code', 'Browser DevTools', 'Git'],
    learningOutcomes: [
      'Structure accessible, semantic web pages with proper SEO metadata and heading hierarchies',
      'Craft fluid responsive layouts using CSS Flexbox, Grid, media queries, and utility systems',
      'Implement dynamic interactivity, DOM manipulation, event listeners, and API fetches with modern JavaScript',
      'Deploy live websites to cloud hosting and showcase clean repositories on GitHub',
    ],
    syllabus: [
      { module: 'Module 1', topics: ['Semantic HTML5: Tags, Forms, Media, Tables & Web Accessibility Standards'] },
      { module: 'Module 2', topics: ['Modern CSS3: Box Model, Flexbox, Grid, Animations, Transitions & Mobile Responsiveness'] },
      { module: 'Module 3', topics: ['JavaScript Essentials: Variables, Functions, DOM Events, Arrays & Asynchronous Fetch'] },
      { module: 'Module 4', topics: ['Project Build: Interactive Multi-page Corporate Website Deployment & Hosting'] },
    ],
  },
  {
    id: 'course-data-analytics-excel',
    title: 'Practical Data Analytics & Business Intelligence with Excel',
    category: 'Data Analytics',
    level: 'Intermediate',
    duration: '6 Weeks (36 Hours)',
    trainingFormat: 'Hybrid / Online',
    description:
      'Unlock the power of business data. Learn data cleaning, statistical analysis, advanced formulas, dynamic dashboards, and executive reporting to drive commercial decisions.',
    tools: ['Microsoft Excel Advanced', 'Power Query Basics', 'PivotTables', 'Data Visualizers'],
    learningOutcomes: [
      'Clean, normalize, and validate messy operational datasets using text, date, and logical functions',
      'Construct complex analytical formulas utilizing XLOOKUP, INDEX/MATCH, SUMIFS, and COUNTIFS',
      'Aggregate thousands of records into dynamic, interactive PivotTables with Slicers and Timelines',
      'Design high-impact executive visual dashboards that clearly convey trends, KPIs, and forecasts',
    ],
    syllabus: [
      { module: 'Weeks 1-2', topics: ['Data Cleaning, Formatting Standards, Text-to-Columns & Logical Formula Construction'] },
      { module: 'Weeks 3-4', topics: ['Advanced Lookup Functions (XLOOKUP, INDEX/MATCH), Statistical Analysis & Data Modeling'] },
      { module: 'Weeks 5-6', topics: ['Interactive PivotTables, Dynamic Slicers, Dashboard Design & Executive Presentation'] },
    ],
  },
  {
    id: 'course-video-editing-production',
    title: 'Digital Video Editing & Motion Graphics Production',
    category: 'Video Editing',
    level: 'Intermediate',
    duration: '6 Weeks (36 Hours)',
    trainingFormat: 'Hands-on Workshop',
    description:
      'Learn the art of storytelling through digital video. Master timeline editing, multi-track audio balancing, visual transitions, lower-thirds, color grading, and social video formatting.',
    tools: ['Video Editing Platforms', 'Motion Title Generators', 'Digital Audio Processors'],
    learningOutcomes: [
      'Understand video formats, frame rates, aspect ratios, and media ingestion workflows',
      'Execute seamless cuts, J/L cuts, speed ramping, and narrative rhythm pacing',
      'Incorporate animated titles, lower-thirds, brand intros, and kinetic captions',
      'Export optimized renders for high-definition broadcast, YouTube, TikTok, and Instagram',
    ],
    syllabus: [
      { module: 'Module 1', topics: ['Video Principles: Timeline Workflow, Cuts, B-Roll Integration & Transitions'] },
      { module: 'Module 2', topics: ['Audio Balancing, Voiceover EQ, Noise Reduction & Background Music Layering'] },
      { module: 'Module 3', topics: ['Color Correction, Color Grading, Lumetri Scopes & Visual Enhancements'] },
      { module: 'Module 4', topics: ['Motion Titles, Aspect Ratio Optimization (16:9 vs 9:16) & Final Portfolio Reel'] },
    ],
  },
  {
    id: 'course-c-cpp-systems',
    title: 'Core Systems Programming & Computer Science Fundamentals (C/C++)',
    category: 'Programming',
    level: 'Advanced',
    duration: '8 Weeks (48 Hours)',
    trainingFormat: 'In-Person & Lab',
    description:
      'Deep dive into the heart of computer systems. Master memory management, pointers, data structures, low-level compilation, and computational efficiency using C and C++.',
    tools: ['GCC Compiler', 'C / C++', 'Linux Terminal', 'GDB Debugger', 'VS Code'],
    learningOutcomes: [
      'Comprehend low-level computer architecture, compilation lifecycles, and binary representations',
      'Master pointers, dynamic memory allocation (malloc/free, new/delete), and pointer arithmetic',
      'Implement classic computer science data structures: linked lists, stacks, queues, and binary trees',
      'Develop structured algorithmic solutions with high efficiency and robust memory discipline',
    ],
    syllabus: [
      { module: 'Weeks 1-2', topics: ['C Syntax, Memory Model, Compilation Pipeline, Data Types & Bitwise Operations'] },
      { module: 'Weeks 3-4', topics: ['Pointers Deep-Dive, Memory Addresses, Arrays, Strings & Dynamic Memory Allocation'] },
      { module: 'Weeks 5-6', topics: ['Structs, Unions, Linked Lists, Stacks, Queues & Algorithm Complexity (Big-O)'] },
      { module: 'Weeks 7-8', topics: ['Introduction to C++ Classes, Memory Safety, Standard Template Library (STL) & Final Capstone'] },
    ],
  },
];

export const INNOVATION_LAB_PROJECTS: InnovationLabProject[] = [
  {
    id: 'lab-ai-academic',
    title: 'AI Academic Grounding & Workflow Assistant',
    category: 'Artificial Intelligence',
    status: 'Prototype Ready',
    tagline: 'Bridging lecture syllabi with contextual assignment guidance and study milestones.',
    description:
      'Exploring intelligent student-facing assistants that understand institutional curriculum structures. Designed to parse lecture outlines, recommend structured study schedules, and offer guided tutoring without generating passive answers.',
    technicalFocus: ['Python', 'REST Architecture', 'Prompt Engineering', 'Data Structuring', 'Responsive UI'],
    potentialImpact:
      'Provides thousands of students in tertiary institutions with continuous, personalized study mentorship and deadline accountability.',
    interactiveDemoType: 'scope-calculator',
  },
  {
    id: 'lab-smart-campus',
    title: 'Smart Campus Lost & Found Digital Verification Protocol',
    category: 'Smart Applications',
    status: 'Prototype Ready',
    tagline: 'Cryptographic ownership verification workflows for recovered campus credentials and hardware.',
    description:
      'Extending the TraceHop platform with zero-knowledge ownership proofs, automated image attribute recognition, and secure QR-coded custody handover receipts for campus security checkpoints.',
    technicalFocus: ['Relational Database Systems', 'Flask Backend', 'QR Code Verification', 'Audit Trails'],
    potentialImpact:
      'Reduces administrative workload for campus security by 80% while establishing an auditable chain of custody.',
  },
  {
    id: 'lab-biz-automation',
    title: 'Autonomous Multi-Channel Receipt & Ledger Sync Engine',
    category: 'Automation',
    status: 'In Development',
    tagline: 'Bridging physical storefront point-of-sale registers with instant digital WhatsApp receipts and cloud ledgers.',
    description:
      'An event-driven background pipeline that captures POS transaction events, formats digital branded customer receipts, and triggers asynchronous delivery via messaging APIs without requiring internet-heavy terminal hardware.',
    technicalFocus: ['Event-Driven Architecture', 'Python Microservices', 'Webhook Ingestion', 'PDF Generation'],
    potentialImpact:
      'Empowers informal retail businesses to adopt modern digital accounting practices without recurring paper roll expenses.',
  },
  {
    id: 'lab-predictive-inventory',
    title: 'Predictive Stock Velocity & Depletion Forecasting',
    category: 'Data Analytics',
    status: 'Research Concept',
    tagline: 'Statistical sales velocity models forecasting stock-out windows for fast-moving retail commodities.',
    description:
      'Applying linear moving averages and seasonality factors to retail sales logs, automatically generating supplier purchase orders 5 days ahead of anticipated depletion.',
    technicalFocus: ['Spreadsheet Algorithms', 'Statistical Modeling', 'SQL Time-series Queries'],
    potentialImpact:
      'Prevents emergency supplier stockouts and optimizes working capital allocation for growing retail enterprises.',
  },
];

export const FOUNDER_INFO = {
  name: 'ANEHI GODWIN OHINOYI',
  title: 'Founder & Lead Developer',
  role: 'Founder & Lead Developer',
  headline: 'Full-Stack Software Engineer & 3MTT Fellow',
  academic: 'Software Engineering Student at Confluence University of Science and Technology (CUSTECH)',
  missionStatement: 'Building practical digital solutions and equipping the next generation with modern technology skills.',
  skills: [
    'Python & Flask',
    'Full-Stack Web Engineering',
    'Relational Databases (SQLite, MySQL)',
    'CorelDRAW & Brand Design',
    'C / C++ Systems Programming',
    'Data Analytics (Microsoft Excel)',
    'Computer & Technology Education',
    'System Architecture',
  ],
  socialLinks: {
    github: 'https://github.com/Omegalinksse?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/godwin-anehi-316951318',
    email: 'mailto:omegalinksse@gmail.com',
  },
  credentials: [
    'Software Engineering Student at Confluence University of Science and Technology (CUSTECH), Osara, Kogi State',
    'Software Engineering Fellow — 3MTT (Three Million Technical Talent) Programme',
    'Founder & Lead Developer — Omegalinks Digital Services / Omegalinks Digital Technology',
    'Certified in Core Programming (C, C++, Python) — WinMingle Training Center',
    'Certified in Front-End Development (HTML, CSS, JavaScript) — CodeBloom Academy',
  ],
  bio: `Anehi Godwin Ohinoyi is a results-driven Software Engineer, 3MTT Fellow, and the Founder and Lead Developer of Omegalinks Digital Technology. Possessing over two years of rigorous practical engineering experience, Godwin bridges technical software development with creative visual identity, data analytics, and digital skills education.

His engineering foundation spans full-stack web application development, backend system architectures (Flask, Django), relational database design (MySQL, SQLite, SQLAlchemy), and low-level programming in C/C++. Beyond software development, he brings specialized creative proficiency in CorelDRAW vector design, multimedia video production, and business analytics in Microsoft Excel.

Driven by a passion for solving tangible problems, Godwin founded Omegalinks to deliver useful, maintainable, and user-centered digital solutions while training the next generation of technology talents.`,
  technicalCompetencies: [
    { category: 'Software & Backend', items: ['Python', 'Flask', 'Django', 'REST APIs', 'SQLAlchemy', 'C / C++', 'PHP'] },
    { category: 'Frontend & Web', items: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive UI', 'Modern CSS Architecture'] },
    { category: 'Databases & Storage', items: ['MySQL', 'SQLite', 'Relational Schema Design', 'Query Optimization'] },
    { category: 'Data & Analytics', items: ['Microsoft Excel (Advanced)', 'Spreadsheet Modeling', 'Data Interpretation', 'SQL Analytics'] },
    { category: 'Development Tools & OS', items: ['Git & GitHub', 'VS Code', 'Linux (Ubuntu, Kali Linux)', 'Bash Shell', 'VirtualBox', 'Termux'] },
    { category: 'Productivity & Creative', items: ['CorelDRAW (Vector Design)', 'Microsoft Office Suite', 'UI/UX Conceptualization', 'Video Editing'] },
  ],
  location: 'Okene, Kogi State, Nigeria',
  email: 'omegalinksse@gmail.com',
  phone: '09060515335',
  github: 'https://github.com/Omegalinksse?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/godwin-anehi-316951318',
};

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'DISCOVER',
    subtitle: "Understand the Client's Needs",
    description:
      'We conduct in-depth discovery sessions to comprehend your organizational goals, operational challenges, target audience, and key deliverables.',
    iconName: 'Search',
  },
  {
    number: '02',
    name: 'PLAN',
    subtitle: 'Define Strategy & Scope',
    description:
      'We outline clear technical specifications, system data flows, relational schema designs, tech stack choices, project timelines, and milestones.',
    iconName: 'Compass',
  },
  {
    number: '03',
    name: 'DESIGN',
    subtitle: 'User Experience & Visual Direction',
    description:
      'We craft high-fidelity interface layouts, intuitive user journeys, and brand assets that merge aesthetic refinement with seamless usability.',
    iconName: 'PenTool',
  },
  {
    number: '04',
    name: 'BUILD',
    subtitle: 'Develop & Integrate Solution',
    description:
      'We write clean, modular, maintainable code across frontend, backend, and database tiers, incorporating version control and security best practices.',
    iconName: 'Terminal',
  },
  {
    number: '05',
    name: 'TEST',
    subtitle: 'Validate Usability & Security',
    description:
      'We perform rigorous functional testing, cross-device responsiveness checks, input sanitization validations, and performance optimization.',
    iconName: 'ShieldCheck',
  },
  {
    number: '06',
    name: 'DEPLOY',
    subtitle: 'Launch & Server Configuration',
    description:
      'We oversee cloud deployment, domain configuration, SSL encryption, database migrations, and operational handoff.',
    iconName: 'Rocket',
  },
  {
    number: '07',
    name: 'SUPPORT',
    subtitle: 'Maintenance & Continuous Guidance',
    description:
      'We provide ongoing technical assistance, software refinements, security updates, and digital skills guidance for sustained growth.',
    iconName: 'Headphones',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'INNOVATIVE SOLUTIONS',
    highlight: 'Forward-Thinking Technology',
    description:
      'We avoid stagnant templates. Every digital solution is engineered with modern architectures, future-ready frameworks, and creative problem solving.',
    iconName: 'Cpu',
  },
  {
    title: 'QUALITY DELIVERY',
    highlight: 'Rigorous Engineering Standards',
    description:
      'From clean relational schemas to polished visual typography, our work is crafted with meticulous attention to detail, maintainability, and stability.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'CLIENT FOCUSED',
    highlight: 'Practical Problem Solving',
    description:
      'We listen attentively, communicate with transparent clarity, and build solutions that genuinely solve your business and operational challenges.',
    iconName: 'Users',
  },
  {
    title: 'RELIABLE & TRUSTED',
    highlight: 'Long-Term Partnership',
    description:
      'Whether building custom software, designing corporate branding, or training your workforce, we deliver dependable results you can trust.',
    iconName: 'Shield',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-campus-lost-found',
    title: 'Solving Real-World Campus Challenges with Full-Stack Software Engineering',
    category: 'Software Engineering',
    readTime: '5 min read',
    date: 'August 2026',
    author: 'Anehi Godwin Ohinoyi',
    summary:
      'How we architected TraceHop, a centralized campus lost-and-found system, using Python/Flask and relational database modeling to replace informal noticeboards.',
    tags: ['Python', 'Flask', 'Web Engineering', 'Campus Tech'],
    keyTakeaways: [
      'Ad-hoc social media groups fail at recovery because they lack centralized search and verified proof-of-ownership.',
      'A normalized relational database prevents duplicate records and enforces lifecycle states (Reported, Found, Verified, Returned).',
      'Student-centric software must prioritize mobile responsiveness and lightweight bandwidth usage.',
    ],
    content: [
      'In many higher institutions, the loss of essential personal belongings—such as student identity cards, scientific calculators, notebooks, room keys, and laptops—causes significant academic disruption. For years, the default response was posting photos in crowded WhatsApp groups or pinning notes to physical bulletin boards. These messages are quickly buried, and there is no verification mechanism to ensure items reach their rightful owners.',
      'When designing TraceHop, our core engineering objective was to bring structure, accountability, and security to this daily campus dilemma. We started by mapping student interactions: finders want a fast, low-friction way to report what they picked up without being burdened by administrative custody; owners need instant, keyword-based search with private claim channels.',
      'We opted for Python with the Flask micro-framework and SQLAlchemy ORM. This allowed us to quickly implement modular blueprints for public catalog browsing, claimant verification forms, and a secured administrative dashboard for campus security personnel.',
      'The lesson for software engineering students is clear: impactful software does not require massive budgets or hype; it requires identifying a tangible friction in your immediate environment and building a reliable, user-centered digital solution to solve it.',
    ],
  },
  {
    id: 'post-practical-excel-analytics',
    title: 'Unlocking Business Intelligence: Moving Beyond Simple Spreadsheets to Analytical Modeling',
    category: 'Data Analytics',
    readTime: '4 min read',
    date: 'August 2026',
    author: 'Omegalinks Tech Insights',
    summary:
      'Why small businesses do not need expensive enterprise software to make data-driven decisions: mastering XLOOKUP, dynamic PivotTables, and inventory velocity.',
    tags: ['Data Analytics', 'Excel', 'Business Growth'],
    keyTakeaways: [
      'Data cleaning and standardized column formatting are 80% of actionable business intelligence.',
      'Dynamic PivotTables with timeline slicers provide instantaneous executive sales summaries.',
      'Inventory velocity formulas help businesses avoid tied-up capital in slow-moving items.',
    ],
    content: [
      'Many growing retail businesses and service ventures operate in the dark regarding their true profitability. They record transactions in physical ledger books or basic spreadsheets, but never extract predictive insights.',
      'Data analytics in Microsoft Excel bridges this gap. By structuring tabular records with proper primary identifiers and date stamps, business owners can uncover patterns: Which services yield the highest margin? Which days experience peak customer foot traffic? Which items tie up working capital for months?',
      'At Omegalinks Digital Technology, our Data Analytics training modules emphasize practical application. Rather than memorizing abstract formulas in isolation, students learn how to build real inventory models that automatically trigger re-order warnings when stock drops below safety buffers.',
    ],
  },
  {
    id: 'post-digital-skills-youth',
    title: 'The Four Pillars of Modern Technology Literacy: Code, Create, Analyze, and Automate',
    category: 'Skills Development',
    readTime: '4 min read',
    date: 'August 2026',
    author: 'Omegalinks Academy',
    summary:
      'Why learning only one digital skill is no longer enough: the powerful synergy between software development, graphic branding, data interpretation, and workflow automation.',
    tags: ['Tech Education', 'Career Skills', 'Digital Literacy'],
    keyTakeaways: [
      'A software engineer with visual design awareness builds substantially better user interfaces.',
      'A graphic designer who understands web fundamentals crafts print and digital assets that scale effortlessly.',
      'Continuous learning and practical project building are the most dependable pathways to technology mastery.',
    ],
    content: [
      'The digital technology landscape is evolving at breakneck speed. Today, organizations rarely need people who only operate in narrow silos. An engineer who understands UI typography and user psychology creates intuitive software that requires zero manual training.',
      'At Omegalinks Digital Skills Academy, our educational philosophy centers on Connected Digital Innovation. We guide learners through hands-on, practical lab exercises that mirror real workplace demands.',
      'Whether mastering Microsoft Office for corporate administrative excellence, mastering CorelDRAW for commercial advertising design, or learning Python for backend API development, the goal is always the same: developing capable, confident problem-solvers.',
    ],
  },
];

export const WORKFLOW_PHASES = [
  {
    phase: 1,
    title: 'Discovery & Strategy',
    description: 'We analyze your business context, operational challenges, workflows, and objectives to establish clear technical requirements.',
    deliverables: ['Requirements Specification', 'User Journey Mapping', 'Architecture Scope'],
  },
  {
    phase: 2,
    title: 'UI/UX & Creative Concept',
    description: 'We translate operational requirements into high-fidelity visual directions, wireframes, and responsive user experience layouts.',
    deliverables: ['Interactive Wireframes', 'Design System & Typography', 'Brand Asset Alignment'],
  },
  {
    phase: 3,
    title: 'Engineering & Development',
    description: 'We write modular, secure, full-stack code and structured relational schemas using modern web frameworks and best practices.',
    deliverables: ['Full-Stack Implementation', 'Relational Database Design', 'REST API Endpoints'],
  },
  {
    phase: 4,
    title: 'Testing & Optimization',
    description: 'Rigorous cross-device testing, responsive validation, security vulnerability auditing, and performance tuning.',
    deliverables: ['Validation Checks', 'Data Integrity Audits', 'Performance Optimization'],
  },
  {
    phase: 5,
    title: 'Deployment & Enablement',
    description: 'Production cloud launch, SSL/domain configuration, administrative handoff, and practical team skills training.',
    deliverables: ['Cloud Server Launch', 'Client Documentation', 'Practical Staff Training'],
  },
];

export const TRAINING_HIGHLIGHTS = [
  {
    title: '100% Practical Labs',
    desc: 'Hands-on workstations where every concept is immediately built and tested.',
  },
  {
    title: 'Project-Based Syllabus',
    desc: 'Graduate with verified real-world projects and demonstrable portfolios.',
  },
  {
    title: 'Experienced Mentorship',
    desc: 'Direct guidance from practicing software engineers and digital creators.',
  },
  {
    title: 'Flexible Schedules',
    desc: 'Weekday, weekend, and intensive cohorts tailored for students and workers.',
  },
  {
    title: 'Certification & Verification',
    desc: 'Recognized certificate of completion backed by capstone project defense.',
  },
  {
    title: 'Career & Industry Readiness',
    desc: 'Guidance on freelancing, tech interviewing, and business digitization.',
  },
];

export const INNOVATION_INITIATIVES = [
  {
    title: 'AI Solutions & Machine Learning Exploration',
    stage: 'Active Prototyping',
    description: 'Developing contextual academic assistants, intelligent data extraction pipelines, and smart conversational workflows for local businesses.',
    focus: ['Natural Language Processing', 'Curriculum Grounding', 'Predictive Analysis', 'Workflow Assistance'],
  },
  {
    title: 'Intelligent Automation & Business Systems',
    stage: 'In Development',
    description: 'Engineering asynchronous background engines that synchronize physical retail sales with WhatsApp customer receipts and cloud databases.',
    focus: ['POS WhatsApp Integration', 'Automated Invoicing', 'Event-Driven Webhooks', 'Zero-Paper Audits'],
  },
  {
    title: 'Smart Campus Lost & Found Verification Protocol',
    stage: 'Prototype Ready',
    description: 'Extending the TraceHop platform with cryptographic verification protocols, image attribute tagging, and auditable custody tracking.',
    focus: ['Cryptographic Claim Verification', 'Chain of Custody', 'Automated Matching', 'Security Oversight'],
  },
  {
    title: 'Predictive Stock Velocity & Retail Analytics',
    stage: 'Research Concept',
    description: 'Modeling inventory depletion curves to automatically calculate supplier re-order schedules before stockouts impact sales.',
    focus: ['Statistical Modeling', 'Time-series Forecasting', 'Safety Stock Buffers', 'Excel Modeling'],
  },
];

