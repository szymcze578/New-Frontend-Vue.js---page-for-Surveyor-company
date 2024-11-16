<template>
  <TheHeader class="sticky top-0"> </TheHeader>
  <RouterView></RouterView>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import TheHeader from './components/Header/TheHeader.vue'
import TheFooter from './components/Footer/TheFooter.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
