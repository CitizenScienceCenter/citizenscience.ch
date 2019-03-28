<i18n>
  {
  "en": {
  "page-title": "Mission & Goals"
  },
  "de": {
  "page-title": "Mission & Ziele"
  }
  }
</i18n>

<template>
  <div>

    Mission & Goals

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
        }
    }

</script>

<style lang="scss">

</style>
