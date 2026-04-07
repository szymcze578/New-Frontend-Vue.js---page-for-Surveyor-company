

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <div class="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
          <span class="text-sm font-semibold text-accent">Nasze atuty</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Dlaczego warto nas wybrać?
        </h2>
        <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
          Łączymy najwyższe standardy z indywidualnym podejściem do każdego klienta
        </p>
      </div>

      <!-- Advantages Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(advantage, index) in advantages"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="group relative bg-gradient-to-br from-white to-muted rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-accent/10"
        >
          <!-- Decorative accent -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-bl-full rounded-tr-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

          <!-- Icon -->
          <div class="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent/20">
            <component :is="advantage.icon" class="w-7 h-7 text-white" />
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
import { Sparkles, Headphones, BadgeCheck, Zap, Users, Globe } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Advantage {
  icon: Component
  title: string
  description: string
}

const advantages: Advantage[] = [
  {
    icon: Sparkles,
    title: 'Najnowsza technologia',
    description: 'Nowoczesny sprzęt geodezyjny zapewniający najwyższą precyzję pomiarów.',
  },
  {
    icon: Headphones,
    title: 'Kompleksowa obsługa',
    description: 'Od konsultacji po finalizację - jesteśmy z Tobą na każdym etapie.',
  },
  {
    icon: BadgeCheck,
    title: 'Uprawnienia i certyfikaty',
    description: 'Posiadamy pełne uprawnienia zawodowe i wymagane certifikaty.',
  },
  {
    icon: Zap,
    title: 'Szybka realizacja',
    description: 'Ekspresowe terminy bez kompromisów w zakresie jakości wykonania.',
  },
  {
    icon: Users,
    title: 'Doświadczony zespół',
    description: 'Wykwalifikowani geodeci z wieloletnim doświadczeniem w branży.',
  },
  {
    icon: Globe,
    title: 'Lokalna obecność',
    description: 'Doskonała znajomość terenu Zawiercia i okolic - szybki dojazd.',
  },
]
</script>