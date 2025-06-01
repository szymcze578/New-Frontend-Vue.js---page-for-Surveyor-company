<template>
  <div>
    <div class="flex  w-full h-[300px]">
    <img src="/Biuro.png" alt="Biuro"  class="jusify-center items-ceter object-cover"/>
    </div>
    <div class="lg:px-48 xl:px-96">
      <ContactComponent />
    </div>
    <div class="lg:px-48 xl:px-96">
      <ContactFormComponent/>
    </div>
  </div>
</template>

<script setup lang='ts'>
import ContactComponent from '@/components/ContactComponent/ContactComponent.vue'
import ContactFormComponent from '@/components/ContactFormComponent.vue'

</script>