<template>
  <div class="w-[300px] h-[200px] m-4 border-4 shadow-lg rounded-lg border-second font-bold">
    <div class="flex flex-col h-full items-center justify-center">
      <div class="flex text-6xl text-gray-900 items-center justify-center">
        +{{experience}}
      </div>
      <div class="flex items-center text-lg justify-center">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';

const props = defineProps<{
  title: string,
  target: number,
  duration: number,
}>();

const experience = ref(0);

function animateCounter(){
  let startTimestamp: number;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / props.duration, 1);
    experience.value = Math.floor(progress * props.target);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      experience.value = props.target;
    }
  };
  requestAnimationFrame(step);
}

onMounted(() => {
  animateCounter();
});

</script>