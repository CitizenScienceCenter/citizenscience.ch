<i18n>
  {
  "en": {
  "page-title": "Start a Project",
  "section-startProject-heading": "Before You Start"
  },
  "de": {
  "page-title": "Ein Projekt starten",
  "section-startProject-heading": "Bevor Sie loslegen"
  }
  }
</i18n>

<template>
  <div>
    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered" id="partnerships">
              {{ $t("section-startProject-heading") }}
            </h2>
          </div>
        </div>
      </div>
      <div class="row row-centered row-large-left-aligned row-middle">
        <div class="col col-11">
          <generic-content-block
            :visible="viewConfig.visible"
            :vOrientation="viewConfig.vOrientation"
            :hReverse="viewConfig.hReverse"
            :content="content"
            :viewConfig="viewConfig"
          ></generic-content-block>
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
  name: "Startproject",
  data() {
    return {
      content: {},
      viewConfig: { visible: false },
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
      style: (state) => state.viewconfig.start_view,
    }),
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    setViewConfig() {
      this.viewConfig = this.style;
    },
    loadContent() {
      this.content = this.getGContent("before_you_start");
    },
  },
  created() {
    this.setViewConfig();
    this.loadContent();
  },
};
</script>

<style lang="scss" scoped></style>
