import VueRouter from 'vue-router';
import { routes } from './routes.js';
import store from '../store/store.js';
import { i18n } from '../i18n.js';

export const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {

    /*
    console.table(to);
    let language = to.params.lang;
    //if( to.params.lang && to.params.lang.split('/')[0].length === 2 ) {
    if( language && (language.toString().includes('en') || language.includes('de')) && language.length === 2 ) {
        // set language from route

        if (!language) {
            language = 'en';
        }
        store.dispatch("settings/setLanguage", language);
        i18n.locale = language;
    }
    else if (to.fullPath.split('/')[0].length !== 2 ) {
        // language not in route
        console.log('redirect to: ' + store.state.settings.language + to.path);
        next( store.state.settings.language+ to.fullPath );
    }
    */
    console.log( 'navigate to: '+to.path );
    if( to.params.lang && to.params.lang.split('/')[0].length === 2 ) {
        console.log( 'url has language: '+ to.params.lang);
        let language = to.params.lang;
        store.dispatch("settings/setLanguage", language);
        i18n.locale = language;
        next();
    }
    else {
        console.log('redirect');
        next( '/'+ i18n.locale + to.path );
    }

    /*
    if( to.matched.some(record => record.meta.requiresAuth) ) {
cd
        if( store.state.c3s.user.currentUser ) {
            //console.log('validate user '+store.state.c3s.user.currentUser.username);

            store.dispatch('c3s/user/validate').then(v => {
                //console.log('validation success');
                if (v) {
                    //next();
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
    */


});
