<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-primary via-[#0a4f65] to-secondary">

    <!-- Topographic background pattern -->
    <div class="absolute inset-0 opacity-[0.07]">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="topographic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 Q 25 25, 40 10 T 70 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
            <path d="M15 30 Q 30 45, 45 30 T 75 30" fill="none" stroke="currentColor" stroke-width="0.5"/>
            <path d="M20 50 Q 35 65, 50 50 T 80 50" fill="none" stroke="currentColor" stroke-width="0.5"/>
            <path d="M25 70 Q 40 85, 55 70 T 85 70" fill="none" stroke="currentColor" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topographic)" />
      </svg>
    </div>

    <BackgroundGrid :grid-width="50" :grid-height="50" />

    <!-- Gradient orbs -->
    <div class="absolute top-1/4 -left-32 size-96 bg-accent/10 rounded-full blur-3xl" />
    <div class="absolute bottom-1/4 -right-32 size-96 bg-secondary/10 rounded-full blur-3xl" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- Left Content -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="text-white"
        >
          <div
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
            class="flex items-center space-x-2 mb-6"
          >
            <MapPin class="w-5 h-5 text-accent" />
            <span class="text-sm font-medium text-accent">{{ hero?.locationLabel }}</span>
          </div>

          <h1
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
            class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {{ hero?.headline }}
             <span class="block text-accent mt-2">z precyzją i pasją</span>
          </h1>

          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
            class="text-lg text-gray-200 mb-8 leading-relaxed"
          >
            {{ hero?.subheading }}
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }"
            class="flex flex-col sm:flex-row gap-4"
          >
            <button
              class="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-colors cursor-pointer"
              @click="scrollToSection('contact')"
            >
              Wycena
              <ArrowRight class="ml-2 w-5 h-5" />
            </button>
            <button
              class="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-base font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors cursor-pointer"
              @click="scrollToSection('services')"
            >
              Nasze usługi
            </button>
          </div>

          <!-- Trust indicators -->
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { duration: 800, delay: 700 } }"
            class="mt-12 pt-8 border-t border-white/20"
          >
            <div class="grid grid-cols-3 gap-6">
              <div v-for="stat in hero?.stats ?? []" :key="stat.value">
                <div class="text-3xl font-bold text-accent mb-1">{{ stat.value }}</div>
                <div class="text-sm text-gray-300">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Visual Element -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 400 } }"
          class="hidden lg:block relative"
        >
          <div class="relative w-full h-125">

            <!-- Image with overlay -->
            <div class="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
              <img
                :src="imgSrc"
                alt="Geodezyjne urządzenia pomiarowe - precyzyjne narzędzia"
                class="w-full h-full object-cover"
                @error="onImgError"
              />
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent" />

              <!-- Floating badge - top right -->
              <div class="absolute top-8 right-8 size-16 bg-accent/90 rounded-2xl shadow-lg flex items-center justify-center backdrop-blur-sm animate-float-up">
                <span class="text-white font-bold text-sm">±2mm</span>
              </div>

              <!-- Floating card - bottom left -->
              <div class="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 animate-float-down">
                <div class="text-xs text-muted-foreground">Najwyższa precyzja</div>
                <div class="text-sm font-bold text-primary">Nowoczesny sprzęt</div>
              </div>
            </div>

            <!-- Decorative border element -->
            <div class="absolute -bottom-6 -right-6 size-48 border-2 border-accent/30 rounded-3xl -z-10 animate-float-rotate" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArrowRight, MapPin } from 'lucide-vue-next'
import { useContentStore } from '@/stores/content'
import BackgroundGrid from './widgets/BackgroundGrid.vue'

const store = useContentStore()
const hero = computed(() => store.hero)

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

const imgSrc = 'https://images.unsplash.com/photo-1610081339709-d86503fcaf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXlvciUyMGdlb2RldGljJTIwZXF1aXBtZW50JTIwcHJlY2lzaW9uJTIwbWVhc3VyZW1lbnR8ZW58MXx8fHwxNzc1NTQ4MzExfDA&ixlib=rb-4.1.0&q=80&w=1080'

const onImgError = (e: Event) => {
  (e.target as HTMLImageElement).style.display = 'none'
}
</script>

<style scoped>
@keyframes float-up {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
@keyframes float-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(15px); }
}
@keyframes float-rotate {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(5deg); }
}

.animate-float-up     { animation: float-up     4s ease-in-out infinite; }
.animate-float-down   { animation: float-down   5s ease-in-out infinite 0.5s; }
.animate-float-rotate { animation: float-rotate 6s ease-in-out infinite; }
</style>