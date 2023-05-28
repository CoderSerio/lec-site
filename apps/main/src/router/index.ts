import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/index.vue';
import TeamHistory from '@/pages/team-history/index.vue';
import LoliCode from '@/pages/luoli-code/index.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/team-history/:page*',
    name: 'team-history',
    component: TeamHistory,
    // component: () => import('@/pages/team-history/index.vue'),
  },
  {
    path: '/loli-code/:page*',
    name: 'loli-code',
    component: LoliCode,
    // component: () => import('@/pages/team-history/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
