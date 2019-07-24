import Vue from 'vue';
import Vuex from 'vuex';
import settings from './modules/settings';
import consts from './modules/consts';
import gdpr from './modules/gdpr'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

let store;
if( window.localStorage ) {
    store = new Vuex.Store({
        modules: {
            settings,
            consts,
            gdpr
        },
        strict: debug,
        plugins: [createPersistedState({ storage: window.localStorage})]
    });
}
else {
    store = new Vuex.Store({
        modules: {
            settings,
            consts,
            gdpr
        },
        strict: debug
    });
}

export default store;
