<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        :badge="store.sectionHeaders?.advantages?.badge ?? ''"
        :title="store.sectionHeaders?.advantages?.title ?? ''"
        :description="store.sectionHeaders?.advantages?.description ?? ''"
      />

      <!-- Advantages Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(advantage, index) in advantages"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="group relative bg-linear-to-br from-white to-muted rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-accent/10"
        >
          <!-- Decorative accent -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-accent/5 to-secondary/5 rounded-bl-full rounded-tr-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

          <!-- Icon -->
          <div class="relative flex items-center justify-center w-16 h-16 bg-linear-to-br from-accent to-accent/80 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent/20">
            <component :is="getIcon(advantage.iconName)" class="w-7 h-7 text-white" />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-primary mb-3">{{ advantage.title }}</h3>
          <p class="text-muted-foreground leading-relaxed">{{ advantage.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'
import { useIconMap } from '@/composables/useIconMap'
import SectionHeader from './widgets/SectionHeader.vue'

const store = useContentStore()
const { getIcon } = useIconMap()

const advantages = computed(() => store.advantages)
</script>