import VueRouter from 'vue-router';
import { routes } from './routes.js';
import { i18n } from '../i18n.js';
import store from '../store/store.js';

export const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {
  const lang = store.state.settings.language || 'de';
  next();
});

// handling hash urls
let hashNavTimeout;
router.afterEach((to, from, next) => {
  if( to.hash ) {
    if( to.path !== from.path ){
        const app = router.app;
        hashNavTimeout = setTimeout( function() {
            app.$scrollTo( to.hash );
            clearInterval(hashNavTimeout);
        }, 100);
    }
  }
});
