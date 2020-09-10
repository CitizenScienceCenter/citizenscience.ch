import homePageConfig from "@/assets/view_config/Home.json";
import eventsPageConfig from "@/assets/view_config/Events.json";
import { minio } from "@/minio.js";

const state = {
  home_view: undefined,
  events_view: undefined,
  isLoaded: false,
};

const getters = {
  getHomeConfig: (state) => (comp) => {
    return state.home_view[comp];
  },
  getEventsConfig: (state) => (comp) => {
    return state.events_view[comp];
  },
};

const actions = {
  getStyle({ commit }) {
    commit("setIsLoaded", false);
    let data;
    // TODO: change bucket name and file from real S3
    let promise = new Promise(function(resolve, reject) {
      minio.getObject("test-10092020", "test.json", function(err, dataStream) {
        if (err) {
          resolve(homePageConfig);
        }
        dataStream.on("data", function(chunk) {
          data += chunk;
        });
        dataStream.on("end", function() {
          const resp = JSON.parse(data.split("undefined")[1]);
          resolve(resp);
        });
        dataStream.on("error", function(err) {
          resolve(homePageConfig);
        });
      });
    });
    return promise;
  },
};

const mutations = {
  setHomeConfig(state, payload) {
    state.home_view = payload;
    state.isLoaded = true;
  },
  setEventsConfig(state) {
    state.events_view = eventsPageConfig;
  },
  setIsLoaded(state, value) {
    state.isLoaded = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
