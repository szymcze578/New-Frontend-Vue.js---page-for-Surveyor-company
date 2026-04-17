<template>
  <section
    id="contact"
    class="py-24 bg-linear-to-br from-primary via-[#0a4f65] to-secondary relative overflow-hidden"
  >
    <BackgroundGrid :grid-width="60" :grid-height="60" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <ContactInfoPanel :contact="contact" />
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useContentStore } from '@/stores/content'
import BackgroundGrid from './widgets/BackgroundGrid.vue'
import ContactInfoPanel from './ContactCTA/ContactInfoPanel.vue'
import ContactForm from './ContactCTA/ContactForm.vue'

const store = useContentStore()
const contact = computed(() => store.contactInfo)
</script>