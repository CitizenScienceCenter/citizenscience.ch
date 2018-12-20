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
      'page-homepage': {
        'link': 'Home'
      },
      'page-activities': {
        'link': 'What we do'
      },
      'page-offer': {
        'link': 'What we offer'
      },
      'page-about': {
        'link': 'About us'
      },
      'page-events': {
          'link': 'Events'
      },
      'page-terms': {
          'link': 'Privacy Policy & Terms of Use'
      }
    },
    'de': {
      'page-homepage': {
        'link': 'Home'
      },
      'page-activities': {
        'link': 'Was wir tun'
      },
      'page-offer': {
        'link': 'Was wir bieten'
      },
      'page-about': {
        'link': 'Über uns'
      },
      'page-events': {
          'link': 'Events'
      },
      'page-terms': {
          'link': 'Privacy Policy & Terms of Use'
      }
    }
  }
})
