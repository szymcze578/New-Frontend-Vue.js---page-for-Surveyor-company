<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader></TheHeader>
    <Hero/>
    <TrustCards/>
    <Services/>
    <Process/>
    <Advantages/>
    <Projects/>
    <!--<Opinions/>-->
    <TheFAQ/>
    <ContactCTA/>
    <TheFooter class="mt-auto"/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheFAQ from './components/TheFAQ.vue';
import TrustCards from './components/TrustCards.vue';
import Advantages from './components/Advantages.vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import Process from './components/Process.vue';
import ContactCTA from './components/ContactCTA.vue';
import Opinions from './components/Opinions.vue';
import Projects from './components/Projects.vue';
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
