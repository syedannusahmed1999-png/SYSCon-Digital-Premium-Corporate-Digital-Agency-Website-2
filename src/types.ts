export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  icon: string;
  badge: string;
  businessOutcome: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  clientPlaceholder: string;
  industry: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: { label: string; metric: string }[];
  deliverables: string[];
  visualAccent: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  unit?: string;
  subtext: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  namePlaceholder: string;
  rolePlaceholder: string;
  companyPlaceholder: string;
  industry: string;
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  serviceInterest: string;
  estimatedBudget: string;
  projectTimeline: string;
  notes: string;
}
