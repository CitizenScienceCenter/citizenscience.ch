import { router } from "@/router/router.js";
import { throwAlert } from "@/assets/support";
import axios from "axios";

const state = {
  userInfo: null,
  isLogged: false,
  loginOptions: {},
  registerOptions: {},
  error: cleanError(),
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

  // sign out section
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
        throwAlert({
          type: "info",
          message: info.flash,
        });
      }
    } catch (error) {
      console.error(error);
    }
  },

  // register section
  async getRegisterOptions({ commit }) {
    try {
      const res = await fetch(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/register`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const info = await res.json();
      commit("setRegisterOptions", info);
      return res.data;
    } catch (error) {
      console.error(error);
      return;
    }
  },
  async register({ state, commit, dispatch }, payload) {
    cleanError();
    try {
      await dispatch("getRegisterOptions");
      const csrf = await state.registerOptions.form.csrf;
      const res = await axios.post(
        `${process.env.VUE_APP_BASE_ENDPOINT_URL}account/register`,
        payload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrf,
          },
        }
      );
      if (res.data.hasOwnProperty("status")) {
        switch (res.data.status) {
          case "error":
            commit("setRegisterError", res.data.form.errors);
            break;
          case "sent":
            router.push("/");
            throwAlert({
              type: "info",
              message: res.data.flash,
              time: 5000,
              okButton: true,
            });
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.log(error);
      throwAlert({
        type: "error",
        message: "Server error ocurred",
      });
    }
  },

  // login section
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
        switch (res.data.status) {
          case "success":
            router.push("/");
            throwAlert({
              type: info.status,
              message: info.flash,
            });
            break;
          default:
            commit("setLoginError", {
              msg: info.flash,
              type: info.status,
            });
            break;
        }
      }
    } catch (error) {
      console.log(error);
      throwAlert({
        type: "error",
        message: "Server error ocurred",
      });
    }
  },
};

const mutations = {
  setRegisterOptions(state, options) {
    state.registerOptions = options;
  },
  setLoginOptions(state, options) {
    state.loginOptions = options;
  },
  setUserInfo(state, payload) {
    state.userInfo = payload;
  },
  setLogged(state, value) {
    state.isLogged = value;
  },
  setLoginError(state, payload) {
    state.error = cleanError(); // clear previous error
    const TYPES = ["info", "error", "success"];
    if (payload) {
      const pl_type = payload.type.toLowerCase();
      state.error.login = {
        msg: payload.msg,
        type: TYPES.some((x) => x == pl_type) ? pl_type : TYPES[0],
      };
    }
  },
  setRegisterError(state, payload) {
    state.error = cleanError(); // clear previous error
    if (payload) {
      state.error.register = payload;
    }
  },
};

// Internal functions
function cleanError() {
  const clean_error = {
    login: null,
    register: null,
  };
  return clean_error;
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
