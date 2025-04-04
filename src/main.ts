import './assets/base.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue';
import router from './router';
import { inject } from '@vercel/analytics';

const app = createApp(App);

app.use(MotionPlugin);
app.use(createPinia());
app.use(router);

app.mount('#app');

inject();
