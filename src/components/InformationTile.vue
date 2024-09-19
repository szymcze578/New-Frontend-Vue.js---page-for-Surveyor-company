<template>
  <div class="h-[150px] text-justify shadow-lg">
    <div>
      {{ information.title }}
    </div>
    <div class="mt-4 w-[180px] h-full truncate">
      {{ information.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type InformationData } from '@/Model/InformationData'

defineProps<{
  information: InformationData
}>()
</script>
