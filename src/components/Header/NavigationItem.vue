<template>
  <div class="h-full items-center text-center flex flex-col justify-center">
    <RouterLink
      :to="_link?.path"
      class="px-3 flex justify-center text-center items-center h-[60px] w-full hover:bg-gray-500 hover:text-white rounded-lg"
    >
      <div class="text-base">
        <span>{{ _link?.label }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  _link: Object
})

</script>
