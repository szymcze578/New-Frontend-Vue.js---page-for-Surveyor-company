<template>
  <div v-if="isOpen" class="lg:hidden bg-white border-t border-border">
    <div class="px-4 py-6 space-y-3">
      <button
        v-for="link in navLinks"
        :key="link.sectionId"
        class="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:text-accent hover:bg-muted rounded-lg transition-colors"
        @click="emit('navigate', link.sectionId)"
      >
        {{ link.label }}
      </button>
      <div class="pt-4 space-y-3">
        <a
          :href="'tel:' + contact?.phone?.replace(/\s/g, '')"
          class="flex items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          <Phone class="w-4 h-4 mr-2" />
          {{ contact?.phone }}
        </a>
        <button
          class="w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors bg-accent text-accent-foreground hover:bg-accent/90"
          @click="emit('navigate', 'contact')"
        >
          Kontakt
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
import type { NavLink, ContactInfo } from '@/types/content'

defineProps<{
  isOpen: boolean
  navLinks: NavLink[]
  contact: ContactInfo | null
}>()

const emit = defineEmits<{
  navigate: [sectionId: string]
}>()
</script>
