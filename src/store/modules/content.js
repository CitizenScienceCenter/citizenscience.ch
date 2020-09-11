import { getRemoteFile } from "@/minio.js";

const state = {
  news: undefined,
  isLoaded: false,
};

const getters = {
  getNewsList(state) {
    return state.news;
  },
};

const actions = {
  async getNewsRemote({ commit }) {
    commit("setIsLoaded", false);
    let res = null;
    try {
      res = await getRemoteFile("news.json");
    } catch (error) {
      console.error(error);
    } finally {
      commit("setNewsList", res);
      return res;
    }
  },
};

const mutations = {
  setNewsList(state, payload) {
    state.news = payload;
    state.isLoaded = true;
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
