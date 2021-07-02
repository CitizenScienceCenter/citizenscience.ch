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
        :viewConfig="intro_view"
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
            :visible="checklist_view.visible"
            :vOrientation="checklist_view.vOrientation"
            :hReverse="isReverse"
            :content="item"
            :viewConfig="checklist_view"
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

import { mapGetters, mapState } from "vuex";

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
      intro_view: { visible: false },
      checklist_view: { visible: false },
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
    ...mapState({ style: (state) => state.viewconfig.checklist_view }),
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    getStyle() {
      this.intro_view = this.style["description"];
      this.checklist_view = this.style["list"];
    },
    loadContent() {
      this.checklist = this.getGContent("checklist").main_content;
      this.intro = this.getGContent("checklist").intro;
    },
  },
  created() {
    this.getStyle();
    this.loadContent();
  },
};
</script>

<style lang="scss"></style>
