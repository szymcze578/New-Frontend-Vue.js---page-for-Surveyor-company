<template>
  <div class="h-full items-center text-center flex flex-col justify-center mx-3">
    <RouterLink
      :to="link?.path"
      class="px-5 py-3 flex justify-center text-center items-center md:w-full hover:bg-second rounded-lg transition-colors duration-300"
      :class="{ 'bg-second text-white': route.path === link?.path }"
      @click="$emit('closeMenu')"
    >
      <div >
        <span>{{ link?.label }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

defineProps<{
  link: {label:string, path:string }
}>();

defineEmits<{
  (e: 'closeMenu'):void
}>()

const route = useRoute(); // Get current route

</script>
