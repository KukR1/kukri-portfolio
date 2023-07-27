import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Work from '@/views/Work.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Nik Danilov - Homepage' }
    },
    {
      path: '/work-bio',
      name: 'work-bio',
      component: Work,
      meta: { title: 'Nik Danilov - Work&Bio' }
    }
  ]
});

export default router;
