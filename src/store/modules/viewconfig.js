import pageConfig from "@/assets/view_config/Home.json";

const state = {
  home_view: undefined,
};

const getters = {
  getHomeConfig: (state) => (comp) => {
    return state.home_view[comp];
  },
};

const actions = {};

const mutations = {
  setHomeConfig(state) {
    state.home_view = pageConfig;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
