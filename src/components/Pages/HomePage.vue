<template>
  <div>
    <div class="relative flex justify-center py-2  h-[800px]">
      <Swiper
        :slides-per-page="1"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :loop="true"
        :pagination="{clickable: true}"
        :speed="1000">
        <SwiperSlide v-for="(item, index) in carouselImages" :key="index" >
          <img :src="item" alt="" class="w-full h-full object-cover">/>
        </SwiperSlide>
        <CarouselTextInfo class="carousel-text-info top-0 left-0 w-full z-50"/>
      </Swiper>
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
import InformationTile from '../InformationTile.vue'
import OfferComponent from '../OfferComponent.vue'
import ContactComponent from '../ContactComponent/ContactComponent.vue'
import CarouselTextInfo from '@/deprecated/CarouselTextInfo.vue'
import type { InformationData } from '@/Model/InformationData'
import dataJson from '@/data/data.json'

import {Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay,Pagination, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css'

// Install the autoplay module
SwiperCore.use([Autoplay, Pagination,Navigation]);

import img from '@/assets/rysunek-techniczny-umowa-o-dzieło-scaled.jpg'

const carouselImages = ref<string[]>(['/Carousel/image1.jpg','/Carousel/image2.jpg','/Carousel/image3.jpg'])

const informationData = ref<InformationData[]>(
  dataJson.map((item: any) => ({
    title: item.title,
    description: item.description,
    link: item.link
  }))
)
</script>

<style>

.swiper-pagination-bullet {
  background-color: #fff; /* Change color */
  opacity: 0.7;
  width: 20px;
  height: 10px;
  border-radius: 0;
}

.swiper-pagination-bullet-active {
  background-color: #007bff; /* Change color when active */
}

.carousel-text-info {
  pointer-events: none; /* Allow interaction with underlying elements */
}

</style>
