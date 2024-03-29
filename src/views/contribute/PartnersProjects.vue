<i18n>
  {
  "en": {
  "page-title": "Partners Projects",

  "section-partner-projects-heading": "Partner's Projects"
  },
  "de": {
  "page-title": "Partnerprojekte",

  "section-partner-projects-heading": "Partnerprojekte"
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
            <h2 class="heading centered" id="partners">
              {{ $t("section-partner-projects-heading") }}
            </h2>
          </div>
        </div>
      </div>
      <div class="content-subsection">
        <div class="content-wrapper">
          <!-- Generic Content component for Partners Projects simple description-->
          <div
            class="row row-centered row-middle content-item"
            v-for="partner in content"
            v-bind:key="partner.id"
          >
            <generic-content-block
              :visible="viewConfig.visible"
              :vOrientation="viewConfig.vOrientation"
              :hReverse="false"
              :content="partner"
              :viewConfig="viewConfig"
              :scrolled="scrolled"
            ></generic-content-block>
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
import GenericContentBlock from "@/components/GenericContentBlock.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";

import { mapGetters, mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      content: [],
      viewConfig: { visible: false },
      isReverse: false,
      scrolled: false,
    };
  },
  components: {
    GenericContentBlock,
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
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
      style: (state) => state.viewconfig.partners_projects_view,
      language: (state) => state.settings.language,
    }),
    ...mapGetters({ getPartnerProjects: "content/getPartnerProjects" }),
  },
  methods: {
    ...mapActions({
      getAllPartnerProjectsRemote: "content/getAllPartnerProjectsRemote",
    }),
    ...mapMutations({ setPartnerProjects: "content/setPartnerProjects" }),
    setViewConfig() {
      this.viewConfig = this.style;
    },
    loadContent() {
      this.content = this.getPartnerProjects();
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
    this.setPartnerProjects(null);
  },
  watch: {
    async language() {
      this.triggerScroll(false);
      await this.getAllPartnerProjectsRemote();
      this.loadContent();
      this.triggerScroll(true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
