<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md'
      : 'bg-primary/30 backdrop-blur-md border-b border-white/10'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <CompanyLogo 
          :logo-text-class="logoTextClass" 
          :logo-subtitle-class="logoSubtitleClass"
        />
        <nav class="hidden lg:flex items-center space-x-1">
          <NavigationButton
            v-for="link in navLinks"
            :key="link.sectionId"
            :label="link.label"
            :style-class="navBtnClass"
            @click="scrollToSection(link.sectionId)"
          />
        </nav>
        <DesktopActions
          :phone="contact?.phone"
          :phone-class="phoneClass"
          :cta-btn-class="ctaBtnClass"
          @navigate="scrollToSection"
        />
        <button
          class="lg:hidden p-2 transition-colors rounded-lg"
          :class="navBtnClass"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <X v-if="isMobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <MobileMenu
      :is-open="isMobileMenuOpen"
      :nav-links="navLinks"
      :contact="contact"
      @navigate="scrollToSection"
    />
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useContentStore } from '@/stores/content'
import CompanyLogo from './Header/CompanyLogo.vue'
import NavigationButton from './Header/NavigationButton.vue'
import DesktopActions from './Header/DesktopActions.vue'
import MobileMenu from './Header/MobileMenu.vue'

const store = useContentStore()
const contact = computed(() => store.contactInfo)
const navLinks = computed(() => store.navigation)

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}


const navBtnClass = computed(() =>
  isScrolled.value
    ? 'text-foreground hover:text-accent hover:bg-muted'
    : 'text-white hover:text-accent hover:bg-white/10'
)

const logoTextClass = computed(() =>
  isScrolled.value ? 'text-primary' : 'text-white'
)

const logoSubtitleClass = computed(() =>
  isScrolled.value ? 'text-muted-foreground' : 'text-gray-300'
)

const phoneClass = computed(() =>
  isScrolled.value ? 'text-muted-foreground hover:text-accent' : 'text-gray-200 hover:text-accent'
)

const ctaBtnClass = computed(() =>
  isScrolled.value
    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
    : 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20'
)
</script>