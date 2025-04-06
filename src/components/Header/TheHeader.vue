<template>
  <div
    :class="[
    'md:flex justify-between items-center relative transition-all duration-300 xl:px-20 font-sans subpixel-antialiasing font-bold whitespace-nowrap z-10',
    isScrolled ? 'bg-white shadow-md h-[60px]' : 'bg-white shadow-md h-[100px]'
  ]"
  >
    <div class="flex w-full">
      <div class="text-3xl cursor-pointer">
        <RouterLink to="/" class="text-second block">
          <span v-if="!isScrolled" class="block">USŁUGI GEODEZYJNE</span>
          <span class="text-first">GEO</span><span class="text-second">DIMETR</span>
          <span class="text-gray-500 text-lg block font-normal">mgr inż. Mariusz Czech</span>
        </RouterLink>
      </div>
      <div class="hidden lg:flex items-center justify-center">
        <div class="flex-row text-gray-500 font-normal mx-20">
          <InfoIconComponent class="!mt-1" icon="pi pi-phone" :data="['602 319 486']"/>
          <InfoIconComponent class="!mt-1" icon="pi pi-send" :data="['geodimetr@op.pl']"/>
        </div>
      </div>
    </div>
    <div class="md:hidden text-4xl absolute text-black right-6 top-7 cursor-pointer">
      <i :class="[isOpen ? 'bi bi-x' : 'bi bi-list']" @click="openMenu()"></i>
    </div>

    <nav
      class="md:flex md:items-center md:static absolute text-black font-medium cursor-pointer bg-white md:w-auto w-full h-full duration-300 ease-in z-100"
      :class="[isOpen ? 'left-0' : 'left-[-100%]']"
    >
      <NavigationItem v-for="link in links" :key="link.label" :_link="link"> </NavigationItem>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import NavigationItem from './NavigationItem.vue'
import InfoIconComponent from '@/components/ContactComponent/InfoIconComponent.vue'

const links = ref([
  { label: 'Oferta', path: '/services' },
  { label: 'O nas', path: '/about' },
  { label: 'Kontakt', path: '/contact' }
])

const isOpen = ref(false)
const isScrolled = ref(false)

const openMenu = () => {
  isOpen.value = !isOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})



</script>
