<template>
  <div class="mt-8 mb-8 h-[500px] flex shadow-lg border-t-8 border-blue-400">
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
      <GMapMap
        class=""
        :center="{ lat: 50.484705003245814, lng: 19.436048856449627 }"
        :zoom="14"
        style="width: 100%; height: 492px"
      >
        <GMapMarker
          :position="{ lat: 50.484705003245814, lng: 19.436048856449627 }"
          :clickable="true"
        />
      </GMapMap>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoIconComponent from './InfoIconComponent.vue'
import type { ContactData } from '@/Model/ContactData'
import contactInfoJson from '@/data/contactInfo.json'

const contactInfoData: ContactData = contactInfoJson

for (const key in contactInfoData) {
  if (Object.prototype.hasOwnProperty.call(contactInfoData, key)) {
    const contactInfo = contactInfoData[key]
    console.log(`Key: ${key}`)
    console.log(`Icon: ${contactInfo.icon}`)
    contactInfo.data.forEach((value) => {
      console.log(`Data: ${value}`)
    })
  }
}
</script>
