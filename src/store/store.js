import Vue from 'vue';
import Vuex from 'vuex';
import settings from './modules/settings';
import consts from './modules/consts';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        settings,
        consts
    },
    strict: debug,
    plugins: [createPersistedState({ storage: window.localStorage})]
});
