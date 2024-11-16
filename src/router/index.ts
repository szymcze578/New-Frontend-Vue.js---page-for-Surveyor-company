import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Pages/HomePage.vue'
import ServicesPage from '@/components/Pages/ServicesPage.vue'

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
    }
  ]
})

export default router
