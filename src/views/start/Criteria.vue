<i18n>
{
  "en": {
    "page-title": "Criteria",
    "section-checklist-heading": "Criteria"
  },
  "de": {
    "page-title": "Kriterien",
    "section-checklist-heading": "Kriterien"
  }
}
</i18n>

<template>
  <div >
    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered" id="partnerships">
              {{ $t("section-checklist-heading") }}
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
import { mapGetters } from "vuex";

export default {
  name: "Criteria",
  data() {
    return {
      content: {},
      viewConfig: {
        visible: true,
        vOrientation: false,
        heading: { visible: false },
        title: { visible: false },
        subtitle: { visible: false },
        description: { visible: true },
        image: { visible: true, size: "md", rounded: true },
        img_description: { visible: false },
        button: { disabled: false, visible: true },
        second_button: { disabled: false, visible: false },
      },
    };
  },
  components: {
    SectionNewsletterSignup,
    GenericContentBlock,
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
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    loadContent() {
      this.content = this.getGContent("criteria");
    },
  },
  created() {
    this.loadContent();
  },
};
</script>

<style lang="scss"></style>
