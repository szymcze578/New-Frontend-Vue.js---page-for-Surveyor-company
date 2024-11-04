<template>
  <div class="mt-8 mb-8 h-[500px] flex shadow-lg border-t-8 border-blue-400">
    <div class="w-[50%] h-full flex justify-center items-center">
      <div class="w-[75%] h-[75%] ">
        <img src="/public/mapa_gminy_zawiercie.jpg">
      </div>
    </div>
    <div class="w-[50%] h-full flex justify-center items-center">
      <div class="w-[400px] h-full p-4">
        <div class="mb-4 mt-4">
          <span class="font-bold text-2xl">Nasza oferta!</span>
        </div>
        <div class="mt-12 text-justify">
          <div>Firma Geodimetr działa na rynku od wielu lat, specjalizując się w usługach geodezyjnych w województwie śląskim, głównie na terenie powiatu zawierciańskiego. 
            Oferujemy kompleksową obsługę zarówno dla klientów indywidualnych, jak i przedsiębiorstw, zapewniając precyzyjne pomiary, 
            doradztwo i realizację projektów na najwyższym poziomie. Dzięki doświadczeniu i zaawansowanym technologiom zdobyliśmy zaufanie szerokiego grona klientów w regionie.</div>
        </div>
      </div>
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
