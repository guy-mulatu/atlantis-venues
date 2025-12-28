import { createRouter, createWebHistory } from 'vue-router'


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
      component: FuneralsView
    },
    {
      path: '/celebrations',
      name: 'celebrations',
      component: CelebrationsView
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