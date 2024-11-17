<template>
  <div class="flex justify-center py-2">
    <div
      class="relative w-full h-[800px] overflow-hidden flex-shrink-0"
      @mouseover="mouseOver = true"
      @mouseleave="mouseOver = false"
    >
      <CarouselIndicators
        v-if="indicators"
        :items="slides.length"
        :current-index="currentSlide"
        @switch="switchSlide($event)"
      >
      </CarouselIndicators>
      <CarouselItem
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="index"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSliderTimer"
        @mouseleave="startSlideTimer"
      >
      </CarouselItem>
      <CarouselTextInfo/>
      <CarouselControls v-if="controls && mouseOver" @prev="prev" @next="next"> </CarouselControls>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref, onBeforeUnmount } from 'vue'
import CarouselItem from './CarouselItem.vue'
import CarouselControls from './CarouselControls.vue'
import CarouselIndicators from './CarouselIndicators.vue'
import CarouselTextInfo from '../components/Pages/HomePage/CarouselTextInfo.vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  controls: {
    type: Boolean,
    default: false
  },
  interval: {
    type: Number,
    default: 3000
  },
  indicators: {
    type: Boolean,
    default: false
  }
})

const currentSlide = ref(2)
const slideInterval = ref()
const direction = ref('right')
const mouseOver = ref(false)

onMounted(() => {
  startSlideTimer()
})

onBeforeUnmount(() => {
  stopSliderTimer()
})

function setCurrentSlide(index: number) {
  currentSlide.value = index
}

function prev(step = -1) {
  const index = currentSlide.value > 0 ? currentSlide.value + step : props.slides.length - 1
  setCurrentSlide(index)
  direction.value = 'left'
  startSlideTimer()
}

function _next(step = 1) {
  const index = currentSlide.value < props.slides.length - 1 ? currentSlide.value + step : 0
  setCurrentSlide(index)
  direction.value = 'right'
}

function next(step = 1) {
  _next(step)
  startSlideTimer()
}

function startSlideTimer() {
  stopSliderTimer()
  slideInterval.value = setInterval(() => {
    _next()
  }, props.interval)
}

function stopSliderTimer() {
  clearInterval(slideInterval.value)
}

function switchSlide(index: number) {
  const step = index - currentSlide.value
  if (step > 0) {
    next(step)
  } else {
    prev(step)
  }
}
</script>
