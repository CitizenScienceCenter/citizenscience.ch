import coverListDefault from "@/assets/cover_list.json";
import { getRemoteFile } from "@/minio.js";

const state = {
  coverList: undefined,
  news: undefined,
  genericContent: undefined,
  events: undefined,
  isNewsLoaded: false,
  isGCLoaded: false,
  isEventsLoaded: false,
};

const getters = {
  getNewsList(state) {
    return state.news;
  },
  getGenericContent: (state) => (content) => {
    return state.genericContent[content];
  },
  getEvents(state) {
    return state.events;
  },
};

const actions = {
  async getCoverRemote({ commit }) {
    let res = null;
    try {
      res = await getRemoteFile("data/cover_list.json");
    } catch (error) {
      console.error(error);
      res = coverListDefault;
    } finally {
      commit("setCoverList", res);
      return res;
    }
  },
  async getNewsRemote({ commit }) {
    commit("removeIsLoaded", "news");
    let res = null;
    try {
      res = await getRemoteFile("data/news.json");
    } catch (error) {
      console.error(error);
    } finally {
      commit("setNewsList", res);
      return res;
    }
  },
  async getGenericContentRemote({ commit }, { view }) {
    commit("removeIsLoaded", "generic");
    let res = null;
    try {
      res = await getRemoteFile(`data/${view}-generic_content.json`);
    } catch (error) {
      console.error(error);
    } finally {
      commit("setGenericContent", res);
      return res;
    }
  },
  async getEventsRemote({ commit }) {
    commit("removeIsLoaded", "events");
    let res = null;
    try {
      res = await getRemoteFile("data/events.json");
    } catch (error) {
      console.error(error);
    } finally {
      commit("setEvents", res);
      return res;
    }
  },
};

const mutations = {
  setCoverList(state, payload) {
    state.coverList = payload;
  },
  setNewsList(state, payload) {
    state.news = payload;
    state.isNewsLoaded = true;
  },
  setGenericContent(state, payload) {
    state.genericContent = payload;
    state.isGCLoaded = true;
  },
  setEvents(state, payload) {
    state.events = payload;
    state.isEventsLoaded = true;
  },
  removeIsLoaded(state, value) {
    switch (value) {
      case "events":
        state.isEventsLoaded = false;
        break;
      case "news":
        state.isNewsLoaded = false;
        break;
      case "generic":
        state.isGCLoaded = false;
        break;
      default:
        break;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
