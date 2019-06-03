<i18n>
  {
  "en": {
  "page-title": "Contact",

  "section-contact-heading": "Contact Us",
  "section-contact-text": "Feel free to reachout to the Center’s Team, we would love to hear from you!",
  "section-contact-listitem-1": "For generic inquiry, to share your ideas about projects, for suggestions about platform and tools, please use <a href='mailto:info@citizenscience.ch' target='_blank'>info@citizenscience.ch</a>.",
  "section-contact-listitem-2": "To inquire about membership, including benefits of members and how to become one, please contact <a href='mailto:maria.mondardini@uzh.ch' target='_blank'>maria.mondardini@uzh.ch</a>.",
  "section-contact-listitem-3": "To inquire about potential partnerships, please contact <a href='mailto:maria.mondardini@uzh.ch' target='_blank'>maria.mondardini@uzh.ch</a>."

  },
  "de": {
  "page-title": "Kontakt",

  "section-contact-heading": "Kontakt",
  "section-contact-text": "Treten Sie mit uns in Kontakt, wir würden uns freuen, von Ihnen zu hören!",
  "section-contact-listitem-1": "Für allgemeine Fragen, Vorschläge für Projekte oder Anregungen zu unserer Plattform, wenden Sie sich bitte an <a href='mailto:info@citizenscience.ch' target='_blank'>info@citizenscience.ch</a>",
  "section-contact-listitem-2": "Falls Sie ein Anliegen zum Thema Mitgliedschaft haben und wissen möchten, was die Vorteile und Vorgehensweise sind, kontaktieren Sie bitte <a href='mailto:maria.mondardini@uzh.ch' target='_blank'>maria.mondardini@uzh.ch</a>.",
  "section-contact-listitem-3": "Fragen betreffend Partnerschaften beantwortet ebenfalls Rosy Mondardini unter <a href='mailto:maria.mondardini@uzh.ch' target='_blank'>maria.mondardini@uzh.ch</a>."

  }
  }
</i18n>

<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-6 scroll-effect">
            <h2 class="heading centered" id="contact">{{ $t('section-contact-heading') }}</h2>
            <p v-html="$t('section-contact-text')"></p>
            <ul>
              <li v-html="$t('section-contact-listitem-1')"></li>
              <li v-html="$t('section-contact-listitem-2')"></li>
              <li v-html="$t('section-contact-listitem-3')"></li>
            </ul>
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
        }
    }

</script>

<style lang="scss">

</style>
