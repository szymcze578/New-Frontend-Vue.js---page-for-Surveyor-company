<template>
  <div
    class="md:flex justify-between items-center relative bg-white shadow-md h-[100px] lg:px-48 xl:px-96 font-sans subpixel-antialiased font-extrabold whitespace-nowrap z-10"
  >
    <div class="text-3xl cursor-pointer">
      <RouterLink to="/" class="text-blue-400 block">
        <span class="block">USŁUGI GEODEZYJNE</span>
        <span class="text-orange-400">GEO</span><span class="text-blue-400">DIMETR</span>
        <span class="text-gray-500 text-lg block font-semibold">mgr inż. Mariusz Czech</span>
      </RouterLink>
    </div>

    <div class="md:hidden text-4xl absolute text-black right-6 top-7 cursor-pointer">
      <i :class="[isOpen ? 'bi bi-x' : 'bi bi-list']" @click="openMenu()"></i>
    </div>

    <nav
      class="md:flex md:items-center md:static absolute text-orange-400 cursor-pointer bg-white md:w-auto w-full duration-300 ease-in"
      :class="[isOpen ? 'left-0' : 'left-[-100%]']"
    >
      <div class="md:mx-4 md:my-0 my-4 text-center" v-for="link in links" :key="link.label">
        <RouterLink :to="link.path" class="text-base hover:text-blue-400">{{
          link.label
        }}</RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const links = ref([
  { label: 'Usługi', path: '/services' },
  { label: 'Współpraca', path: '/cooperation' },
  { label: 'O nas', path: '/about' },
  { label: 'Kontakt', path: '/kontakt' }
])

const isOpen = ref(false)

const openMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
