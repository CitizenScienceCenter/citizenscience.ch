<i18n>
  {
  "en": {
  "page-title": "Collaborations",

  "section-collaborations-heading": "Collaborations",
  "section-collaborations-openseventeen-subheading": "The Open Seventeen Challenge",
  "section-collaborations-openseventeen-lead": "Coaching for Citizen Science Innovation",
  "section-collaborations-openseventeen-text": "O17 is a challenged-based, online interactive coaching programme to help young global innovators connect and shape good ideas into viable social innovation projects for the 17 UN Sustainable Development Goals (SDGs). O17 supports projects that encourage grassroots public participation and citizen science through the use of open data and crowdsourcing.<br>The Challenge is a joint initiative with the Citizen Cyberlab at University of Geneva, and the Governance Lab at New York University.",
  "section-collaborations-toolkit-heading": "The SDG Crowdsourcing Toolkit",
  "section-collaborations-toolkit-lead": "Crowdsourcing Sustainable Development",
  "section-collaborations-toolkit-text": "The SDG Crowdsourcing Toolkit is an ambitious initiative led by CC-CS, in collaboration with the Citizen Cyberlab in Geneva, and aims at positioning Swiss CS at the core of scientific data taking for the SDGs. It will provide a set of open and flexible tools that feature the functionalities required by the most common CS projects, and that can integrate existing platforms and communities. All tools contribute data to a structured and easily accessible database, that - by making data sharing seamless - will facilitate cross-pollination of projects and initiatives.",
  "section-collaborations-toolkit-text-2": "To know more, please contact the CS Center’s team.",
  "section-collaborations-snapp-heading": "Snake ID Challenge",
  "section-collaborations-snapp-text": "The Citizen Science Center Zurich is collaborating with several Swiss and international partners on a support tool for snake identification based on crowdsourcing and Artificial Intelligence.",
  "section-collaborations-snapp-text-2": "Snakebite causes over 100,000 human deaths and 400,000 victims of disability and disfigurement globally every year, due to limited medical expertise in herpetology and limited access to antivenoms. To reduce potentially erroneous and/or delayed healthcare actions, the Snake App (SnApp) will combine computer vision with the expertise from a network of professional and non-professional herpetologists to identify photos of snakes. This app will serve as an educational and capacity-building platform for both citizens and healthcare professionals around the world, it will improve scientist’s understanding of snakebites and reinforce health systems in snakebite endemic countries."

  },
  "de": {
  "page-title": "Kollaborationen",

  "section-collaborations-heading": "Kollaborationen",
  "section-collaborations-openseventeen-subheading": "Die Open Seventeen Challenge",
  "section-collaborations-openseventeen-lead": "Coaching für innovative Citizen Science",
  "section-collaborations-openseventeen-text": "Der O17-Wettbewerb ist ein interaktives Online-Coaching-Programm, das jungen Innovatoren weltweit helfen soll, sich zu vernetzen und gute Ideen zu tragfähigen sozialen Innovationsprojekten weiterzuentwickeln. O17 unterstützt Projekte, die im engen Bezug zu den 17 UN-Nachhaltigkeitszielen (SDGs) stehen und die mit Hilfe von Open Data und Crowdsourcing Bürgerbeteiligung und Citizen Science fördern.<br>Der Wettbewerb ist eine gemeinsame Initiative des Citizen Cyberlab der Universität Genf und des Governance Lab der New York University.",
  "section-collaborations-toolkit-heading": "The SDG Crowdsourcing Toolkit",
  "section-collaborations-toolkit-lead": "Crowdsourcing für nachhaltige Entwicklung",
  "section-collaborations-toolkit-text": "Das SDG Crowdsourcing Toolkit ist eine gemeinsame Initiative des Kompetenzzentrums Citizen Science Zürich und des Citizen Cyberlabs in Genf. Ziel ist es, Citizen Science in der Schweiz als zentrales Element der wissenschaftlichen Datensammlung für die Sustainable Development Goals (SDGs) zu positionieren. Die gängigsten von Citizen Science-Projekten benötigten Funktionen stehen durch die flexibel einsetzbaren Tools frei zur Verfügung. Darüber hinaus können bereits existierende Plattformen und Communities integriert werden. Die Tools teilen bestimmte Daten mit einer zentralen und leicht zugänglichen Datenbank, wo sie von allen genutzt werden können; so können sich Projekte und Initiativen gegenseitig befruchten.",
  "section-collaborations-toolkit-text-2": "Wenn Sie mehr über das Toolkit erfahren möchten, wenden Sie sich bitte an das Team des Citizen Science-Centers.",
  "section-collaborations-snapp-heading": "Snake ID Challenge",
  "section-collaborations-snapp-text": "Das Citizen Science Center Zürich entwickelt zusammen mit verschiedenen Schweizer und internationalen Partnern ein Online-Tool zur Bestimmung von Schlangen. Das Tool verbindet Crowdsourcing und künstliche Intelligenz zur Datengewinnung.",
  "section-collaborations-snapp-text-2": "Schlangenbisse kosten weltweit jedes Jahr über 100’000 Menschenleben und verursachen 400'000 Fälle von Behinderung und Verstümmelung. Denn oft fehlt das Wissen darüber, um welche Schlangenart es sich handelt und somit auch die Antwort auf die Frage, welches das passende Gegengift ist.<br>Die Snake App (SnAPP) soll helfen, die Zahl von fälschlich oder zu spät durchgeführten medizinische Behandlungen zu reduzieren. Die App kombiniert computergestützte Bilderkennung mit der Expertise von professionellen Schlangenexperten und einem Netz aus Hobby-Herpetologen, um Schlangen zu identifizieren.<br>SnAPP soll eine Plattform für Weiterbildung und Capacity Building für Bürger und Gesundheitspersonal und auf der ganzen Welt werden. Es soll Wissenschaftlern helfen, das Phänomen Schlangenbiss besser zu verstehen und auch Gesundheitssysteme in betroffenen Regionen bei ihrer Arbeit unterstützen."

  }
  }
