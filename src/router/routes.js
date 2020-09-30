import { openUrl } from "@/assets/support.js";
import Home from "@/views/Home";

import Login from "@/views/shared/user/Login";
import Register from "@/views/shared/user/Register";
import Profile from "@/views/shared/user/Profile";

import RequestReset from "@/views/shared/user/RequestReset";
import Reset from "@/views/shared/user/Reset";

import store from "@/store/store";
import { i18n } from "@/i18n.js";

// import Forum from '@/views/Forum';

import ChildView from "@/views/shared/ChildView";

// lazy loading routes

const Projects = (resolve) => {
  require.ensure(["../views/contribute/Projects.vue"], () => {
    resolve(require("../views/contribute/Projects.vue"));
  });
};
const Collaborations = (resolve) => {
  require.ensure(["../views/contribute/Collaborations.vue"], () => {
    resolve(require("../views/contribute/Collaborations.vue"));
  });
};

const StartProject = (resolve) => {
  require.ensure(["../views/start/StartProject.vue"], () => {
    resolve(require("../views/start/StartProject.vue"));
  });
};
const Checklist = (resolve) => {
  require.ensure(["../views/start/Checklist.vue"], () => {
    resolve(require("../views/start/Checklist.vue"));
  });
};
const Phases = (resolve) => {
  require.ensure(["../views/start/Phases.vue"], () => {
    resolve(require("../views/start/Phases.vue"));
  });
};

const SDG = (resolve) => {
  require.ensure(["../views/citizenscience/SDG.vue"], () => {
    resolve(require("../views/citizenscience/SDG.vue"));
  });
};
const PWA = (resolve) => {
  require.ensure(["../views/PWA.vue"], () => {
    resolve(require("../views/PWA.vue"));
  });
};
const Mission = (resolve) => {
  require.ensure(["../views/about/Mission.vue"], () => {
    resolve(require("../views/about/Mission.vue"));
  });
};
const ZurichStyle = (resolve) => {
  require.ensure(["../views/about/ZurichStyle.vue"], () => {
    resolve(require("../views/about/ZurichStyle.vue"));
  });
};
const Offer = (resolve) => {
  require.ensure(["../views/about/Offer.vue"], () => {
    resolve(require("../views/about/Offer.vue"));
  });
};
const People = (resolve) => {
  require.ensure(["../views/about/People.vue"], () => {
    resolve(require("../views/about/People.vue"));
  });
};
const Partnerships = (resolve) => {
  require.ensure(["../views/about/Partnerships.vue"], () => {
    resolve(require("../views/about/Partnerships.vue"));
  });
};
const Contact = (resolve) => {
  require.ensure(["../views/about/Contact.vue"], () => {
    resolve(require("../views/about/Contact.vue"));
  });
};

const Events = (resolve) => {
  require.ensure(["../views/Events.vue"], () => {
    resolve(require("../views/Events.vue"));
  });
};
const EventDetail = (resolve) => {
  require.ensure(["../views/EventDetail.vue"], () => {
    resolve(require("../views/EventDetail.vue"));
  });
};
const Terms = (resolve) => {
  require.ensure(["../views/shared/static/Terms.vue"], () => {
    resolve(require("../views/shared/static/Terms.vue"));
  });
};

