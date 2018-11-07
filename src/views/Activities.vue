<i18n>
{
  "en": {
    "section-citizenscience-heading": "Citizen Science",
    "section-citizenscience-text": "As the name implies, the activities of the Citizen Science Center Zurich focus on exploring, supporting, and promoting Citizen Science, a form of public participation in scientific research (where “citizen” denotes a member of the general public, independent from citizenship) that has been around for more than a century.",
    "section-citizenscience-text-2": "Public participation in science is a practice that works across many disciplines and that comes in different flavours and with different names, including community based research, crowd-sourced data collection, community-based monitoring, civic science, and more. What characterizes Citizen Science is the collaboration of professional scientists and citizens, the “active” involvement of both, and the engagement of citizens in potentially all phases of the research process.",
    "section-citizenscience-text-3": "Traditional Citizen Science projects involve members of the public in gathering data (often geo-located) via mobile or sensing technologies, or in analysing existing data via interactive and highly visual web interfaces. In an increasing number of cases the public is also involved in other phases of the research process, including the definition of the research questions, the interpretation of results, and the final dissemination of conclusions.",
    "section-citizenscience-text-4": "In the past two decades, citizen science has gained tremendous popularity both with scientists and the public, and citizen science projects span today a wide range of research topics. The methodology offers scientists the potential to tackle research questions with large datasets gathered by citizens across a wide geographical area. It also allows for a much more dynamic and interactive approach to the formulation of hypotheses, research design, and data analysis. With their volunteer activity, Citizens increase their knowledge and literacy about the topic studied, gain insight into the scientific process and method, and acquire new technological skills and abilities.",
    "section-citizenscience-text-5": "For the benefit of the wider society, outcome of Citizen Science projects include community development and empowerment, change of attitudes and behaviours, and renewed engagement in policy making.",

    "section-sdg-heading": "Citizen Science for the SDGs",
    "section-sdg-text": "The Sustainable Development Goals (SDGs) are a set of global goals developed in 2015 by the 193 UN member states and representatives of civil society. They are part of the UN Agenda 2030, a comprehensive call for action to achieve a better and more sustainable future for all.",
    "section-sdg-text-2": "High quality, timely and accessible data are required to monitor progress towards the goals, and there is a strong consensus that citizen engagement is critical. “The monitoring and accountability framework, spanning from the local to the global levels, must be people ­centred, inclusive, transparent and participatory’ (TAP Network 2015, 1).",
    "section-sdg-text-3": "Through citizen science, people can directly engage with and monitor issues that affect them, bring new perspectives and knowledge into science and decision-making, and ultimately demand or drive change.",

    "section-partnerships-heading": "Partnerships and Collaborations",
    "section-partnerships-openseventeen-subheading": "The Open Seventeen – Coaching for Citizen Science Innovation",
    "section-partnerships-openseventeen-text": "O17 is a challenged-based, online interactive coaching programme to help young global innovators connect and shape good ideas into viable social innovation projects for the 17 UN Sustainable Development Goals (SDGs). O17 supports projects that encourage grassroots public participation and citizen science through the use of open data and crowdsourcing.",
    "section-partnerships-openseventeen-text-2": "The Challenge is a joint initiative with the Citizen Cyberlab at University of Geneva, and the Governance Lab at New York University.",
    "section-partnerships-toolkit-heading": "The SDG Crowdsourcing Toolkit – Crowdsourcing Sustainable Development",
    "section-partnerships-toolkit-text": "The SDG Crowdsourcing Toolkit is an ambitious initiative led by CC-CS, in collaboration with the Citizen Cyberlab in Geneva, and aims at positioning Swiss CS at the core of scientific data taking for the SDGs. It will provide a set of open and flexible tools that feature the functionalities required by the most common CS projects, and that can integrate existing platforms and communities. All tools contribute data to a structured and easily accessible database, that - by making data sharing seamless - will facilitate cross-pollination of projects and initiatives.",
    "section-partnerships-toolkit-text-2": "To know more, please contact the CS Center’s team."
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
            <p>{{ $t('section-citizenscience-text') }}</p>
            <p>{{ $t('section-citizenscience-text-2') }}</p>
            <p>{{ $t('section-citizenscience-text-3') }}</p>
            <p>{{ $t('section-citizenscience-text-4') }}</p>
            <p>{{ $t('section-citizenscience-text-5') }}</p>
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

    <app-content-section>
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin">
            <p class="centered left-aligned-large">
              <img src="img/sdg-logo.svg" style="width:25%"/>
            </p>
            <h2 class="subheading centered left-aligned-large">{{ $t('section-sdg-heading') }}</h2>
            <p>{{ $t('section-sdg-text') }}</p>
            <p>{{ $t('section-sdg-text-2') }}</p>
            <p>{{ $t('section-sdg-text-3') }}</p>
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


    <app-content-section color="light-greyish">

        <div class="content-subsection">
          <div class="content-wrapper">
            <div class="row row-centered scroll-effect">
              <div class="col col-large-10">
                <h2 class="heading centered" id="projects">{{ $t('section-partnerships-heading') }}</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="content-subsection">
          <div class="content-wrapper">
            <div class="row row-centered row-middle">
              <div class="col col-large-5 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect">
                <h2 class="subheading centered left-aligned-large">{{ $t('section-partnerships-openseventeen-subheading') }}</h2>
                <p class="left-aligned-large">{{ $t('section-partnerships-openseventeen-text') }}</p>
                <p class="left-aligned-large">{{ $t('section-partnerships-openseventeen-text-2') }}</p>
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
                <h2 class="subheading centered left-aligned-large">{{ $t('section-partnerships-toolkit-heading') }}</h2>
                <p class="left-aligned-large">{{ $t('section-partnerships-toolkit-text') }}</p>
                <p class="left-aligned-large">{{ $t('section-partnerships-toolkit-text-2') }}</p>
              </div>
              <div class="col col-large-6 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-1">
                <div class="extra-padding-h">
                  <img src="img/graphic-create-project.png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-subsection">
          <div class="content-wrapper">
            <div class="row row-centered row-middle">
              <div class="col col-large-5 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect">
                <h2 class="subheading centered left-aligned-large">SnAPP</h2>
                <p class="left-aligned-large">The Citizen Science Center Zurich is collaborating with several Swiss and international partners on a support tool for snake identification based on crowdsourcing and Artificial Intelligence.</p>
                <p class="left-aligned-large">Snakebite causes over 100,000 human deaths and 400,000 victims of disability and disfigurement globally every year, due to limited medical expertise in herpetology and limited access to antivenoms. To reduce potentially erroneous and/or delayed healthcare actions, the Snake App (SnApp) will combine computer vision with the expertise from a network of professional and non-professional herpetologists to identify photos of snakes. This app will serve as an educational and capacity-building platform for both citizens and healthcare professionals around the world, it will improve scientist’s understanding of snakebite and reinforce health systems in snakebite endemic countries.</p>
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

    <!--
    <app-content-section color="light-greyish">
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">The Open Seventeen</h2>
            <h3 class="subheading centered left-aligned-large">Coaching for Citizen Science Innovation</h3>
            <p class="left-aligned-large">
              O17 is a challenged-based, online interactive coaching program to help young global innovators connect and shape good ideas into viable social innovation projects for the 17 UN Sustainable
              Development Goals (SDGs). The Challenge is a joint initiative with the Citizen Cyberlab at University of Geneva, and the Governance Lab at New York University.
            </p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-6">
              <img src="img/o17.jpg" style="border-radius:50%" />
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section>
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">Developing the SDG Toolkit</h2>
            <p class="left-aligned-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-6">
              <div class="extra-padding">
                <img src="img/graphic-create-project.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered row-reverse-large row-middle">

          <div class="col col-large-6 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect">
            <div>
              <h2 class="subheading centered left-aligned-large" id="start-project">Upcoming Project: SnAPP</h2>
              <p class="">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>

          <div class="col col-6 col-large-3 col-large-before-2 col-wrapping col-no-bottom-margin scroll-effect">
            <div class="extra-padding-h">
              <img src="img/snapp.jpg" style="border-radius:50%" />
            </div>
          </div>

        </div>

      </div>
    </app-content-section>

    -->

    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-mobile-large-10">
            <h2 class="heading centered">Sign up for our Newsletter</h2>
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
  }
}

</script>

<style lang="scss">

</style>
