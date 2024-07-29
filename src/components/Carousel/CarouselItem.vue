<template>
  <div class="absolute">
    <img :src="props.slide" />
  </div>
</template>

<script setup>
const props = defineProps(['slide'])
</script>
