<template>
  <div
    class="flex flex-col justify-between bg-third text-white py-8 border-t-8 border-first "
  >
    <div class="container flex flex-col md:flex-row justify-around items-start mx-auto w-full">
      <div class="flex-1 max-w-sm">
        <h4 class="text-xl font-semibold mb-2">O nas</h4>
        <p>
          GEODIMETR to firma oferująca kompleksowe usługi geodezyjne, działająca z pasją i profesjonalizmem od wielu lat.
        </p>
      </div>

      <div class="flex-1 max-w-sm">
        <h4 class="text-xl font-semibold mb-2">Dane firmy</h4>
        <DataList
          :data="contactInfo"/>
        <DataList
          :data="paymentInfo"/>
      </div>
    </div>

    <div class="container flex flex-col md:flex-row justify-around mx-auto items-center w-full  py-8">
      <div class="flex-1 mb-4 max-w-sm">
        <h3 class="text-lg font-semibold">GEODIMETR</h3>
        <p>&copy; 2024 Usługi Geodezyjne GEODIMETR mgr inż. Mariusz Czech</p>
      </div>

      <div class="flex-1 text-3xl max-w-sm">
        <a :href="companyLink" target="_blank" rel="noopener noreferrer">
          <span class="pi pi-facebook hover:text-second hover:cursor-pointer"></span>
        </a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import DataList from '@/components/Footer/DataList.vue'

const companyLink = "https://www.facebook.com/profile.php?id=100069162198575"
const authorLink = "https://www.facebook.com/szymon.czech.31"


const contactInfo = ref(["Usługi geodezyjne GEODIMETR","42-400 Zawiercie","ul. Sienkiewicza 36"])
const paymentInfo = ref(["NIP: 6491299513", "KRS: 1231321239", "REGON: 123123123"])

</script>