export const routes = [
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "",
        meta: { i18n: "navigation-homepage", nav: false },
        component: Home,
        beforeEnter: async (to, from, next) => {
          // This preload the page style
          const res = await store.dispatch("viewconfig/getHomeConfig");
          // Before route to the Home page, is required load style data
          await store.commit("viewconfig/setHomeConfig", res);
          // The cover component is required even data is not retrieved
          const cover = await store.dispatch("content/getCoverRemote");
          if (res && cover) next();
        },
      },
      {
        path: "contribute",
        component: ChildView,
        meta: { i18n: "navigation-contribute", nav: true },
        redirect: "contribute/projects",
        children: [
          {
            path: "projects",
            component: Projects,
            meta: { i18n: "navigation-contribute-projects", nav: true },
          },
          {
            path: "collaborations",
            component: Collaborations,
            meta: { i18n: "navigation-contribute-collaborations", nav: true },
          },
        ],
      },

      {
        path: "start",
        component: ChildView,
        meta: { i18n: "navigation-startproject", nav: true },
        redirect: "start/startproject",
        children: [
          // {
          //   path: "phases",
          //   component: Phases,
          //   meta: { i18n: "navigation-startproject-phases", nav: true },
          // },
          {
            path: "startproject",
            component: StartProject,
            meta: { i18n: "navigation-startproject-overview", nav: true },
          },
          {
            path: "criteria",
            component: Checklist,
            meta: { i18n: "navigation-startproject-criteria", nav: true },
          },
          {
            path: "builder",
            meta: { i18n: "navigation-startproject-builder", nav: true },
            beforeEnter(to, from) {
              openUrl(`${process.env.VUE_APP_LAB_BASE_URL}${i18n.locale}`);
            },
          },
          {
            path: "create",
            meta: { i18n: "navigation-createproject-builder", nav: true },
            beforeEnter(to, from) {
              openUrl(
                `${process.env.VUE_APP_LAB_BASE_URL}${i18n.locale}/project/builder/name`
              );
            },
          },
        ],
      },
      // {
      //   path: "citizenscience",
      //   component: ChildView,
      //   meta: { i18n: "navigation-citizenscience", nav: true },
      //   redirect: "citizenscience/zurichstyle",
      //   children: [
      //     {
      //       path: "zurichstyle",
      //       component: ZurichStyle,
      //       meta: { i18n: "navigation-citizenscience-zurichstyle", nav: true },
      //     },
      //     {
      //       path: "sdg",
      //       component: SDG,
      //       meta: { i18n: "navigation-citizenscience-sdg", nav: true },
      //     },
      //   ],
      // },
      // TODO: The components for community section are pending
      {
        path: "community",
        component: ChildView,
        meta: { i18n: "navigation-community", nav: true },
        redirect: "community/our",
        children: [
          {
            path: "our",
            component: ZurichStyle,
            meta: { i18n: "navigation-community-ourcommunity", nav: true },
          },
          {
            path: "members",
            component: SDG,
            meta: { i18n: "navigation-community-members", nav: true },
          },
        ],
      },
      {
        path: "pwa",
        meta: { i18n: "navigation-pwa", nav: true },
        component: PWA,
      },
      {
        path: "about",
        component: ChildView,
        meta: { i18n: "navigation-about", nav: true },
        redirect: "about/mission",
        children: [
          {
            path: "mission",
            component: Mission,
            meta: { i18n: "navigation-about-mission", nav: true },
          },
          {
            path: "zurichstyle",
            component: ZurichStyle,
            meta: { i18n: "navigation-about-zurichstyle", nav: true },
          },
          {
            path: "offer",
            component: Offer,
            meta: { i18n: "navigation-about-offer", nav: true },
          },
          {
            path: "people",
            component: People,
            meta: { i18n: "navigation-about-people", nav: true },
          },
          {
            path: "partnerships",
            component: Partnerships,
            meta: { i18n: "navigation-about-partnerships", nav: true },
          },
          {
            path: "contact",
            component: Contact,
            meta: { i18n: "navigation-about-contact", nav: true },
          },
        ],
      },

      {
        path: "events",
        meta: { i18n: "navigation-events", nav: true },
        component: ChildView,
        redirect: "events/upcoming",
        beforeEnter: async (to, from, next) => {
          const res = await store.dispatch("content/getEventsRemote");
          if (res) next();
        },
        children: [
          {
            path: "upcoming",
            component: Events,
            meta: {
              i18n: "navigation-events-upcoming",
              nav: true,
              anchor: "#upcoming-events",
            },
          },
          {
            path: "past",
            component: Events,
            meta: {
              i18n: "navigation-events-past",
              nav: true,
              anchor: "#past-events",
            },
          },
        ],
      },
      {
        path: "events/:event",
        component: EventDetail,
        meta: { nav: false },
      },

      /*
            { path: 'forum', component: Forum, meta: {requiresAuth: true, i18n: 'navigation-forum', nav: true} },
            */

      {
        path: "login",
        component: Login,
        meta: { i18n: "navigation-login", nav: false },
        beforeEnter(to, from) {
          openUrl(
            `${process.env.VUE_APP_LAB_BASE_URL}${i18n.locale}/login`,
            true
          );
        },
      },
      {
        path: "register",
        component: Register,
        meta: { i18n: "navigation-register", nav: false },
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
        meta: { requiresAuth: true, i18n: "navigation-profile", nav: false },
        beforeEnter(to, from) {
          openUrl(`${process.env.VUE_APP_LAB_BASE_URL}${i18n.locale}/profile`, true);
        },
      },
      {
        path: "reset",
        component: RequestReset,
        meta: { requiresAuth: true, i18n: "navigation-reset", nav: false },
      },
      {
        path: "reset/:token",
        component: Reset,
        meta: { requiresAuth: true, i18n: "navigation-reset", nav: false },
      },

      {
        path: "terms",
        component: Terms,
        meta: { i18n: "navigation-terms", nav: false },
      },
    ],
  },
];
