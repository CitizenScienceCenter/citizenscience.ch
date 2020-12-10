import { router } from "@/router/router.js";
import axios from "axios";

const state = {
  userInfo: null,
  isLogged: false,
  loginOptions: {},
  error: null,
};

const getters = {
  getUserInfo() {
    return state.userInfo;
  },
};

const actions = {
  async getAccountProfile({ dispatch, commit }) {
    try {
      dispatch("getLoginOptions");
      const res = await fetch(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/profile`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const info = await res.json();
      if (info.hasOwnProperty("user")) {
        commit("setUserInfo", info.user);
        commit("setLogged", true);
      } else {
        commit("setUserInfo", null);
        commit("setLogged", false);
      }
    } catch (error) {
      console.error(error);
      commit("setUserInfo", null);
      commit("setLogged", false);
    }
  },
  async signOut({ commit }) {
    try {
      const res = await fetch(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/signout`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const info = await res.json();
      if (info.hasOwnProperty("status") && info.status === "success") {
        commit("setUserInfo", null);
        commit("setLogged", false);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  },
  async getLoginOptions({ commit }) {
    try {
      const res = await fetch(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/signin`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const info = await res.json();
      commit("setLoginOptions", info);
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  async signIn({ state, commit }, { email, password }) {
    try {
      const csrf = state.loginOptions.form.csrf;
      const res = await axios.post(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/signin`,
        { email: email, password: password, csrf: csrf },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrf,
          },
        }
      );
      const info = await res.data;
      if (info.hasOwnProperty("status")) {
        commit("setError", { msg: info.flash, type: info.status });
        info.status === "success"
          ? router.push("/")
          : router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  setLoginOptions(state, options) {
    state.loginOptions = options;
  },
  setUserInfo(state, payload) {
    state.userInfo = payload;
  },
  setLogged(state, value) {
    state.isLogged = value;
  },
  setError(state, payload) {
    state.error = null; // clear previous error
    const TYPES = ["info", "error", "success"];    
    if (payload) {
      const pl_type = payload.type.toLowerCase();
      state.error = {
        msg: payload.msg,
        type: TYPES.some((x) => x == pl_type) ? pl_type : TYPES[0],
      };
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
