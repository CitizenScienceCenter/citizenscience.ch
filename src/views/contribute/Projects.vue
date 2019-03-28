<i18n>
  {
  "en": {
  "page-title": "Projects",

  "section-projects-heading": "Our Projects",

  "project-snake-title": "Snake ID Challenge",
  "project-snake-topic": "Herpetology",
  "project-snake-description": "Stuck indoors this winter? Dreaming of seeing snakes in the spring? Take advantage of the cold weather to test and refine your identification skills with our SnakeID challenge!",
  "project-snake-button": "Take part",

  "project-wenker-title": "Project Wenker",
  "project-wenker-topic": "Linguistics",
  "project-wenker-description": "Our first Citizen Science Project is in the field of linguistics. By transcribing and translating swiss sentences from the 1930s, you help researchers understand how Swiss German changed during the past 100 years.",
  "project-wenker-button": "Take part"

  },
  "de": {
  "page-title": "Projekte",

  "section-projects-heading": "Unsere Projekte",

  "project-snake-title": "Snake ID Challenge",
  "project-snake-topic": "Herpetologie",
  "project-snake-description": "Du hast den Winter satt und kannst es kaum erwarten im Frühling wieder Schlangen zu beobachten? Nutze die kalte Jahreszeit um deine Fähigkeiten im Bestimmen von Schlangen zu testen und zu verbessern – mit der Snake ID Challenge!",
  "project-snake-button": "Mach mit",

  "project-wenker-title": "Projekt Wenker",
  "project-wenker-topic": "Sprachwissenschaften",
  "project-wenker-description": "Im Rahmen eines Forschungsprojekts wurden vor rund 100 Jahren 40 hochdeutsche Sätze in die Dialekte der Schweiz übersetzt. Hilf uns, diesen Schatz zu heben.",
  "project-wenker-button": "Mach mit"

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
                        :projectTitle="$t('project-snake-title')"
                        :projectTopic="$t('project-snake-topic')"
                        :projectDescription="$t('project-snake-description')"
                        :buttonText="$t('project-snake-button')"
                        projectBgImage="/img/projects/snakechallenge.jpg"
                        projectImage="/img/projects/snakechallenge-intro.png"
                        url="https://snakes.citizenscience.ch"
                        colorGradientStart="#9a4b23"
                        colorGradientEnd="#418677"
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
                title: this.$t('page-title')
            }
        }
    }

</script>

<style lang="scss">

</style>
