import { getRemoteFile } from "@/minio.js";
import { cmsClient } from "@/assets/support.js";
import { cover_list, coverListInterface } from "@/schemas/coverList.js";
import { newsInterface } from "@/schemas/news.js";
import { eventsInterface } from "@/schemas/events.js";
import { partnerProjectsInterface } from "@/schemas/partnerProjects.js";
import { partnerProjectsDetailsInterface } from "@/schemas/partnerProjectDetails.js";
import { i18n } from "@/i18n.js";

// Form the parameters for CMS query
const getCMSParameters = (document) => {
  if (document) return [document, _getCMSLanguage()].filter((x) => x);
};

const _getCMSLanguage = (_) => {
  const lang = i18n.locale;
  return lang !== "en" ? { lang: `${lang}-${lang}` } : null;
};

// Get slice content from CMS data retrieved
const getCMSSlice = (res, docName = "_") => {
  return "data" in res && docName in res.data
    ? res.data[docName].length
      ? res.data[docName]
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
  partnerProjectDetails: undefined,
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
    if (id) {
      // Only find the first ocurrence of element with id equal to id pass as parameter
      return state.partnerProjectDetails;
    }
    return state.partnerProjects;
  },
};

const actions = {
  // Get cover list from CMS
  async getCoverRemote({ commit }) {
    let content = [...cover_list[i18n.locale]];
    try {
      /* Client for CMS interactions. */
      const docName = "cover_list";
      const client = cmsClient.getClient();
      const args = getCMSParameters(docName);
      let res = await client.getSingle(...args);
      if (res === undefined) {
        throw new Error("Remote undefined");
      }
      res = getCMSSlice(res, docName);
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
  async getNewsRemote({ commit }) {
    let content = null;
    try {
      /* Client for CMS interactions. */
      const client = cmsClient.getClient();
      const args = getCMSParameters("news");
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
  async getEventsRemote({ commit }) {
    let content = null;
    try {
      /* Client for CMS interactions. */
      const client = cmsClient.getClient();
      const args = getCMSParameters("events");
      // let res = await client.getSingle(...args);
      let res = await client.query([
        this.$prismic.Predicates.month("events.", 5),
      ]);

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

  // Get all partner projects from CMS
  async getAllPartnerProjectsRemote({ commit }) {
    let content = null;
    try {
      /* Client for CMS interactions. */
      const client = cmsClient.getClient();
      const args = getCMSParameters("partner_projects");
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
  // Get partner project by UID from CMS
  async getPartnerProjectByUIDRemote({ commit }, uid) {
    let content = null;
    try {
      /* Client for CMS interactions. */
      const client = cmsClient.getClient();
      let res = await client.getByUID(
        "partner_project_page",
        uid,
        _getCMSLanguage()
      );
      if (res === undefined) {
        throw new Error("Remote undefined");
      }
      content = partnerProjectsDetailsInterface(res.data);
      return content;
    } catch (error) {
      console.error(error);
      return content;
    } finally {
      commit("setPartnerProjectDetails", content);
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
  setPartnerProjectDetails(state, payload) {
    state.partnerProjectDetails = payload;
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
