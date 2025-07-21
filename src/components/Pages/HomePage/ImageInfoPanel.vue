<template>
  <div class="flex flex-col md:flex-row h-full w-full overflow-hidden">
    <div class="hidden md:flex md:w-[35%] md:h-auto">
      <img
        :src="image"
        alt="Section illustration"
        class="w-full h-full object-cover"
        v-motion="{
          initial: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1000, easing: 'ease-in-out' } }
        }"
      />
    </div>
    <div
      class="w-full md:w-[65%] flex flex-col justify-center items-center text-white px-8 py-8 text-justify"
      v-motion="{
        initial: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1000, easing: 'ease-in-out' } }
      }"
    >
      <div :class="[content ? 'text-center' : 'text-start', 'text-3xl font-semibold']">
        {{ title }}
      </div>
      <div v-if="content" class="mt-6 text-xl font-medium">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  image: string,
  title: string,
  content?: string,
 }>()

</script>