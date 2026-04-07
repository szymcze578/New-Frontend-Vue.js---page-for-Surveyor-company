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
          class="relative group bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-accent/20"
        >
          <!-- Gradient background -->
          <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />

          <div class="relative">
            <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
              <component :is="stat.icon" class="w-7 h-7 text-white" />
            </div>
            <div class="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-2">
              {{ stat.value }}
            </div>
            <div class="text-base font-semibold text-foreground mb-1">{{ stat.label }}</div>
            <div class="text-sm text-muted-foreground">{{ stat.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Target, Shield, Award, Clock } from 'lucide-vue-next'
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
    icon: Shield,
    value: '100%',
    label: 'Ubezpieczenie OC',
    description: 'Pełne zabezpieczenie',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Lat doświadczenia',
    description: 'Sprawdzona jakość',
  },
]
</script>