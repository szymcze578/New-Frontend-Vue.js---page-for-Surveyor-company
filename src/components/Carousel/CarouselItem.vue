<template>
  <transition :name="transitionEffect">
    <div class="absolute w-full h-full" v-show="currentSlide === index">
      <img :src="props.slide" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex items-center justify-center text-white text-2xl">
        <p class="font-medium bg-white bg-opacity-50 text-white rounded-lg px-4 py-2">
          Potrzebujesz geodety?
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['slide', 'currentSlide', 'index', 'direction'])

const transitionEffect = computed(() => {
  return props.direction === 'right' ? 'slide-out' : 'slide-in'
})
</script>

<style>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}

.slide-out-enter-from {
  transform: translateX(100%);
}

.slide-out-leave-to {
  transform: translateX(-100%);
}

.image-container {
  width: 100%; /* Set the desired width */
  height: 100%; /* Set the desired height */
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image fills the container while being cropped */
}
</style>
