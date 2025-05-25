import './assets/main.css'

import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { MotionPlugin } from '@vueuse/motion';
//@ts-ignore
import  VueTypedJs  from 'vue3-typed-js';

import VueGoogleMaps from '@fawmi/vue-google-maps'
import OfferComponent from '@/components/OfferComponent.vue'
import ContactComponent from '@/components/ContactComponent/ContactComponent.vue'
import InfoIconComponent from '@/components/ContactComponent/InfoIconComponent.vue'
import MapView from '@/components/ContactComponent/MapView.vue'
import HomePage from '@/components/Pages/HomePage/HomePage.vue'
import ServicesPage from '@/components/Pages/ServicesPage.vue'
import TheFooter from '@/components/Footer/TheFooter.vue'
import NavigationItem from '@/components/Header/NavigationItem.vue'
import InformationTile from '@/components/InformationTile.vue'
import CarouselTextInfo from '@/components/Pages/HomePage/CarouselTextInfo.vue'
import AmountCounter from '@/components/Pages/AmountCounter.vue'
import AboutPage from '@/components/Pages/AboutPage.vue'

const app = createApp(App)

app.component('OfferComponent', OfferComponent)
app.component('InfoIconComponent', InfoIconComponent)
app.component('MapView',MapView)
app.component('HomePage',HomePage)
app.component('ServicesPage',ServicesPage)
app.component('TheFooter',TheFooter)
app.component('ContactComponent',ContactComponent)
app.component('NavigationItem',NavigationItem)
app.component('InformationTile',InformationTile)
app.component('CarouselTextInfo',CarouselTextInfo)
app.component('AboutPage',AboutPage)
app.component('AmountCounter',AmountCounter)

app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_GOOGLE_API_KEY
  }
})

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(VueTypedJs)

app.mount('#app')
