export interface StrategicPillar {
  id: string;
  number: string;
  title: string;
  description: string;
  keyPoints: string[];
}

export interface ProofMetric {
  id: string;
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
  organization: string;
  impactCategory: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  organization: string;
  timeframe: string;
  leadResult: string;
  description: string;
  challenge: string;
  strategicApproach: string[];
  metrics: { label: string; value: string }[];
  stakeholders: string[];
}

export interface Principle {
  id: string;
  quote: string;
  explanation: string;
}

export interface CareerRole {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  scope?: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  period: string;
  role: string;
  organization: string;
  category: 'Institutional' | 'Broadcasting' | 'Luxury & Brands' | 'Sovereign';
  badge: string;
  headline: string;
  summary: string;
  keyAchievements: string[];
  metrics: { label: string; value: string }[];
  stakeholders: string[];
  tags: string[];
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export type Language = 'en' | 'ar';

export interface StrategicMandate {
  id: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  iconName: string;
  tagline: string;
  relevanceScore: string;
  targetSector: string;
  verifiedPrecedent: {
    organization: string;
    metric: string;
    summary: string;
    summaryAr: string;
  };
  executionRoadmap: {
    phase: string;
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
  }[];
  keyStakeholders: string[];
  recommendedCaseId: string;
}

export interface EcosystemPartner {
  id: string;
  name: string;
  nameAr: string;
  hub: 'Jeddah' | 'Amman' | 'Riyadh' | 'Dubai' | 'Lausanne';
  sector: 'Sovereign & Multilateral' | 'Broadcasting & National Media' | 'Multinational & Regulatory' | 'Luxury & Hospitality';
  role: string;
  verifiedScope: string;
  tenureOrImpact: string;
  highlight: string;
}

export interface PlaybookPhase {
  number: string;
  title: string;
  titleAr: string;
  focus: string;
  focusAr: string;
  objective: string;
  tactics: string[];
  deliverables: string[];
}

export interface Endorsement {
  id: string;
  name: string;
  nameAr?: string;
  title: string;
  titleAr?: string;
  organization: string;
  organizationAr?: string;
  relationship: string;
  relationshipAr?: string;
  quote: string;
  quoteAr: string;
  metricHighlight?: string;
  category: 'Corporate' | 'Broadcasting' | 'Agency & Global PR' | 'Sovereign & Industrial';
  avatarInitials: string;
}

export interface MediaReelItem {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  year: string;
  description: string;
  descriptionAr: string;
  metrics: string[];
  metricsAr?: string[];
  thumbnailUrl: string;
  duration?: string;
  client: string;
  scope: string;
  videoEmbedUrl?: string;
}
