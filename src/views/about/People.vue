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
          <!-- Heading section -->
          <div class="col col-large-10 scroll-effect">
            <h2 class="heading centered" id="people">
              {{ $t("section-people-heading") }}
            </h2>
          </div>
          <!-- People component section -->
          <div class="col scroll-effect">
            <div v-for="people in contentData" :key="people.id">
              <people-list :content="people"></people-list>
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
import ContentSection from "@/components/shared/ContentSection.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import PeopleList from "@/components/PeopleList";

import { mapGetters } from "vuex";

export default {
  components: {
    PeopleList,
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  data() {
    return {
      contentData: [],
    };
  },
  props: {
    platform: {
      type: Boolean,
      default: false,
    },
  },
  metaInfo: function() {
    return {
      title: this.$t("page-title"),
      meta: [
        {
          property: "og:title",
          content: this.$t("page-title"),
          template: "%s | " + this.$t("site-title"),
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ getPeople: "content/getPeople" }),
  },
  created() {
    this.contentData = this.getPeople;
  },
};
</script>

<style lang="scss"></style>
