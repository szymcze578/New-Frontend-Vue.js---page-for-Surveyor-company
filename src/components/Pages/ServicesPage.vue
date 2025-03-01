<template>
  <div class="flex flex-col items-center min-h-screen">
    <div class="mt-8 h-[100px] w-full bg-forth flex z-1000 overflow-hidden">
      <ImageInfoPanel :title="'Dla firm i przedsiębiorstw:'" :image="construction"></ImageInfoPanel>
    </div>
    <div class="p-4 lg:mt-8 w-full lg:w-fit h-fit grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-9 items-start">
      <ServiceTile
        v-for="(info, index) in companiesOffer"
        :key="index"
        :information="info"
      />
    </div>
    <div class="mt-8 h-[100px] w-full bg-forth flex z-1000 overflow-hidden">
      <ImageInfoPanel :title="'Dla klientów indywidualnych:'" :image="home"></ImageInfoPanel>
    </div>
      <div class="p-4 lg:mt-8 w-full lg:w-fit h-fit grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-9">
        <ServiceTile
          v-for="(info, index) in clientsOffer"
          :key="index"
          :information="info"
        />
      </div>
  </div>
</template>

<script setup lang="ts">

import ServiceTile from '@/components/Pages/ServiceTile.vue'
import { ref } from 'vue'
import type { InformationData } from '@/Model/InformationData'
import clientsOfferData from "@/data/clients.json"
import companiesOfferData from "@/data/companies.json"
import { mapInformationData } from '@/Model/InformationData'
import ImageInfoPanel from '@/components/Pages/HomePage/ImageInfoPanel.vue'

const clientsOffer = ref<InformationData[]>(mapInformationData(clientsOfferData))
const companiesOffer = ref<InformationData[]>(companiesOfferData)
import construction from "@/assets/construction.jpg"
import home from "@/assets/home.jpg"

</script>

