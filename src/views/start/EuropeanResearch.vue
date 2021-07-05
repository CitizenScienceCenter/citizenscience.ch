<i18n>
  {
  "en": {
  "page-title": "EU Research Projects",

  "section-collaborations-heading": "EU Research Projects"
  },
  "de": {
  "page-title": "EU Research Projects",

  "section-collaborations-heading": "Pending for translate"
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
              {{ $t("section-collaborations-heading") }}
            </h2>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div
          class="row row-centered row-middle content-item"
          v-for="item in content"
          v-bind:key="item.id"
        >
          <component
            :is="item.settings.component"
            :content="item"
            :viewConfig="mainViewConfig[item.settings.style]"
          ></component>
        </div>
      </div>
    </app-content-section>
    <!-- TODO: Implement a for loop with dynamic component -->
    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";
import GenericContentBlock from "@/components/GenericContentBlock.vue";
import ImgWidthBlock from "@/components/ImgWidthBlock.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import { mapGetters, mapState } from "vuex";

export default {
  data: function() {
    return {
      // TODO:This array contains the components structure
      content_structure: [],
      mainViewConfig: { visible: false },
      content: {},
    };
  },
  props: {
    platform: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SectionNewsletterSignup,
    GenericContentBlock,
    ImgWidthBlock,
    "app-content-section": ContentSection,
    "app-footer": Footer,
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
      style: (state) => state.viewconfig.eu_research_view,
    }),
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    setViewConfig() {
      this.mainViewConfig = this.style;
    },
    loadContent() {
      this.content = this.getGContent("eu_research").main_content;
    },
  },
  created() {
    this.setViewConfig();
    this.loadContent();
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.content-item {
  padding: $spacing-3 0;
}
</style>
