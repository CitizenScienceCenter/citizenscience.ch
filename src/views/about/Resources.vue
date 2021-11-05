<i18n>
  {
  "en": {

  "page-title": "Resources",
  "section-resources-heading": "Resources"
  },
  "de": {

  "page-title": "Publikationen",
  "section-resources-heading": "Publikationen"
  }
  }
</i18n>
<template>
  <div>
    <app-content-section class="overflow-hidden">
      <!-- Heading section -->
      <div class="content-wrapper row row-centered scroll-effect">
        <div class="col col-large-10">
          <h2 class="heading centered">
            {{ $t("section-resources-heading") }}
          </h2>
        </div>
      </div>

      <generic-content-block
        v-for="(item, index) in content"
        :key="index"
        class="extra-margin-bottom"
        :visible="style.main.visible"
        :vOrientation="style.main.vOrientation"
        :content="item"
        :viewConfig="style.main"
      ></generic-content-block>
    </app-content-section>
    <section-newsletter-signup></section-newsletter-signup>
    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";
import GenericContentBlock from "@/components/GenericContentBlock.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import Footer from "@/components/shared/Footer.vue";

import { mapGetters, mapState } from "vuex";

export default {
  props: {
    platform: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      content: [],
    };
  },
  components: {
    "app-content-section": ContentSection,
    "app-footer": Footer,
    SectionNewsletterSignup,
    GenericContentBlock,
  },
  metaInfo: function () {
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
      style: (state) => state.viewconfig.resources_view,
    }),
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    loadContent() {
      this.content = this.getGContent("resources").main_content;
    },
  },
  created() {
    this.loadContent();
  },
};
</script>

<style></style>
