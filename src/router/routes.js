import { openUrl } from "@/assets/support.js";
import Home from "@/views/Home";

import Login from "@/views/shared/user/Login";
import Register from "@/views/shared/user/Register";
import Profile from "@/views/shared/user/Profile";

import RequestReset from "@/views/shared/user/RequestReset";
import Reset from "@/views/shared/user/Reset";

import UpdateFile from "@/views/UpdateFile";

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
const Criteria = (resolve) => {
  require.ensure(["../views/start/Criteria.vue"], () => {
    resolve(require("../views/start/Criteria.vue"));
  });
};
const Checklist = (resolve) => {
  require.ensure(["../views/start/Checklist.vue"], () => {
    resolve(require("../views/start/Checklist.vue"));
  });
};

const Community = (resolve) => {
  require.ensure(["../views/community/Community.vue"], () => {
    resolve(require("../views/community/Community.vue"));
  });
};
const Members = (resolve) => {
  require.ensure(["../views/community/Members.vue"], () => {
    resolve(require("../views/community/Members.vue"));
  });
};
const Partnerships = (resolve) => {
  require.ensure(["../views/community/Partnerships.vue"], () => {
    resolve(require("../views/community/Partnerships.vue"));
  });
};

// TODO: pending to remove
// const SDG = (resolve) => {
//   require.ensure(["../views/citizenscience/SDG.vue"], () => {
//     resolve(require("../views/citizenscience/SDG.vue"));
//   });
// };
// const PWA = (resolve) => {
//   require.ensure(["../views/PWA.vue"], () => {
//     resolve(require("../views/PWA.vue"));
//   });
// };
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
const Contact = (resolve) => {
  require.ensure(["../views/about/Contact.vue"], () => {
    resolve(require("../views/about/Contact.vue"));
  });
};

const UpcomingEvents = (resolve) => {
  require.ensure(["../views/csc_events/Upcoming.vue"], () => {
    resolve(require("../views/csc_events/Upcoming.vue"));
  });
};
const PastEvents = (resolve) => {
  require.ensure(["../views/csc_events/Past.vue"], () => {
    resolve(require("../views/csc_events/Past.vue"));
  });
};
const EventDetail = (resolve) => {
  require.ensure(["../views/csc_events/EventDetail.vue"], () => {
    resolve(require("../views/csc_events/EventDetail.vue"));
  });
};

const NewsDetail = (resolve) => {
  require.ensure(["../views/NewsDetail.vue"], () => {
    resolve(require("../views/NewsDetail.vue"));
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
          const res = await store.dispatch("viewconfig/getHomeRemoteConfig");
          // The cover component is required even data is not retrieved
          const cover = await store.dispatch("content/getCoverRemote");
          // generic conten data retrieving
          await store.dispatch("content/getGenericContentRemote", {
            view: "home",
          });
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
            beforeEnter: async (to, from, next) => {
              // This preload the page style
              const res = await store.dispatch(
                "viewconfig/getProjectsRemoteConfig"
              );
              if (res) next();
            },
          },
          {
            path: "collaborations",
            component: Collaborations,
            meta: { i18n: "navigation-contribute-collaborations", nav: true },
            beforeEnter: async (to, from, next) => {
              // load content from remote server
              await store.dispatch("content/getGenericContentRemote", {
                view: "contribute",
              });
              next();
            },
          },
        ],
      },

      {
        path: "start",
        component: ChildView,
        meta: { i18n: "navigation-startproject", nav: true },
        redirect: "start/startproject",
        beforeEnter: async (to, from, next) => {
          // load content from remote server
          await store.dispatch("content/getGenericContentRemote", {
            view: "create",
          });
          next();
        },
        children: [
          {
            path: "startproject",
            component: StartProject,
            meta: { i18n: "navigation-startproject-overview", nav: true },
          },
          {
            path: "criteria",
            component: Criteria,
            meta: { i18n: "navigation-startproject-criteria", nav: true },
          },
          {
            path: "builder",
            meta: { i18n: "navigation-startproject-builder", nav: true },
            beforeEnter(to, from, next) {
              next(from);
              // this redirect to a sub site in project builder
              const site = to.query.site || "";
              openUrl(
                `${process.env.VUE_APP_LAB_BASE_URL}${i18n.locale}/${site}`
              );
            },
          },
          {
            path: "checklist",
            meta: { i18n: "navigation-startproject-checklist", nav: true },
            component: Checklist,
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
        redirect: "community/csc_community",
        beforeEnter: async (to, from, next) => {
          // load content from remote server
          await store.dispatch("content/getGenericContentRemote", {
            view: "community",
          });
          next();
        },
        children: [
          {
            path: "csc_community",
            component: Community,
            meta: { i18n: "navigation-community-ourcommunity", nav: true },
          },
          {
            path: "members",
            component: Members,
            meta: { i18n: "navigation-community-members", nav: true },
          },
          {
            path: "partnerships",
            component: Partnerships,
            meta: { i18n: "navigation-community-partnerships", nav: true },
            beforeEnter: async (to, from, next) => {
              // load content from remote server
              await store.dispatch("content/getPartnershipsRemote");
              next();
            },
          },
        ],
      },
      // {
      //   path: "pwa",
      //   meta: { i18n: "navigation-pwa", nav: true },
      //   component: PWA,
      // },
      {
        path: "about",
        component: ChildView,
        meta: { i18n: "navigation-about", nav: true },
        redirect: "about/mission",
        beforeEnter: async (to, from, next) => {
          // load content from remote server
          await store.dispatch("content/getGenericContentRemote", {
            view: "about",
          });
          next();
        },
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
            beforeEnter: async (to, from, next) => {
              // load content from remote server
              await store.dispatch("content/getPeopleRemote");
              next();
            },
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
          const res = await store.dispatch("viewconfig/getEventsRemoteConfig");
          const events = await store.dispatch("content/getEventsRemote");
          if (res && events) next();
        },
        children: [
          {
            path: "upcoming",
            component: UpcomingEvents,
            meta: {
              i18n: "navigation-events-upcoming",
              nav: true,
            },
          },
          {
            path: "past",
            component: PastEvents,
            meta: {
              i18n: "navigation-events-past",
              nav: true,
            },
          },
        ],
      },
      {
        path: "events/:event",
        component: EventDetail,
        meta: { nav: false },
      },

      {
        path: "news/:new",
        component: NewsDetail,
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
          // TODO: replace by real profile when is implemented
          // openUrl(
          //   `${process.env.VUE_APP_LAB_BASE_URL}${i18n.locale}/profile`,
          //   true
          // );
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
      {
        path: "update_file",
        component: UpdateFile,
        meta: {
          requiresAuth: true,
          requiresAdmin: true,
          i18n: "navigation-updatefile",
          nav: true,
        },
      },
      {
        // catch all NotFound
        path: "*",
        component: () => import("@/views/NotFound.vue"),
      },
    ],
  },
];
