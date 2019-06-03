<i18n>
  {
  "en": {
  "page-title": "Partnerships",

  "section-partnership-heading": "Partnerships",
  "partnership-cyberlab-text": "The Citizen Cyberlab is a partnership between the European Particle Physics Laboratory, CERN, the UN Institute for Training and Research, UNITAR, and the University of Geneva. IN the lab, researchers from many disciplines develop methods and study motivations for new forms of public participation in research."

  },
  "de": {
  "page-title": "Partnerships",

  "section-partnership-heading": "Partnerschaften",
  "partnership-cyberlab-text": "Das Citizen Cyberlab in Genf entwickelt Methoden und untersucht die Motivation für innovative Formen von öffentlicher Beteiligung in der Wissenschaft."

  }
  }
</i18n>

<template>
  <div>


    <app-content-section>
      <div class="content-wrapper">

        <div class="content-subsection">

          <div class="row row-centered row-wrapping scroll-effect">

            <div class="col col-wrapping">

              <!-- <h2 class="heading centered" id="partners">{{ $t('section-partnership-heading') }}</h2> -->
              <h2 class="heading centered" id="partners">Research Partners</h2>

            </div>

            <!--
            <div class="col col-wrapping">
              <h3 class="subheading centered">Research Partners</h3>
            </div>
            -->

            <div class="col col-large-5 col-wrapping">
              <h3 class="subheading reduced-bottom-margin">Citizen Cyberlab</h3>
              <p v-html="$t('partnership-cyberlab-text')" class="reduced-bottom-margin"></p>
              <p class="reduced-bottom-margin">
                <img src="/img/ccl-logo.png" style="height: 48px" />
              </p>
              <div class="button-group margin-bottom">
                <button class="button button-secondary button-icon button-normal-case" @click="openInNewTab('http://citizencyberlab.org')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  citizencyberlab.org
                </button>
              </div>
            </div>

            <div class="col col-large-5 col-wrapping">
              <h3 class="subheading reduced-bottom-margin">URPP Dynamics of Healthy Aging, UZH</h3>
              <!-- <p class="reduced-bottom-margin"><b>URPP Dynamics of Healthy Aging, UZH</b></p> -->
              <p class="reduced-bottom-margin">
                At the University Research Priority Program (URPP) Dynamics of Healthy Aging, researchers examine the stabilization of psychological health and quality of life at low, intermediate and high levels of functioning from middle adulthood to advanced old age.
              </p>
              <div class="button-group margin-bottom">
                <button class="button button-secondary button-icon button-normal-case" @click="openInNewTab('http://dynage.uzh.ch')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  dynage.uzh.ch
                </button>
              </div>
            </div>

            <div class="col col-large-5 col-wrapping">
              <h3 class="subheading reduced-bottom-margin">People and Computing Lab, Department of Informatics, UZH</h3>
              <!-- <p class="reduced-bottom-margin"><b>People and Computing Lab, Department of Informatics, UZH</b></p> -->
              <p class="reduced-bottom-margin">
                People and Computing Lab is part of the Human-Computer Interaction group at the University of Zurich. The group takes an approach to research that goes beyond interface design and usability, and focuses on gaining a deep, contextualized understanding of the relationship between people and computing technologies.
              </p>
              <div class="button-group margin-bottom">
                <button class="button button-secondary button-icon" @click="openInNewTab('https://www.ifi.uzh.ch/en/zpac/casalendar.html')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  Website
                </button>
              </div>
            </div>

            <div class="col col-large-5 col-wrapping">
              <h3 class="subheading reduced-bottom-margin">Citizen Science Network Austria (CSNA)H</h3>
              <!-- <p class="reduced-bottom-margin"><b>Citizen Science Network Austria (CSNA)</b></p> -->
              <p class="reduced-bottom-margin">
                The Citizen Science Network Austria is coordinated by the University of Natural Resources and Life Sciences in Vienna, and includes partner institutions in Austria and beyond. The network of aims at promoting quality Citizen Science and strengthen the dialogue between science and society.
              </p>
              <p class="reduced-bottom-margin">
                <img src="/img/oesterreich-forscht.png" style="height: 40px" />
              </p>
              <div class="button-group margin-bottom">
                <button class="button button-secondary button-icon button-normal-case" @click="openInNewTab('https://www.citizen-science.at')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  citizen-science.at
                </button>
              </div>
            </div>

          </div>
        </div>
        <div class="content-subsection">
          <div class="row row-centered row-wrapping scroll-effect">

            <div class="col col-wrapping">
              <!-- <h3 class="subheading centered">Project Partners</h3> -->
              <h2 class="heading centered" id="partners">Project Partners</h2>
            </div>

            <div class="col col-large-5 col-wrapping">
              <h3 class="subheading reduced-bottom-margin">CrowdWater</h3>
              <!-- <p class="reduced-bottom-margin"><b>CrowdWater</b></p> -->
              <p class="reduced-bottom-margin">CrowdWater is a citizen science project to collect hydrological data. The goal is to develop a cheap and easy to use method of data collection that can be used to predict floods and low flow.</p>
              <p class="reduced-bottom-margin">
                <img src="/img/crowdwater-logo.png" style="height: 48px" />
              </p>
              <div class="button-group margin-bottom">
                <button class="button button-secondary button-icon button-normal-case" @click="openInNewTab('https://crowdwater.ch')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  crowdwater.ch
                </button>
              </div>
            </div>

            <div class="col col-large-5 col-wrapping">
              <h3 class="subheading reduced-bottom-margin">Seminar for Film Studies, UZ</h3>
              <!-- <p class="reduced-bottom-margin"><b>Seminar for Film Studies, UZ</b></p> -->
              <p class="reduced-bottom-margin">
                "Bridging the Gap Between Technology and Aesthetics", part of the project "Film Colors" funded by the European Research Council (ERC), examines the relationship between the technical processes and the aesthetics of films.
              </p>
              <div class="button-group margin-bottom">
                <button class="button button-secondary button-icon" @click="openInNewTab('https://www.film.uzh.ch/de/research/projects/verbund/ercfilmcolors.html')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  Website
                </button>
              </div>
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

    export default {
        components: {
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
                title: this.$t('page-title'),
                meta: [
                    {
                        property: 'og:title',
                        content: this.$t('page-title'),
                        template: '%s | '+this.$t('site-title')
                    }
                ]
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
