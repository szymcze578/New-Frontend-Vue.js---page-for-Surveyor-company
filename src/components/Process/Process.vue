<template>
  <section id="process" class="py-24 bg-linear-to-br from-primary via-[#0a4f65] to-secondary relative overflow-hidden">
    <BackgroundGrid :grid-width="60" :grid-height="60" />
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        :badge="store.sectionHeaders?.process?.badge ?? ''"
        :title="store.sectionHeaders?.process?.title ?? ''"
        :description="store.sectionHeaders?.process?.description ?? ''"
        badge-class="bg-white/10"
        badge-label-class="text-accent"
        title-class="text-white"
        description-class="text-gray-200"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(step, index) in steps"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 150 } }"
        >
          <ProcessCard
            :step="step"
            :index="index"
            :show-connector="index < steps.length - 1"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'
import SectionHeader from '../widgets/SectionHeader.vue'
import BackgroundGrid from '../widgets/BackgroundGrid.vue'
import ProcessCard from './ProcessCard.vue'

const store = useContentStore()
const steps = computed(() => store.processSteps)
</script>