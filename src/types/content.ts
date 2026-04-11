export interface HeroStat {
  value: string
  label: string
}

export interface HeroContent {
  headline: string
  subheading: string
  locationLabel: string
  stats: HeroStat[]
}

export interface Service {
  iconName: string
  title: string
  description: string
  features: string[]
}

export interface TrustStat {
  iconName: string
  value: string
  label: string
  description: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Advantage {
  iconName: string
  title: string
  description: string
}

export interface Project {
  imageUrl: string
  title: string
  category: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export interface ContactInfo {
  phone: string
  email: string
  addressLine1: string
  addressLine2: string
}

export interface NavLink {
  label: string
  sectionId: string
}

export interface FooterContent {
  description: string
  quickLinks: NavLink[]
  serviceLinks: string[]
  facebookUrl: string
  copyrightName: string
}

export interface SiteContent {
  hero: HeroContent
  services: Service[]
  trustStats: TrustStat[]
  processSteps: ProcessStep[]
  advantages: Advantage[]
  projects: Project[]
  faqs: FaqItem[]
  testimonials: Testimonial[]
  contactInfo: ContactInfo
  navigation: NavLink[]
  footer: FooterContent
}
