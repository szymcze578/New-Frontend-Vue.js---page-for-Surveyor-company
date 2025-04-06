<template>
  <div>
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