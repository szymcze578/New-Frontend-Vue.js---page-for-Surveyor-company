import { defineStore } from 'pinia'
import { ref } from 'vue'
import { sanityClient } from '@/lib/sanity'
import type {
  SiteContent, HeroContent, Service, TrustStat, ProcessStep,
  Advantage, Project, FaqItem, Testimonial, ContactInfo,
  NavLink, FooterContent,
} from '@/types/content'

const GROQ_QUERY = `{
  "hero": *[_type == "hero"][0]{
    headline, subheading, locationLabel,
    "stats": stats[]{ value, label }
  },
  "services": *[_type == "service"] | order(order asc){
    iconName, title, description, features
  },
  "trustStats": *[_type == "trustStat"] | order(order asc){
    iconName, value, label, description
  },
  "processSteps": *[_type == "processStep"] | order(order asc){
    number, title, description
  },
  "advantages": *[_type == "advantage"] | order(order asc){
    iconName, title, description
  },
  "projects": *[_type == "project"] | order(order asc){
    title, "imageUrl": image.asset->url, category, description
  },
  "faqs": *[_type == "faqItem"] | order(order asc){
    question, answer
  },
  "testimonials": *[_type == "testimonial"] | order(order asc){
    name, role, content, rating
  },
  "contactInfo": *[_type == "contactInfo"][0]{
    phone, email, addressLine1, addressLine2
  },
  "navigation": *[_type == "navigation"][0]{
    "navLinks": navLinks[]{ label, sectionId },
    footerDescription,
    "footerServiceLinks": footerServiceLinks[],
    facebookUrl,
    copyrightName
  }
}`

export const useContentStore = defineStore('content', () => {
  const status = ref<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const error = ref<string | null>(null)

  const hero = ref<HeroContent | null>(null)
  const services = ref<Service[]>([])
  const trustStats = ref<TrustStat[]>([])
  const processSteps = ref<ProcessStep[]>([])
  const advantages = ref<Advantage[]>([])
  const projects = ref<Project[]>([])
  const faqs = ref<FaqItem[]>([])
  const testimonials = ref<Testimonial[]>([])
  const contactInfo = ref<ContactInfo | null>(null)
  const navigation = ref<NavLink[]>([])
  const footer = ref<FooterContent | null>(null)

  async function fetchAll() {
    if (status.value === 'ready' || status.value === 'loading') return
    status.value = 'loading'
    try {
      const data = await sanityClient.fetch<SiteContent>(GROQ_QUERY)
      hero.value = data.hero
      services.value = data.services
      trustStats.value = data.trustStats
      processSteps.value = data.processSteps
      advantages.value = data.advantages
      projects.value = data.projects
      faqs.value = data.faqs
      testimonials.value = data.testimonials
      contactInfo.value = data.contactInfo
      navigation.value = data.navigation
      if (data.navigation) {
        footer.value = {
          description: (data as any).navigation.footerDescription ?? '',
          quickLinks: data.navigation as unknown as NavLink[],
          serviceLinks: (data as any).navigation.footerServiceLinks ?? [],
          facebookUrl: (data as any).navigation.facebookUrl ?? '',
          copyrightName: (data as any).navigation.copyrightName ?? 'Geodimetr',
        }
      }
      status.value = 'ready'
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Błąd ładowania treści'
      status.value = 'error'
    }
  }

  return { status, error, hero, services, trustStats, processSteps, advantages, projects, faqs, testimonials, contactInfo, navigation, footer, fetchAll }
})
