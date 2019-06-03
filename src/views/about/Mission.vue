<i18n>
  {
  "en": {
  "page-title": "Mission & Goals",

  "section-mission-heading": "Mission & Goals",
  "section-mission-text": "<b>The Center aims at:</b>",
  "section-mission-listitem-1": "Engaging academic scientists and the public in next-generation citizen science projects, tackling problems in different fields of science and society, from fundamental physics to human health.",
  "section-mission-listitem-2": "Providing the resources, expertise and technical know-how to develop, set up, and run citizen science projects.",
  "section-mission-listitem-3": "Maintaining the highest standards of excellence in research methodology, including scientific results, quality of data, and research ethics.",
  "section-mission-listitem-4": "Contributing to the global effort toward sustainable development, by creating actionable knowledge and data that can help tackle the UN SDGs at the local, regional and global level.",
  "section-mission-text-2": "The Citizen Science Center Zurich adheres to the principles of <b>Open Science</b> and operates in a fully <b>transparent</b> manner.",
  "section-mission-download-text": "Here You can find the Center’s Statute, including organizational structure:",
  "section-mission-download-button": "Center’s Statute",

  "section-about-heading": "A Joint Initiative",
  "section-about-text": "The Citizen Science Center is run jointly by the University of Zurich and the ETH Zurich.",
  "section-about-text-2": "Switzerland has a deep tradition of direct democracy and participatory decision-making, and Citizen Science can be viewed in many ways as the application of direct democracy to the scientific process.",
  "section-about-text-3": "Researchers at both UZH and ETHZ have a strong track record in citizen science, participatory research, and citizen science-related fields such as artificial intelligence, social science and the law. Combining these researchers’ expertise represents a unique opportunity for synergy.",
  "section-about-button": "Learn more about us"

  },
  "de": {
  "page-title": "Mission & Ziele",

  "section-mission-heading": "Mission & Ziele",
  "section-mission-text": "<b>Die Ziele des Centers sind folgende:</b>",
  "section-mission-listitem-1": "Forscherinnen und Forschern sowie Bürgerinnen und Bürgern die Möglichkeit zu geben, gemeinsame Forschungsprojekte in verschiedenen Bereichen von Wissenschaft und Gesellschaft durchzuführen, von Grundlagenphysik bis hin zu Gesundheitsthemen.",
  "section-mission-listitem-2": "Die Ressourcen, das Fachwissen und das technische Know-how zur Verfügung zu stellen um Citizen Science Projekt zu planen, zu entwickeln und durchzuführen.",
  "section-mission-listitem-3": "Exzellente Standards in der Forschungsmethodologie einzuhalten, einschliesslich der Ergebnisfindung, Datengewinnung und -qualität und der Forschungsethik.",
  "section-mission-listitem-4": "Uns an den weltweiten Bestrebungen für eine nachhaltige Entwicklung zu beteiligen, indem wir anwendbares Wissen und Daten generieren, um die SDGs auf lokaler, regionaler und globaler Ebene zu erreichen.",
  "section-mission-text-2": "Das Citizen Science Center Zürich sieht sich den Prinzipien von <b>Open Science</b> und <b>Transparenz</b> verpflichtet.",
  "section-mission-download-text": "Hier finden Sie die Geschäftsordnung des Centers mit Informationen zu Organisation und Struktur:",
  "section-mission-download-button": "Geschäftsordnung",

  "section-about-heading": "Eine gemeinsame Initiative",
  "section-about-text": "Das Citizen Science Center wird gemeinsam von der Universität Zürich und der ETH Zürich geführt.",
  "section-about-text-2": "Die Schweiz ist bekannt für ihre lange Tradition in direkter Demokratie und politischer Mitbestimmung. Citizen Science könnte als Übertragung dieser Idee von der Politik in die Wissenschaft angesehen werden.",
  "section-about-text-3": "Auch Forschende an UZH und ETH haben umfangreiche Erfahrungen in Citizen Science, partizipativer Forschung und verwandten Bereichen, wie künstlicher Intelligenz, den Sozialwissenschaften und der Rechtswissenschaft. Diese Kombination an Wissen und Kompetenzen am Standort Zürich ermöglicht vielfältige Synergien.",
  "section-about-button": "Mehr über uns"

  }
  }
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6 col-large-7 col-large-before-1 col-wrapping col-large-no-bottom-margin">
              <img src="/img/graphic-roadmap.png"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect">
            <h2 class="heading centered left-aligned-large" id="mission">{{ $t('section-mission-heading') }}</h2>
            <p class="list-intro" v-html="$t('section-mission-text')"></p>
            <ul>
              <li v-html="$t('section-mission-listitem-1')"></li>
              <li v-html="$t('section-mission-listitem-2')"></li>
              <li v-html="$t('section-mission-listitem-3')"></li>
              <li v-html="$t('section-mission-listitem-4')"></li>
            </ul>
            <p v-html="$t('section-mission-text-2')"></p>
            <p class="list-intro" v-html="$t('section-mission-download-text')"></p>
            <p class="centered left-aligned-large">
              <button class="button button-secondary button-icon" @click="openInNewTab('/files/geschaeftsordnung_cccs.pdf')">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <path d="M245.9,256.1c-5-16-4.9-46.9-2-46.9C252.3,209.2,251.5,246.1,245.9,256.1z M244.2,303.3c-7.7,20.2-17.3,43.3-28.4,62.7
                      c18.3-7,39-17.2,62.9-21.9C266,334.5,253.8,320.7,244.2,303.3L244.2,303.3z M150.1,428.1c0,0.8,13.2-5.4,34.9-40.2
                      C178.3,394.2,155.9,412.4,150.1,428.1z M312,160h136v328c0,13.3-10.7,24-24,24H88c-13.3,0-24-10.7-24-24V24C64,10.7,74.7,0,88,0h200
                      v136C288,149.2,298.8,160,312,160z M304,331.8c-20-12.2-33.3-29-42.7-53.8c4.5-18.5,11.6-46.6,6.2-64.2
                      c-4.7-29.4-42.4-26.5-47.8-6.8c-5,18.3-0.4,44.1,8.1,77c-11.6,27.6-28.7,64.6-40.8,85.8c-0.1,0-0.1,0.1-0.2,0.1
                      c-27.1,13.9-73.6,44.5-54.5,68c5.6,6.9,16,10,21.5,10c17.9,0,35.7-18,61.1-61.8c25.8-8.5,54.1-19.1,79-23.2
                      c21.7,11.8,47.1,19.5,64,19.5c29.2,0,31.2-32,19.7-43.4C363.7,325.4,323.3,329.3,304,331.8z M441,105L343,7c-4.5-4.5-10.6-7-17-7h-6
                      v128h128v-6.1C448,115.6,445.5,109.5,441,105z M366.9,360.3c4.1-2.7-2.5-11.9-42.8-9C361.2,367.1,366.9,360.3,366.9,360.3z"/>
                </svg>
                {{ $t('section-mission-download-button') }}
              </button>
            </p>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-reverse-large">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('section-about-heading') }}</h2>
            <p>{{ $t('section-about-text') }}</p>
            <p>
              {{ $t('section-about-text-2') }}<br/>
              {{ $t('section-about-text-3') }}
            </p>
            <p class="centered left-aligned-large">
              <img v-if="this.$i18n.locale === 'en'" class="uzh-eth-logo" alt="University of Zurich / ETH Zurich" src="@/assets/shared/uzh_eth_logo_e_pos.svg" />
              <img v-else alt="Universität Zürich / ETH Zürich" class="uzh-eth-logo" src="@/assets/shared/uzh_eth_logo_d_pos.svg" />
            </p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-7 col-large-after-1">
              <img src="/img/uzh-eth.jpg" style="border-radius:50%"/>
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
