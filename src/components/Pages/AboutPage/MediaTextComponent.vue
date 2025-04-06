<template>
  <div
    v-if="direction === 'left'"
    class="m-8 h-[600px] flex lg:px-48 xl:px-90">
    <div class="w-[50%] h-full flex justify-center items-center">
      <div class=" h-full p-4">
        <div class="mb-4 mt-4">
          <span class="font-bold text-2xl">{{ header }}</span>
        </div>
        <div class="mt-12 text-xl text-justify ">
          <div>
            {{content}}
          </div>
        </div>
        <div v-if="enableButton" class="justify-center items-center flex">
          <button
            class="mt-8 px-4 py-2 bg-first w-fit text-white rounded-2xl hover:bg-second transition-colors duration-300"
            @click="() => goToDestination(link ?? '')">
            {{buttonText}}
          </button>
        </div>
      </div>
    </div>
    <div class="w-[50%] h-full flex justify-end items-center p-4">
      <img class="w-[70%] h-full object-cover border-4 border-first" src="/building-factory.jpg">
    </div>
  </div>
  <div
    v-else-if="direction === 'right'"
    class="m-8 h-[600px] flex lg:px-48 xl:px-90">
    <div class="w-[50%] h-full flex justify-start items-center p-4">
      <img class="w-[70%] h-full object-cover border-4 border-second" src="/pointing-sketch.jpg">
    </div>
    <div class="w-[50%] h-full flex justify-center items-center">
      <div class=" h-full p-4">
        <div class="mb-4 mt-4">
          <span class="font-bold text-2xl">{{ header }}</span>
        </div>
        <div class="mt-12 text-xl text-justify ">
          <div>
            {{content}}
          </div>
        </div>
        <div v-if="enableButton" class="justify-center items-center flex">
          <button
            class="mt-8 px-4 py-2 bg-first w-fit text-white rounded-2xl hover:bg-second transition-colors duration-300"
            @click="() => goToDestination(link ?? '')">
            {{buttonText}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

import type { Direction } from '@/Model/Enums/Direction'
import router from '@/router'

defineProps<{
  direction: Direction,
  header: string,
  content: string,
  enableButton: boolean,
  buttonText?: string,
  link?: string,
}>();

function goToDestination (link: string) {
  router.push(link)
}


</script>