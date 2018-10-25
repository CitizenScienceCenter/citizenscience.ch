import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);


const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

export const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    language: undefined
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
    }
  },
  actions: {
    setLanguage( context, {vm, language} ) {
      vm.$i18n.locale = language;
      context.commit('setLanguage', language );
    }
  }
});
