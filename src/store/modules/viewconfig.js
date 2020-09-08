import homePageConfig from "@/assets/view_config/Home.json";
import eventsPageConfig from "@/assets/view_config/Events.json";

const state = {
  home_view: undefined,
  events_view: undefined,
};

const getters = {
  getHomeConfig: (state) => (comp) => {
    return state.home_view[comp];
  },
  getEventsConfig: (state) => (comp) => {
    return state.events_view[comp];
  },
};

const actions = {};

const mutations = {
  setHomeConfig(state) {
    state.home_view = homePageConfig;
  },
  setEventsConfig(state) {
    state.events_view = eventsPageConfig;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
