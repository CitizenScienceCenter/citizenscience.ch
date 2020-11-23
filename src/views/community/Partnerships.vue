<i18n>
  {
  "en": {
  "page-title": "Partnerships",

  "section-partnership-heading": "Partnerships"
  },
  "de": {
  "page-title": "Partner",

  "section-partnership-heading": "Partner"
  }
  }
</i18n>

<template>
  <div>
    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <!-- Heading section -->
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered">
              {{ $t("section-partnership-heading") }}
            </h2>
          </div>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-large-10">
            <div class="row row-wrapping scroll-effect">
              <!-- Partnerships section -->
              <div
                v-for="item in content"
                :key="item.id"
                class="col col-large-6 col-wrapping"
              >
                <partnership-list
                  :content="item"
                  class="scroll-effect"
                ></partnership-list>
              </div>
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
import PartnershipList from "@/components/PartnershipList.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import { mapGetters } from "vuex";

export default {
  components: {
    PartnershipList,
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  data() {
    return {
      content: {},
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
    ...mapGetters({ getPartnershipsContent: "content/getPartnerships" }),
  },
  methods: {
    openInNewTab: function(url) {
      var win = window.open(url, "_blank");
      win.focus();
    },
    loadContent() {
      this.content = this.getPartnershipsContent;
    },
  },
  created() {
    this.loadContent();
  },
};
</script>

<style lang="scss"></style>
