import App from '@/App.vue';
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
      meta: {title: "Geodimetr - Usługi geodezyjne",}
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})

export default router
