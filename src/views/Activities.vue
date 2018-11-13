<i18n>
{
  "en": {
    "section-citizenscience-heading": "Citizen Science",
    "section-citizenscience-text": "The activities of the Citizen Science Center Zurich focus on exploring, supporting, and promoting Citizen Science. Citizen Science is a form of public participation in scientific research (where “citizen” denotes a member of the general public, independent from citizenship) that has been around for more than a century.",
    "section-citizenscience-text-2": "Public participation in science is a practice that works across many disciplines and that comes in different flavours and with different names, including community based research, crowd-sourced data collection, community-based monitoring, civic science, and more. What characterizes Citizen Science is the <b>collaboration of professional scientists and citizens</b>, the active involvement of both, and the engagement of citizens in potentially all phases of the research process.",

    "section-next-gen-citizenscience-subheading": "Next Generation Citizen Science",
    "section-next-gen-citizenscience-text": "The main goal of scientific research, including Citizen Science projects, is to produce excellent science to advance our understanding of the world we leave in. We strongly believe that it should also empower society with a form of actionable understanding, ie. with the opportunity to produce data for change.",
    "section-next-gen-citizenscience-text-2": "The Citizen Science Center Zurich Center aims at supporting next generation Citizen Science, ie. projects that use the latest collaborative technologies and the highest quality standards to produce <b>excellent science and quality open data</b> that can help citizens, communities and governments to move toward a more sustainable world.",

    "section-projects-heading": "Citizen Science Projects",
    "section-projects-text": "Traditional Citizen Science projects involve members of the public in gathering data (often geo-located) via mobile or sensing technologies, or in analysing existing data via interactive and highly visual web interfaces. In an increasing number of cases the public is also involved in other phases of the research process, including the definition of the research questions, the interpretation of results, and the final dissemination of conclusions.",
    "section-projects-text-2": "In the past two decades, citizen science has gained tremendous popularity both with scientists and the public, and citizen science projects span today a wide range of research topics.",

    "section-benefits-heading": "Benefits of Citizen Science",
    "section-benefits-subheading-1": "For Scientists",
    "section-benefits-text-1": "The methodology offers Scientists the potential to tackle research questions with large datasets on a wide geographical area. It also allows for a much more dynamic and interactive approach to the formulation of hypotheses, research design, and data analysis.",
    "section-benefits-subheading-2": "For Citizens",
    "section-benefits-text-2": "With their volunteer activity, Citizens increase their knowledge and literacy about the topic studied, gain insight into the scientific process and method, and acquire new technological skills and abilities.",
    "section-benefits-subheading-3": "For Society",
    "section-benefits-text-3": "For the benefit of the wider SOCIETY, outcomes of Citizen Science projects include community development and empowerment, change of attitudes and behaviours, and renewed engagement in policy making.",

    "section-sdg-heading": "Citizen Science for the SDGs",
    "section-sdg-text": "The Sustainable Development Goals (SDGs) are a set of global goals developed in 2015 by the 193 UN member states and representatives of civil society. They are part of the UN Agenda 2030, a comprehensive call for action to achieve a better and more sustainable future for all.",
    "section-sdg-text-2": "High quality, timely and accessible data are required to monitor progress towards the goals, and there is a strong consensus that citizen engagement is critical.",
    "section-sdg-text-3": "Through citizen science, people can directly engage with and monitor issues that affect them, bring new perspectives and knowledge into science and decision-making, and ultimately demand or drive change.",

    "section-sdgquote-quote": "«The monitoring and accountability framework, spanning from the local to the global levels, must be people ­centred, inclusive, transparent and participatory»",
    "section-sdgquote-source": "(TAP Network 2015, 1).",

    "section-partnerships-heading": "Partnerships and Collaborations",
    "section-partnerships-openseventeen-subheading": "The Open Seventeen",
    "section-partnerships-openseventeen-lead": "Coaching for Citizen Science Innovation",
    "section-partnerships-openseventeen-text": "O17 is a challenged-based, online interactive coaching programme to help young global innovators connect and shape good ideas into viable social innovation projects for the 17 UN Sustainable Development Goals (SDGs). O17 supports projects that encourage grassroots public participation and citizen science through the use of open data and crowdsourcing.",
    "section-partnerships-openseventeen-text-2": "The Challenge is a joint initiative with the Citizen Cyberlab at University of Geneva, and the Governance Lab at New York University.",
    "section-partnerships-toolkit-heading": "The SDG Crowdsourcing Toolkit",
    "section-partnerships-toolkit-lead": "Crowdsourcing Sustainable Development",
    "section-partnerships-toolkit-text": "The SDG Crowdsourcing Toolkit is an ambitious initiative led by CC-CS, in collaboration with the Citizen Cyberlab in Geneva, and aims at positioning Swiss CS at the core of scientific data taking for the SDGs. It will provide a set of open and flexible tools that feature the functionalities required by the most common CS projects, and that can integrate existing platforms and communities. All tools contribute data to a structured and easily accessible database, that - by making data sharing seamless - will facilitate cross-pollination of projects and initiatives.",
    "section-partnerships-toolkit-text-2": "To know more, please contact the CS Center’s team.",
    "section-partnerships-snapp-heading": "SnApp",
    "section-partnerships-snapp-lead": "Snake Bites",
    "section-partnerships-snapp-text": "The Citizen Science Center Zurich is collaborating with several Swiss and international partners on a support tool for snake identification based on crowdsourcing and Artificial Intelligence.",
    "section-partnerships-snapp-text-2": "Snakebite causes over 100,000 human deaths and 400,000 victims of disability and disfigurement globally every year, due to limited medical expertise in herpetology and limited access to antivenoms. To reduce potentially erroneous and/or delayed healthcare actions, the Snake App (SnApp) will combine computer vision with the expertise from a network of professional and non-professional herpetologists to identify photos of snakes. This app will serve as an educational and capacity-building platform for both citizens and healthcare professionals around the world, it will improve scientist’s understanding of snakebites and reinforce health systems in snakebite endemic countries.",

    "section-newsletter-heading": "Sign up for our Newsletter"
  }
}
</i18n>

