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

const app = createApp(App)

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
