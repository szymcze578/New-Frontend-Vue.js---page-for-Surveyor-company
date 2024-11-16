<template>
  <button class="carousel-control left" @click="$emit('prev')">
    <i class="pi pi-angle-double-left"></i>
  </button>
  <button class="carousel-control right" @click="$emit('next')">
    <i class="pi pi-angle-double-right"></i>
  </button>
</template>

<script setup lang="ts">
defineEmits(['prev', 'next'])
</script>

<style>
.carousel-control {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(32, 32, 32, 0.5);
  border: none;
  position: absolute;
  height: 41px;
  width: 60px;
  top: calc(50% - 25px);
  color: rgb(255, 255, 255, 0.8);
  font-size: 25px;
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
