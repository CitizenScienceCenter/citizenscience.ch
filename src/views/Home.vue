<i18n>
{
  "en": {
    "cover-heading": "The People's Way of Research",
    "cover-subheading": "Citizen Science Center Zurich",
    "cover-button-projects": "Start contributing",
    "cover-button-your-project": "Suggest a project",

    "section-explanation-heading": "Our Purpose",
    "section-explanation-text": "The Citizen Science Center Zurich supports the collaboration of scientists and the general public in co-creating and conducting scientific research projects.",
    "section-explanation-text-2": "Citizen Science projects provide new and co-created knowledge to tackle problems from fundamental physics to human health, from climate change to gender equality.",
    "section-explanation-text-3": "The Center aims at producing excellent science and quality open data that can help citizens, communities and governments to assess and monitor the UN SDGs.",
    "section-explanation-button": "Learn more",

    "section-projects-heading": "Get involved",
    "section-projects-text": "Our first Citizen Science Project (now in beta) is in the field of linguistics. By transcribing and translating swiss sentences from the 1930s, you help researchers understand how Swiss German changed during the past 100 years.",

    "section-offer-heading": "What we offer",
    "section-offer-1-heading": "Platform",
    "section-offer-1-text": "Web and mobile open tools (now in beta) and a shared database to support scientists and citizens with the planning, implementation and evaluation of Citizen Science projects.",
    "section-offer-2-heading": "Community",
    "section-offer-2-text": "A community of citizen and scientists to strengthen cooperation and cultivate dialogue between the public, academia, industry, and politics.",
    "section-offer-3-heading": "Knowledge",
    "section-offer-3-text": "Theoretical, practical, legal and ethical guidelines and standards for the implementation of Citizen Science projects.",
    "section-offer-button": "Learn more",

    "section-build-project-heading": "Do you have a project in mind? We can help you.",
    "section-build-project-text": "If you have an idea for a Citizen Science project, get in touch with us. We can help you evaluate your idea and potentially provide you with expertise and tools to develop, set up, and run your project.",

    "section-about-heading": "A Joint Initiative",
    "section-about-text": "Run jointly by the University of Zurich and ETH Zurich, the Center supports Citizen Science initiatives at both universities and aims at developing projects that support sustainable development in Switzerland and beyond.",
    "section-about-text-2": "The Citizen Science Center Zurich adheres to the principles of Open Science and operates in a fully transparent manner.",
    "section-about-button": "Learn more about us",

    "section-newsletter-heading": "Sign up for our Newsletter"
  }
}
</i18n>

