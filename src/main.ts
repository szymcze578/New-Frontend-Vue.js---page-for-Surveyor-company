import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import TheCarousel from './components/Carousel/TheCarousel.vue'

import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.component('TheCarousel', TheCarousel)

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA2SX3BVRyGN78FILocK0Vc-shuj8hTU-s'
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
