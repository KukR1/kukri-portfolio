import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Work from '@/components/common/Work.vue';
import { useTitle } from '@vueuse/core';

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

// const title = useTitle();
// title.value = 'Hello';
// console.log('title', title.value);

// router.beforeEach((to) => {
//   const pageTitle = to.meta.title as string;
//   document.title = pageTitle ?? 'Nik Danilov';
// });

export default router;
