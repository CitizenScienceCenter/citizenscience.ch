<i18n>
{
  "en": {
    "page-title": "Events",

    "section-events-heading": "Exploring Citizen Science – Methods, Projects, People",
    "section-lunches-subheading": "Brown Bag Lunches in Spring Term 2019",
    "section-lunches-text": "Always from 12am – 1 pm at RAF-E-011, Rämistrasse 66 (left entrance), unless told otherwise Drinks and sandwiches provided",
    "section-lunches-text-2": "<b>Please register via E-Mail</b>",

    "section-lunches-lunch-title-1": "Wednesday, February 20, 2019",
    "section-lunches-lunch-text-1": "Dana Mahr, University of Geneva<br/>Rethinking Science and Public Participation (working title)",
    "section-lunches-lunch-title-2": "Wednesday, March 20, 2019",
    "section-lunches-lunch-text-2": "Claudia Müller-Birn, Freie Universität Berlin<br/>Taking the Best of Both Worlds: the Concept of Human-Machine Collaboration for Designing an effective Partnership.",
    "section-lunches-lunch-title-3": "Monday, April 15, 2019",
    "section-lunches-lunch-text-3": "Shannon Dosemagen, Public Lab (invited)",
    "section-lunches-lunch-title-4": "Wednesday, May 15, 2019",
    "section-lunches-lunch-text-4": "Danièle Pralong, Project Noah<br/>Citizen Science: Managing Expectations of Participants and Scientists",
    "section-lunches-lunch-title-5": "Wednesday, June 5, 2019",
    "section-lunches-lunch-text-5": "Jose Luis Fernandez-Marquez, University of Geneva<br/>Social Media Analysis and Crowd-Sourcing for Disaster Management",


    "section-newsletter-heading": "Sign up for our Newsletter"
    },
  "de": {
    "page-title": "Events",

    "section-events-heading": "Exploring Citizen Science – Methods, Projects, People",
    "section-lunches-subheading": "Brown Bag Lunches im Frühjahrssemester 2019",
    "section-lunches-text": "Jeweils von 12:00 – 13:00 Uhr<br/>Universität Zürich, Rämistrasse 66 (linker Eingang), Raum RAF-E-011<br/>Getränke und Sandwiches offeriert",
    "section-lunches-text-2": "<b>Bitte melden Sie sich an unter:</b>",

    "section-lunches-lunch-title-1": "Mittwoch, 20. Februar 2019",
    "section-lunches-lunch-text-1": "Dana Mahr, Universität Genf<br/>Rethinking Science and Public Participation (Arbeitstitel)",
    "section-lunches-lunch-title-2": "Mittwoch, 20. März 2019",
    "section-lunches-lunch-text-2": "Claudia Müller-Birn, Freie Universität Berlin<br/>Taking the Best of Both Worlds: the Concept of Human-Machine Collaboration for Designing an effective Partnership.",
    "section-lunches-lunch-title-3": "Montag, 15. April 2019",
    "section-lunches-lunch-text-3": "Shannon Dosemagen, Public Lab (eingeladen)",
    "section-lunches-lunch-title-4": "Mittwoch, 15. Mai 2019",
    "section-lunches-lunch-text-4": "Danièle Pralong, Project Noah<br/>Citizen Science: Managing Expectations of Participants and Scientists",
    "section-lunches-lunch-title-5": "Mittwoch, 5. Juni 2019",
    "section-lunches-lunch-text-5": "Jose Luis Fernandez-Marquez, Universität Genf<br/>Social Media Analysis and Crowd-Sourcing for Disaster Management",

    "section-newsletter-heading": "Abonniere unseren Newsletter"
  }
}
</i18n>
<template>
  <div>

      <app-content-section class="overflow-hidden">
          <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
              <div class="content-wrapper">
                  <div class="row row-centered row-in-background">
                      <div class="col col-6 col-wrapping col-large-no-bottom-margin">
                          <img src="img/events/brownbag.jpg" style="border-radius: 50%"/>
                      </div>
                  </div>
              </div>
          </div>
          <div class="content-wrapper">
              <div class="row">
                  <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin scroll-effect">

                      <div class="content-subsection">

                          <h2 class="heading centered left-aligned-large" id="mission">{{ $t('section-events-heading') }}</h2>
                          <h3 class="subheading">{{ $t('section-lunches-subheading') }}</h3>
                          <p class="list-intro" v-html="$t('section-lunches-text')"></p>
                          <p class="list-intro" v-html="$t('section-lunches-text-2')"></p>
                          <div class="margin-bottom">
                              <button class="button button-secondary button-icon" @click="openInNewTab('mailto:info@citizenscience.ch?subject=Brown Bag Lunch')">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                      <path d="M502.3,190.8c3.9-3.1,9.7-0.2,9.7,4.7V400c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V195.6c0-5,5.7-7.8,9.7-4.7c22.4,17.4,52.1,39.5,154.1,113.6c21.1,15.4,56.7,47.8,92.2,47.6c35.7,0.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8zM256,320c23.2,0.4,56.6-29.2,73.4-41.4c132.7-96.3,142.8-104.7,173.4-128.7c5.8-4.5,9.2-11.5,9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5,64,0,85.5,0,112v19c0,7.4,3.4,14.3,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7C199.4,290.8,232.8,320.4,256,320L256,320z"/>
                                  </svg>
                                  info@citizenscience.ch
                              </button>
                          </div>

                      </div>

                      <div class="content-subsection">

                          <h3 class="subheading" style="margin-bottom: 0" v-html="$t('section-lunches-lunch-title-1')"></h3>
                          <p v-html="$t('section-lunches-lunch-text-5')">

                          </p>
                          <h3 class="subheading" style="margin-bottom: 0" v-html="$t('section-lunches-lunch-title-2')"></h3>
                          <p v-html="$t('section-lunches-lunch-text-5')"></p>
                          <h3 class="subheading" style="margin-bottom: 0" v-html="$t('section-lunches-lunch-title-3')"></h3>
                          <p v-html="$t('section-lunches-lunch-text-5')"></p>
                          <h3 class="subheading" style="margin-bottom: 0" v-html="$t('section-lunches-lunch-title-4')"></h3>
                          <p v-html="$t('section-lunches-lunch-text-5')"></p>
                          <h3 class="subheading" style="margin-bottom: 0" v-html="$t('section-lunches-lunch-title-5')"></h3>
                          <p v-html="$t('section-lunches-lunch-text-5')"></p>


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

import ContentSection from '@/components/shared/ContentSection.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'Events',
  components: {
    'app-content-section': ContentSection,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
  },
    metaInfo: function() {
        return {
            title: this.$t('page-title')
        }
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
