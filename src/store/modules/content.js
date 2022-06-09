import { cover_list } from "@/schemas/content.js";
import { getRemoteFile } from "@/minio.js";
import { cmsClient } from "@/assets/support.js";

const state = {
  coverList: [],
  news: undefined,
  genericContent: undefined,
  events: undefined,
  people: undefined,
  partnerships: undefined,
  partnerProjects: undefined,
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
  getPartnerProjects: (state) => (id) => {
    if (state.partnerProjects && id) {
      // Only find the first ocurrence of element with id equal to id pass as parameter
      return state.partnerProjects.find((x) => x.id == id);
    }
    return state.partnerProjects;
  },
};

const actions = {
  async getCoverRemote({ commit, rootState }) {
    let res = null;
    const lang = rootState.settings.language;
    let content = [...cover_list[lang]];
    try {
      const client = cmsClient.getClient();
      //TODO: change the type of document from prismic
      const args = [
        "cover_list",
        lang !== "en" ? { lang: `${lang}-${lang}` } : null,
      ].filter((x) => x);
      res = await client.getSingle(...args);
      // TODO: delete cover_list.json file
      // res = await getRemoteFile("data/cover_list.json");
      if (res === undefined) {
        throw new Error("Remote undefined");
      }
      const aux =
        "data" in res && "body" in res.data
          ? res.data.body.length
            ? res.data.body[0].items
            : []
          : [];
      // const aux = []
      if (aux.length) {
        content = aux.map((x) => {
          return {
            image: x.image.url || "cover.jpg",
            expiration: x.expiration,
            title: x.title,
            lead: x.lead,
            path: x.path.url,
            button: x.button,
          };
        });
      }
      return content;
    } catch (error) {
      console.error(error);
      return content;
    } finally {
      commit("setCoverList", content);
    }
  },
  async getNewsRemote({ commit }) {
    commit("removeIsLoaded", "news");
    let res = null;
    try {
      const client = cmsClient.getClient();
      res = await getRemoteFile("data/news.json");
      const response = await client.getSingle("news");
      console.log(response.data);
      return res;
    } catch (error) {
      console.error(error);
      res = require(`@/assets/news.json`);
      return res;
    } finally {
      commit("setNewsList", res);
    }
  },
  async getGenericContentRemote({ commit }, { view }) {
    commit("removeIsLoaded", "generic");
    let res = null;
    try {
      res = await getRemoteFile(`data/${view}-generic_content.json`);
      if (res === undefined) {
        throw new Error("Remote undefined");
      } else {
        return res;
      }
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
      res = require(`@/assets/events.json`);
      return res;
    } finally {
      commit("setEvents", res);
    }
  },
  async getPeopleRemote({ commit }) {
    let res = null;
    try {
      res = await getRemoteFile("data/people.json");
      if (res === undefined) {
        throw new Error("Remote undefined");
      } else {
        return res;
      }
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
      if (res === undefined) {
        throw new Error("Remote undefined");
      } else {
        return res;
      }
    } catch (error) {
      // This content is local if the remote content is not retrieved
      res = require("@/assets/data_config/partnerships.json");
      return res;
    } finally {
      commit("setPartnerships", res);
    }
  },
  async getPartnerProjectsRemote({ commit }) {
    let res = null;
    try {
      res = await getRemoteFile("data/partner_projects.json");
      if (res === undefined) {
        throw new Error("Remote undefined");
      } else {
        return res;
      }
    } catch (error) {
      // This content is local if the remote content is not retrieved
      res = require("@/assets/partner_projects.json");
      return res;
    } finally {
      commit("setPartnerProjects", res);
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
  setPartnerProjects(state, payload) {
    state.partnerProjects = payload;
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
