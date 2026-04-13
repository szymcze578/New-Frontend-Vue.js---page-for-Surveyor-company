<template>
  <section id="process" class="py-24 bg-linear-to-br from-primary via-[#0a4f65] to-secondary relative overflow-hidden">

    <!-- Background grid pattern -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="background-image: linear-gradient(#F78C6A 1px, transparent 1px), linear-gradient(90deg, #F78C6A 1px, transparent 1px); background-size: 60px 60px;"
    />

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

      <!-- Process Steps -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(step, index) in steps"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 150 } }"
          class="relative"
        >
          <!-- Connector line -->
          <div
            v-if="index < steps.length - 1"
            class="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-accent/30 z-0"
          >
            <div
              v-motion
              :initial="{ scaleX: 0 }"
              :visible-once="{ scaleX: 1, transition: { duration: 800, delay: index * 150 + 300 } }"
              class="h-full bg-accent origin-left will-change-transform"
            />
          </div>

          <!-- Card -->
          <div class="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors z-10">
            <div class="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span class="text-lg font-bold text-accent-foreground">{{ step.number }}</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3 mt-4">{{ step.title }}</h3>
            <p class="text-gray-200 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'
import SectionHeader from './widgets/SectionHeader.vue'

const store = useContentStore()

const steps = computed(() => store.processSteps)
</script>