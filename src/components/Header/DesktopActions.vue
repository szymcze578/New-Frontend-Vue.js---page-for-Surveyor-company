<template>
  <div class="hidden lg:flex items-center space-x-4">
    <a
      :href="'tel:' + phone?.replace(/\s/g, '')"
      class="flex items-center text-sm transition-colors"
      :class="phoneClass"
    >
      <Phone class="w-4 h-4 mr-2" />
      {{ phone }}
    </a>
    <button
      class="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
      :class="ctaBtnClass"
      @click="emit('navigate', 'contact')"
    >
      Kontakt
    </button>
  </div>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'

defineProps<{
  phone: string | undefined
  phoneClass: string
  ctaBtnClass: string
}>()

const emit = defineEmits<{
  navigate: [sectionId: string]
}>()
</script>
