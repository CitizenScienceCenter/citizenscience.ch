<i18n>
    {
    "en": {
    "privacy-heading": "Privacy Policy",
    "privacy-text-1": "Any personal data you supply to our online platform are processed in accordance with the SwissData Protection Act (<a href='https://iclg.com/practice-areas/data-protection-laws-and-regulations/switzerland' target='_blank'>DSG</a>) and the EU General Data Protection Regulation (<a href='https://eugdpr.org/' target='_blank'>GDPR</a>).",

    "privacy-subheading-collecting": "Data we collect",
    "privacy-text-2": "When you sign up for the Wenker project you provide an e-mail address. Your e-mail address is not visible to other users, and we will never share it with third parties without your express permission. We also aggregate general statistics on the use our platform (users and traffic patterns, data about how users respond to various site features, etc.). In order to collect this data, we may use software such as Google Analytics that collects statistics from IP data. This information is collected to help us improve our platform, and it is associated only with your IP address.",
    "privacy-subheading-storing": "Data Storing",
    "privacy-text-3": "Your data will be stored in servers at the University of Zurich (Zurich, Switzerland).",
    "privacy-subheading-usage": "Personal Data Use",
    "privacy-text-4": "We may contact you by e-mail in the following circumstances:",
    "privacy-text-4-1": "Occasionally, to announce new features, new projects, or to invite you to special events.",
    "privacy-text-4-2": "We might contact you with a newsletter about the progress of the project or the activities of the Citizen Science Center Zurich.",

    "terms-heading": "Terms of Use",
    "terms-text": "The major goal for the Wenker project is to make the data that you contribute available to the researchers to further scientific research.<br>You retain ownership of any contribution you make to the data (translation or transcription) and you may use, distribute or modify your individual contribution in any way you like.<br>However, by contributing to the Wenker Project, you grant us and our collaborators permission to use your contributions however we like to further this scientific goal.",

    "section-newsletter-heading": "Sign up for our Newsletter"
    },
    "de": {
    "privacy-heading": "Privacy Policy",
    "privacy-text-1": "Any personal data you supply to our online platform are processed in accordance with the SwissData Protection Act (<a href='https://iclg.com/practice-areas/data-protection-laws-and-regulations/switzerland' target='_blank'>DSG</a>) and the EU General Data Protection Regulation (<a href='https://eugdpr.org/' target='_blank'>GDPR</a>).",

    "privacy-subheading-collecting": "Data we collect",
    "privacy-text-2": "When you sign up for the Wenker project you provide an e-mail address. Your e-mail address is not visible to other users, and we will never share it with third parties without your express permission. We also aggregate general statistics on the use our platform (users and traffic patterns, data about how users respond to various site features, etc.). In order to collect this data, we may use software such as Google Analytics that collects statistics from IP data. This information is collected to help us improve our platform, and it is associated only with your IP address.",
    "privacy-subheading-storing": "Data Storing",
    "privacy-text-3": "Your data will be stored in servers at the University of Zurich (Zurich, Switzerland).",
    "privacy-subheading-usage": "Personal Data Use",
    "privacy-text-4": "We may contact you by e-mail in the following circumstances:",
    "privacy-text-4-1": "Occasionally, to announce new features, new projects, or to invite you to special events.",
    "privacy-text-4-2": "We might contact you with a newsletter about the progress of the project or the activities of the Citizen Science Center Zurich.",

    "terms-heading": "Terms of Use",
    "terms-text": "The major goal for the Wenker project is to make the data that you contribute available to the researchers to further scientific research.<br>You retain ownership of any contribution you make to the data (translation or transcription) and you may use, distribute or modify your individual contribution in any way you like.<br>However, by contributing to the Wenker Project, you grant us and our collaborators permission to use your contributions however we like to further this scientific goal.",

    "section-newsletter-heading": "Sign up for our Newsletter"
    }
    }
</i18n>
<template>
  <div>

  <app-content-section>

      <div class="content-wrapper">
          <div class="row row-centered scroll-effect">
              <div class="col col-large-6">
                  <h2 class="heading centered" id="projects">{{ $t('privacy-heading') }}</h2>
                  <p v-html="$t('privacy-text-1')"></p>
                  <h3 class="subheading">{{ $t('privacy-subheading-collecting') }}</h3>
                  <p v-html="$t('privacy-text-2')"></p>
                  <h3 class="subheading">{{ $t('privacy-subheading-storing') }}</h3>
                  <p v-html="$t('privacy-text-3')"></p>
                  <h3 class="subheading">{{ $t('privacy-subheading-usage') }}</h3>
                  <p v-html="$t('privacy-text-4')"></p>
                  <ul>
                      <li v-html="$t('privacy-text-4-1')"></li>
                      <li v-html="$t('privacy-text-4-2')"></li>
                  </ul>
              </div>
          </div>
        </div>
      </app-content-section>

      <app-content-section color="light-greyish">

          <div class="content-wrapper">
              <div class="row row-centered scroll-effect">
                  <div class="col col-large-6">
                      <h2 class="heading centered" id="projects">{{ $t('terms-heading') }}</h2>
                      <p v-html="$t('terms-text')"></p>
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
