import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FuneralView from '@/views/FuneralView.vue'
import CelebrationView from '@/views/CelebrationView.vue'
import CorporateView from '@/views/CorporateView.vue'
import ReligiousView from '@/views/ReligiousView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/funerals',
      name: 'funerals',
      component: FuneralView
    },
    {
      path: '/celebrations',
      name: 'celebrations',
      component: CelebrationView
    },
    {
      path: '/corporate',
      name: 'corporate',
      component: CorporateView
    },
    {
      path: '/religious',
      name: 'religious',
      component: ReligiousView
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router