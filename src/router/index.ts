import HomeView from '@/views/HomeView.vue';
import WorkView from '@/views/WorkView.vue';
import { createRouter, createWebHistory } from 'vue-router';

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
         component: WorkView,
         meta: { title: 'Nik Danilov - Work&Bio' }
      }
   ]
});

export default router;
