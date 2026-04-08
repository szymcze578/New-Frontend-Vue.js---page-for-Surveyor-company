<template>
  <section id="projects" class="py-24 bg-muted">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Portfolio"
        title="Zrealizowane projekty"
        description="Poznaj wybrane realizacje z naszego bogatego portfolio"
      />

      <!-- Category Filter -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="flex flex-wrap justify-center gap-3 mb-12"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer',
            selectedCategory === category
              ? 'bg-accent text-accent-foreground shadow-md'
              : 'bg-white text-foreground hover:bg-accent/10 hover:text-accent',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500, delay: index * 100 } }"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div class="relative h-64 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute top-4 right-4">
              <span class="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                {{ project.category }}
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-muted-foreground text-sm">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionHeader from './widgets/SectionHeader.vue'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1693019108329-1889fb170f2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Drogi powiatowe w Szczekocinach',
    category: 'Infrastruktura',
    description: 'Obsługa geodezyjna budowy i przebudowy dróg powiatowych',
  },
  {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Magazyn Dabex – ul. Technologiczna, Zawiercie',
    category: 'Komercyjna',
    description: 'Kompleksowa obsługa geodezyjna budowy obiektu magazynowego',
  },
  {
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Obsługa inwestycji CMC Zawiercie',
    category: 'Przemysłowa',
    description: 'Wieloetapowa obsługa geodezyjna zakładu hutniczego CMC Poland',
  },
  {
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXlpbmclMjBlcXVpcG1lbnQlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc3NTQ3MTkxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Budownictwo jednorodzinne – Dobraków',
    category: 'Budownictwo',
    description: 'Kompleksowa obsługa geodezyjna budowy domu jednorodzinnego dla klientów prywatnych',
  },
  {
    image: 'https://images.unsplash.com/photo-1773299567657-a4bf83503ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwcHJvcGVydHklMjBib3VuZGFyeSUyMHN1cnZleXxlbnwxfHx8fDE3NzU0NzE5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Podziały działek - ul. Leśna',
    category: 'Podziały',
    description: 'Podział nieruchomości na 12 działek budowlanych',
  },
  {
    image: 'https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzU0MjcxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Droga gminna Zawiercie-Kromołów',
    category: 'Infrastruktura',
    description: 'Projektowanie i realizacja drogi gminnej',
  },
  {
    image: 'https://images.unsplash.com/photo-1694674818352-f6061a0561a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Pomiar i inwentaryzacja gazociągu',
    category: 'Infrastruktura',
    description: 'Geodezyjny pomiar przebiegu sieci gazowej wraz z dokumentacją powykonawczą',
  }
]

const categories = ['Wszystkie', 'Komercyjna', 'Podziały', 'Infrastruktura', 'Budownictwo', 'Przemysłowa']

const selectedCategory = ref('Wszystkie')

const filteredProjects = computed(() =>
  selectedCategory.value === 'Wszystkie'
    ? projects
    : projects.filter((p) => p.category === selectedCategory.value)
)
</script>