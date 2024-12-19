<template>
  <div
    class="md:flex justify-between items-center relative bg-white shadow-md h-[100px] lg:px-48 xl:px-20 font-sans subpixel-antialiased font-bold whitespace-nowrap z-10"
  >
    <div class="text-3xl cursor-pointer">
      <RouterLink to="/" class="text-second block">
        <span class="block">USŁUGI GEODEZYJNE</span>
        <span class="text-first">GEO</span><span class="text-second">DIMETR</span>
        <span class="text-gray-500 text-lg block font-normal">mgr inż. Mariusz Czech</span>
      </RouterLink>
    </div>

    <div class="md:hidden text-4xl absolute text-black right-6 top-7 cursor-pointer">
      <i :class="[isOpen ? 'bi bi-x' : 'bi bi-list']" @click="openMenu()"></i>
    </div>

    <nav
      class="md:flex md:items-center md:static absolute text-black font-medium cursor-pointer bg-white md:w-auto w-full h-full duration-300 ease-in"
      :class="[isOpen ? 'left-0' : 'left-[-100%]']"
    >
      <NavigationItem v-for="link in links" :key="link.label" :_link="link"> </NavigationItem>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import NavigationItem from './NavigationItem.vue'

const links = ref([
  { label: 'Oferta', path: '/services' },
  { label: 'O nas', path: '/about' },
  { label: 'Kontakt', path: '/contact' }
])

const isOpen = ref(false)

const openMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
