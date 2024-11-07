import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import VueGoogleMaps from '@fawmi/vue-google-maps'
import TheCarousel from './components/Carousel/TheCarousel.vue'
import CarouselIndicators from './components/Carousel/CarouselIndicators.vue'
import CarouselItem from './components/Carousel/CarouselItem.vue'
import CarouselControls from './components/Carousel/CarouselControls.vue'
import OfferComponent from './components/OfferComponent.vue'

import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.component('TheCarousel', TheCarousel)
app.component('CarouselIndicators', CarouselIndicators)
app.component('CarouselItem', CarouselItem)
app.component('CarouselControls', CarouselControls)
app.component('OfferComponent', OfferComponent)

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA2SX3BVRyGN78FILocK0Vc-shuj8hTU-s'
  }
})

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)

app.mount('#app')
