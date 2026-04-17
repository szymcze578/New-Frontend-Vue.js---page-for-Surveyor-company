<template>
  <section id="services" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <SectionHeader
        :badge="store.sectionHeaders?.services?.badge ?? ''"
        :title="store.sectionHeaders?.services?.title ?? ''"
        :description="store.sectionHeaders?.services?.description ?? ''"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
        >
          <ServiceCard :service="service" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'
import SectionHeader from './widgets/SectionHeader.vue'
import ServiceCard from './Services/ServiceCard.vue'

const store = useContentStore()
const services = computed(() => store.services)
</script>