</i18n>

<template>
  <div>

    <app-content-section>

      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered" id="partnerships">{{ $t('section-collaborations-heading') }}</h2>
          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper">
          <div class="row row-centered row-reverse-large row-middle">
            <div class="col col-10 col-large-6 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-1">
              <div class="extra-padding-h">
                <img src="/img/o17.jpg" style="border-radius:50%" />
              </div>
            </div>
            <div class="col col-large-5 col-large-before-1 col-wrapping col-no-bottom-margin scroll-effect">
              <h3 class="subheading centered left-aligned-large">{{ $t('section-collaborations-openseventeen-subheading') }}
                <p class="lead" v-html="$t('section-collaborations-openseventeen-lead')"></p>
              </h3>
              <p v-html="$t('section-collaborations-openseventeen-text')"></p>
              <div class="centered left-aligned-large">
                <button class="button button-secondary button-icon button-normal-case" @click="openInNewTab('http://openseventeen.org')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                  openseventeen.org
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper">
          <div class="row row-centered row-middle">
            <div class="col col-large-6 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-1">
              <div class="extra-padding-h">
                <img src="/img/graphic-toolkit.png" />
              </div>
            </div>
            <div class="col col-large-5 col-large-after-1 col-wrapping col-no-bottom-margin scroll-effect">
              <h3 class="subheading centered left-aligned-large">{{ $t('section-collaborations-toolkit-heading') }}
                <p class="lead" v-html="$t('section-collaborations-toolkit-lead')"></p>
              </h3>
              <p v-html="$t('section-collaborations-toolkit-text')"></p>
              <p v-html="$t('section-collaborations-toolkit-text-2')"></p>
            </div>
          </div>
        </div>
      </div>

      <div class="content-subsection">
        <div class="content-wrapper">
          <div class="row row-centered row-reverse-large row-middle">
            <div class="col col-large-6 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-1">
              <div class="extra-padding-h">
                <p>
                  <img src="/img/snapp.jpg" style="border-radius:50%;" />
                </p>
                <p>
                  <img src="/img/snapp-logos.png" />
                </p>
              </div>
            </div>
            <div class="col col-large-5 col-large-before-1 col-wrapping col-no-bottom-margin scroll-effect">
              <h3 class="subheading centered left-aligned-large">{{ $t('section-collaborations-snapp-heading') }}
                <!-- <p class="lead" v-html="$t('section-collaborations-snapp-lead')"></p> -->
              </h3>
              <p v-html="$t('section-collaborations-snapp-text')"></p>
              <p v-html="$t('section-collaborations-snapp-text-2')"></p>

              <button class="button button-secondary" @click="openInNewTab('https://snakes.citizenscience.ch')">Visit the Project</button>

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
