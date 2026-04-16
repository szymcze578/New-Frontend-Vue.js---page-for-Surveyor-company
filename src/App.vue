<template>
  <div class="flex flex-col min-h-screen">
    <div v-if="contentStore.status === 'loading'" class="flex items-center justify-center min-h-screen">
      <div class="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
    </div>
    <div v-else-if="contentStore.status === 'error'" class="flex items-center justify-center min-h-screen text-center p-8">
      <p class="text-muted-foreground">Nie można załadować treści. Odśwież stronę.</p>
    </div>
    <template v-else>
      <TheHeader />
      <Hero />
      <TrustCards />
      <Services />
      <Process />
      <Advantages />
      <Projects />
      <!--<Opinions />-->
      <TheFAQ />
      <ContactCTA />
      <TheFooter class="mt-auto" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useContentStore } from '@/stores/content'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheFAQ from './components/TheFAQ.vue'
import TrustCards from './components/TrustSection/TrustCards.vue'
import Advantages from './components/Advantages.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Process from './components/Process.vue'
import ContactCTA from './components/ContactCTA.vue'
import Opinions from './components/Opinions.vue'
import Projects from './components/Projects.vue'

const contentStore = useContentStore()

onMounted(() => {
  contentStore.fetchAll()
})
</script>

<style scoped>

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
