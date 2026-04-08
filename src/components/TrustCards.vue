<template>
  <section class="py-20 bg-muted/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="stat-card group bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-accent/20"
        >
          <div class="flex items-center justify-center size-16 bg-linear-to-br from-accent to-accent/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
            <component :is="stat.icon" class="size-7 text-white" />
          </div>
          <div class="text-4xl font-bold bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent mb-2">
            {{ stat.value }}
          </div>
          <div class="text-base font-semibold text-foreground mb-1">{{ stat.label }}</div>
          <div class="text-sm text-muted-foreground">{{ stat.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Target, Shield, Award, Clock, MapPin, FileText } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Stat {
  icon: Component
  value: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    icon: Target,
    value: '±2mm',
    label: 'Dokładność pomiarów',
    description: 'Najwyższa precyzja',
  },
  {
    icon: Clock,
    value: '24h',
    label: 'Czas realizacji',
    description: 'Ekspresowe usługi',
  },
  {
    icon: FileText,
    value: '1000+',
    label: 'Wykonanych operatów',
    description: 'Potwierdzona skuteczność',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Lat doświadczenia',
    description: 'Sprawdzona jakość',
  },
]
</script>

<style scoped>
.stat-card {
  position: relative;
}

.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-accent) 5%, transparent), color-mix(in srgb, var(--color-secondary) 5%, transparent));
  opacity: 0;
  transition: opacity 0.3s;
}

.stat-card:hover::before {
  opacity: 1;
}
</style>