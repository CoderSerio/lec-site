import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home/index.vue';
import TeamHistory from '@/pages/team-history/index.vue';

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
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
