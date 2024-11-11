<template>
  <div>
    <div>
      <TheCarousel
        :slides="data"
        :interval="5000"
        :controls="true"
        :indicators="true"
      ></TheCarousel>
    </div>
    <div class="lg:px-48 xl:px-96">
      <OfferComponent></OfferComponent>
    </div>

    <div class="mt-8 h-[500px] bg-gray-800 flex z-1000 overflow-hidden">
      <div class="h-full w-[35%]">
        <img :src="img" class="w-full h-full object-cover"   
              v-motion="{ 
              initial: { opacity: 0, x: -100 }, 
               visible: { opacity: 1, x: 0, transition: { duration: 1000, easing: 'ease-in-out' } } 
              }"  />
      </div>
      <div class="w-[65%] flex-row justify-center items-center  text-white text-3xl font-semibold text-justify "
            v-motion="{ 
            initial: { opacity: 0, x: 100 }, 
            visible: { opacity: 1, x: 0, transition: { duration: 1000, easing: 'ease-in-out'}}
            }"    >
        <div class="m-8 text-center">
          Nasza oferta
        </div>
        <div class="px-32 mt-8  text-xl font-medium">
          Firma Geodimetr działa na rynku od wielu lat, specjalizując się w usługach geodezyjnych w województwie śląskim, głównie na terenie powiatu zawierciańskiego. 
            Oferujemy kompleksową obsługę zarówno dla klientów indywidualnych, jak i przedsiębiorstw, zapewniając precyzyjne pomiary, 
            doradztwo i realizację projektów na najwyższym poziomie. Dzięki doświadczeniu i zaawansowanym technologiom zdobyliśmy zaufanie szerokiego grona klientów w regionie.
        </div>
      </div>
    </div>

    <div class="lg:px-48 xl:px-96 grid grid-cols-3 gap-6 md:grid-cols-3 mt-8 items-center" v-motion-slide-visible-top>
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
import Swiper from 'swiper'

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
