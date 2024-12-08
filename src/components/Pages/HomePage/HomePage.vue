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
    <InformationComponent class="lg:px-48 xl:px-96"/>

    <div class="flex flex-col p-4 my-8 justify-center items-center">
      <div class="font-bold text-3xl ">
        Cechują nas
      </div>
    </div>
    <div class="lg:px-48 xl:px-90 grid grid-cols-3 gap-6 md:grid-cols-3 mt-8">
      <InformationTile v-for="(info, index) in informationData" :key="index" :information="info"/>
    </div>

    <div class="mt-8 h-[500px] bg-forth flex z-1000 overflow-hidden">
      <ImageInfoPanel
      :image="image"
      :title="'Nasza oferta'"
      :content="'Firma Geodimetr działa na rynku od wielu lat, specjalizując się w usługach geodezyjnych w województwie śląskim, głównie na terenie powiatu zawierciańskiego. Oferujemy kompleksową obsługę zarówno dla klientów indywidualnych, jak i przedsiębiorstw, zapewniając precyzyjne pomiary, doradztwo i realizację projektów na najwyższym poziomie. Dzięki doświadczeniu i zaawansowanym technologiom zdobyliśmy zaufanie szerokiego grona klientów w regionie.'"
      />
    </div>

    <TechnologiesComponent class="lg:px-48 xl:px-96"/>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InformationTile from '../../InformationTile.vue'
import CarouselTextInfo from '@/components/Pages/HomePage/CarouselTextInfo.vue'
import type { InformationData } from '@/Model/InformationData'
import TechnologiesComponent from '@/components/TechnologiesComponent.vue'
import ImageInfoPanel from '@/components/Pages/HomePage/ImageInfoPanel.vue'
import image from '@/assets/rysunek-techniczny-umowa-o-dzieło-scaled.jpg'
import dataJson from '@/data/data.json'

import {Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay,Pagination, Navigation } from 'swiper/modules'
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css'
import InformationComponent from '@/components/InformationComponent.vue'

// Install the autoplay module
SwiperCore.use([Autoplay, Pagination,Navigation]);

const carouselImages = ref<string[]>(['/Carousel/image1.jpg','/Carousel/image2.jpg','/Carousel/image3.jpg'])

const informationData = ref<InformationData[]>(
  dataJson.map((item: any) => ({
    title: item.title,
    description: item.description,
    link: item.link
  }))
)

function getDelay(index: number) {
  return index * 0.2;
}

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
