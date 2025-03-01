import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Pages/HomePage/HomePage.vue'
import ServicesPage from '@/components/Pages/ServicesPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import AboutPage from '@/components/Pages/AboutPage.vue'

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
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path:'/contact',
      name:'contact',
      component: ContactPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
