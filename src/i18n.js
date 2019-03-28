import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from './store/store.js';

Vue.use(VueI18n);

var language;
if( !store.state.settings.language ) {
    // no language in store, check browser
    language = window.navigator.userLanguage || window.navigator.language;
    if (language.indexOf('-') !== -1) {
        language = language.split('-')[0];
    }
    else if (language.indexOf('_') !== -1) {
        language = language.split('_')[0];
    }
    if( language !== 'en' && language !== 'de') {
        language = "de";
    }

  store.dispatch("settings/setLanguage", language );
}
language = store.state.settings.language;

export const i18n = new VueI18n({
  locale: language,
  messages: {

    'en': {

    'navigation-homepage': {
        'link': 'Home'
    },

    'navigation-contribute': {
        'link': 'Contribute'
    },
    'navigation-contribute-projects': {
        'link': 'Projects'
    },
    'navigation-contribute-collaborations': {
        'link': 'Collaborations'
    },

    'navigation-startproject': {
        'link': 'Your Project'
    },
    'navigation-startproject-overview': {
        'link': 'Overview'
    },
    'navigation-startproject-offer': {
        'link': 'Our Offer'
    },
    'navigation-startproject-checklist': {
        'link': 'Checklist'
    },
    'navigation-startproject-phases': {
        'link': 'Project Phases'
    },

    'navigation-citizenscience': {
        'link': 'Citizen Science'
    },
    'navigation-citizenscience-zurichstyle': {
        'link': '«Zurich Style»'
    },
    'navigation-citizenscience-sdg': {
        'link': 'Sustainable Development Goals'
    },

    'navigation-about': {
        'link': 'About us'
    },
    'navigation-about-mission': {
        'link': 'Mission & Goals'
    },
    'navigation-about-people': {
        'link': 'People'
    },
    'navigation-about-partnerships': {
        'link': 'Partnerships'
    },
    'navigation-about-pwa': {
        'link': 'PWA'
    },
    'navigation-about-contact': {
        'link': 'Contact'
    },

    'navigation-events': {
      'link': 'Events'
    },
    'navigation-forum': {
        'link': 'Forum'
    },

    'navigation-login': {
        'link': 'Login'
    },
    'navigation-register': {
        'link': 'Register'
    },
    'navigation-profile': {
        'link': 'Profile'
    },
    'navigation-reset': {
        'link': 'Reset'
    },

    'navigation-terms': {
        'link': 'Privacy Policy & Terms of Use'
    }

    },
    'de': {

    'navigation-homepage': {
        'link': 'Home'
    },

    'navigation-contribute': {
        'link': 'Mitmachen'
    },
    'navigation-contribute-projects': {
        'link': 'Projekte'
    },
    'navigation-contribute-collaborations': {
        'link': 'Kollaborationen'
    },

    'navigation-startproject': {
        'link': 'Ihr Projekt'
    },
    'navigation-startproject-overview': {
        'link': 'Übersicht'
    },
    'navigation-startproject-offer': {
        'link': 'Unser Angebot'
    },
    'navigation-startproject-checklist': {
        'link': 'Checkliste'
    },
    'navigation-startproject-phases': {
        'link': 'Projektphasen'
    },

    'navigation-citizenscience': {
        'link': 'Citizen Science'
    },
    'navigation-citizenscience-zurichstyle': {
        'link': '«Züri Style»'
    },
    'navigation-citizenscience-sdg': {
        'link': 'Sustainable Development Goals'
    },

    'navigation-about': {
        'link': 'Über uns'
    },
    'navigation-about-mission': {
        'link': 'Mission & Ziele'
    },
    'navigation-about-people': {
        'link': 'Personen'
    },
    'navigation-about-partnerships': {
        'link': 'Partnerschaften'
    },
    'navigation-about-pwa': {
        'link': 'PWA'
    },
    'navigation-about-contact': {
        'link': 'Kontakt'
    },

    'navigation-events': {
        'link': 'Events'
    },
    'navigation-forum': {
        'link': 'Forum'
    },

    'navigation-login': {
        'link': 'Login'
    },
    'navigation-register': {
        'link': 'Registrieren'
    },
    'navigation-profile': {
        'link': 'Profil'
    },
    'navigation-reset': {
        'link': 'Zurücksetzen'
    },

    'navigation-terms': {
        'link': 'Privacy Policy & Terms of Use'
    }

    }

    }
})
