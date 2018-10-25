
import VueRouter from 'vue-router';
import { routes } from './routes.js';

export const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
