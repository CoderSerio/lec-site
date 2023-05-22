import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import microApp from '@micro-zoe/micro-app';
import router from './router';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

microApp.start();

const app = createApp(App);
app.use(router);
app.use(ArcoVue);
app.mount('#main-app');
