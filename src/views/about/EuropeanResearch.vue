<i18n>
  {
  "en": {
  "page-title": "EU Research Projects",

  "section-eu-research-heading": "EU Research Projects"
  },
  "de": {
  "page-title": "EU Forschungsprojekte",

  "section-eu-research-heading": "EU Forschungsprojekte"
  }
  }
</i18n>
<template>
  <div class="eu-research">
    <app-content-section class="overflow-hidden">
      <!-- Heading section -->
      <div class="content-wrapper row row-centered scroll-effect">
        <div class="col col-large-10">
          <h2 class="heading centered">
            {{ $t("section-eu-research-heading") }}
          </h2>
        </div>
      </div>
      <div
        class="row row-centered row-middle"
        v-for="item in content"
        v-bind:key="item.id"
        :class="{ 'content-wrapper': item.settings.component != 'ImgWidthBlock' }"
      >
        <component
          :is="item.settings.component"
          :content="item"
          :viewConfig="mainViewConfig[item.settings.style]"
          :componentId="item.settings.id"
        ></component>
      </div>
    </app-content-section>

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

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
</style>
