<template>
  <section id="testimonials" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <div class="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
          <span class="text-sm font-semibold text-accent">Opinie klientów</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Co mówią o nas klienci?
        </h2>
        <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
          Zadowolenie naszych klientów jest naszym największym sukcesem
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="relative bg-gradient-to-br from-muted to-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
        >
          <!-- Quote icon -->
          <div class="absolute top-6 right-6 opacity-10">
            <Quote class="w-16 h-16 text-accent" />
          </div>

          <!-- Rating -->
          <div class="flex space-x-1 mb-4">
            <Star
              v-for="i in testimonial.rating"
              :key="i"
              class="w-5 h-5 fill-accent text-accent"
            />
          </div>

          <!-- Content -->
          <p class="relative text-foreground leading-relaxed mb-6">
            "{{ testimonial.content }}"
          </p>

          <!-- Author -->
          <div class="relative">
            <div class="font-bold text-primary">{{ testimonial.name }}</div>
            <div class="text-sm text-muted-foreground">{{ testimonial.role }}</div>
          </div>
        </div>
      </div>

      <!-- Trust Badge -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
        class="mt-16 text-center"
      >
        <div class="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-3">
          <Star class="w-5 h-5 fill-accent text-accent" />
          <span class="font-semibold text-primary">5.0/5.0</span>
          <span class="text-muted-foreground">na podstawie 150+ opinii</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Star, Quote } from 'lucide-vue-next'

const testimonials = [
  {
    name: 'Anna Kowalska',
    role: 'Właścicielka działki',
    content: 'Profesjonalna obsługa od początku do końca. Pan geodeta dokładnie wyjaśnił cały proces i wykonał wszystko terminowo. Polecam!',
    rating: 5,
  },
  {
    name: 'Piotr Nowak',
    role: 'Deweloper',
    content: 'Współpracujemy od 3 lat przy różnych inwestycjach. Zawsze można liczyć na fachowość, precyzję i dotrzymywanie terminów. Najlepsza firma geodezyjna w okolicy.',
    rating: 5,
  },
  {
    name: 'Maria Wiśniewska',
    role: 'Inwestor indywidualny',
    content: 'Potrzebowałam pilnie mapy do projektu budowlanego. Wszystko zostało zrobione w ekspresowym tempie bez utraty jakości. Gorąco polecam!',
    rating: 5,
  },
  {
    name: 'Tomasz Lewandowski',
    role: 'Firma budowlana',
    content: 'Kompleksowa obsługa geodezyjna naszych budów. Nowoczesny sprzęt, szybka realizacja i konkurencyjne ceny. Jesteśmy bardzo zadowoleni.',
    rating: 5,
  },
  {
    name: 'Janina Dąbrowska',
    role: 'Klient prywatny',
    content: 'Bardzo miła i pomocna obsługa. Pan geodeta cierpliwie odpowiadał na wszystkie pytania i doradzał najlepsze rozwiązania. Dziękuję!',
    rating: 5,
  },
  {
    name: 'Krzysztof Zieliński',
    role: 'Architekt',
    content: 'Współpraca na najwyższym poziomie. Dokładne mapy, profesjonalne podejście i terminowość. Polecam każdemu, kto potrzebuje solidnej usługi geodezyjnej.',
    rating: 5,
  },
]
</script>