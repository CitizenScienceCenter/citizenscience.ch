<i18n>
  {
  "en": {
  "page-title": "PWA",

  "section-pwa-heading": "Participatory Science Academy",
  "section-pwa-text": "The Participatory Science Academy (“Partizipative Wissenschaftsakademie”, PWA), established thanks to generous support of <a href='https://www.stiftung-mercator.ch/de/stiftung/' target='_blank'>Mercator Foundation Switzerland</a>, seeks to empower citizens and scientists to collaborate in all phases of the research process. To reach that goal, the Academy provides training and knowledge for citizen science for both citizen scientists as well as academic scientists. In order to enable the joint development of promising ideas, the PWA also awards seed grants to project teams.",
  "section-pwa-button": "www.pwa.uzh.ch"

  },
  "de": {
  "page-title": "PWA",

  "section-pwa-heading": "Partizipative Wissenschaftsakademie",
  "section-pwa-text": "Die Partizipative Wissenschaftsakademie (PWA) wird durch die  <a href='https://www.stiftung-mercator.ch/de/stiftung/' target='_blank'>Stiftung Mercator Schweiz</a> gefördert. Die PWA hat zum Ziel, die Teilhabe von Bürgerinnen und Bürgern an allen Phasen des wissenschaftlichen Forschungsprozesses zu ermöglichen. Im Rahmen eines Weiterbildungsangebots vermittelt sie Forschenden wie auch interessierten Bürgerinnen und Bürgern Kenntnisse und Kompetenzen für partizipatives Arbeiten. Zudem vergibt sie Seed Grants.",
  "section-pwa-button": "www.pwa.uzh.ch"

  }
  }
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">

      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large" id="community">{{ $t('section-pwa-heading') }}</h2>
            <p v-html="$t('section-pwa-text')"></p>
            <p class="centered left-aligned-large">
              <button class="button button-secondary button-icon button-normal-case" @click="openInNewTab('https://www.pwa.uzh.ch')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                {{ $t('section-pwa-button') }}
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6">
              <img src="/img/pwa.png"/>
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
