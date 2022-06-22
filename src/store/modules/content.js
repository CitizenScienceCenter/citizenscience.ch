import { getRemoteFile } from "@/minio.js";
import { cmsClient } from "@/assets/support.js";
import { cover_list, coverListInterface } from "@/schemas/coverList.js";
import { newsInterface } from "@/schemas/news.js";
import { eventsInterface } from "@/schemas/events.js";
import { partnerProjectsInterface } from "@/schemas/partnerProjects.js";
import { partnerProjectsDetailsInterface } from "@/schemas/partnerProjectDetails.js";
import { peopleInterface } from "@/schemas/people.js";
import { partnershipInterface } from "@/schemas/partnership.js";
import { i18n } from "@/i18n.js";

// Documents in CMS with slice of data
const slicedCMS = ["people"];

// Form the parameters for CMS query
const getCMSParameters = (document) => {
  if (document) return [document, _getCMSLanguage()].filter((x) => x);
};

const _getCMSLanguage = (_) => {
  const lang = i18n.locale;
  return lang !== "en" ? { lang: `${lang}-${lang}` } : null;
};

// Get data content from CMS retrieved
const getCMSData = async (docName = "_", schema) => {
  if(!schema){
    // return null
  }
  /* Client for CMS interactions. */
  const client = cmsClient.getClient();
  const args = getCMSParameters(docName);
  let res = await client.getSingle(...args);
  if (res === undefined) {
    return null;
  }
  if ("data" in res) {
    res =
      docName in res.data && res.data[docName].length
        ? res.data[docName]
        : slicedCMS.includes(docName) && "body" in res.data
        ? res.data.body
        : [];
  } else {
    res = [];
  }
  if (res.length) {
    return res.map((x) => schema(x));
  }
  return null;
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
      content = await getCMSData("cover_list", coverListInterface);
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
      content = await getCMSData("news", newsInterface);
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
      content = await getCMSData("events", eventsInterface);
      return content;
    } catch (error) {
      console.error(error);
      return content;
    } finally {
      commit("setEvents", content);
    }
  },
  // Get List of people from CMS
  async getPeopleRemote({ commit }) {
    let content = null;
    try {
      content = await getCMSData("people", peopleInterface);
      return content;
    } catch (error) {
      console.error(error);
      return content;
    } finally {
      commit("setPeople", content);
    }
  },
  // Get partnerships' list from CMS
  async getPartnershipsRemote({ commit }) {
    let content = null;
    try {
      content = await getCMSData("partnerships", partnershipInterface);
      return content;
    } catch (error) {
      console.error(error);
      return content;
    } finally {
      commit("setPartnerships", content);
    }
  },

  // Get all partner projects from CMS
  async getAllPartnerProjectsRemote({ commit }) {
    let content = null;
    try {
      content = await getCMSData("partner_projects", partnerProjectsInterface);
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
      let res = await client.getByUID("partner_project_page", uid, _getCMSLanguage());
      if (res === undefined) return null;
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
