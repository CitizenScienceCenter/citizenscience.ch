<i18n>
  {
  "en": {

  "page-title": "«Zurich Style»",

  "section-zurichstyle-heading": "Citizen Science «Zurich Style»"
  },
  "de": {

  "page-title": "«Züri Style»",

  "section-zurichstyle-heading": "Citizen Science «Züri Style»"
  }
  }
</i18n>

<template>
  <div>
    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered">
              {{ $t("section-zurichstyle-heading") }}
            </h2>
          </div>
        </div>
      </div>

      <div class="content-wrapper">
        <!-- Generic Content component for Zurich Style -->
        <div
          class="row row-centered row-middle content-item"
          v-for="item in content"
          v-bind:key="item.id"
        >
          <generic-content-block
            class="extra-margin-bottom"
            :visible="zuriView.visible"
            :vOrientation="zuriView.vOrientation"
            :hReverse="item.reverse"
            :content="item"
            :viewConfig="zuriView"
          ></generic-content-block>
        </div>
      </div>
    </app-content-section>
    
    <!-- SDGs section -->
    <app-content-section class="overflow-hidden">
      <generic-content-width-block
        :content="sdgContent"
        :viewConfig="sdgView"
      ></generic-content-width-block>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";
import GenericContentBlock from "@/components/GenericContentBlock.vue";
import GenericContentWidthBlock from "@/components/GenericContentWidthBlock.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";

import { mapGetters, mapState } from "vuex";

export default {
  components: {
    GenericContentBlock,
    GenericContentWidthBlock,
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  data() {
    return {
      content: {},
      sdgContent: {},
      isReverse: false, // this is used for orientation control when loop is implemented
      zuriView: {
        visible: true,
      },
      sdgView: {
        visible: true,
      },
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
    ...mapState({ style: (state) => state.viewconfig.zurichstyle_view }),
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    getStyle() {
      this.zuriView = this.style["main"];
      this.sdgView = this.style["sdg"];
    },
    loadContent() {
      this.content = this.getGContent("zurich_style").main_content.map((x) =>
        this.toggleReverse(x)
      );
      this.sdgContent = this.getGContent("zurich_style").sdg;
    },
    toggleReverse(contentItem) {
      contentItem.reverse = this.isReverse;
      this.isReverse = !this.isReverse;
      return contentItem;
    },
  },
  created() {
    this.getStyle();
    this.loadContent();
  },
};
</script>

<style lang="scss"></style>
