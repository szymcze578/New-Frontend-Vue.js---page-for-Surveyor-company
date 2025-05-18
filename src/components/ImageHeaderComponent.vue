<template>
  <div class="flex flex-col md:flex-row w-full h-[100px]">
    <div class="hidden md:flex md:w-[35%]">
      <img
        :src="image"
        alt="Section illustration"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="w-full h-full md:w-[65%] flex flex-col justify-center text-white px-8 py-8"
    >
      <div class="text-2xl md:text-3xl font-semibold">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  image: string,
  title: string,
}>()

</script>