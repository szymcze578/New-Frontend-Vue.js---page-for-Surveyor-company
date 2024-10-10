<template>
  <div class="lg:px-48 xl:px-96">
    <TheCarousel :slides="data" :interval="3000" :controls="true" :indicators="true"></TheCarousel>
    <div class="grid grid-cols-3 gap-6 md:grid-cols-3 mt-8 items-center">
      <InformationTile v-for="(info, index) in informationData" :key="index" :information="info" />
    </div>
    <ContactComponent></ContactComponent>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheCarousel from './Carousel/TheCarousel.vue'
import InformationTile from './InformationTile.vue'
import dataJson from '@/data/data.json'
import ContactComponent from './ContactComponent.vue'
import type { InformationData } from '@/Model/InformationData'

import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'

const data = ref([image1, image2, image3])

const informationData = ref<InformationData[]>(
  dataJson.map((item: any) => ({
    title: item.title,
    description: item.description,
    link: item.link
  }))
)
</script>
