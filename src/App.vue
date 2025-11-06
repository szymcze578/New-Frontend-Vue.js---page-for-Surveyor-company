<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader></TheHeader>
    <RouterView class="flex-grow mb-8" v-slot="{ Component }">
      <Transition name="page-slide" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <TheFooter class="mt-auto"/>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/Header/TheHeader.vue'
import TheFooter from './components/Footer/TheFooter.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
}

.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
