<i18n>
{
  "en": {
    "page-title": "Events",

    "pint-subheading": "Wednesday, May 22, 2019<br>Snakebite Scenarios – How Would you React?",

    "section-events-heading": "Exploring Citizen Science – Methods, Projects, People",
    "section-lunches-subheading": "Brown Bag Lunches in Spring Term 2019",
    "section-lunches-text": "Always from 12:15 pm – 1:15 pm<br/>Location: University of Zurich, Main Building (KOL), Rämistrasse 71, 8006 Zürich<br>Drinks and sandwiches provided",
    "section-lunches-text-info": "<b>Please note:</b><br>Rooms change for each BB lunch, you find the information under each date below.",
    "section-lunches-text-register": "<b>Please register via E-Mail</b>",

    "section-lunches-lunch-title-1": "Wednesday, February 20, 2019",
    "section-lunches-lunch-text-1": "Dana Mahr, University of Geneva<br/>The Role of Experiential Knowledge for Citizen Science<br>Room: KOL-N-1 (Uniturm / Uni Tower)",
    "section-lunches-lunch-title-2": "Wednesday, March 20, 2019",
    "section-lunches-lunch-text-2": "Claudia Müller-Birn, Freie Universität Berlin<br/>Taking the Best of Both Worlds: the Concept of Human-Machine Collaboration for Designing an effective Partnership<br>Room: KOL-N-1 (Uniturm / Uni Tower)",
    "section-lunches-lunch-title-3": "Monday, April 1, 2019",
    "section-lunches-lunch-text-3": "Shannon Dosemagen, Public Lab<br/>Community Citizen Science and Collective Environmental Action<br/>Room: KOL-N-1 (Uniturm / Uni Tower)",
    "section-lunches-lunch-title-4": "Wednesday, May 15, 2019",
    "section-lunches-lunch-text-4": "Danièle Pralong, Project Noah<br/>Citizen Science: Managing Expectations of Participants and Scientists<br/>Room: KOL-G-212 (University of Zurich Main Building)",
    "section-lunches-lunch-title-5": "Wednesday, June 5, 2019",
    "section-lunches-lunch-text-5": "Jose Luis Fernandez-Marquez, University of Geneva<br/>Social Media Analysis and Crowd-Sourcing for Disaster Management<br/>Room: KOL-G-210 (University of Zurich Main Building)",

    "section-lunches-content-link": "Details",
    "section-lunches-missing-abstract": "Details will follow"
    },
  "de": {
    "page-title": "Events",

    "pint-subheading": "Mittwoch, 22. Mai, 2019<br>Snakebite Scenarios – How Would you React?",

    "section-events-heading": "Exploring Citizen Science – Methods, Projects, People",
    "section-lunches-subheading": "Brown Bag Lunches im Frühjahrssemester 2019",
    "section-lunches-text": "Jeweils von 12:15 – 13:15 Uhr<br/>Ort: Hauptgebäude im Zentrum (KOL), Rämistrasse 71, 8006 Zürich<br/>Getränke und Sandwiches offeriert",
    "section-lunches-text-info": "<b>Achtung:</b><br>Wechselnde Räume, die jeweilige Raumangabe finden Sie unten.",
    "section-lunches-text-register": "<b>Bitte melden Sie sich an unter:</b>",

    "section-lunches-lunch-title-1": "Mittwoch, 20. Februar 2019",
    "section-lunches-lunch-text-1": "Dana Mahr, Universität Genf<br/>The Role of Experiential Knowledge for Citizen Science<br/>Raum: KOL-N-1 (Uniturm)",
    "section-lunches-lunch-title-2": "Mittwoch, 20. März 2019",
    "section-lunches-lunch-text-2": "Claudia Müller-Birn, Freie Universität Berlin<br/>Taking the Best of Both Worlds: the Concept of Human-Machine Collaboration for Designing an effective Partnership<br/>Raum: KOL-N-1 (Uniturm)",
    "section-lunches-lunch-title-3": "Montag, 1. April 2019",
    "section-lunches-lunch-text-3": "Shannon Dosemagen, Public Lab<br/>Community Citizen Science and Collective Environmental Action<br/>Raum: KOL-N-1 (Uniturm)",
    "section-lunches-lunch-title-4": "Mittwoch, 15. Mai 2019",
    "section-lunches-lunch-text-4": "Danièle Pralong, Project Noah<br/>Citizen Science: Managing Expectations of Participants and Scientists<br/>Raum: KOL-G-212 (Universität Zürich Hauptgebäude)",
    "section-lunches-lunch-title-5": "Mittwoch, 5. Juni 2019",
    "section-lunches-lunch-text-5": "Jose Luis Fernandez-Marquez, Universität Genf<br/>Social Media Analysis and Crowd-Sourcing for Disaster Management<br/>Raum: KOL-G-210 (Universität Zürich Hauptgebäude)",

    "section-lunches-content-link": "Details",
    "section-lunches-missing-abstract": "Details folgen"

    }
}
</i18n>
<template>
  <div>

      <app-content-section>
          <div class="content-wrapper">
              <div class="row row-centered row-middle row-reverse-large">

                  <div class="col col-10 col-tablet-portrait-8 col-large-6 col-wrapping scroll-effect">
                      <div class="extra-padding-h">
                          <img src="img/events/pint_of_science.jpg" />
                      </div>
                  </div>

                  <div class="col col-large-5 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-1">
                      <div>
                          <h2 class="heading centered left-aligned-large" id="start-project">Pint of Science</h2>
                          <h3 class="subheading" v-html="$t('pint-subheading')"></h3>
                          <p class="">
                              Team up to decide how best to treat several snakebite scenarios from around the world. After, <b>snake expert Andrew Durso</b> from the University of Geneva will guide us through the answers & tell us a bit about the snakes of Switzerland.
                          </p>

                          <button class="button button-secondary button-icon" @click="openInNewTab('https://posfrorga.wixsite.com/pintofsciencech/bookoflifezurich')">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                              Pint of Science
                          </button>
                      </div>
                  </div>

              </div>

          </div>
      </app-content-section>


      <app-content-section class="overflow-hidden">
          <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
              <div class="content-wrapper">
                  <div class="row row-centered row-in-background">
                      <div class="col col-6 col-large-7 col-large-after-1 col-wrapping col-large-no-bottom-margin">
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
                          <p class="list-intro small" v-html="$t('section-lunches-text-info')"></p>
                          <p class="list-intro" v-html="$t('section-lunches-text-register')"></p>
                          <div class="margin-bottom">
                              <button class="button button-secondary button-normal-case button-icon" @click="openInNewTab('mailto:info@citizenscience.ch?subject=Brown Bag Lunch')">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                      <path d="M502.3,190.8c3.9-3.1,9.7-0.2,9.7,4.7V400c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V195.6c0-5,5.7-7.8,9.7-4.7c22.4,17.4,52.1,39.5,154.1,113.6c21.1,15.4,56.7,47.8,92.2,47.6c35.7,0.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8zM256,320c23.2,0.4,56.6-29.2,73.4-41.4c132.7-96.3,142.8-104.7,173.4-128.7c5.8-4.5,9.2-11.5,9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5,64,0,85.5,0,112v19c0,7.4,3.4,14.3,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7C199.4,290.8,232.8,320.4,256,320L256,320z"/>
                                  </svg>
                                  info@citizenscience.ch
                              </button>
                          </div>

                      </div>

                      <div class="content-subsection">

                          <h3 class="subheading reduced-bottom-margin" v-html="$t('section-lunches-lunch-title-1')"></h3>
                          <p class="reduced-bottom-margin" v-html="$t('section-lunches-lunch-text-1')"></p>
                          <expandable small>
                              <template slot="header">{{ $t('section-lunches-content-link') }}</template>
                              <template slot="content">
                                  With this presentation I explore an alternative explanatory narrative for the rise of participatory science in the 21st Century. I argue that experiential knowledge and individual bodily perception, the cornerstones of social movements in the 1970s, have been re-discovered within the epistemological framework of citizen science.
                              </template>
                          </expandable>
                          <h3 class="subheading reduced-bottom-margin" v-html="$t('section-lunches-lunch-title-2')"></h3>
                          <p class="reduced-bottom-margin"  v-html="$t('section-lunches-lunch-text-2')"></p>
                          <expandable small>
                              <template slot="header">{{ $t('section-lunches-content-link') }}</template>
                              <template slot="content">
                                  In the last years, peer production systems (e.g., Wikipedia, Wikidata) have emerged that involve a large number of people in problem-solving processes. Although the role of humans in such processes is essential, we want to show to what extent human and machine intelligence are combined to realize the complex tasks in these peer production systems.<br>
                                  Previous research has investigated the process of vandalism control in Wikipedia or the translation of social norms into algorithmic mechanisms defined by software functions and bots. From the discussion of these works, we infer the concept of human-machine collaboration and determine initial design parameters that allow us to transfer our findings to other application areas. We present, thus, the first results of our research on human-machine collaboration in the field of ideation.
                              </template>
                          </expandable>
                          <h3 class="subheading reduced-bottom-margin" v-html="$t('section-lunches-lunch-title-3')"></h3>
                          <p class="reduced-bottom-margin"  v-html="$t('section-lunches-lunch-text-3')"></p>
                          <expandable small>
                              <template slot="header">{{ $t('section-lunches-content-link') }}</template>
                              <template slot="content">
                                  Driven by people with environmental questions, the ability to use the scientific process of question asking, data collection and development of narrative gives agency and ownership to people who are impacted by environmental injustices. This model of using science to support community organizing has been leveraged by advances in civic technology, open source ecosystems and distributed networks. Using the case of Public Lab, we’ll take a closer look at how science and community action can be intertwined in our social lives as a way to better understand and engage with narratives that can shift and redistribute power.
                              </template>
                          </expandable>
                          <h3 class="subheading reduced-bottom-margin" v-html="$t('section-lunches-lunch-title-4')"></h3>
                          <p class="reduced-bottom-margin"  v-html="$t('section-lunches-lunch-text-4')"></p>
                          <expandable small>
                              <template slot="header">{{ $t('section-lunches-content-link') }}</template>
                              <template slot="content">
                                  Citizen science is on the rise worldwide, drawing large numbers of participants from the general public and the scientific community. The reasons for this are many, from pressuring concerns about climate, biodiversity and environmental issues calling for large data sets, to the availability of dedicated websites and innovative smartphone applications. Participants in citizen science projects come with a wide range of educational backgrounds and motivations that need to be catered for and adequately managed. Similarly, the expectation of scientists and the purpose of projects (education, awareness building, published research) should be clarified from the start. In this context community managers and educated members of the public can play a key role in bridging the culture gap between participants and the scientific community. Also, motivational incentives and engagement tools built into data collection platforms and applications should be carefully designed as to not favor data quantity at the expense of quality. At the same time, for publishable research solid data validation mechanisms should be put in place.<br>
                                  This presentation will draw from personal experience and management practice with a large worldwide citizen science platform, as well as from case studies and literature overview.
                              </template>
                          </expandable>
                          <h3 class="subheading reduced-bottom-margin" v-html="$t('section-lunches-lunch-title-5')"></h3>
                          <p class="reduced-bottom-margin"  v-html="$t('section-lunches-lunch-text-5')"></p>
                          <p class="small">
                              {{ $t('section-lunches-missing-abstract') }}
                          </p>

                      </div>

                  </div>
              </div>
          </div>
      </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>

  </div>
</template>

<script>

import ContentSection from '@/components/shared/ContentSection.vue'
import Footer from '@/components/shared/Footer.vue'
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import Expandable from "@/components/shared/Expandable";

export default {
  name: 'Events',
  components: {
      Expandable,
      SectionNewsletterSignup,
    'app-content-section': ContentSection,
    'app-footer': Footer
  },
    props: {
        platform: {
            type: Boolean,
            default: false
        }
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
