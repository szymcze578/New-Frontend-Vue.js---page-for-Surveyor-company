<template>
  <div class="h-full w-[35%]">
    <img :src="image" class="w-full h-full object-cover"
         v-motion="{
              initial: { opacity: 0, x: -100 },
               visible: { opacity: 1, x: 0, transition: { duration: 1000, easing: 'ease-in-out' } }
              }"  />
  </div>
  <div class="w-[65%] flex-row justify-center items-center text-white text-3xl font-semibold text-justify"
       v-motion="{
            initial: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 1000, easing: 'ease-in-out'}}
            }"    >
    <div :class="['m-8',content ? 'text-center': 'text-start']" >
      {{title}}
    </div>
    <div v-if="content" class="px-32 mt-8  text-xl font-medium">
      {{content}}
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