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
      path: '/a-propos',
      name: 'about',
      component: AboutView
    },
    {
      path: '/funerailles',
      name: 'funerals',
      component: FuneralView
    },
    {
      path: '/celebrations',
      name: 'celebrations',
      component: CelebrationView
    },
    {
      path: '/entreprises',
      name: 'corporate',
      component: CorporateView
    },
    {
      path: '/religieux',
      name: 'religious',
      component: ReligiousView
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    // If there's a hash (like #gallery), scroll to that element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 
      }
    }
    
    if (savedPosition) {
      return savedPosition
    }
    
    return { top: 0 }
  }
})

export default router