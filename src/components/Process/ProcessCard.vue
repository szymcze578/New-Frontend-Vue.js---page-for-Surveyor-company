<template>
  <div class="relative">
    <div
      v-if="showConnector"
      class="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-accent/30 z-0"
    >
      <div
        v-motion
        :initial="{ scaleX: 0 }"
        :visible-once="{ scaleX: 1, transition: { duration: 800, delay: index * 150 + 300 } }"
        class="h-full bg-accent origin-left will-change-transform"
      />
    </div>

    <div class="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors z-10">
      <div class="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
        <span class="text-lg font-bold text-accent-foreground">{{ step.number }}</span>
      </div>
      <div class="flex items-center justify-center w-16 h-16 bg-accent/20 rounded-xl mb-6">
        <component :is="getIcon(step.iconName)" class="w-8 h-8 text-accent" />
      </div>
      <h3 class="text-xl font-bold text-white mb-3">{{ step.title }}</h3>
      <p class="text-gray-200 leading-relaxed">{{ step.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIconMap } from '@/composables/useIconMap'
import type { ProcessStep } from '@/types/content'

defineProps<{
  step: ProcessStep
  index: number
  showConnector: boolean
}>()

const { getIcon } = useIconMap()
</script>
