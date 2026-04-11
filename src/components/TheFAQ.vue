<template>
  <section id="faq" class="py-24 bg-muted">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Pytania i odpowiedzi"
        title="Najczęściej zadawane pytania"
        description="Znajdź odpowiedzi na popularne pytania dotyczące usług geodezyjnych"
        description-class="text-muted-foreground"
      />

      <!-- FAQ List -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 50 } }"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-muted/30 transition-colors cursor-pointer"
            @click="toggle(index)"
          >
            <span class="font-semibold text-primary pr-8">{{ faq.question }}</span>
            <ChevronDown
              class="size-5 text-accent shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180': openIndex === index }"
            />
          </button>
          <div
            class="overflow-hidden transition-all duration-300"
            :class="openIndex === index ? 'max-h-96' : 'max-h-0'"
          >
            <div class="px-8 pb-6 text-muted-foreground leading-relaxed">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="mt-12 text-center"
      >
        <p class="text-muted-foreground mb-4">
          Nie znalazłeś odpowiedzi na swoje pytanie?
        </p>
        <a
          href="tel:+48 602 319 486"
          class="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
        >
          Skontaktuj się z nami: +48 602 319 486
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { useContentStore } from '@/stores/content'
import SectionHeader from './widgets/SectionHeader.vue'

const store = useContentStore()

const faqs = computed(() => store.faqs)

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