<template>
  <div>

    <app-content-section>
      <div class="content-wrapper content-wrapper-large-min-height scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">{{ $t('section-citizenscience-heading') }}</h2>
            <p v-html="$t('section-citizenscience-text')"></p>
            <p>
              <div class="row">
                <div class="col col-3">
                  <img src="img/projects/galaxyzoo.jpg" style="width:100%; border-radius:50%"/>
                </div>
                <div class="col col-9" style="padding-left: 0">
                  <p class="small">
                    <b>Example:</b> In the Galaxy Zoo project, hundreds of thousands of citizens have helped astronomers classify millions of images of galaxies coming from international telescopes (2007 – 2017) <a href="https://zoo4.galaxyzoo.org/" target="_blank">zoo4.galaxyzoo.org</a>
                  </p>
                </div>
              </div>
            </p>
            <p v-html="$t('section-citizenscience-text-2')"></p>
            <h3 class="subheading">{{ $t('section-next-gen-citizenscience-subheading') }}</h3>
            <p v-html="$t('section-next-gen-citizenscience-text')"></p>
            <p v-html="$t('section-next-gen-citizenscience-text-2')"></p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-6">
              <div class="extra-padding">
                <img src="img/graphic-citizen-science.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">{{ $t('section-projects-heading') }}</h2>
            <p v-html="$t('section-projects-text')"></p>
            <p v-html="$t('section-projects-text-2')"></p>
          </div>
        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6">
              <img src="img/graphic-projects.png"/>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered">

          <div class="col col-large-10 scroll-effect">
            <h2 class="heading centered">{{ $t('section-benefits-heading') }}</h2>
          </div>

          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping  col-large-no-bottom-margin scroll-effect scroll-effect-delayed-1">
            <h3 class="subheading centered">{{ $t('section-benefits-subheading-1') }}</h3>
            <p v-html="$t('section-benefits-text-1')"></p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-2">
            <h3 class="subheading centered">{{ $t('section-benefits-subheading-2') }}</h3>
            <p v-html="$t('section-benefits-text-2')"></p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-3">
            <h3 class="subheading centered">{{ $t('section-benefits-subheading-3') }}</h3>
            <p v-html="$t('section-benefits-text-3')"></p>
          </div>

        </div>
      </div>
    </app-content-section>



    <app-content-section>
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin">
            <p class="centered left-aligned-large">
              <img src="img/sdg-logo.svg" style="width:25%"/>
            </p>
            <h2 class="heading centered left-aligned-large">{{ $t('section-sdg-heading') }}</h2>
            <p v-html="$t('section-sdg-text')"></p>
            <p v-html="$t('section-sdg-text-2')"></p>
            <p v-html="$t('section-sdg-text-3')"></p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-8 col-large-6">
              <img src="img/sdg-wheel.png"/>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section color="dark">
      <div class="content-wrapper scroll-effect">
        <div class="row row-centered">
          <div class="col col-large-8">
            <p class="quote centered" v-html="$t('section-sdgquote-quote')"></p>
            <p class="centered small" v-html="$t('section-sdgquote-source')"></p>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">

        <div class="content-wrapper">
          <div class="row row-centered scroll-effect">
            <div class="col col-large-10">
              <h2 class="heading centered" id="projects">{{ $t('section-partnerships-heading') }}</h2>
            </div>
          </div>
        </div>

        <div class="content-subsection">
          <div class="content-wrapper">
            <div class="row row-centered row-middle">
              <div class="col col-large-5 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect">
                <h2 class="subheading centered left-aligned-large">{{ $t('section-partnerships-openseventeen-subheading') }}
                  <p class="lead" v-html="$t('section-partnerships-openseventeen-lead')"></p>
                </h2>
                <p v-html="$t('section-partnerships-openseventeen-text')"></p>
                <p v-html="$t('section-partnerships-openseventeen-text-2')"></p>
                <p class="centered left-aligned-large">
                  <button class="button button-secondary button-icon" @click="openInNewTab('http://openseventeen.org')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                    openseventeen.org
                  </button>
                </p>
              </div>
              <div class="col col-10 col-large-6 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-1">
                <div class="extra-padding-h">
                  <img src="img/o17.jpg" style="border-radius:50%" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-subsection">
          <div class="content-wrapper">
            <div class="row row-centered row-reverse-large row-middle">
              <div class="col col-large-5 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect">
                <h2 class="subheading centered left-aligned-large">{{ $t('section-partnerships-toolkit-heading') }}
                  <p class="lead" v-html="$t('section-partnerships-toolkit-lead')"></p>
                </h2>
                <p v-html="$t('section-partnerships-toolkit-text')"></p>
                <p v-html="$t('section-partnerships-toolkit-text-2')"></p>
              </div>
              <div class="col col-large-6 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-1">
                <div class="extra-padding-h">
                  <img src="img/graphic-toolkit.png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-subsection">
          <div class="content-wrapper">
            <div class="row row-centered row-middle">
              <div class="col col-large-5 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect">
                <h2 class="subheading centered left-aligned-large">{{ $t('section-partnerships-snapp-heading') }}
                  <!-- <p class="lead" v-html="$t('section-partnerships-snapp-lead')"></p> -->
                </h2>
                <p v-html="$t('section-partnerships-snapp-text')"></p>
                <p v-html="$t('section-partnerships-snapp-text-2')"></p>
              </div>
              <div class="col col-large-6 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-1">
                <div class="extra-padding-h-big">
                  <img src="img/snapp.jpg" style="border-radius:50%;" />
                </div>
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
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'What',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
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
