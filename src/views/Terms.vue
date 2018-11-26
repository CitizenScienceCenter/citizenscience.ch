<i18n>
    {
    "en": {
    "heading": "Terms of Use",



    "section-newsletter-heading": "Sign up for our Newsletter"

    },
    "de": {
    "heading": "Terms of Use",



    "section-newsletter-heading": "Abonniere unseren Newsletter"
    }
    }
</i18n>
<template>
  <div>

  <app-content-section>

      <div class="content-wrapper">
          <div class="row row-centered scroll-effect">
              <div class="col col-large-10">
                  <h2 class="heading centered" id="projects">{{ $t('heading') }}</h2>
                  <p>sadfasdfsdaf</p>
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

import ContentSection from '@/components/shared/ContentSection.vue'
import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'Terms',
  components: {
    'app-content-section': ContentSection,
    'app-newsletter-signup': NewsletterSignup,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
