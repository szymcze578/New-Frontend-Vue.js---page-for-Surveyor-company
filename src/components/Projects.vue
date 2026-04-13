<template>
  <section id="projects" class="py-24 bg-muted">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        :badge="store.sectionHeaders?.projects?.badge ?? ''"
        :title="store.sectionHeaders?.projects?.title ?? ''"
        :description="store.sectionHeaders?.projects?.description ?? ''"
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
              :src="project.imageUrl"
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
import { useContentStore } from '@/stores/content'
import SectionHeader from './widgets/SectionHeader.vue'

const store = useContentStore()

const categories = computed(() => [
  'Wszystkie',
  ...new Set(store.projects.map(p => p.category))
])

const selectedCategory = ref('Wszystkie')

const filteredProjects = computed(() =>
  selectedCategory.value === 'Wszystkie'
    ? store.projects
    : store.projects.filter((p) => p.category === selectedCategory.value)
)
</script>