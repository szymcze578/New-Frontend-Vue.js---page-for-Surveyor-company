<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md'
      : 'bg-primary/30 backdrop-blur-md border-b border-white/10'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center">
          <div class="flex flex-col">
            <span
              class="text-xl font-bold tracking-tight transition-colors"
              :class="logoTextClass"
            >
              <span class="text-accent">GEO</span>DIMETR
            </span>
            <span
              class="text-xs transition-colors"
              :class="logoSubtitleClass"
            >
              mgr inż. Mariusz Czech
            </span>
          </div>
        </div>
        <nav class="hidden lg:flex items-center space-x-1">
          <button
            v-for="link in navLinks"
            :key="link.sectionId"
            class="px-4 py-2 text-sm font-medium transition-colors rounded-lg cursor-pointer"
            :class="navBtnClass"
            @click="scrollToSection(link.sectionId)"
          >
            {{ link.label }}
          </button>
        </nav>
        <div class="hidden lg:flex items-center space-x-4">
          <a
            :href="'tel:' + contact?.phone?.replace(/\s/g, '')"
            class="flex items-center text-sm transition-colors"
            :class="phoneClass"
          >
            <Phone class="w-4 h-4 mr-2" />
            {{ contact?.phone }}
          </a>
          <button
            class="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
            :class="ctaBtnClass"
            @click="scrollToSection('contact')"
          >
            Kontakt
          </button>
        </div>
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

    <div v-if="isMobileMenuOpen" class="lg:hidden bg-white border-t border-border">
      <div class="px-4 py-6 space-y-3">
        <button
          v-for="link in navLinks"
          :key="link.sectionId"
          class="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-muted rounded-lg transition-colors"
          @click="scrollToSection(link.sectionId)"
        >
          {{ link.label }}
        </button>
        <div class="pt-4 space-y-3">
          <a
            :href="'tel:' + contact?.phone?.replace(/\s/g, '')"
            class="flex items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <Phone class="w-4 h-4 mr-2" />
            {{ contact?.phone }}
          </a>
          <button
            class="w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors bg-accent text-accent-foreground hover:bg-accent/90"
            @click="scrollToSection('contact')"
          >
            Kontakt
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Menu, X, Phone } from 'lucide-vue-next'
import { useContentStore } from '@/stores/content'

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