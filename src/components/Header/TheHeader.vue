<template>
  <div class="sticky top-0 z-[999] pb-2 bg-gradient-to-r from-first to-second">
    <div
      class="md:flex justify-between bg-white items-center relative transition-all duration-300 xl:px-20 font-sans subpixel-antialiasing font-bold whitespace-nowrap"
    >
      <div class="flex w-full">
        <div class="text-3xl cursor-pointer">
          <RouterLink to="/" class="text-second block transition-all duration-500">
            <img v-if="!isScrolled" src="/LOGO_LARGE_WB.png">
            <img v-if="isScrolled" src="/LOGO_SMALL2.png">
          </RouterLink>
        </div>
        <div class="hidden lg:flex items-center justify-center">
          <div class="flex-row text-gray-500 font-normal mx-20">
            <InfoIconComponent class="!mt-1" icon="pi pi-phone" :data="['602 319 486']"/>
            <InfoIconComponent class="!mt-1" icon="pi pi-send" :data="['geodimetr@op.pl']"/>
          </div>
        </div>
        <div class="md:hidden flex text-4xl text-black cursor-pointer items-center">
          <i :class="[isOpen ? 'bi bi-x' : 'bi bi-list']" @click="toggleMobileNavigationMenu"/>
        </div>
      </div>

      <nav
        class="hidden md:flex md:items-center md:static absolute text-black font-medium cursor-pointer bg-white justify-end md:w-full h-full"
      >
        <NavigationItem v-for="link in links" :key="link.label" :link="link" @close-menu="toggleMobileNavigationMenu"/>
      </nav>

    </div>
    <MobileNavigation
      :links="links"
      :isOpen="isOpen"
      @close="toggleMobileNavigationMenu"
    />

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

function toggleMobileNavigationMenu(){
  isOpen.value = !isOpen.value
}

function handleScroll() {
  isScrolled.value = window.scrollY > 150
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>
