<template>
  <section id="services" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <SectionHeader
        badge="Nasze usługi"
        title="Kompleksowe usługi geodezyjne"
        description="Profesjonalna obsługa geodezyjna dla klientów indywidualnych, deweloperów i firm budowlanych"
      />
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="group relative bg-white border-2 border-transparent rounded-3xl p-8 hover:shadow-2xl hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
        >
          <!-- Gradient background on hover -->
          <div class="absolute inset-0 bg-linear-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />

          <div class="relative">
            <!-- Icon -->
            <div class="flex items-center justify-center size-16 bg-linear-to-br from-accent/10 to-secondary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="service.icon" class="size-8 text-accent" />
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
              {{ service.title }}
            </h3>

            <!-- Description -->
            <p class="text-muted-foreground mb-6 leading-relaxed">{{ service.description }}</p>

            <!-- Features -->
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
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Home, Building2, Map, FileText, Ruler, TrendingUp } from 'lucide-vue-next'
import type { Component } from 'vue'
import SectionHeader from './widgets/SectionHeader.vue'

interface Service {
  icon: Component
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: Home,
    title: 'Mapy do celów projektowych',
    description: 'Precyzyjne mapy jako podstawa dla projektów budowlanych i architektonicznych.',
    features: ['Mapa do projektu budowlanego', 'Inwentaryzacja powykonawcza', 'Mapa zasadnicza'],
  },
  {
    icon: Building2,
    title: 'Usługi dla deweloperów',
    description: 'Kompleksowa obsługa geodezyjna dla inwestycji mieszkaniowych i komercyjnych.',
    features: ['Wytyczenie obiektów', 'Pomiary kontrolne', 'Nadzór geodezyjny'],
  },
  {
    icon: Map,
    title: 'Podziały nieruchomości',
    description: 'Profesjonalne podziały działek zgodne z prawem geodezyjnym i kartograficznym.',
    features: ['Podział geodezyjny', 'Rozgraniczenie działek', 'Scalenia gruntów'],
  },
  {
    icon: FileText,
    title: 'Aktualizacja granic',
    description: 'Weryfikacja i uaktualnienie granic działek w ewidencji gruntów.',
    features: ['Wznowienie znaków granicznych', 'Uzgodnienie granic', 'Modernizacja mapy'],
  },
  {
    icon: Ruler,
    title: 'Pomiary sytuacyjno-wysokościowe',
    description: 'Szczegółowe pomiary terenu dla celów projektowych i inwentaryzacyjnych.',
    features: ['Pomiar niwelacyjny', 'Tachimetria'],
  },
  {
    icon: TrendingUp,
    title: 'Obsługa inwestycji',
    description: 'Geodezyjne wsparcie inwestycji od etapu projektu po odbiór końcowy.',
    features: ['Geodezyjna obsługa budowy', 'Inwentaryzacja obiektów', 'As-built'],
  },
]
</script>