<template>
  <div>

    <app-cover>
      <h2 class="cover-heading scroll-effect">{{ $t('cover-heading') }}</h2>
      <p class="cover-subheading scroll-effect scroll-effect-delayed-1">{{ $t('cover-subheading') }}</p>
      <p class="centered scroll-effect scroll-effect-delayed-2">
        <button class="button button-primary" v-scroll-to="'#projects'">{{ $t('cover-button-projects') }}</button>
        <button class="button button-secondary button-secondary-inverted" v-scroll-to="'#start-project'">{{ $t('cover-button-your-project') }}</button>
      </p>
    </app-cover>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered row-middle">

          <div class="col col-10 col-large-6 col-wrapping scroll-effect">
            <div>
              <div class="extra-padding-large-h">
                <img src="img/graphic-citizen-science.png"/>
              </div>
            </div>
          </div>

          <div class="col col-large-5 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-2">
            <div>
              <h2 class="heading centered left-aligned-large">{{ $t('section-explanation-heading') }}</h2>
              <p>{{ $t('section-explanation-text') }}<br/>
              {{ $t('section-explanation-text-2') }}</p>
              <p>{{ $t('section-explanation-text-3') }}</p>
              <p class="centered left-aligned-large">
                <router-link tag="button" to="/activities" class="button button-secondary">{{ $t('section-explanation-button') }}</router-link>
              </p>
            </div>
          </div>

        </div>

      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered">

          <div class="col col-large-10 scroll-effect">
            <h2 class="heading centered">{{ $t('section-offer-heading') }}</h2>
          </div>

          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping  col-large-no-bottom-margin scroll-effect scroll-effect-delayed-1">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <img src="img/graphic-platform.png"/>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-offer-1-heading') }}</h3>
            <p class="">
              {{ $t('section-offer-1-text') }}
            </p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-large-no-bottom-margin scroll-effect scroll-effect-delayed-2">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <img src="img/graphic-community.png"/>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-offer-2-heading') }}</h3>
            <p class="">
              {{ $t('section-offer-2-text') }}
            </p>
          </div>
          <div class="col col-tablet-portrait-10 col-large-4 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-3">
            <div class="row row-centered">
              <div class="col col-6 col-tablet-portrait-4 col-large-6 extra-margin-bottom">
                <img src="img/graphic-knowledge.png"/>
              </div>
            </div>
            <h3 class="subheading centered">{{ $t('section-offer-3-heading') }}</h3>
            <p class="">
              {{ $t('section-offer-3-text') }}
            </p>
          </div>

          <div class="col">
            <p class="centered extra-margin-top">
              <router-link tag="button" to="/offer" class="button button-secondary">{{ $t('section-offer-button') }}</router-link>
            </p>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered" id="projects">{{ $t('section-projects-heading') }}</h2>
          </div>
        </div>
        <div class="scroll-effect">
          <div class="row row-centered">
            <div class="col col-large-10 col-xlarge-8">
              <app-project-list></app-project-list>
            </div>
          </div>
          <div class="row row-centered">
            <div class="col col-tablet-portrait-10 col-large-6">
              <p class="">
                {{ $t('section-projects-text') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-reverse-large row-middle">

          <div class="col col-large-5 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect">
            <div>
              <h2 class="heading centered left-aligned-large" id="start-project">{{ $t('section-build-project-heading') }}</h2>
              <p class="">
                {{ $t('section-build-project-text') }}
              </p>
              <p class="centered left-aligned-large">
                <button class="button button-secondary button-icon">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <path d="M502.3,190.8c3.9-3.1,9.7-0.2,9.7,4.7V400c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V195.6c0-5,5.7-7.8,9.7-4.7
                    c22.4,17.4,52.1,39.5,154.1,113.6c21.1,15.4,56.7,47.8,92.2,47.6c35.7,0.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8z
                     M256,320c23.2,0.4,56.6-29.2,73.4-41.4c132.7-96.3,142.8-104.7,173.4-128.7c5.8-4.5,9.2-11.5,9.2-18.9v-19c0-26.5-21.5-48-48-48H48
                    C21.5,64,0,85.5,0,112v19c0,7.4,3.4,14.3,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7C199.4,290.8,232.8,320.4,256,320L256,320z"/>
                  </svg>
                  info@citizenscience.ch
                </button>
                <button class="button button-secondary button-icon">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                  <path d="M493.4,24.6l-104-24c-11.3-2.6-22.9,3.3-27.5,13.9l-48,112c-4.2,9.8-1.4,21.3,6.9,28l60.6,49.6
                  	c-36,76.7-98.9,140.5-177.2,177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112,48c-10.7,4.7-16.6,16.3-14,27.6l24,104
                  	C27.1,504.2,36.7,512,48,512c256.1,0,464-207.5,464-464C512,36.8,504.3,27.1,493.4,24.6z"/>
                  </svg>
                  +41 44 634 21 97
                </button>
              </p>
            </div>
          </div>

          <div class="col col-large-6 col-wrapping col-no-bottom-margin scroll-effect scroll-effect-delayed-1">
            <div class="extra-padding-h">
              <img src="img/graphic-create-project.png" />
            </div>
          </div>

        </div>

      </div>
    </app-content-section>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect">
            <h2 class="heading centered left-aligned-large">{{ $t('section-about-heading') }}</h2>
            <p>{{ $t('section-about-text') }}<br/>
            {{ $t('section-about-text-2') }}</p>
            <p class="centered left-aligned-large">
              <img v-if="this.$i18n.locale === 'en'" alt="University of Zurich / ETH Zurich" src="@/assets/uzh_eth_logo_e_pos.svg" style="width:66.667%" />
              <img v-else alt="Universität Zürich / ETH Zürich" src="@/assets/uzh_eth_logo_d_pos.svg" style="width:66.667%" />
            </p>
            <p class="centered left-aligned-large extra-margin-top">
              <router-link tag="button" to="/about" class="button button-secondary">{{ $t('section-about-button') }}</router-link>
            </p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-7">
              <img src="img/uzh-eth.jpg" style="border-radius:50%"/>
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

    <app-footer color="greyish"></app-footer>

  </div>
</template>

<script>

import Cover from '@/components/shared/Cover.vue'
import ContentSection from '@/components/shared/ContentSection.vue'
import ProjectList from '@/components/shared/ProjectList.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'Home',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-project-list': ProjectList,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
