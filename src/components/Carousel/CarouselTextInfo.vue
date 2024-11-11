<template>
  <div class="absolute inset-0 flex flex-col items-center text-white text-center mt-40">

    <div class="text-[50px] font-bold inline-block">
      <VueTyped
        :strings="['Potrzebujesz geodety?']"
        :typeSpeed="40"
        @complete="lines_done[0]=true"
      />
    </div>
    <div class="text-[60px] font-bold flex">
      <VueTyped v-if="lines_done[0]" class="text-orange-400"
        :strings="['GEO']"
        :typeSpeed="50"
        @complete="lines_done[1]=true"
      />
      <VueTyped v-if="lines_done[1]" class="text-blue-400"
        :strings="['DIMETR']"
        :typeSpeed="50"
        @complete="lines_done[2]=true"
      />
    </div>
    <div class="text-[30px] font-bold inline-block">
      <VueTyped v-if="lines_done[2]"
        :strings="['Zadzwoń do nas!']"
        :typeSpeed="40"
        @complete="lines_done[3]=true"
      />
    </div>
    <transition name="fade" mode="out-in">
    <div v-if="lines_done[3]"
      class="text-white bg-slate-400 rounded-lg text-bold text-[25px] inline-block hover:bg-orange-400 mt-5 transition-all duration-500 ease-in-out"
    >
        <InfoIconComponent
        class="!mt-0 inline-block justify-center items-center px-4"
        :icon="contactInfoData['phone'].icon"
        :data="contactInfoData['phone'].data"
      >
      </InfoIconComponent>
    </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import InfoIconComponent from "../InfoIconComponent.vue";
import contactInfoJson from "@/data/contactInfo.json";
import type { ContactData } from "@/Model/ContactData";
import {ref} from 'vue'


const lines_done = ref([false, false, false,false]);

const contactInfoData: ContactData = contactInfoJson;


for (const key in contactInfoData) {
  if (Object.prototype.hasOwnProperty.call(contactInfoData, key)) {
    const contactInfo = contactInfoData[key];
    console.log(`Key: ${key}`);
    console.log(`Icon: ${contactInfo.icon}`);
    contactInfo.data.forEach((value) => {
      console.log(`Data: ${value}`);
    });
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>