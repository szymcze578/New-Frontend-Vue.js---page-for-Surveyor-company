<template>
  <div class="lg:px-48 xl:px-96">
    <TheCarousel :slides="data" :interval="3000" :controls="true" :indicators="true"></TheCarousel>
    <div class="grid grid-cols-3 gap-6 md:grid-cols-3 mt-8 items-center">
      <InformationTile v-for="(info, index) in informationData" :key="index" :information="info" />
    </div>
    <div class="mt-8 mb-40 h-[500px] flex shadow-lg border-t-8 border-blue-400">
      <div class="w-[50%] flex justify-center items-center">
      <div class="w-[300px] h-full p-4 ">
        <div class="mb-4">
          <span class="font-bold text-2xl">Tu nas znajdziesz!</span>
        </div>
        <div>
          <span class="block text-base mb-2">ul. Henryka Sienkiewicza 36</span>
          <span class="block text-base">42-400 Zawiercie</span>
          <span class="pi pi-phone"> 602 319 486</span>
          <InfoIconComponent icon="pi pi-phone" :data="Information"></InfoIconComponent>
        </div>
      </div>
      </div>
      <div class="w-[50%] h-full ">
      <GMapMap class=""
      :center="{ lat: 50.484705003245814, lng: 19.436048856449627 }"
      :zoom="14"
      style="width: 100%; height: 492px">
      <GMapMarker
        :position="{ lat: 50.484705003245814, lng: 19.436048856449627 }"
        :clickable="true"
      />
    </GMapMap>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheCarousel from './Carousel/TheCarousel.vue'
import InfoIconComponent from './InfoIconComponent.vue'
import InformationTile from './InformationTile.vue'
import dataJson from '@/data/data.json'
import type { InformationData } from '@/Model/InformationData'

import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'

//import contactInfoo from '@/data/contactInfo.json'


//50.484705003245814, 19.436048856449627

const data = ref([image1, image2, image3])



const informationData = ref<InformationData[]>(
  dataJson.map((item: any) => ({
    title: item.title,
    description: item.description,
    link: item.link
  }))
)

const Information = ["ul. Henryka Sienkiewicza 36","42-400 Zawiercie"]

console.log('Information data:', informationData.value)
console.log('Information data json:', dataJson)
</script>
