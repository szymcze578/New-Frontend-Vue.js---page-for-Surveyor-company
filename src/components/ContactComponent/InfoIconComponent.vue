<template>
  <div class="flex mt-4">
    <div v-if=icon class="w-fit items-center mr-3 flex justify-center">
      <span :class="icon"></span>
    </div>
    <div class="w-full">
      <span v-for="(data, index) in data" :key="index" class="block">{{ data }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon?: string
  data: string[]
}>()
</script>
