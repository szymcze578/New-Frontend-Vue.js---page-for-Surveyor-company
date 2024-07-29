<template>
  <div class="lg:px-96">
    <TheCarousel :slides="data"></TheCarousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheCarousel from './Carousel/TheCarousel.vue'

const data = ref([
  'https://picsum.photos/id/1032/900/400',
  'https://picsum.photos/id/1033/900/400',
  'https://picsum.photos/id/1037/900/400',
  'https://picsum.photos/id/1035/900/400',
  'https://picsum.photos/id/1036/900/400'
])
</script>
