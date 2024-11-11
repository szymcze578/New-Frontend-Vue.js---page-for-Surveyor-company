<template>
  <div class="min-h-[250px] text-justify shadow-lg  items-center border-t-8 border-orange-400">
    <div class="flex m-5">
    <div class="h-[100px] w-[100px] items-center">
      <img :src="information.link" :alt="information.title" class="w-[70px] h-[70px] object-cover"/>
    </div>
    <div class="ml-4 flex flex-col justify-between h-full w-full">
      <div class="font-bold text-xl">
        {{ information.title }}
      </div>
      <div class="mt-2 text-m w-full h-full overflow-hidden text-ellipsis">
        {{ information.description }}
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type InformationData } from '@/Model/InformationData'

const props = defineProps<{
  information: InformationData
}>()

console.log("props", props)
</script>
