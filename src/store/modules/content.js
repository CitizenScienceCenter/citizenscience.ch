import { getRemoteFile } from "@/minio.js";
import { cmsClient } from "@/assets/support.js";
import { cover_list, coverListInterface } from "@/schemas/coverList.js";
import { newsInterface } from "@/schemas/news.js";
import { eventsInterface } from "@/schemas/events.js";
import { partnerProjectsInterface } from "@/schemas/partnerProjects.js";

// Form the parameters for CMS query
const getCMSParameters = (document, lang = "en") => {
  if (document)
    return [
      document,
      lang !== "en" ? { lang: `${lang}-${lang}` } : null,
    ].filter((x) => x);
};

// Get slice content from CMS data retrieved
const getCMSSlice = (res) => {
  return "data" in res && "body" in res.data
    ? res.data.body.length
      ? res.data.body[0].items
      : []
    : [];
};

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
  // Get cover list from CMS
  async getCoverRemote({ commit, rootState }) {
    const lang = rootState.settings.language;
    let content = [...cover_list[lang]];
    try {
      /* Client for CMS interactions. */
      const client = cmsClient.getClient();
      const args = getCMSParameters("cover_list", lang);
      let res = await client.getSingle(...args);
      if (res === undefined) {
        throw new Error("Remote undefined");
      }
      res = getCMSSlice(res);
      if (res.length) {
        content = res.map((x) => coverListInterface(x));
      }
      return content;
    } catch (error) {
      console.log(error);
      return content;
    } finally {
      commit("setCoverList", content);
    }
  },
  // Get news from CMS
  async getNewsRemote({ commit, rootState }) {
    let content = [];
    const lang = rootState.settings.language;
    try {
      /* Client for CMS interactions. */
      const client = cmsClient.getClient();
      const args = getCMSParameters("news", lang);
      let res = await client.getSingle(...args);
      if (res === undefined) {
        throw new Error("Remote undefined");
      }
      res = getCMSSlice(res);
      if (res.length) {
        content = res.map((x) => newsInterface(x));
      }
    } catch (error) {
      console.log(error);
    } finally {
      commit("setNewsList", content);
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
  // Get events from CMS
  async getEventsRemote({ commit, rootState }) {
    let content = [];
    const lang = rootState.settings.language;
    try {
      /* Client for CMS interactions. */
      const client = cmsClient.getClient();
      const args = getCMSParameters("events", lang);
      let res = await client.getSingle(...args);
      if (res === undefined) {
        throw new Error("Remote undefined");
      }
      res = getCMSSlice(res);
      if (res.length) {
        content = res.map((x) => eventsInterface(x));
      }
      return content;
    } catch (error) {
      console.error(error);
      return content;
    } finally {
      commit("setEvents", content);
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

  async getAllPartnerProjectsRemote({ commit, rootState }) {
    let content = [];
    const lang = rootState.settings.language;
    try {
      /* Client for CMS interactions. */
      const client = cmsClient.getClient();
      const args = getCMSParameters("partner_projects", lang);
      let res = await client.getSingle(...args);
      if (res === undefined) {
        throw new Error("Remote undefined");
      }
      res = getCMSSlice(res);
      if (res.length) {
        content = res.map((x) => partnerProjectsInterface(x));
      }
      return content;
    } catch (error) {
      console.error(error);
      return content;
    } finally {
      commit("setPartnerProjects", content);
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
