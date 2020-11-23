<i18n>
  {
  "en": {

  "page-title": "Our Offer",
  "section-zurichstyle-heading": "Our Offer"
  },
  "de": {

  "page-title": "Unser Angebot",
  "section-zurichstyle-heading": "Unser Angebot"
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
              {{ $t("section-zurichstyle-heading") }}
            </h2>
          </div>
        </div>
      </div>

      <div class="content-wrapper">
        <!-- Generic Content component for Mission -->
        <div
          class="row row-centered row-middle content-item"
          v-for="item in content"
          v-bind:key="item.id"
        >
          <generic-content-block
            class="extra-margin-bottom"
            :visible="viewConfig.visible"
            :vOrientation="viewConfig.vOrientation"
            :hReverse="item.reverse"
            :content="item"
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

import { mapGetters } from "vuex";

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
      viewConfig: {
        visible: true,
        vOrientation: false,
        heading: { visible: false },
        title: { visible: true },
        subtitle: { visible: true },
        description: { visible: true },
        image: { visible: true, size: "md", rounded: true },
        img_description: { visible: false },
        button: { disabled: false, visible: true },
        second_button: { disabled: false, visible: true },
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
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    loadContent() {
      this.content = this.getGContent("offer").main_content.map((x) =>
        this.toggleReverse(x)
      );
    },
    toggleReverse(contentItem) {
      contentItem.reverse = this.isReverse;
      this.isReverse = !this.isReverse;
      return contentItem;
    },
  },
  created() {
    this.loadContent();
  },
};
</script>

<style lang="scss"></style>
