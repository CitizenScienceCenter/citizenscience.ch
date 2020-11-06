import coverListDefault from "@/assets/data_config/cover_list.json";
import { getRemoteFile } from "@/minio.js";

const state = {
  coverList: undefined,
  news: undefined,
  genericContent: undefined,
  events: undefined,
  people: undefined,
  partnerships: undefined,
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
  getPeople(state) {
    return state.people;
  },
  getPartnerships(state) {
    return state.partnerships;
  },
};

const actions = {
  async getCoverRemote({ commit }) {
    let res = null;
    try {
      res = await getRemoteFile("data/cover_list.json");
      return res;
    } catch (error) {
      console.error(error);
      res = coverListDefault;
      return res;
    } finally {
      commit("setCoverList", res);
    }
  },
  async getNewsRemote({ commit }) {
    commit("removeIsLoaded", "news");
    let res = null;
    try {
      res = await getRemoteFile("data/news.json");
      return res;
    } catch (error) {
      console.error(error);
    } finally {
      commit("setNewsList", res);
    }
  },
  async getGenericContentRemote({ commit }, { view }) {
    commit("removeIsLoaded", "generic");
    let res = null;
    try {
      res = await getRemoteFile(`data/${view}-generic_content.json`);
      return res;
    } catch (error) {
      // This content is local whether the remote content is not retrieved
      res = require(`@/assets/data_config/${view}-generic_content.json`);
      return res;
    } finally {
      commit("setGenericContent", res);
    }
  },
  async getEventsRemote({ commit }) {
    commit("removeIsLoaded", "events");
    let res = null;
    try {
      res = await getRemoteFile("data/events.json");
      return res;
    } catch (error) {
      console.error(error);
    } finally {
      commit("setEvents", res);
    }
  },
  async getPeopleRemote({ commit }) {
    let res = null;
    try {
      res = await getRemoteFile("data/people.json");
      return res;
    } catch (error) {
      // This content is local if the remote content is not retrieved
      res = require("@/assets/data_config/people.json");
      return res;
    } finally {
      commit("setPeople", res);
    }
  },
  async getPartnershipsRemote({ commit }) {
    let res = null;
    try {
      res = await getRemoteFile("data/partnerships.json");
      return res;
    } catch (error) {
      // This content is local if the remote content is not retrieved
      res = require("@/assets/data_config/partnerships.json");
      return res;
    } finally {
      commit("setPartnerships", res);
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
  setPeople(state, payload) {
    state.people = payload;
  },
  setPartnerships(state, payload) {
    state.partnerships = payload;
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
