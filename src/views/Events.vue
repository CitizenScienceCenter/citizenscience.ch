<i18n>
{
  "en": {
    "section-events-heading": "Events",

    "event-genealogy-date": "1. Dezember 2018",
    "event-genealogy-heading": "Workshop: Genetische Genealogie – Chancen und Herausforderungen",
    "event-genealogy-text": "Woher komme ich, wer waren meine Ahnen, wer bin ich? Diese zentralen Fragen beschäftigen die Familienforscherin und den Familienforscher seit jeher.",
    "event-genealogy-text-2": "ETH Zürich Hönggerberg, Gebäude HCI<br>Registration until: 23.11.2018",
    "event-genealogy-button": "Event Website",

    "section-newsletter-heading": "Sign up for our Newsletter"

    },
  "de": {
    "section-events-heading": "Events",

    "event-genealogy-date": "1. Dezember 2018",
    "event-genealogy-heading": "Workshop: Genetische Genealogie – Chancen und Herausforderungen",
    "event-genealogy-text": "Woher komme ich, wer waren meine Ahnen, wer bin ich? Diese zentralen Fragen beschäftigen die Familienforscherin und den Familienforscher seit jeher.",
    "event-genealogy-text-2": "ETH Zürich Hönggerberg, Gebäude HCI<br>Anmeldeschluss: 23.11.2018",
    "event-genealogy-button": "Zur Event Website",

    "section-newsletter-heading": "Abonniere unseren Newsletter"
  }
}
</i18n>
<template>
  <div>

      <app-content-section color="light-greyish">

          <div class="content-wrapper">
              <div class="row row-centered scroll-effect">
                  <div class="col col-large-10">
                      <h2 class="heading centered" id="projects">{{ $t('section-events-heading') }}</h2>
                  </div>
              </div>
          </div>

          <div class="content-subsection">
              <div class="content-wrapper">
                  <div class="row row-centered row-reverse-large row-middle">
                      <div class="col col-large-5 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect">
                          <h3 class="subheading centered left-aligned-large">
                              <p class="lead">{{ $t('event-genealogy-date') }}</p>
                              {{ $t('event-genealogy-heading') }}
                          </h3>
                          <p v-html="$t('event-genealogy-text')"></p>
                          <p v-html="$t('event-genealogy-text-2')"></p>
                          <p class="centered left-aligned-large">
                              <button class="button button-secondary button-icon" @click="openInNewTab('https://woherkommenwir.ch/')">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                                  {{ $t('event-genealogy-button') }}
                              </button>
                          </p>
                      </div>
                      <div class="col col-large-6 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-1">
                          <div class="extra-padding-h">
                              <img src="img/events/genealogy.jpg" style="width:100%; border-radius:50%" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </app-content-section>

    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-mobile-large-10">
            <h2 class="heading centered">{{ $t('section-newsletter-heading') }}</h2>
          </div>
        </div>
        <div class="row row-centered">
          <div class="col col-mobile-large-10 col-tablet-portrait-8 col-large-12">
            <app-newsletter-signup></app-newsletter-signup>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-footer></app-footer>

  </div>
</template>

<script>

import Cover from '@/components/shared/Cover.vue'
import ContentSection from '@/components/shared/ContentSection.vue'
import PeopleList from '@/components/shared/PeopleList.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'Who',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-people-list': PeopleList,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
  },
    methods: {
        openInNewTab: function(url) {
            var win = window.open(url, '_blank');
            win.focus();
        }
    }
}

</script>

<style lang="scss">

</style>
