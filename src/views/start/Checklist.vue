<i18n>
{
  "en": {
    "page-title": "Checklist"
  },
  "de": {
    "page-title": "Checkliste"
  }
}
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6 col-large-7 col-large-after-1 col-wrapping col-large-no-bottom-margin">
              <img src="/img/graphic-checklist.png"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">Criteria for Project Proposals</h2>
            <p>The criteria allow a transparent selection of proposals and guarantee quality and consistency for the projects featured in the platform. </p>
            <ul>
              <li>The project is designed around a well-defined scientific question (in any field of natural sciences, social sciences, humanities and medicine) and the aim of the project is phrased as testable hypothesis.</li>
              <li>The project definition, objectives and outcomes are open and can be communicated in an accessible and comprehensible manner.</li>
              <li>The presence of scientific goals is a must, ie. if the project cannot have only educational and social goals.</li>
              <li>The objectives of the project are impossible – or very hard - to achieve without the contribution of the citizens.</li>
              <li>The project is open for citizens to participate in multiple stages of the design and implementation of the scientific research process. Projects with high level of potential involvement have priority.</li>
              <li>The project has wide general appeal for all stakeholders and is not restricted to a small interest group.</li>
              <li>The project’s topic and goals cover issues of proven importance and social interest, that can facilitate the recruitment of participants.</li>
              <li>The project maximizes the values offered to participants by touching on multiple value propositions and benefits.</li>
              <li>The project‘s goals are possible to achieve with a clear and easy protocol.</li>
              <li>The protocol guarantees that the data collected by citizen be of sufficient quality to answer the scientific question (generate a scientific publication) and/or be used to derive indicators for policies.</li>
              <li>The assignment of tasks and roles in the project (from the project leader to the citizen scientists) is clear and transparent.</li>
              <li>The technology necessary to perform the tasks is easily available or provided by the project organizers.</li>
              <li>The project’s goals (quantity of necessary data, coverage, required number of participants) are reasonable and achievable within a defined timeframe.</li>
              <li>The project demonstrates the availability of sufficient resources to achieve the desired goals.</li>
              <li>The project demonstrates a long-term commitment to fully engage with volunteers.</li>
              <li>The project management has considered ethical aspects (e.g. diversity, inclusion, gender equality, reflection on in- or exclusion of specific groups) from the early stage of the process design. </li>
              <li>The projects’ data and metadata are made publicly available, provided there are no legal or ethical arguments against doing so.</li>
              <li>The project has a data management plan which conforms to the European General Data Protection Regulation.</li>
              <li>The project management has evaluated and reduced all risks related to participation.</li>
              <li>The results of the project are published in an open-access format, provided there are no legal or ethical arguments against doing so.</li>
            </ul>
            <div class="button-group centered left-aligned-large">
              <button class="button button-secondary button-icon" @click="openInNewTab('/files/CS Center Zurich - CriteriaProjects.pdf')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M245.9,256.1c-5-16-4.9-46.9-2-46.9C252.3,209.2,251.5,246.1,245.9,256.1z M244.2,303.3c-7.7,20.2-17.3,43.3-28.4,62.7
                        c18.3-7,39-17.2,62.9-21.9C266,334.5,253.8,320.7,244.2,303.3L244.2,303.3z M150.1,428.1c0,0.8,13.2-5.4,34.9-40.2
                        C178.3,394.2,155.9,412.4,150.1,428.1z M312,160h136v328c0,13.3-10.7,24-24,24H88c-13.3,0-24-10.7-24-24V24C64,10.7,74.7,0,88,0h200
                        v136C288,149.2,298.8,160,312,160z M304,331.8c-20-12.2-33.3-29-42.7-53.8c4.5-18.5,11.6-46.6,6.2-64.2
                        c-4.7-29.4-42.4-26.5-47.8-6.8c-5,18.3-0.4,44.1,8.1,77c-11.6,27.6-28.7,64.6-40.8,85.8c-0.1,0-0.1,0.1-0.2,0.1
                        c-27.1,13.9-73.6,44.5-54.5,68c5.6,6.9,16,10,21.5,10c17.9,0,35.7-18,61.1-61.8c25.8-8.5,54.1-19.1,79-23.2
                        c21.7,11.8,47.1,19.5,64,19.5c29.2,0,31.2-32,19.7-43.4C363.7,325.4,323.3,329.3,304,331.8z M441,105L343,7c-4.5-4.5-10.6-7-17-7h-6
                        v128h128v-6.1C448,115.6,445.5,109.5,441,105z M366.9,360.3c4.1-2.7-2.5-11.9-42.8-9C361.2,367.1,366.9,360.3,366.9,360.3z"/>
                </svg>
                See the Document
              </button>
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
  name: 'What',
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
