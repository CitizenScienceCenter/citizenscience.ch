import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from './store/store.js';

Vue.use(VueI18n);

console.log("i18n")
var language;
if( !store.state.settings.language ) {
  // no language in store, check browser
  /*
  language = window.navigator.userLanguage || window.navigator.language;
  if (language.indexOf('-') !== -1) {
    language = language.split('-')[0];
  }
  if (language.indexOf('_') !== -1) {
    language = language.split('_')[0];
  }
  */
  store.dispatch("settings/setLanguage", 'en' );
}
language = store.state.settings.language;

export const i18n = new VueI18n({
  locale: language,
  messages: {
    'en': {
      'page-homepage': {
        'link': 'Home',
        'title': 'Citizen Science Center Zurich'
      },
      'page-activities': {
        'link': 'What we do',
        'title': 'What we do – Citizen Science Center Zürich'
      },
      'page-offer': {
        'link': 'What we offer',
        'title': 'What we offer – Citizen Science Center Zürich'
      },
      'page-about': {
        'link': 'About us',
        'title': 'About us – Citizen Science Center Zurich'
      }
    },
    'de': {
      'page-homepage': {
        'link': 'Home',
        'title': 'Citizen Science Center Zurich'
      },
      'page-activities': {
        'link': 'What weSADFASDF do',
        'title': 'What we do – Citizen Science Center Zürich'
      },
      'page-offer': {
        'link': 'What we offer',
        'title': 'What we offer – Citizen Science Center Zürich'
      },
      'page-about': {
        'link': 'About us',
        'title': 'About us – Citizen Science Center Zurich'
      }
    }
  }
})
