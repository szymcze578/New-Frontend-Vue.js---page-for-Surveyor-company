<template>
  <div class="flex flex-col w-[300px] h-[250px] text-justify rounded-lg shadow-lg items-center border-4 border-second hover:border-8 hover:border-first transition-all"
  @mouseover="showDescription=true" @mouseleave="showDescription=false" :class="{ '!h-full': showDescription }">
    <div class="m-3 w-[75px]">
      <img :src="information.link" :alt="information.title" class="object-cover" />
    </div>
    <div class="p-4 text-center flex flex-col justify-center items-center h-full w-full">
      <div class="font-bold text-xl">
        {{ information.title }}
      </div>
      <transition name="expand" mode="out-in">
        <div v-if="showDescription" class="text-m m-2 overflow-hidden text-justify">
          {{ information.description }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type InformationData } from '@/Model/InformationData'
import {ref} from 'vue'

defineProps<{
  information: InformationData
}>()

const showDescription = ref(false);

function toggleDescription() {
  showDescription.value = !showDescription.value;
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}


.expand-enter-active, .expand-leave-active {
  transition: all 0.5s ease;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to, .expand-leave-from {
  max-height: 1000px; /* Arbitrary high value to allow for expansion */
  opacity: 1;
}
</style>