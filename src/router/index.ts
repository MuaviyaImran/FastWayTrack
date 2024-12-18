import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactUsView from '@/views/ContactUsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home',
        description: 'Welcome page of Fast Way Track', // <= here
      },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About',
        description: 'About page of Fast Way Track', // <= here
      },
      component: AboutView,
    },
    {
      path: '/services',
      name: 'services',
      meta: {
        title: 'Services',
        description: 'Services page of Fast Way Track', // <= here
      },
      component: ServicesView,
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: 'Contact',
        description: 'Contact us page of Fast Way Track', // <= here
      },
      component: ContactUsView,
    },
  ],
})
router.beforeEach(async (to, from) => {
  if (!to.name) {
    return { name: 'home' }
  }
})
export default router
