import { openUrl } from "@/assets/support.js";
import Home from "@/views/Home";

import Login from "@/views/shared/user/Login";
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
const PartnersProjects = (resolve) => {
  require.ensure(["../views/contribute/PartnersProjects.vue"], () => {
    resolve(require("../views/contribute/PartnersProjects.vue"));
  });
};
const PartnerProjectDetail = (resolve) => {
  require.ensure(["../views/contribute/PartnerProjectDetail.vue"], () => {
    resolve(require("../views/contribute/PartnerProjectDetail.vue"));
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
const SeedGrants = (resolve) => {
  require.ensure(["../views/start/SeedGrants.vue"], () => {
    resolve(require("../views/start/SeedGrants.vue"));
  });
};
// const Checklist = (resolve) => {
//   require.ensure(["../views/start/Checklist.vue"], () => {
//     resolve(require("../views/start/Checklist.vue"));
//   });
// };

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
          const res = await store.dispatch("viewconfig/getRemoteView", {
            view: "home",
          });
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
        beforeEnter: async (to, from, next) => {
          // This preload the page style
          const con = await store.dispatch("content/getGenericContentRemote", {
            view: "contribute",
          });
          if (con) {
            next();
          }
        },
        children: [
          {
            path: "projects",
            component: Projects,
            meta: { i18n: "navigation-contribute-projects", nav: true },
            beforeEnter: async (to, from, next) => {
              // This preload the page style
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "projects",
              });
              if (res) {
                next();
              }
            },
          },
          {
            path: "partners_projects",
            component: PartnersProjects,
            meta: {
              i18n: "navigation-contribute-partners",
              nav: true,
            },
            beforeEnter: async (to, from, next) => {
              const content = await store.dispatch(
                "content/getPartnerProjectsRemote"
              );
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "partners",
              });
              if (res && content) {
                next();
              }
            },
          },
          {
            path: "partner_project/:id",
            component: PartnerProjectDetail,
            meta: { nav: false },
          },
          {
            path: "collaborations",
            component: Collaborations,
            meta: {
              i18n: "navigation-contribute-collaborations",
              nav: true,
            },
            beforeEnter: async (to, from, next) => {
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "contribute",
              });
              if (res) {
                next();
              }
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
          // This preload the page style
          const con = await store.dispatch("content/getGenericContentRemote", {
            view: "create",
          });
          if (con) {
            next();
          }
        },
        children: [
          {
            path: "startproject",
            component: StartProject,
            meta: {
              i18n: "navigation-startproject-overview",
              nav: true,
            },
            beforeEnter: async (to, from, next) => {
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "start",
              });
              if (res) {
                next();
              }
            },
          },
          {
            path: "criteria",
            component: Criteria,
            meta: {
              i18n: "navigation-startproject-criteria",
              nav: true,
            },
            beforeEnter: async (to, from, next) => {
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "criteria",
              });
              if (res) {
                next();
              }
            },
          },
          {
            path: "builder",
            meta: {
              i18n: "navigation-startproject-builder",
              nav: true,
              trackingInfo: {
                category: "view_pb",
                label: "View Project Builder from citizenscience.ch",
                action: "go_to_pb",
              },
            },
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
            path: "seed",
            component: SeedGrants,
            meta: {
              i18n: "navigation-startproject-seed_grants",
              nav: true,
            },
            beforeEnter: async (to, from, next) => {
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "seed_grants",
              });
              if (res) {
                next();
              }
            },
          },
          // {
          //   path: "checklist",
          //   meta: { i18n: "navigation-startproject-checklist", nav: true },
          //   component: Checklist,
          //   beforeEnter: async (to, from, next) => {
          //     // load content from remote server
          //     const res = await store.dispatch("viewconfig/getRemoteView", {
          //       view: "checklist",
          //     });
          //     if (res) {
          //       next();
          //     }
          //   },
          // },
        ],
      },
      {
        path: "community",
        component: ChildView,
        meta: { i18n: "navigation-community", nav: true },
        redirect: "community/csc_community",
        beforeEnter: async (to, from, next) => {
          // This preload the page style
          const con = await store.dispatch("content/getGenericContentRemote", {
            view: "community",
          });
          if (con) {
            next();
          }
        },
        children: [
          {
            path: "csc_community",
            component: Community,
            meta: {
              i18n: "navigation-community-ourcommunity",
              nav: true,
            },
            beforeEnter: async (to, from, next) => {
              // This preload the page style
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "community",
              });
              if (res) {
                next();
              }
            },
          },
          {
            path: "members",
            component: Members,
            meta: { i18n: "navigation-community-members", nav: true },
            beforeEnter: async (to, from, next) => {
              // This preload the page style
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "members",
              });
              if (res) {
                next();
              }
            },
          },
          {
            path: "partnerships",
            component: Partnerships,
            meta: {
              i18n: "navigation-community-partnerships",
              nav: true,
            },
            beforeEnter: async (to, from, next) => {
              // load content from remote server
              await store.dispatch("content/getPartnershipsRemote");
              // This preload the page style
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "partnerships",
              });
              if (res) {
                next();
              }
            },
          },
        ],
      },
      {
        path: "about",
        component: ChildView,
        meta: { i18n: "navigation-about", nav: true },
        redirect: "about/mission",
        beforeEnter: async (to, from, next) => {
          // This preload the page style
          const con = await store.dispatch("content/getGenericContentRemote", {
            view: "about",
          });
          if (con) {
            next();
          }
        },
        children: [
          {
            path: "mission",
            component: Mission,
            meta: { i18n: "navigation-about-mission", nav: true },
            beforeEnter: async (to, from, next) => {
              // This preload the page style
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "mission",
              });
              if (res) {
                next();
              }
            },
          },
          {
            path: "zurichstyle",
            component: ZurichStyle,
            meta: { i18n: "navigation-about-zurichstyle", nav: true },
            beforeEnter: async (to, from, next) => {
              // This preload the page style
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "zurich_style",
              });
              if (res) {
                next();
              }
            },
          },
          {
            path: "offer",
            component: Offer,
            meta: { i18n: "navigation-about-offer", nav: true },
            beforeEnter: async (to, from, next) => {
              // This preload the page style
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "offer",
              });
              if (res) {
                next();
              }
            },
          },
          {
            path: "people",
            component: People,
            meta: { i18n: "navigation-about-people", nav: true },
            beforeEnter: async (to, from, next) => {
              // load content from remote server
              await store.dispatch("content/getPeopleRemote");
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "people",
              });
              if (res) {
                next();
              }
            },
          },
          {
            path: "contact",
            component: Contact,
            meta: { i18n: "navigation-about-contact", nav: true },
            beforeEnter: async (to, from, next) => {
              // This preload the page style
              const res = await store.dispatch("viewconfig/getRemoteView", {
                view: "contact",
              });
              if (res) {
                next();
              }
            },
          },
        ],
      },

      {
        path: "events",
        meta: { i18n: "navigation-events", nav: true },
        component: ChildView,
        redirect: "events/upcoming",
        beforeEnter: async (to, from, next) => {
          const res = await store.dispatch("viewconfig/getRemoteView", {
            view: "events",
          });
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

      /*
        { path: 'forum', component: Forum, meta: {requiresAuth: true, i18n: 'navigation-forum', nav: true} },
      */

      {
        path: "login",
        component: Login,
        meta: { i18n: "navigation-login", nav: false },
        beforeEnter(to, from, next) {
          if (store.state.user.isLogged) {
            next(from.path);
          } else {
            next();
          }
        },
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
        meta: {
          requiresAuth: true,
          i18n: "navigation-profile",
          nav: false,
        },
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
        meta: { i18n: "navigation-reset", nav: false },
        // TODO: pending to remove after implemented
        beforeEnter(to, from) {
          openUrl(
            `${process.env.VUE_APP_LAB_BASE_URL}${i18n.locale}/reset-password`,
            false
          );
        },
      },
      {
        path: "reset/:token",
        component: Reset,
        meta: {
          requiresAuth: true,
          i18n: "navigation-reset",
          nav: false,
        },
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
