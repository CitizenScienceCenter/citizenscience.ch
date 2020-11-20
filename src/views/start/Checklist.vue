<i18n>
  {
  "en": {
  "page-title": "Checklist"
  },
  "de": {
  "page-title": "Checkliste"
  }
  }
</i18n>

<template>
  <div>
    <app-content-section class="overflow-hidden">
      <generic-content-width-block
        :content="intro"
        :visible="true"
        :hReverse="false"
      ></generic-content-width-block>
    </app-content-section>

    <app-content-section>
      <div class="content-wrapper">
        <!-- Generic Content component for Our Community -->
        <div
          class="row row-centered row-middle content-item"
          v-for="item in checklist"
          v-bind:key="item.id"
        >
          <generic-content-block
            :visible="viewConfig.visible"
            :vOrientation="viewConfig.vOrientation"
            :hReverse="isReverse"
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
import GenericContentWidthBlock from "@/components/GenericContentWidthBlock.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";

import { mapGetters } from "vuex";

export default {
  name: "Checklist",
  components: {
    GenericContentWidthBlock,
    GenericContentBlock,
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  data() {
    return {
      intro: {},
      checklist: {},
      isReverse: false,
      viewConfig: {
        visible: true,
        vOrientation: false,
        heading: { visible: false },
        title: { visible: true },
        subtitle: { visible: true },
        description: { visible: true },
        image: { visible: true, size: "xsm", rounded: true },
        img_description: { visible: false },
        button: { disabled: false, visible: true },
        second_button: { disabled: false, visible: false },
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
    openInNewTab: function(url) {
      var win = window.open(url, "_blank");
      win.focus();
    },
    loadContent() {
      this.checklist = this.getGContent("checklist").main_content;
      this.intro = this.getGContent("checklist").intro;
    },
  },
  created() {
    this.loadContent();
  },
};
</script>

<style lang="scss"></style>
