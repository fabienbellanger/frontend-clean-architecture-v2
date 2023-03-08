import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';

import { dependencies } from '@/DependencyInjection';

const app = createApp(App);

app.use(dependencies);
app.use(createPinia());
app.use(router);

app.mount('#app');
