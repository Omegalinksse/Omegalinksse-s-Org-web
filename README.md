# Omegalinks Digital Technology

> **Connecting Digital Innovation with Real-World Solutions.**  
> *Official Corporate Website & Digital Solutions Portal*

[![React](https://img.shields.io/badge/React-18.3-blue.svg?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

---

## 🌐 Overview

**Omegalinks Digital Technology** is an integrated technology enterprise and digital solutions organization dedicated to engineering reliable software, delivering high-impact creative media, conducting practical technology education, and driving organizational digital transformation.

This repository powers the official multi-page web platform for Omegalinks Digital Technology, presenting the organization's four specialized service divisions, commercial product case studies, vocational training academy syllabi, innovation research, and corporate credentials.

---

## 🏛️ Quad-Pillar Ecosystem

The platform highlights Omegalinks' four foundational operational divisions:

1. **Digital Technology (Software & Engineering)**
   - Custom full-stack web applications and cloud architectures.
   - Robust Python & Flask backends, Node.js services, and relational database systems (SQL/PostgreSQL/MySQL).
   - Automated business workflow logic and enterprise systems.

2. **Creative Digital Media (Branding & Design)**
   - Industry-standard vector graphic production in CorelDRAW & Photoshop.
   - Comprehensive brand identity books, logos, typography systems, and print assets.
   - Digital publication design, corporate media, and video post-production.

3. **Digital Skills & Training (Omegalinks Academy)**
   - Hands-on, practical vocational training for students, school leavers, and working professionals.
   - Core courses in Computer Fundamentals & Microsoft Office Suite, Web Development, Programming (Python, JavaScript), and Graphic Design.
   - Structured milestone evaluations, lab exercises, and verifiable certificates of completion.

4. **Digital Growth & Enterprise Solutions**
   - End-to-end digital transformation consulting for local businesses, schools, and institutions.
   - IT infrastructure setup, cloud migration, and automated communication channels (SMS & WhatsApp API integrations).

---

## 🚀 Key Website Features

- **Multi-Page Structured Architecture:** Dedicated routed pages for **Home**, **About**, **Services**, **Portfolio**, **Training Academy**, **Innovation Lab**, **Founder Profile**, and **Contact & Quotes**.
- **Adaptive Dual-Theme Engine:** Seamless toggle between high-tech cyber **Dark Mode** and crisp, high-contrast **Light Mode** across all components, headers, modals, and forms with zero style bleed.
- **Interactive Circuit Simulation:** Custom HTML5 Canvas network visualization responding dynamically to mouse proximity, canvas resizing, and active theme palettes.
- **In-Depth Case Study Modal Inspector:** Comprehensive architectural breakdown of completed production projects including the problem statement, engineered solution, key workflow features, technology stack, and verified measurable outcomes.
- **Flagship Spotlight (TraceHop):** Showcase of Omegalinks' proprietary smart campus logistics and decentralized asset recovery system.
- **5-Phase Delivery Workflow:** Transparent overview of the development lifecycle (Discovery $\rightarrow$ Blueprint $\rightarrow$ Engineering $\rightarrow$ Quality Assurance $\rightarrow$ Deployment & Support).
- **Interactive Academy Course Directory:** Multi-track curriculum explorer detailing module structures, course duration, hands-on lab focus, and 1-click consultation/enrollment triggers.
- **Integrated Consultation Routing:** Context-aware request dispatch connecting clients directly to customized inquiry workflows and instant WhatsApp links.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 18 (Hooks, Context API, Modular Architecture) |
| **Language & Typing** | TypeScript 5 (Strict Mode, Type-Safe Props & Interfaces) |
| **Styling & Design System** | Tailwind CSS with custom fonts (*Plus Jakarta Sans*, *Cabinet Grotesk*, *JetBrains Mono*) |
| **Iconography** | Lucide React |
| **Interactive Canvas** | Native HTML5 Canvas 2D API with dynamic `ResizeObserver` scaling |
| **Build & Bundling** | Vite 6 |

---

## 📁 Repository Directory Structure

```text
├── index.html                   # Application entry HTML with SEO meta tags & favicon
├── metadata.json                # Project configuration and capabilities manifest
├── package.json                 # Dependency definitions and scripts
├── src/
│   ├── main.tsx                 # React DOM mount point with ThemeProvider
│   ├── App.tsx                  # Primary layout controller, page router & modals
│   ├── index.css                # Global Tailwind CSS configurations & keyframes
│   ├── types.ts                 # Central TypeScript interfaces, types, and enums
│   ├── context/
│   │   └── ThemeContext.tsx     # Theme state provider (Light / Dark mode persistence)
│   ├── data/
│   │   └── companyData.ts       # Central source of truth for services, courses, projects & founder info
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed responsive navigation bar with dropdowns & theme toggle
│   │   ├── Footer.tsx           # Global corporate footer with social links & quick navigation
│   │   ├── Hero.tsx             # Main hero section with interactive circuit background
│   │   ├── CircuitCanvas.tsx    # Interactive physics-based circuit node canvas
│   │   ├── OmegalinksLogo.tsx   # Custom scalable vector logo (Full & Compact variants)
│   │   ├── ThemeToggle.tsx      # High-contrast theme switch button
│   │   ├── ValueProposition.tsx # Quad-action ribbon (Build, Create, Learn, Innovate)
│   │   ├── ProcessSection.tsx   # 5-phase delivery execution workflow
│   │   ├── InsightsSection.tsx  # Thought leadership and engineering perspectives
│   │   ├── CaseStudyModal.tsx   # Detailed modal viewer for portfolio case studies
│   │   └── ServiceDetailModal.tsx # Deliverables and specifications modal for services
│   └── pages/
│       ├── HomePage.tsx         # Executive landing page overview
│       ├── AboutPage.tsx        # Organization mission, vision, values, and credentials
│       ├── ServicesPage.tsx     # Comprehensive services list categorized by division
│       ├── PortfolioPage.tsx    # In-production project case studies & live demos
│       ├── TrainingPage.tsx     # Omegalinks Academy courses, syllabus, and enrollment
│       ├── InnovationPage.tsx   # Emerging technologies lab & prototype research
│       ├── FounderPage.tsx      # Profile of Founder & Lead Engineer (Ezeh Francis Chukwuebuka)
│       └── ContactPage.tsx      # Multi-channel quote request form & direct coordinates
```

---

## 💻 Local Development Setup

To run this website locally on your computer:

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/omegalinks-digital-technology.git
cd omegalinks-digital-technology
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the live development build.

### 5. Build for Production
To compile and bundle optimized static assets for deployment:
```bash
npm run build
```
Production build artifacts will be generated in the `dist/` directory.

### 6. Lint and Typecheck
```bash
npm run lint
```

---

## 👨‍💼 Leadership & Authorship

**Founder & Lead Software Engineer:**  
**Ezeh Francis Chukwuebuka**  
- *Role:* Principal Engineer, Creative Director & Lead Instructor at Omegalinks Digital Technology
- *Specialization:* Full-Stack Python & Web Development, Database Architectures, CorelDRAW Vector Graphics, and Vocational IT Instruction.
- *GitHub:* [@francis-chukwuebuka](https://github.com/francis-chukwuebuka)
- *Email:* [omegalinksse@gmail.com](mailto:omegalinksse@gmail.com)

---

## 📄 License & Intellectual Property

Copyright &copy; 2024–2026 **Omegalinks Digital Technology**. All rights reserved.  
All brand graphics, logos, course syllabi, and proprietary product concepts (including TraceHop) are proprietary assets of Omegalinks Digital Technology.
