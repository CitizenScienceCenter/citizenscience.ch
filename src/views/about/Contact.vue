<i18n>
  {
  "en": {
    "page-title": "Contact",

    "section-contact-heading": "Contact Us"
  },
  "de": {
    "page-title": "Kontakt",

    "section-contact-heading": "Kontakt"
  }
  }
</i18n>

<template>
  <div>
    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered" id="contact">
              {{ $t("section-contact-heading") }}
            </h2>
            <generic-content-block
              class="extra-margin-bottom"
              :visible="viewConfig.visible"
              :vOrientation="viewConfig.vOrientation"
              :hReverse="isReverse"
              :content="content"
              :viewConfig="viewConfig"
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

import { mapGetters, mapState } from "vuex";
export default {
  components: {
    GenericContentBlock,
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  data() {
    return {
      content: {},
      isReverse: false,
      viewConfig: { visible: false },
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
    ...mapState({ style: (state) => state.viewconfig.contact_view }),
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    setViewConfig() {
      this.viewConfig = this.style;
    },
    loadContent() {
      this.content = this.getGContent("contact").main_content;
    },
  },
  created() {
    this.setViewConfig();
    this.loadContent();
  },
};
</script>

<style lang="scss"></style>
