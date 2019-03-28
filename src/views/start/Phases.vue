<i18n>
  {
  "en": {
  "page-title": "Project Phases"
  },
  "de": {
  "page-title": "Projektphasen"
  }
  }
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">
              <img src="/img/graphic-steps.png"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">
            <div class="button-group centered left-aligned-large margin-bottom">
              <router-link tag="button" to="/activities#projects" class="button button-secondary button-secondary-naked button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576">
                  <path class="st0" d="M130.5,239L324.9,44.7c9.4-9.4,24.6-9.4,33.9,0l22.7,22.7c9.4,9.4,9.4,24.5,0,33.9L227.5,256l154,154.8 c9.3,9.4,9.3,24.5,0,33.9l-22.7,22.7c-9.4,9.4-24.6,9.4-33.9,0L130.5,273C121.2,263.6,121.2,248.4,130.5,239z"/>
                </svg>
                Conducting Citizen Science Projects</router-link>
            </div>
            <h2 class="heading centered left-aligned-large">Project Phases</h2>
            <p>In order to facilitate an agreed and transparent functioning of the Center, we provide you with a predefined process to propose and set up a Citizen Science project in collaboration with the Center.</p>
            <p>This is the result of a series of open discussions between the Center’s management and team, and representatives of the UZ and ETHZ research community.</p>
            <div class="button-group centered left-aligned-large">
              <button class="button button-secondary button-icon" @click="openInNewTab('/files/CS Center Zurich - Roadmap for Project Implementation.pdf')">
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

    <app-content-section>

      <div class="content-subsection">
        <div class="content-wrapper scroll-effect">
          <div class="row row-centered row-wrapping">

            <div class="col col-6 col-large-2 col-large-before-2 col-wrapping">
              <div>
                <div class="extra-padding-large-h">
                  <img src="/img/graphic-steps-1.png"/>
                </div>
              </div>
            </div>

            <div class="col col-large-6 col-large-after-2 col-wrapping">
              <h2 class="subheading centered left-aligned-large">Milestone 1 – You have an idea for a citizen science project – what’s first?</h2>
              <p>
                You (scientist or citizen) have an idea for a Citizen Science project and wish to collaborate with the Center to receive support. First thing you should do is check if your project fits the “Criteria for project support”.
              </p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/activities/checklist" class="button button-secondary">
                  Criteria for Project Proposals</router-link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper scroll-effect">
          <div class="row row-centered row-wrapping">

            <div class="col col-6 col-large-2 col-large-before-2 col-wrapping">
              <div>
                <div class="extra-padding-large-h">
                  <img src="/img/graphic-steps-2.png"/>
                </div>
              </div>
            </div>

            <div class="col col-large-6 col-large-after-2 col-wrapping">
              <h2 class="subheading centered left-aligned-large">Milestone 2 – The Citizen Science Center Zurich supports the Sustainable Development Goals: do you?</h2>
              <p>
                Is your research going to generate knowledge and data that can help assessing, monitoring and in general achieving the Sustainable Development Goals (SDGs)?
              </p>
            </div>

          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper scroll-effect">
          <div class="row row-centered row-wrapping">

            <div class="col col-6 col-large-2 col-large-before-2 col-wrapping">
              <div>
                <div class="extra-padding-large-h">
                  <img src="/img/graphic-steps-3.png"/>
                </div>
              </div>
            </div>

            <div class="col col-large-6 col-large-after-2 col-wrapping">
              <h2 class="subheading centered left-aligned-large">Milestone 3 – You are ready for action: which kind of support do you need from the Center?</h2>
              <p>
                You may have done citizen science projects before, or you may only have heard about it, and are just exploring the opportunity. In all cases, the Center is available to investigate with you all aspects of your project and makes sure that CS is an appropriate solution, and that your project will produce excellent scientific results while maximizing the involvement of citizens at all possible stages (Citizen Science “Zurich style”).
              </p>
            </div>

          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper scroll-effect">
          <div class="row row-centered row-wrapping">

            <div class="col col-6 col-large-2 col-large-before-2 col-wrapping">
              <div>
                <div class="extra-padding-large-h">
                  <img src="/img/graphic-steps-4.png"/>
                </div>
              </div>
            </div>

            <div class="col col-large-6 col-large-after-2 col-wrapping">
              <h2 class="subheading centered left-aligned-large">Milestone 4 –  How to access our support</h2>
              <p>
                Before reaching out to the Citizen Science Center Zurich, please prepare some structured information to help us understand your idea and plans.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper scroll-effect">
          <div class="row row-centered row-wrapping">

            <div class="col col-6 col-large-2 col-large-before-2 col-wrapping">
              <div>
                <div class="extra-padding-large-h">
                  <img src="/img/graphic-steps-5.png"/>
                </div>
              </div>
            </div>

            <div class="col col-large-6 col-large-after-2 col-wrapping">
              <h2 class="subheading centered left-aligned-large">Milestone 5 – Need additional resources? Consider partnerships</h2>
              <p>
                Once the resources  required for your project are clear, you may decide that you need additional skills, people, or financial resources. If so, it may be interesting to explore more formal and longer-term partnerships with the Center or its network.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper scroll-effect">
          <div class="row row-centered row-wrapping">

            <div class="col col-6 col-large-2 col-large-before-2 col-wrapping">
              <div>
                <div class="extra-padding-large-h">
                  <img src="/img/graphic-steps-6.png"/>
                </div>
              </div>
            </div>

            <div class="col col-large-6 col-large-after-2 col-wrapping">
              <h2 class="subheading centered left-aligned-large">Milestone 6 – Have you thought about ethics?</h2>
              <p>
                When setting up a project that involves the participation of citizens, researchers need to be aware of possible ethical and social issues. The Center has partnered with the Health Ethics and Policy Lab at ETH  and with the Digital Society Initiative at UZH to build and provide the necessary knowledge in the field.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper scroll-effect">
          <div class="row row-centered row-middle row-reverse-large row-wrapping">

            <div class="col col-large-6">
              <div class="button-group centered">
                <button class="button button-secondary button-icon" @click="openInNewTab('/files/CS Center Zurich - Roadmap for Project Implementation.pdf')">
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
