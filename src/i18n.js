import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "./store/store.js";

Vue.use(VueI18n);

var language;
if (!store.state.settings.language) {
  // no language in store

  // check browser
  language = window.navigator.userLanguage || window.navigator.language;

  // trim
  language = language.substr(0, 2);

  // check if valid
  if (language !== "en" && language !== "de") {
    language = "de";
  }

  // language for prerendering default routes
  if (navigator.userAgent === "ReactSnap") {
    language = "de";
  }

  store.dispatch("settings/setLanguage", language);
}

export const i18n = new VueI18n({
  silentTranslationWarn: true,
  locale: store.state.settings.language,
  messages: {
    en: {
      "site-title": "Citizen Science Center Zurich",
      "site-description": "Next Level Citizen Science",

      "weekday-monday": "Mon",
      "weekday-tuesday": "Tue",
      "weekday-wednesday": "Wed",
      "weekday-thursday": "Thu",
      "weekday-friday": "Fri",
      "weekday-saturday": "Sat",
      "weekday-sunday": "Sun",

      "navigation-homepage": {
        link: "Home",
      },

      "navigation-contribute": {
        link: "Contribute",
      },
      "navigation-contribute-projects": {
        link: "Projects",
      },
      "navigation-contribute-collaborations": {
        link: "Why Contribute?",
      },

      "navigation-startproject": {
        link: "Your Project",
      },
      "navigation-startproject-overview": {
        link: "Before You Start",
      },
      "navigation-startproject-builder": {
        link: "Project Builder",
      },
      "navigation-createproject-builder": {
        link: "Create",
      },      
      "navigation-startproject-criteria": {
        link: "Criteria",
      },
      "navigation-startproject-checklist": {
        link: "Checklist",
      },

      "navigation-community": {
        link: "Community",
      },
      "navigation-community-ourcommunity": {
        link: "Our Community",
      },
      "navigation-community-members": {
        link: "Members",
      },
      "navigation-community-partnerships": {
        link: "Partnerships",
      },

      "navigation-pwa": {
        link: "PWA",
      },

      "navigation-about": {
        link: "About us",
      },
      "navigation-about-mission": {
        link: "Mission & Goals",
      },
      "navigation-about-zurichstyle": {
        link: "CS «Zurich Style»",
      },
      "navigation-about-offer": {
        link: "What We Offer",
      },
      "navigation-about-people": {
        link: "People",
      },            
      "navigation-about-contact": {
        link: "Contact",
      },

      "navigation-events": {
        link: "Events",
      },
      "navigation-events-upcoming": {
        link: "Upcoming",
      },
      "navigation-events-past": {
        link: "Past",
      },
      "navigation-forum": {
        link: "Forum",
      },

      "navigation-login": {
        link: "Login",
      },
      "navigation-register": {
        link: "Register",
      },
      "navigation-profile": {
        link: "Profile",
      },
      "navigation-reset": {
        link: "Reset",
      },

      "navigation-terms": {
        link: "Privacy Policy & Terms of Use",
      },

      "navigation-updatefile": {
        link: "Admin",
      },      
    },
    de: {
      "site-title": "Citizen Science Center Zürich",
      "site-description": "Next Level Citizen Science",

      "weekday-monday": "Mo",
      "weekday-tuesday": "Di",
      "weekday-wednesday": "Mi",
      "weekday-thursday": "Do",
      "weekday-friday": "Fr",
      "weekday-saturday": "Sa",
      "weekday-sunday": "So",

      "navigation-homepage": {
        link: "Home",
      },

      "navigation-contribute": {
        link: "Mitmachen",
      },
      "navigation-contribute-projects": {
        link: "Projekte",
      },
      "navigation-contribute-collaborations": {
        link: "Warum beitragen?",
      },

      "navigation-startproject": {
        link: "Ihr Projekt",
      },
      "navigation-startproject-overview": {
        link: "Bevor Sie loslegen",
      },
      "navigation-startproject-builder": {
        link: "Project Builder",
      },
      "navigation-createproject-builder": {
        link: "Erstellen",
      },      
      "navigation-startproject-criteria": {
        link: "Kriterien",
      },
      "navigation-startproject-checklist": {
        link: "Checkliste",
      },

      "navigation-community": {
        link: "Community",
      },
      "navigation-community-ourcommunity": {
        link: "Unsere Community",
      },
      "navigation-community-members": {
        link: "Mitglieder",
      },
      "navigation-community-partnerships": {
        link: "Partner",
      }, 

      "navigation-pwa": {
        link: "PWA",
      },

      "navigation-about": {
        link: "Über uns",
      },
      "navigation-about-mission": {
        link: "Mission & Ziele",
      },
      "navigation-about-zurichstyle": {
        link: "CS «Züri Style»",
      },
      "navigation-about-offer": {
        link: "Unser Angebot",
      },
      "navigation-about-people": {
        link: "Personen",
      },     
      "navigation-about-contact": {
        link: "Kontakt",
      },

      "navigation-events": {
        link: "Veranstaltungen",
      },
      "navigation-events-upcoming": {
        link: "Bevorstehende",
      },
      "navigation-events-past": {
        link: "Vergangene",
      },
      "navigation-forum": {
        link: "Forum",
      },

      "navigation-login": {
        link: "Login",
      },
      "navigation-register": {
        link: "Registrieren",
      },
      "navigation-profile": {
        link: "Profil",
      },
      "navigation-reset": {
        link: "Zurücksetzen",
      },

      "navigation-terms": {
        link: "Privacy Policy & Terms of Use",
      },
      "navigation-updatefile": {
        link: "Admin",
      }, 
    },
  },
});
