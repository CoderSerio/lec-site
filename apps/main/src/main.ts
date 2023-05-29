import { createApp } from 'vue';
import './style.css';
import microApp from '@micro-zoe/micro-app';
import ArcoVue from '@arco-design/web-vue';
import WujieVue from 'wujie-vue3';
import router from './router';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(WujieVue);
app.use(router);
app.use(ArcoVue);
app.use(WujieVue);

microApp.start({
  // plugins: {
  //   modules: {
  //     'luoli-code': [
  //       {
  //         loader(code: string) {
  //           code = code.replace(
  //             /(from|import)(\s*['"])(\/micro-app\/vite\/)/g,
  //             (all) => {
  //               return all.replace(
  //                 '/luoli-code/',
  //                 `${window.location.host}:${microConfig['luoli-code'].port}/luoli-code/`,
  //               );
  //             },
  //           );
  //           return code;
  //         },
  //       },
  //     ],
  //   },
  // },
});

WujieVue.setupApp({
  name: 'loli-code',
  url: 'http://localhost:3002',
  attrs: {},
  alive: true,
  degrade: false,
  exec: true,
});

WujieVue.setupApp({
  name: 'resource',
  url: 'http://localhost:3003',
  attrs: {},
  alive: true,
  degrade: false,
  exec: true,
});

WujieVue.preloadApp({ name: 'loli-code', url: 'http://localhost:3002' });

app.mount('#main-app');
