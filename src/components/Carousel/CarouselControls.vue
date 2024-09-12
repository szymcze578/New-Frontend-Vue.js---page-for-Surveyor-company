<template>
  <button class="carousel-control left" @click="$emit('prev')">Prev</button>
  <button class="carousel-control right" @click="$emit('next')">Next</button>
</template>

<script setup>
defineEmits(['prev', 'next'])
</script>

<style>
.carousel-control {
  background-color: rgb(32, 32, 32, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 50px;
  top: calc(50% - 25px);
  color: rgb(255, 255, 255, 0.8);
  cursor: pointer;
}

.carousel-control:hover {
  background-color: rgb(32, 32, 32, 0.8);
  color: #999999;
}

.left {
  left: 0;
}

.right {
  right: 0;
}
</style>
