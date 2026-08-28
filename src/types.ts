export type DivisionType = 
  | 'digital-technology' 
  | 'creative-media' 
  | 'skills-training' 
  | 'growth-solutions';

export interface ServiceItem {
  id: string;
  name: string;
  division: DivisionType;
  description: string;
  deliverables: string[];
  tools: string[];
  popular?: boolean;
}

export interface DivisionInfo {
  id: DivisionType;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  color: string;
  accentGradient: string;
  services: ServiceItem[];
}

export type PortfolioCategory = 
  | 'ALL'
  | 'SOFTWARE'
  | 'WEB'
  | 'MOBILE'
  | 'DATA & ANALYTICS'
  | 'GRAPHIC DESIGN'
  | 'VIDEO'
  | 'BRANDING'
  | 'DIGITAL SOLUTIONS';

export interface ProjectCaseStudy {
  id: string;
  name: string;
  category: PortfolioCategory;
  tagline: string;
  flagship?: boolean;
  problem: string;
  researchAndAnalysis?: string;
  systemDesign?: string;
  solution: string;
  technologies: string[];
  myRole: string;
  keyFeatures: string[];
  databaseArchitecture?: string;
  backendArchitecture?: string;
  frontendUx?: string;
  testingAndSecurity?: string;
  outcome: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface AcademyCourse {
  id: string;
  title: string;
  category: string;
  level: SkillLevel;
  duration: string;
  trainingFormat: 'In-Person & Lab' | 'Hybrid / Online' | 'Hands-on Workshop';
  description: string;
  tools: string[];
  learningOutcomes: string[];
  syllabus: { module: string; topics: string[] }[];
  popular?: boolean;
}

export type Course = AcademyCourse;

export interface InnovationLabProject {
  id: string;
  title: string;
  category: string;
  status: 'In Development' | 'Prototype Ready' | 'Research Concept';
  tagline: string;
  description: string;
  technicalFocus: string[];
  potentialImpact: string;
  interactiveDemoType?: 'scope-calculator' | 'workflow-visualizer' | 'api-mock';
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface ProjectInquiry {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  division: DivisionType | '';
  serviceName: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  description: string;
}

export interface WorkflowPhase {
  phase: number;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TrainingHighlight {
  title: string;
  desc: string;
}

export interface InnovationInitiative {
  title: string;
  description: string;
  stage: string;
  focus: string[];
}
