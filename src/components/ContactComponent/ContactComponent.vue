<template>
  <div class="mt-8 mb-8 h-[500px] flex">
    <div class="w-[50%] flex justify-center items-center">
      <div class="w-[300px] h-full p-4">
        <div class="mb-4 mt-4">
          <span class="font-bold text-2xl">Tu nas znajdziesz!</span>
        </div>
        <div class="mt-12">
          <InfoIconComponent
            v-for="(info, key) in contactInfoData"
            :key="key"
            :icon="contactInfoData[key].icon"
            :data="contactInfoData[key].data"
          ></InfoIconComponent>
        </div>
      </div>
    </div>
    <div class="w-[50%] h-full">
      <MapView/>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoIconComponent from '@/components/ContactComponent/InfoIconComponent.vue'
import type { ContactData } from '@/Model/ContactData'
import contactInfoJson from '@/data/contactInfo.json'
import MapView from '@/components/ContactComponent/MapView.vue'

const contactInfoData: ContactData = contactInfoJson
</script>
