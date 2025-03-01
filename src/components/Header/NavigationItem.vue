<template>
  <div class="h-full items-center text-center flex flex-col justify-center mx-3">
    <RouterLink
      :to="_link?.path"
      class="px-5 py-3 flex justify-center text-center items-center w-full hover:bg-second rounded-lg transition-colors duration-300"
      :class="{ 'bg-second text-white': route.path === _link?.path }"
    >
      <div >
        <span>{{ _link?.label }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

defineProps({
  _link: Object
})

const route = useRoute(); // Get current route

</script>
