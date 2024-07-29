<template>
  <div class="flex justify-center py-2">
    <div class="relative w-[900px] h-[400px] overflow-hidden">
      <CarouselItem v-for="(slide, index) in slides" :slide="slide" :key="index"> </CarouselItem>
    </div>
  </div>
</template>

<script setup>
import CarouselItem from './CarouselItem.vue'

defineProps({
  slides: { type: Array, required: true }
})
</script>
