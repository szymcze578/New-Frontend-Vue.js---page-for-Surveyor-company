import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Pages/HomePage/HomePage.vue'
import ServicesPage from '@/components/Pages/ServicesPage.vue'
import ContactPage from '@/components/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage
    },
    {
      path:'/contact',
      name:'contact',
      component: ContactPage
    }
  ]
})

export default router
