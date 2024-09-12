<template>
  <div class="lg:px-96">
    <TheCarousel :slides="data" :interval="3000" :controls="true" :indicators="true"></TheCarousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheCarousel from './Carousel/TheCarousel.vue'

import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'

const data = ref([image1, image2, image3])
</script>
