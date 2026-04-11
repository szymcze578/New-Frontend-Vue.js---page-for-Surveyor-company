<template>
  <footer class="bg-primary text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

        <!-- Company Info -->
        <div>
          <div class="flex flex-col mb-6">
            <span class="text-2xl font-bold tracking-tight">
              <span class="text-accent">GEO</span>DIMETR
            </span>
            <span class="text-sm text-gray-400">mgr inż. Mariusz Czech</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed mb-6">
            {{ footer?.description }}
          </p>
          <div class="flex space-x-4">
            <a
              v-if="footer?.facebookUrl"
              :href="footer.facebookUrl"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Facebook class="size-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6">Szybkie linki</h3>
          <ul class="space-y-3">
            <li v-for="link in footer?.quickLinks ?? []" :key="link.sectionId">
              <button
                class="text-gray-300 hover:text-accent transition-colors text-sm"
                @click="scrollToSection(link.sectionId)"
              >
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6">Usługi</h3>
          <ul class="space-y-3">
            <li
              v-for="service in footer?.serviceLinks ?? []"
              :key="service"
              class="text-gray-300 text-sm"
            >
              {{ service }}
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-6">Kontakt</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <MapPin class="size-5 text-accent mr-3 shrink-0 mt-0.5" />
              <div class="text-gray-300 text-sm">
                <div>{{ contact?.addressLine1 }}</div>
                <div>{{ contact?.addressLine2 }}</div>
              </div>
            </li>
            <li class="flex items-start">
              <Phone class="size-5 text-accent mr-3 shrink-0 mt-0.5" />
              <a
                :href="'tel:' + contact?.phone?.replace(/\s/g, '')"
                class="text-gray-300 text-sm hover:text-accent transition-colors"
              >
                {{ contact?.phone }}
              </a>
            </li>
            <li class="flex items-start">
              <Mail class="size-5 text-accent mr-3 shrink-0 mt-0.5" />
              <a
                :href="'mailto:' + contact?.email"
                class="text-gray-300 text-sm hover:text-accent transition-colors"
              >
                {{ contact?.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="pt-8 border-t border-white/10">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} {{ footer?.copyrightName }}. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MapPin, Phone, Mail, Facebook } from 'lucide-vue-next'
import { useContentStore } from '@/stores/content'

const store = useContentStore()
const footer = computed(() => store.footer)
const contact = computed(() => store.contactInfo)

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}
</script>
