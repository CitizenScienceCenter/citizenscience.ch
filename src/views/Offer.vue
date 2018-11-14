<i18n>
{
  "en": {
    "section-tools-heading": "Interactive Tools",
    "section-tools-text": "The Citizen Science Center Zürich is developing a platform that will make it easy for scientists and citizens to contribute to existing Citizens Science projects, or create new ones. The platform includes two components: a web interface and a mobile (smartphone) application.",
    "section-tools-subheading-1": "Web",
    "section-tools-text-2": "The web component is used mainly for projects that involve the analysis data in the form of images, including image recognition and tagging, mapping, transcription of digitalized text, etc. These are tasks that can usually be best completed on a computer screen.",
    "section-tools-example-1": "<b>Example:</b> Geo Tag X, in collaboration with the UN Institute for Training and Research, investigated together with volunteer citizens how to extract for images information on the effects of drought on animals. <a href='https://geotagx.org/' target='_blank'>geotagx.org</a>",
    "section-tools-subheading-2": "Mobile Apps",
    "section-tools-text-3": "The mobile component (smartphone App) is used mainly for data collection, and allows to capture and tag geo-located images, survey answers, and other type on media, such as video and sound.",
    "section-tools-example-2": "<b>Example:</b> To escalate the global fight against mosquito-borne diseases, The Global Mosquito Alert will ask volunteers to use a smartphone app to snap pictures of mosquitos and their breeding sites. <a href='http://www.mosquitoalert.com' target='_blank'>mosquitoalert.com</a>",
    "section-tools-text-4": "Both components contribute data to a shared database, so it will be easy to link web and mobile projects.",
    "section-tools-text-5": "The work is carried out as open source software (link to GitHub repository) which means that it takes advantage of existing and similar developments, and it’s code is also publicly available for similar implementations. The platform is developed in full cooperation with the department S3IT (Service and Support for Science IT) of the University of Zurich.",

    "section-quote-quote": "«If you are not embarrassed by the first version of your product, you've launched too late.»",
    "section-quote-source": "Reid Hoffman, Founder of LinkedIn",

    "section-community-heading": "Community",
    "section-community-text": "We see the ourselves as a platform and a meeting point for people interested in Citizen Science and participatory research to exchange ideas and knowledge between academia and the wider public.",
    "section-community-text-2": "<b>We want to:</b>",
    "section-community-listitem-1": "Connect people",
    "section-community-listitem-2": "Foster dialogue",
    "section-community-listitem-3": "Generate new ideas coming from different perspectives",
    "section-community-listitem-4": "Ask real world questions and",
    "section-community-listitem-5": "Create new citizen science projects together",
    "section-community-text-3": "Meeting new people and being part of a community is one of the key benefits of Citizen Science, and a strong motivation for people to join citizen science projects. Dialogue and participation naturally leads to diversity and inclusion, and to more equality and democracy in science and society.",
    "section-community-text-4": "Our Citizen Science Community spans Zurich and beyond, and its activities will be shaped by its members. We will interact online and offline in an open, active and interdisciplinary way.",
    "section-community-text-5": "We invite you to visit our forum (coming soon) and discuss topics you are interested in. We also organize events, such as brown bag lunches, festivals and meet-ups.",

    "section-knowledge-heading": "Knowledge",
    "section-knowledge-text": "The Center helps scientists and citizens who wants to start a project to take full advantage of the available knowledge in the field of Citizen Science, while developing new one based on its activities.",
    "section-knowledge-text-2": "Public participation in scientific research is not a new concept; the National Audubon Society started its annual Christmas Bird Count in 1900 (more than 75000 citizens participated in 2017!), and in the last century amateur scientists have participated in projects to monitor water quality, search new stars, study biodiversity.",
    "section-knowledge-text-3": "By experimenting with  procedures, testing protocol, and sharing best practices, practitioners in all fields have developed what is now a solid methodology. Principles and protocols exist today, and the Center’s team is here to help scientists and citizens setup and run projects that guarantee excellent scientific results.",
    "section-knowledge-text-4": "However, Citizen Science is an evolving field with multiple dimensions, including quality, sustainability, transparency, inclusiveness, and more. As all fields of science, it requires continuous research and exploration, that the Center’s researcher will carry on to guarantee the development of appropriate tools and new knowledge.",

    "section-newsletter-heading": "Sign up for our Newsletter"
  }
}
</i18n>



