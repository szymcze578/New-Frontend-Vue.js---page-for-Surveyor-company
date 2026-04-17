<template>
  <div class="group relative bg-white border-2 border-transparent rounded-3xl p-8 hover:shadow-2xl hover:border-accent/20 hover:-translate-y-1 transition-all duration-300">
    <div class="absolute inset-0 bg-linear-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />

    <div class="relative">
      <div class="flex items-center justify-center size-16 bg-linear-to-br from-accent/10 to-secondary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <component :is="getIcon(service.iconName)" class="size-8 text-accent" />
      </div>

      <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
        {{ service.title }}
      </h3>

      <p class="text-muted-foreground mb-6 leading-relaxed">{{ service.description }}</p>

      <ul class="space-y-2">
        <li
          v-for="(feature, idx) in service.features"
          :key="idx"
          class="flex items-start text-sm text-foreground"
        >
          <span class="inline-block size-1.5 bg-secondary rounded-full mt-2 mr-3 shrink-0" />
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useIconMap } from '@/composables/useIconMap'
import type { Service } from '@/types/content'

defineProps<{
  service: Service
}>()

const { getIcon } = useIconMap()
</script>
