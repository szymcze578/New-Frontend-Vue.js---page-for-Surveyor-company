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
          href="tel:+48123456789"
          class="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
        >
          Skontaktuj się z nami: +48 602 319 486
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import SectionHeader from './widgets/SectionHeader.vue'

const faqs = [
  {
    question: 'Ile kosztuje mapa do celów projektowych?',
    answer: 'Koszt mapy zależy od wielkości działki, stopnia jej zabudowania i lokalizacji. Średnio ceny wahają się od 800 do 2000 zł. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę dostosowaną do Twojego przypadku.',
  },
  {
    question: 'Jak długo trwa wykonanie dokumentacji geodezyjnej?',
    answer: 'Standardowy czas realizacji to 7-14 dni roboczych. W pilnych przypadkach oferujemy usługę ekspresową, która pozwala na wykonanie dokumentacji w ciągu 24-48 godzin (za dodatkową opłatą).',
  },
  {
    question: 'Jakie dokumenty są potrzebne do zlecenia usługi?',
    answer: 'W większości przypadków wystarczy numer działki ewidencyjnej oraz dowód własności (wypis z księgi wieczystej lub akt notarialny). Konkretny zakres dokumentów ustalimy podczas pierwszego kontaktu.',
  },
  {
    question: 'Czy mogę otrzymać dokumentację w formie elektronicznej?',
    answer: 'Tak, wszystkie opracowania przekazujemy w formie papierowej oraz elektronicznej (PDF, DWG). Dodatkowo, na życzenie klienta, możemy dostarczyć dane w innych formatach używanych w projektowaniu.',
  },
  {
    question: 'Czy obsługujecie tylko teren Zawiercia?',
    answer: 'Głównie działamy w Zawierciu i okolicach (promień około 30 km), ale chętnie podejmiemy się realizacji projektów w całym województwie śląskim. Skontaktuj się z nami, aby omówić szczegóły.',
  },
  {
    question: 'Co to jest wznowienie znaków granicznych?',
    answer: 'Wznowienie to usługa polegająca na odtworzeniu i utrwaleniu granic działki na gruncie. Wykonuje się ją na podstawie danych z ewidencji gruntów. Dzięki temu dokładnie wiesz, gdzie przebiega granica Twojej nieruchomości.',
  },
  {
    question: 'Jak wygląda proces podziału działki?',
    answer: 'Proces składa się z kilku etapów: sporządzenie projektu podziału, zgłoszenie do odpowiednich instytucji, pomiary terenowe, przygotowanie dokumentacji oraz wpis do ewidencji gruntów. Cały proces zajmuje zwykle 2-3 miesiące.',
  },
]

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
