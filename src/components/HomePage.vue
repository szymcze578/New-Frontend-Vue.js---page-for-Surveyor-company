<template>
  <div>
    <div>
      <TheCarousel
        :slides="data"
        :interval="3000"
        :controls="true"
        :indicators="true"
      ></TheCarousel>
    </div>
    <div class="lg:px-48 xl:px-96">
      <OfferComponent></OfferComponent>
    </div>

    <div class="mt-8 h-[500px] bg-gray-800 flex">
      <div class="h-full w-[35%]">
        <img :src="img" class="w-full h-full object-cover" v-motion-slide-visible-once-left />
      </div>
      <div class="w-[65%] items-center justify-center">
        <div class="text-white text-3xl font-semibold" v-motion-slide-visible-once-right>
          Geodeta Zawiercie
        </div>
      </div>
    </div>

    <div class="lg:px-48 xl:px-96 grid grid-cols-3 gap-6 md:grid-cols-3 mt-8 items-center">
      <InformationTile v-for="(info, index) in informationData" :key="index" :information="info" />
    </div>

    <div class="lg:px-48 xl:px-96">
      <ContactComponent></ContactComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheCarousel from './Carousel/TheCarousel.vue'
import InformationTile from './InformationTile.vue'
import OfferComponent from './OfferComponent.vue'
import ContactComponent from './ContactComponent.vue'

import img from '@/assets/rysunek-techniczny-umowa-o-dzieło-scaled.jpg'

import dataJson from '@/data/data.json'
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
