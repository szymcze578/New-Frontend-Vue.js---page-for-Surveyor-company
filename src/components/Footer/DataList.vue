<template>
  <div class="flex">
    <div class="w-full mb-2">
      <span v-for="(data, index) in data" :key="index" class="block">{{ data }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>