<i18n>
  {
  "en": {
  "page-title": "Projects",

  "section-projects-heading": "Our Projects",

  "project-wiesel-title": "Weasel Wanted",
  "project-wiesel-topic": "Wild Life Research",
  "project-wiesel-description": "At various locations we have set up boxes equipped with a wildlife camera. The pictures give us an insight into the visitors of the box.",
  "project-wiesel-button": "Take part",

  "project-hatespeech-title": "Geschlechts&shy;spezifische Hassausdrücke (german only)",
  "project-hatespeech-topic": "Linguistics",
  "project-hatespeech-description": "Um unsere Ziele zu erreichen, bitten wir um Ihre Hilfe. In einem ersten Schritt (Identifikation) geht es darum, möglichst viele Texte anzuschauen und nach möglichen geschlechtsspezifischen Hassausdrücken zu suchen.",
  "project-hatespeech-button": "Take part",

  "project-snake-title": "Snake ID Challenge",
  "project-snake-topic": "Herpetology",
  "project-snake-description": "Stuck indoors this winter? Dreaming of seeing snakes in the spring? Take advantage of the cold weather to test and refine your identification skills with our SnakeID challenge!",
  "project-snake-button": "Take a look",
  "project-snake-info": "The first challenge is over. There are more to come...",
  "project-snake-sign": "Ended",

  "project-wenker-title": "Project Wenker",
  "project-wenker-topic": "Linguistics",
  "project-wenker-description": "Our first Citizen Science Project is in the field of linguistics. By transcribing and translating swiss sentences from the 1930s, you help researchers understand how Swiss German changed during the past 100 years.",
  "project-wenker-button": "Take part",

  "section-partner-projects-heading": "Partner's Projects",
  "section-partner-projects-crowdwater-text": "CrowdWater at the university of Zurich aims to examine the potential of crowdsourcing in the field of hydrology. The focus lies on water level, streamflow and soil moisture data. The aim of the project is to collect a large amount of data and to improve the forecast of hydrological events, such as droughts or floods.",
  "section-partner-projects-crowdwater-button": "Visit Project",
  "section-partner-projects-hatespeech-text": "The Stop Hate Speech project works against hostility and discrimination on the Internet. Using an algorithm that learns from an active community, Hate Speech is tracked down in the net and rejected by the community. Thus, an acute and global problem is tackled locally and innovatively.",
  "section-partner-projects-hatespeech-button": "Visit Project"

  },
  "de": {
  "page-title": "Projekte",

  "section-projects-heading": "Unsere Projekte",

  "project-wiesel-title": "Wiesel gesucht",
  "project-wiesel-topic": "Wildtierforschung",
  "project-wiesel-description": "An verschiedenen Standorten haben wir Boxen aufgestellt, die mit einer Wildtierkamera ausgestattet sind. Die Aufnahmen der Kameras geben uns einen Einblick in die Besucher der Box.",
  "project-wiesel-button": "Mitmachen",

  "project-hatespeech-title": "Geschlechts&shy;spezifische Hassausdrücke",
  "project-hatespeech-topic": "Sprachwissenschaften",
  "project-hatespeech-description": "Um unsere Ziele zu erreichen, bitten wir um Ihre Hilfe. In einem ersten Schritt (Identifikation) geht es darum, möglichst viele Texte anzuschauen und nach möglichen geschlechtsspezifischen Hassausdrücken zu suchen.",
  "project-hatespeech-button": "Mitmachen",
  "project-snake-title": "Snake ID Challenge",
  "project-snake-topic": "Herpetologie",
  "project-snake-description": "Du hast den Winter satt und kannst es kaum erwarten im Frühling wieder Schlangen zu beobachten? Nutze die kalte Jahreszeit um deine Fähigkeiten im Bestimmen von Schlangen zu testen und zu verbessern – mit der Snake ID Challenge!",
  "project-snake-button": "Ansehen",
  "project-snake-info": "Die Erste Challenge ist vorüber. Weitere folgen...",
  "project-snake-sign": "Beendet",

  "project-wenker-title": "Projekt Wenker",
  "project-wenker-topic": "Sprachwissenschaften",
  "project-wenker-description": "Im Rahmen eines Forschungsprojekts wurden vor rund 100 Jahren 40 hochdeutsche Sätze in die Dialekte der Schweiz übersetzt. Hilf uns, diesen Schatz zu heben.",
  "project-wenker-button": "Mitmachen",

  "section-partner-projects-heading": "Partnerprojekte",
  "section-partner-projects-crowdwater-text": "CrowdWater ist ein Projekt der Universität Zürich und untersucht das Potential von crowdsourcing im Bereich Hydrologie. Konkret geht es um Wasserstand, Abfluss und Bodenfeuchte. Das Ziel ist es, möglichst viele Beobachtungen zu erheben und damit die Vorhersage hydrologischer Ereignisse wie zum Beispiel Trockenheit oder Überschwemmung zu verbessern.",
  "section-partner-projects-crowdwater-button": "Zum Projekt",
  "section-partner-projects-hatespeech-text": "Das Projekt Stop Hate Speech geht gegen Anfeindungen und Diskriminierung im Internet vor. Mithilfe eines Algorithmus, welcher von einer aktiven Community lernt, wird Hate Speech im Netz aufgespürt und von der Community zurückgewiesen. So wird ein akutes und globales Problem lokal und innovativ bekämpft.",
  "section-partner-projects-hatespeech-button": "Zum Projekt"

  }
  }
