<template>
  <TheHeader class="sticky top-0"> </TheHeader>
  <RouterView></RouterView>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
