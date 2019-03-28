<i18n>
  {
  "en": {
  "page-title": "People",

  "section-people-heading": "People"

  },
  "de": {
  "page-title": "Personen",

  "section-people-heading": "Personen"

  }
  }
</i18n>

<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-10 scroll-effect">
            <h2 class="heading centered" id="people">{{ $t('section-people-heading') }}</h2>
          </div>
          <div class="col scroll-effect">
            <people-list></people-list>
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
    import PeopleList from "@/components/PeopleList";

    export default {
        components: {
            PeopleList,
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
