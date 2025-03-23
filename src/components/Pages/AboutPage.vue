<template>
  <div>
    <OfferComponent class="lg:px-48 xl:px-90">
    </OfferComponent>

    <div class="m-8 h-[600px] flex lg:px-48 xl:px-90">
      <div class="w-[50%] h-full flex justify-center items-center">
        <div class=" h-full p-4">
          <div class="mb-4 mt-4">
            <span class="font-bold text-2xl">{{ experienceTitle }}</span>
          </div>
          <div class="mt-12 text-xl text-justify ">
            <div>
              {{experienceText}}
            </div>
          </div>
        </div>
      </div>
      <div class="w-[50%] h-full flex justify-end items-center p-4">
        <img class="w-[70%] h-full object-cover border-4 border-first" src="/building-factory.jpg">
      </div>
    </div>

    <div class="m-8 flex items-center justify-center ">
      <AmountCounter title="Lat doświadczenia" :target='30' :duration='1000'/>
      <AmountCounter title="Zrealizowanych zleceń" :target='1000' :duration='1400'/>
      <AmountCounter title="Zadowolonych klientów" :target='1000' :duration='1800'/>
    </div>

    <div class="m-8 h-[600px] flex lg:px-48 xl:px-90">
      <div class="w-[50%] h-full flex justify-start items-center p-4">
        <img class="w-[70%] h-full object-cover border-4 border-second" src="/pointing-sketch.jpg">
      </div>
      <div class="w-[50%] h-full flex justify-center items-center">
        <div class=" h-full p-4">
          <div class="mb-4 mt-4">
            <span class="font-bold text-2xl">{{ offerTitle }}</span>
          </div>
          <div class="mt-12 text-xl text-justify ">
            <div>
              {{offerText}}
            </div>
          </div>
          <div class="justify-center items-center flex">
            <button
              class="mt-8 px-4 py-2 bg-first w-fit text-white rounded-2xl hover:bg-second transition-colors duration-300"
              @click="() => goToDestination('/services')">
              {{'troll button'}}
            </button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">

import OfferComponent from '@/components/OfferComponent.vue'
import AmountCounter from '@/components/Pages/AmountCounter.vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const offerTitle = "Szeroka oferta"
const offerText = "Świadczymy kompleksowe usługi geodezyjne dla klientów indywidualnych, firm oraz instytucji. Oferujemy m.in. pomiary geodezyjne, mapy do celów projektowych, podziały i wznowienia granic, inwentaryzacje powykonawcze oraz obsługę inwestycji budowlanych. Dzięki nowoczesnym technologiom i doświadczeniu naszego zespołu zapewniamy precyzję, terminowość oraz pełne wsparcie na każdym etapie realizacji projektu."

const experienceTitle = "Długoletnie doświadczenie"
const experienceText = "Od wielu lat świadczymy profesjonalne usługi geodezyjne, łącząc tradycję z nowoczesnymi technologiami. Nasz zespół składa się z doświadczonych geodetów, którzy realizują projekty dla klientów indywidualnych, firm i instytucji. Dzięki bogatemu doświadczeniu, precyzji i rzetelności zapewniamy najwyższą jakość usług, wspierając inwestycje budowlane, infrastrukturalne i planistyczne na każdym etapie realizacji."

function goToDestination (link: string) {
  router.push(link)
}


</script>