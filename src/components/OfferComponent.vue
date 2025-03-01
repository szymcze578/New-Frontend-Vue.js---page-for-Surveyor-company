<template>
  <div class="mt-8 mb-8 h-[500px] flex">
    <div class="w-[50%] h-full flex justify-center items-center">
      <div class="w-[75%] h-[75%]">
        <img class="w-full h-full object-contain  " src="/mapa_gminy_zawiercie.jpg">
      </div>
    </div>
    <div class="w-[50%] h-full flex justify-center items-center">
      <div class=" h-full p-4">
        <div class="mb-4 mt-4">
          <span class="font-bold text-2xl">Tu działamy!</span>
        </div>
        <div class="mt-12 text-xl text-justify ">
          <div>Firma Geodimetr od ponad 15 lat świadczy profesjonalne usługi geodezyjne na terenie województwa śląskiego, koncentrując się przede wszystkim na powiecie zawierciańskim. Obsługujemy zarówno klientów indywidualnych, jak i przedsiębiorstwa, oferując precyzyjne pomiary, fachowe doradztwo oraz realizację projektów na najwyższym poziomie. Nasze doświadczenie oraz nowoczesne technologie pozwoliły nam zyskać zaufanie wielu klientów w regionie..</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ContactData } from '@/Model/ContactData'
import contactInfoJson from '@/data/contactInfo.json'

const contactInfoData: ContactData = contactInfoJson

function print(){
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
}
</script>
