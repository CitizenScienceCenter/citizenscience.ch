import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
import VuexPersist from 'vuex-persist'


const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    settings
  },
  strict: debug,
  plugins: [vuexPersist.plugin]
})