</i18n>

<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered" id="projects">{{ $t('section-projects-heading') }}</h2>
          </div>
        </div>
        <div class="scroll-effect">
          <div class="row row-centered row-wrapping">

            <div class="col col-wrapping col-large-10 col-xlarge-8 scroll-effect">
              <div>
                <project-teaser
                        :projectTitle="$t('project-wiesel-title')"
                        :projectTopic="$t('project-wiesel-topic')"
                        :projectDescription="$t('project-wiesel-description')"
                        :buttonText="$t('project-wiesel-button')"
                        projectBgImage="/img/projects/wiesel.jpg"
                        projectImage="/img/projects/wiesel-intro.png"
                        url="https://wiesel-gesucht.citizenscience.ch"
                        colorGradientStart="#99695c"
                        colorGradientEnd="#3f6fa0"
                ></project-teaser>
              </div>
            </div>

            <div class="col col-wrapping col-large-10 col-xlarge-8 scroll-effect">
              <div>
                <project-teaser
                        :projectTitle="$t('project-hatespeech-title')"
                        :projectTopic="$t('project-hatespeech-topic')"
                        :projectDescription="$t('project-hatespeech-description')"
                        :buttonText="$t('project-hatespeech-button')"
                        projectBgImage="/img/projects/hatespeech.jpg"
                        projectImage="/img/projects/hatespeech-intro.png"
                        url="https://hatespeech.citizenscience.ch"
                        colorGradientStart="#6e4f9e"
                        colorGradientEnd="#478161"
                        infoSign="Beta"
                ></project-teaser>
              </div>
            </div>

            <div class="col col-wrapping col-large-10 col-xlarge-8 scroll-effect">
              <div>
                <project-teaser
                        :projectTitle="$t('project-wenker-title')"
                        :projectTopic="$t('project-wenker-topic')"
                        :projectDescription="$t('project-wenker-description')"
                        :buttonText="$t('project-wenker-button')"
                        projectBgImage="/img/projects/wenker.jpg"
                        projectImage="/img/projects/wenker-intro.png"
                        url="https://wenker.citizenscience.ch"
                        colorGradientStart="#3e6189"
                        colorGradientEnd="#766b51"
                ></project-teaser>
              </div>
            </div>

            <div class="col col-wrapping col-large-10 col-xlarge-8 scroll-effect">
              <div>
                <project-teaser
                        :projectTitle="$t('project-snake-title')"
                        :projectTopic="$t('project-snake-topic')"
                        :projectDescription="$t('project-snake-description')"
                        :buttonText="$t('project-snake-button')"
                        projectBgImage="/img/projects/snakechallenge.jpg"
                        projectImage="/img/projects/snakechallenge-intro.png"
                        url="https://snakes.citizenscience.ch"
                        colorGradientStart="#9a4b23"
                        colorGradientEnd="#418677"
                        :infoText="$t('project-snake-info')"
                        :infoSign="$t('project-snake-sign')"
                ></project-teaser>
              </div>
            </div>

          </div>

        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered" id="projects">{{ $t('section-partner-projects-heading') }}</h2>
          </div>
        </div>

        <div class="row row-centered scroll-effect row-wrapping margin-bottom">
          <div class="col col-6 col-tablet-portrait-6 col-large-3 col-large-before-2 col-wrapping">
            <img src="/img/projects/crowdwater.png" />
          </div>
          <div class="col col-tablet-portrait-10 col-large-5 col-large-after-2 col-wrapping">
            <p class="reduced-bottom-margin" v-html="$t('section-partner-projects-crowdwater-text')"></p>
            <div class="centered left-aligned-large">
              <button class="button button-secondary" @click="openInNewTab('https://www.crowdwater.ch')">{{ $t('section-partner-projects-crowdwater-button') }}</button>
            </div>
          </div>
        </div>

        <div class="row row-centered scroll-effect row-wrapping">
          <div class="col col-6 col-tablet-portrait-6 col-large-3 col-large-before-2 col-wrapping">
            <img src="/img/projects/stophatespeech.png" />
          </div>
          <div class="col col-tablet-portrait-10 col-large-5 col-large-after-2 col-wrapping">
            <p class="reduced-bottom-margin" v-html="$t('section-partner-projects-hatespeech-text')"></p>
            <div class="centered left-aligned-large">
              <button class="button button-secondary" @click="openInNewTab('http://www.stophatespeech.ch')">{{ $t('section-partner-projects-hatespeech-button') }}</button>
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
    import ProjectTeaser from '@/components/ProjectTeaser';

    export default {
        components: {
            SectionNewsletterSignup,
            ProjectTeaser,
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
