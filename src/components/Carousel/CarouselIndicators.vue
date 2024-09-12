<template>
  <div class="carousel-indicator">
    <button
      class="carousel-indicator-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in items"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script setup>
defineProps(['items', 'currentIndex'])
defineEmits(['switch'])
</script>

<style scoped>
.carousel-indicator {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  z-index: 1;
  bottom: 20px;
}

.carousel-indicator-item {
  background: white;
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  margin: 5px;
  opacity: 0.5;
  cursor: pointer;
}

.carousel-indicator-item.active {
  opacity: 1;
}
</style>