<template>
  <div>

    <app-content-section>
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">{{ $t('section-tools-heading') }}</h2>
            <p v-html="$t('section-tools-text')"></p>
            <h3 class="subheading">{{ $t('section-tools-subheading-1') }}</h3>
            <p v-html="$t('section-tools-text-2')"></p>
            <p>
              <div class="row row-middle">
                <div class="col col-3">
                  <img src="img/projects/geotagx.jpg" style="display: block; width:100%; border-radius:50%"/>
                </div>
                <div class="col col-9" style="padding-left: 0">
                  <p v-html="$t('section-tools-example-1')" class="small"></p>
                </div>
              </div>
            </p>
            <h3 class="subheading">{{ $t('section-tools-subheading-2') }}</h3>
            <p v-html="$t('section-tools-text-3')"></p>
            <p>
              <div class="row row-middle">
                <div class="col col-3">
                  <img src="img/projects/mosquito.jpg" style="display: block; width:100%; border-radius:50%"/>
                </div>
                <div class="col col-9" style="padding-left: 0">
                  <p v-html="$t('section-tools-example-2')" class="small"></p>
                </div>
              </div>
            </p>
            <p v-html="$t('section-tools-text-4')"></p>
            <p v-html="$t('section-tools-text-5')"></p>
          </div>
        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6">
              <img src="img/graphic-platform.png"/>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="dark">
      <div class="content-wrapper scroll-effect">
        <div class="row row-centered">
          <div class="col col-large-8">
            <p class="quote centered" v-html="$t('section-quote-quote')"></p>
            <p class="centered small" v-html="$t('section-quote-source')"></p>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section>

      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">{{ $t('section-community-heading') }}</h2>
            <p v-html="$t('section-community-text')"></p>
            <p class="list-intro" v-html="$t('section-community-text-2')"></p>
            <ul>
              <li v-html="$t('section-community-listitem-1')"></li>
              <li v-html="$t('section-community-listitem-2')"></li>
              <li v-html="$t('section-community-listitem-3')"></li>
              <li v-html="$t('section-community-listitem-4')"></li>
              <li v-html="$t('section-community-listitem-5')"></li>
            </ul>
            <p v-html="$t('section-community-text-3')"></p>
            <p>
              {{ $t('section-community-text-4') }}<br/>
              {{ $t('section-community-text-5') }}
            </p>
          </div>
        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6">
              <img src="img/graphic-community.png"/>
            </div>
          </div>
        </div>
      </div>

    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper scroll-effect">

        <div class="row row-centered">
          <div class="col">

            <p class="centered lead"><b>Join our community and be always up to date:</b></p>

            <p class="centered">
              <button class="button button-secondary button-icon" @click="openInNewTab('https://twitter.com/CitSciZurich')">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M459.4,151.7c0.3,4.5,0.3,9.1,0.3,13.6c0,138.7-105.6,298.6-298.6,298.6c-59.5,0-114.7-17.2-161.1-47.1
                  c8.4,1,16.6,1.3,25.3,1.3c49.1,0,94.2-16.6,130.3-44.8c-46.1-1-84.8-31.2-98.1-72.8c6.5,1,13,1.6,19.8,1.6c9.4,0,18.8-1.3,27.6-3.6
                  c-48.1-9.7-84.1-52-84.1-103v-1.3c14,7.8,30.2,12.7,47.4,13.3c-28.3-18.8-46.8-51-46.8-87.4c0-19.5,5.2-37.4,14.3-53
                  C87.4,130.9,165,172.5,252.1,177.1c-1.6-7.8-2.6-15.9-2.6-24c0-57.8,46.8-104.9,104.9-104.9c30.2,0,57.5,12.7,76.7,33.1
                  c23.7-4.5,46.5-13.3,66.6-25.3c-7.8,24.4-24.4,44.8-46.1,57.8c21.1-2.3,41.6-8.1,60.4-16.2C497.7,118.3,479.8,136.8,459.4,151.7
                  L459.4,151.7z"/>
                </svg>
                Follow us on Twitter
              </button>
              <button class="button button-secondary button-icon" @click="openInNewTab('https://www.facebook.com/CitSciZurich/')">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M200.7,512V283H124v-91h76.7v-71.7C200.7,42.4,248.3,0,317.8,0c33.3,0,61.9,2.5,70.2,3.6V85h-48.2
                  c-37.8,0-45.1,18-45.1,44.3V192H380l-11.7,91h-73.6v229H200.7z"/>
                </svg>
                Visit us on Facebook
              </button>
              <button v-scroll-to="'#newsletter-signup'" class="button button-secondary button-icon">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M502.3,190.8c3.9-3.1,9.7-0.2,9.7,4.7V400c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V195.6c0-5,5.7-7.8,9.7-4.7
                  c22.4,17.4,52.1,39.5,154.1,113.6c21.1,15.4,56.7,47.8,92.2,47.6c35.7,0.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8z
                   M256,320c23.2,0.4,56.6-29.2,73.4-41.4c132.7-96.3,142.8-104.7,173.4-128.7c5.8-4.5,9.2-11.5,9.2-18.9v-19c0-26.5-21.5-48-48-48H48
                  C21.5,64,0,85.5,0,112v19c0,7.4,3.4,14.3,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7C199.4,290.8,232.8,320.4,256,320L256,320z"/>
                </svg>
                Signup for our Newsletter
              </button>
            </p>

          </div>
        </div>

      </div>
    </app-content-section>


    <app-content-section>
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">{{ $t('section-knowledge-heading') }}</h2>
            <p v-html="$t('section-knowledge-text')"></p>
            <p v-html="$t('section-knowledge-text-2')"></p>
            <p v-html="$t('section-knowledge-text-3')"></p>
            <p v-html="$t('section-knowledge-text-4')"></p>
            <p class="centered left-aligned-large">
              <button class="button button-secondary button-icon" @click="openInNewTab('https://ecsa.citizen-science.net/sites/default/files/ecsa_ten_principles_of_citizen_science.pdf')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M576,56V184c0,21.47-26,32-41,17l-35.71-35.71L255.8,408.77a24,24,0,0,1-33.94,0l-22.63-22.63a24,24,0,0,1,0-33.94L442.76,108.68,407.05,73C392,57.9,402.66,32,424,32H552A24,24,0,0,1,576,56ZM407,302.79l-16,16a24,24,0,0,0-7,17V480H64V160H328a24,24,0,0,0,17-7l16-16c15.12-15.12,4.41-41-17-41H48A48,48,0,0,0,0,144V496a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V319.76C448,298.38,422.15,287.67,407,302.79Z"/></svg>
                10 principle of citizen scinece by ECSA
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6">
              <img src="img/graphic-knowledge.png"/>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-mobile-large-10">
            <h2 id="newsletter-signup" class="heading centered">{{ $t('section-newsletter-heading') }}</h2>
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
