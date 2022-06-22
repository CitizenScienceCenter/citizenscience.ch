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
              <div v-for="item in content" :key="item.id" class="col col-large-6 col-wrapping">
                <partnership-list
                  :content="item"
                  :scrolled="scrolled"
                  :visible="viewConfig.visible"
                  :viewConfig="viewConfig"
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
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";

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
      viewConfig: {},
      scrolled: false,
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
    ...mapState({
      style: (state) => state.viewconfig.partnerships_view,
      language: (state) => state.settings.language,
    }),
    ...mapGetters({ getPartnershipsContent: "content/getPartnerships" }),
  },
  methods: {
    ...mapActions({ getPartnershipsRemote: "content/getPartnershipsRemote" }),
    ...mapMutations({ setPartnerships: "content/setPartnerships" }),
    setViewConfig() {
      this.viewConfig = this.style;
    },
    loadContent() {
      this.content = this.getPartnershipsContent;
    },
    triggerScroll(scrollValue = false) {
      const _this = this;
      setTimeout(function() {
        _this.scrolled = scrollValue;
      }, 1);
    },
  },
  created() {
    this.setViewConfig();
    this.loadContent();
  },
  beforeDestroy() {
    this.setPartnerships(null);
  },
  watch: {
    async language() {
      this.triggerScroll(false);
      await this.getPartnershipsRemote();
      this.loadContent();
      this.triggerScroll(true);
    },
  },
};
</script>

<style lang="scss"></style>
