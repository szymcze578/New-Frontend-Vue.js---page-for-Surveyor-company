<template>
  <div class="text-white">
    <div class="inline-block px-4 py-2 bg-white/10 rounded-full mb-6">
      <span class="text-sm font-semibold text-accent">Kontakt</span>
    </div>
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
      Rozpocznij współpracę
      <span class="block text-accent mt-2">już dziś</span>
    </h2>
    <p class="text-lg text-gray-200 mb-8 leading-relaxed">
      Skontaktuj się z nami i otrzymaj bezpłatną wycenę. Doradzimy najlepsze rozwiązania dla Twojego projektu.
    </p>

    <div class="space-y-4 mb-8">
      <ContactDetailItem
        :href="'tel:' + contact?.phone?.replace(/\s/g, '')"
        label="Telefon"
        :value="contact?.phone ?? ''"
      >
        <Phone class="w-5 h-5" />
      </ContactDetailItem>

      <ContactDetailItem
        :href="'mailto:' + contact?.email"
        label="Email"
        :value="contact?.email ?? ''"
      >
        <Mail class="w-5 h-5" />
      </ContactDetailItem>

      <ContactDetailItem
        label="Adres"
        :value="[contact?.addressLine1 ?? '', contact?.addressLine2 ?? ''].filter(Boolean)"
      >
        <MapPin class="w-5 h-5" />
      </ContactDetailItem>
    </div>

    <div class="flex flex-col sm:flex-row gap-4">
      <a
        :href="'tel:' + contact?.phone?.replace(/\s/g, '')"
        class="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
      >
        Zadzwoń teraz
        <ArrowRight class="ml-2 w-5 h-5" />
      </a>
      <a
        :href="'mailto:' + contact?.email"
        class="inline-flex items-center justify-center px-6 py-2.5 rounded-md text-base font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors"
      >
        Wyślij email
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-vue-next'
import type { ContactInfo } from '@/types/content'
import ContactDetailItem from './ContactDetailItem.vue'

defineProps<{
  contact: ContactInfo | null
}>()
</script>
