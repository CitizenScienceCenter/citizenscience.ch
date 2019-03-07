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

    if( to.matched.some(record => record.meta.requiresAuth) ) {
        console.log('auth required');

        if( store.state.c3s.user.currentUser ) {
            console.log('validate user '+store.state.c3s.user.currentUser.username);

            store.dispatch('c3s/user/validate').then(v => {
                console.log('validation success');
                if (v) {
                    next();
                }
                else {
                    router.push('/login');
                }
            });
        }
        else {
            store.dispatch('c3s/user/generateAnon').then(u => {
                console.log('generate anon');
                next();
            });
        }

    }
    else if( to.matched.some(record => record.meta.requiresAccount) ) {
        console.log('account required');
        if( !store.state.c3s.user.currentUser || store.state.c3s.user.isAnon ) {
            router.push('/login');
        }
        else {
            next();
        }
    }
    else {
        next();
    }
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
