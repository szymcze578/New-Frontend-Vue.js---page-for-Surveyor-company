import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/Pages/HomePage/HomePage.vue'
import ServicesPage from '@/components/Pages/ServicesPage.vue'
import ContactPage from '@/components/Pages/ContactPage.vue'
import AboutPage from '@/components/Pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {title: "Geodimetr - Usługi geodezyjne",}
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
      meta: {title: "Geodimetr - Oferta",}
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {title: "Geodimetr - O nas",}
    },
    {
      path:'/contact',
      name:'contact',
      component: ContactPage,
      meta: {title: "Geodimetr - Kontact",}
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
