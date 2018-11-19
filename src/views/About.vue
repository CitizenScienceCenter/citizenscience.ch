<i18n>
{
  "en": {
    "section-mission-heading": "Mission & Goals",
    "section-mission-text": "<b>The Center aims at:</b>",
    "section-mission-listitem-1": "Engaging academic scientists and the public in next-generation citizen science projects, tackling problems in different fields of science and society, from fundamental physics to human health.",
    "section-mission-listitem-2": "Providing the resources, expertise and technical know-how to develop, set up, and run citizen science projects.",
    "section-mission-listitem-3": "Maintaining the highest standards of excellence in research methodology, including scientific results, quality of data, and research ethics.",
    "section-mission-listitem-4": "Contributing to the global effort toward sustainable development, by creating actionable knowledge and data that can help tackle the UN SDGs at the local, regional and global level.",
    "section-mission-text-2": "The Citizen Science Center Zurich adheres to the principles of <b>Open Science</b> and operates in a fully <b>transparent</b> manner.",

    "section-principles-heading": "Principles",
    "section-principles-excellence-subheading": "Excellence",
    "section-principles-excellence-text": "The Citizen Science Center wants to develop and implement projects that reflect the highest standards possible in term of scientific rigor, data security, and ethics.",
    "section-principles-participation-subheading": "Participation",
    "section-principles-participation-text": "The Center aims at developing an active and productive participation at the different phases of the scientific research project, from funding allocation, topic selection, and research design, to execution, interpretation, and dissemination of results.",
    "section-principles-openness-subheading": "Openness",
    "section-principles-openness-text": "The Center adheres to the principles of open science (open access to data and publications) and operates in a fully transparent manner, ensuring that the public benefits from our work.",
    "section-principles-sustainability-subheading": "Sustainability",
    "section-principles-sustainability-text": "We want to ensure continuity in project support and knowledge dissemination. Therefore the development and maintenance of a community including both scientists and citizen scientists associated with the Center is vital.",

    "section-people-heading": "People",

    "section-partnership-heading": "Partners",
    "section-partnership-text": "The Citizen Cyberlab in Geneva develops methods and studies motivations for new forms of public participation in research.",

    "section-newsletter-heading": "Sign up for our Newsletter"
  },
  "de": {
    "section-mission-heading": "Mission & Ziele",
    "section-mission-text": "<b>Die Ziele des Centers sind folgende:</b>",
    "section-mission-listitem-1": "Forscherinnen und Forschern sowie Bürgerinnen und Bürgern die Möglichkeit zu geben, gemeinsame Forschungsprojekte in verschiedenen Bereichen von Wissenschaft und Gesellschaft durchzuführen, von Grundlagenphysik bis hin zu Gesundheitsthemen.",
    "section-mission-listitem-2": "Die Ressourcen, das Fachwissen und das technische Know-how zur Verfügung zu stellen um Citizen Science Projekt zu planen, zu entwickeln und durchzuführen.",
    "section-mission-listitem-3": "Exzellente Standards in der Forschungsmethodologie einzuhalten, einschliesslich der Ergebnisfindung, Datengewinnung und -qualität und der Forschungsethik.",
    "section-mission-listitem-4": "Uns an den weltweiten Bestrebungen für eine nachhaltige Entwicklung zu beteiligen, indem wir anwendbares Wissen und Daten generieren, um die SDGs auf lokaler, regionaler und globaler Ebene zu erreichen.",
    "section-mission-text-2": "Das Citizen Science Center Zürich sieht sich den Prinzipien von <b>Open Science</b> und <b>Transparenz</b> verpflichtet.",

    "section-principles-heading": "Prinzipien",
    "section-principles-excellence-subheading": "Exzellenz",
    "section-principles-excellence-text": "Das Zentrum entwickelt Projekte unter Einhaltung der höchsten Standards in Bezug auf wissenschaftliche Exzellenz, Datensicherheit und Ethik.",
    "section-principles-participation-subheading": "Teilhabe und Teilnahme",
    "section-principles-participation-text": "Bürgerinnen und Bürger sollen aktiv an den verschiedenen Phasen des Forschungsprozesses teilhaben können: Von der Art der Förderung und der Wahl des Themas, über das Forschungsdesign bis hin zu Ausführung, Auswertung und Veröffentlichung der Ergebnisse.",
    "section-principles-openness-subheading": "Offenheit",
    "section-principles-openness-text": "Das Center richtet sich nach den Grundsätzen von Open Science (offener Zugang zu Daten und Veröffentlichungen) und agiert völlig transparent, um sicherzustellen, dass unsere Arbeit der Allgemeinheit zu Gute kommt.",
    "section-principles-sustainability-subheading": "Nachhaltigkeit",
    "section-principles-sustainability-text": "Wir möchten Kontinuität in der Projektunterstützung und der Weitergabe von Wissen gewährleisten. Die Entwicklung und Pflege einer Gemeinschaft von Wissenschaftlerinnen und Bürgern ist uns deshalb besonders wichtig.",

    "section-people-heading": "Leute",

    "section-partnership-heading": "Partner",
    "section-partnership-text": "Das Citizen Cyberlab in Genf entwickelt Methoden und untersucht die Motivation für innovative Formen von öffentlicher Beteiligung in der Wissenschaft.",

    "section-newsletter-heading": "Abonniere unseren Newsletter"
  }
}
</i18n>
<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('section-mission-heading') }}</h2>
            <p class="list-intro" v-html="$t('section-mission-text')"></p>
            <ul>
              <li v-html="$t('section-mission-listitem-1')"></li>
              <li v-html="$t('section-mission-listitem-2')"></li>
              <li v-html="$t('section-mission-listitem-3')"></li>
              <li v-html="$t('section-mission-listitem-4')"></li>
            </ul>
            <p v-html="$t('section-mission-text-2')"></p>
          </div>
        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6 col-large-7 col-large-after-1">
              <img src="img/graphic-roadmap.png"/>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered">

          <div class="col col-large-10 scroll-effect">
            <h2 class="heading centered">{{ $t('section-principles-heading') }}</h2>
          </div>

          <div class="col col-tablet-portrait-10 col-large-6 col-wrapping scroll-effect">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <div class="extra-padding-h">
                  <img src="img/graphic-excellence.png"/>
                </div>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-principles-excellence-subheading') }}</h3>
            <p v-html="$t('section-principles-excellence-text')"></p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-6 col-wrapping scroll-effect scroll-effect-delayed-1">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <div class="extra-padding-h">
                  <img src="img/graphic-participation.png"/>
                </div>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-principles-participation-subheading') }}</h3>
            <p v-html="$t('section-principles-participation-text')"></p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-6 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-2">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <div class="extra-padding-h">
                  <img src="img/graphic-openness.png"/>
                </div>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-principles-openness-subheading') }}</h3>
            <p v-html="$t('section-principles-openness-text')"></p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-6 col-wrapping col-bottom-margin scroll-effect scroll-effect-delayed-3">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <div class="extra-padding-h">
                  <img src="img/graphic-sustainability.png"/>
                </div>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-principles-sustainability-subheading') }}</h3>
            <p v-html="$t('section-principles-sustainability-text')"></p>
          </div>

        </div>
      </div>
    </app-content-section>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-10 scroll-effect">
            <h2 class="heading centered">{{ $t('section-people-heading') }}</h2>
          </div>
          <div class="col scroll-effect">
            <app-people-list></app-people-list>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-10">
            <h2 class="heading centered">{{ $t('section-partnership-heading') }}</h2>
          </div>
        </div>
        <div class="row row-centered row-reverse-large row-middle">

          <div class="col col-large-6 col-large-after-1 col-wrapping col-large-no-bottom-margin">
            <div>
              <p v-html="$t('section-partnership-text')"></p>
            </div>
          </div>

          <div class="col col-6 col-large-3 col-large-before-2 col-wrapping col-no-bottom-margin">
            <div class="">
              <img src="img/ccl-logo.png" />
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
  }
}

</script>

<style lang="scss">

</style>
