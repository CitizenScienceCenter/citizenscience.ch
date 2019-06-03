<i18n>
  {
  "en": {
  "page-title": "Start a Project",

  "section-projects-heading": "Conducting Citizen Science Projects",
  "section-projects-text": "Traditional Citizen Science projects involve members of the public in gathering data (often geo-located) via mobile or sensing technologies, or in analysing existing data via interactive and highly visual web interfaces. In an increasing number of cases the public is also involved in other phases of the research process, including the definition of the research questions, the interpretation of results, and the final dissemination of conclusions.<br>In the past two decades, citizen science has gained tremendous popularity both with scientists and the public, and citizen science projects span today a wide range of research topics.",
  "section-projects-text-2": "We are always happy to brainstorm and discuss how we can change the world with Citizen Science! If you have an idea for a project, get in touch with us. We can help you evaluate it and potentially provide you with expertise and tools to develop, set up, and run your project.",
  "section-projects-button": "Discover our Projects",

  "section-offer-heading": "What we offer",
  "section-offer-1-heading": "Interactive Tools",
  "section-offer-1-text": "A Web platform and a smartphone app  to support scientists and citizens with the implementation and evaluation of Citizen Science projects.",
  "section-offer-2-heading": "Community",
  "section-offer-2-text": "A community of citizens and scientists to cultivate collaboration and dialogue between the public, academia, industry, and politics.",
  "section-offer-3-heading": "Knowledge",
  "section-offer-3-text": "Theoretical, practical, legal and ethical guidelines and standards for the design, planning and implementation of Citizen Science projects.",
  "section-offer-button": "Learn more",

  "section-projects-checklist-heading": "Requirement Check",
  "section-projects-checklist-text": "We provide you with a set of agreed criteria for the transparent selection of Citizen Science projects, that wish to be supported by the Center.",
  "section-projects-checklist-button": "Criteria for Project Proposals",

  "section-projects-phases-heading": "Phases of a Citizen Science Project",
  "section-projects-phases-text": "In order to facilitate an agreed and transparent functioning of the Center, we provide you with a predefined process to propose and set up a Citizen Science project in collaboration with the Center.",
  "section-projects-phases-button": "Project Phases"

  },
  "de": {
  "page-title": "Ein Projekt starten",

  "section-projects-heading": "Durchführen von Citizen Science Projekten",
  "section-projects-text": "In den meisten Citizen Science Projekten beteiligen sich Bürgerinnen und Bürger durch das Sammeln und Auswerten von Daten. Dies geschieht häufig mithilfe von Smartphones, Apps und anderen mobilen Geräten oder interaktiven Websites. Immer häufiger sind Citizen Scientists auch in anderen Phasen des Forschungsprozesses aktiv: Sie definieren Forschungsfragen, interpretieren Ergebnisse und veröffentlichen Schlussfolgerungen.<br>In den letzten 20 Jahren erfreut sich Citizen Science immer grösserer Beliebtheit bei Wissenschaftlern und in der Öffentlichkeit; und auch das Themenspektrum wird immer breiter.",
  "section-projects-text-2": "Wir sind jederzeit offen für Austausch und Gespräch. Gerne überlegen wir mit Ihnen gemeinsam, wie man die Welt mit Citizen Science ein kleines Stück besser machen könnte. Treten Sie mit uns in Kontakt, wenn Sie eine Projektidee haben. Wir können Ihnen bei der Weiterentwicklung der Idee helfen und Ihnen bei positiver Evaluation unsere Tools und Expertise zur Verfügung stellen, um das Projekt realisieren.",
  "section-projects-button": "Entdecke unsere Projekte",

  "section-offer-heading": "Was wir bieten",
  "section-offer-1-heading": "Interaktive Tools",
  "section-offer-1-text": "Eine Web-Plattform und eine Smartphone App, die Forschende bei der Planung, Durchführung und Evaluierung von Citizen Science-Projekten unterstützen.",
  "section-offer-2-heading": "Community",
  "section-offer-2-text": "Eine Gemeinschaft von Bürgern und Wissenschaftlerinnen für mehr Zusammenarbeit und Dialog zwischen Öffentlichkeit, Wissenschaft, Industrie und Politik.",
  "section-offer-3-heading": "Wissen",
  "section-offer-3-text": "Theoretische, praktische, rechtliche und ethische Richtlinien und Standards für die Gestaltung von Citizen Science-Projekten.",
  "section-offer-button": "Mehr erfahren",

  "section-projects-checklist-heading": "Anforderungen",
  "section-projects-checklist-text": "Hier finden Sie die Kriterien für die Auswahl von Citizen Science-Projekten, die vom Zentrum unterstützt werden möchten.",
  "section-projects-checklist-button": "Kriterien für Projektevorschläge",

  "section-projects-phases-heading": "Phasen eines Citizen Science Projekts",
  "section-projects-phases-text": "Mit dieser Anleitung wollen wir unserer Vorgehensweise bei der Entwicklung von Projekten nachvollziehbar machen. Anhand von Meilensteinen ​​wird gezeigt, wie ein Citizen Science-Projekt in Zusammenarbeit mit dem Zentrum entstehen kann.",
  "section-projects-phases-button": "Projektphasen"

  }
  }
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-6">
              <div class="extra-padding">
                <img src="/img/graphic-question.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin scroll-effect">
            <h2 class="heading centered left-aligned-large" id="projects">{{ $t('section-projects-heading') }}</h2>
            <p v-html="$t('section-projects-text')"></p>
            <p v-html="$t('section-projects-text-2')"></p>
            <div class="button-group centered left-aligned-large">
              <button class="button button-secondary button-icon button-normal-case" @click="openInNewTab('mailto:info@citizenscience.ch')">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M502.3,190.8c3.9-3.1,9.7-0.2,9.7,4.7V400c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V195.6c0-5,5.7-7.8,9.7-4.7
                      c22.4,17.4,52.1,39.5,154.1,113.6c21.1,15.4,56.7,47.8,92.2,47.6c35.7,0.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8z
                       M256,320c23.2,0.4,56.6-29.2,73.4-41.4c132.7-96.3,142.8-104.7,173.4-128.7c5.8-4.5,9.2-11.5,9.2-18.9v-19c0-26.5-21.5-48-48-48H48
                      C21.5,64,0,85.5,0,112v19c0,7.4,3.4,14.3,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7C199.4,290.8,232.8,320.4,256,320L256,320z"/>
                    </svg>
                info@citizenscience.ch
              </button>
              <button class="button button-secondary button-icon" @click="openInNewTab('tel:+41446342197')">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M493.4,24.6l-104-24c-11.3-2.6-22.9,3.3-27.5,13.9l-48,112c-4.2,9.8-1.4,21.3,6.9,28l60.6,49.6
                        c-36,76.7-98.9,140.5-177.2,177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112,48c-10.7,4.7-16.6,16.3-14,27.6l24,104
                        C27.1,504.2,36.7,512,48,512c256.1,0,464-207.5,464-464C512,36.8,504.3,27.1,493.4,24.6z"/>
                    </svg>
                +41 44 634 21 97
              </button>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered">

          <div class="col col-large-10">
            <h2 class="heading centered">{{ $t('section-offer-heading') }}</h2>
          </div>

          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-large-no-bottom-margin scroll-effect">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <img src="/img/graphic-platform.png"/>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-offer-1-heading') }}</h3>
            <p class="">
              {{ $t('section-offer-1-text') }}
            </p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-1">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <img src="/img/graphic-community.png"/>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-offer-2-heading') }}</h3>
            <p class="">
              {{ $t('section-offer-2-text') }}
            </p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-2">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <img src="/img/graphic-knowledge.png"/>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-offer-3-heading') }}</h3>
            <p class="">
              {{ $t('section-offer-3-text') }}
            </p>
          </div>

          <div class="col">
            <p class="centered extra-margin-top">
              <router-link tag="button" to="/start/offer" class="button button-secondary">{{ $t('section-offer-button') }}</router-link>
            </p>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section>

      <div class="content-subsection">
        <div class="content-wrapper">
          <div class="row row-centered row-middle row-reverse-large row-wrapping">

            <div class="col col-6 col-large-4 col-large-after-1 col-wrapping">
              <div>
                <div class="extra-padding-large-h">
                  <img src="/img/graphic-checklist.png"/>
                </div>
              </div>
            </div>

            <div class="col col-large-6 col-large-before-1 col-wrapping">
              <h2 class="subheading centered left-aligned-large">{{ $t('section-projects-checklist-heading') }}</h2>
              <p v-html="$t('section-projects-checklist-text')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/start/checklist" class="button button-secondary">{{ $t('section-projects-checklist-button') }}</router-link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper">
          <div class="row row-centered row-middle row-wrapping">

            <div class="col col-6 col-large-4 col-large-before-1 col-wrapping">
              <div>
                <div class="extra-padding-large-h">
                  <img src="/img/graphic-steps.png"/>
                </div>
              </div>
            </div>

            <div class="col col-large-6 col-large-after-1 col-wrapping">
              <h2 class="subheading centered left-aligned-large">{{ $t('section-projects-phases-heading') }}</h2>
              <p v-html="$t('section-projects-phases-text')" class="reduced-bottom-margin"></p>
              <div class="button-group centered left-aligned-large">
                <router-link tag="button" to="/start/phases" class="button button-secondary">{{ $t('section-projects-phases-button') }}</router-link>
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
