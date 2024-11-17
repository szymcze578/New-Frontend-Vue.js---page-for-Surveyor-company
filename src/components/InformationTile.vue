<template>
  <div class="flex flex-col min-h-[250px] h-fit text-justify rounded-lg shadow-lg items-center border-4 border-second hover:border-8 hover:border-first transition-all"
      @mouseleave="showDescription=false">
      <div class="m-5 w-[75px]">
        <img :src="information.link" :alt="information.title" class="object-cover" />
      </div>
      <div class="m-4 flex flex-col justify-center  items-center h-full w-full">
        <div class="font-bold text-xl">
          {{ information.title }}
        </div>
        <transition name="expand" mode="out-in">
          <div v-if="showDescription" class="text-m m-4 overflow-hidden">
            {{ information.description }}
          </div>
        </transition>
        <button
          class="mt-2 px-4 py-2 bg-first w-fit text-white rounded-2xl hover:bg-second transition-colors duration-300"
          @click="toggleDescription"
        >
          {{ showDescription ? 'Mniej' : 'Więcej' }}
        </button>
      </div>
  </div>
</template>

<script setup lang="ts">
import { type InformationData } from '@/Model/InformationData'
import {ref} from 'vue'

const props = defineProps<{
  information: InformationData
}>()

// Create a reactive state to toggle description display
const showDescription = ref(false);

function toggleDescription() {
  showDescription.value = !showDescription.value;
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
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