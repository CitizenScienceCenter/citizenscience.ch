<i18n>
  {
  "en": {
  "page-title": "Our_Community",
  "section-collaborations-heading": "Citizen Science Zurich Community"
  },
  "de": {
  "page-title": "Unsere_Gemeinschaft",
  "section-collaborations-heading": "Citizen Science Zürich Gemeinschaft"
  }
  }
</i18n>

<template>
  <div id="top">
    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered" id="partnerships">
              {{ $t("section-collaborations-heading") }}
            </h2>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <!-- Generic Content component for Our Community -->
        <div
          class="row row-centered row-middle content-item"
          v-for="item in content"
          v-bind:key="item.id"
        >
          <generic-content-block
            :visible="viewConfig.visible"
            :vOrientation="viewConfig.vOrientation"
            :hReverse="item.reverse"
            :content="item"
            :viewConfig="viewConfig"
          ></generic-content-block>
        </div>
      </div>
    </app-content-section>

    <!-- TODO: verify the style config -->
    <!-- Our Community section -->
    <app-content-section class="overflow-hidden">
      <generic-content-width-block
        :content="ourCommunityContent"
        :visible="true"
        :hReverse="false"
      ></generic-content-width-block>
    </app-content-section>

    <!-- How to join section -->
    <app-content-section
      class="content-section-flat light-greyish scroll-effect"
    >
      <generic-content-block
        :visible="viewConfig.visible"
        :vOrientation="viewConfig.vOrientation"
        :hReverse="viewConfig.isReverse"
        :content="howJoinContent"
        :viewConfig="modifyViewConfig('social')"
      ></generic-content-block>
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
  data() {
    return {
      content: {},
      howJoinContent: {},
      ourCommunityContent: {},
      isReverse: true,
      viewConfig: {
        visible: true,
        vOrientation: false,
        heading: { visible: false },
        subheading: { visible: true },
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
    GenericContentWidthBlock,
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
      this.content = this.getGContent("community").contentList.map((x) =>
        this.toggleReverse(x)
      );
      this.howJoinContent = this.getGContent("community").howJoin;
      this.ourCommunityContent = this.getGContent("community").ourCommunity;
    },
    toggleReverse(contentItem) {
      contentItem.reverse = this.isReverse;
      this.isReverse = !this.isReverse;
      return contentItem;
    },
    // Method for special mdifications in view
    modifyViewConfig(block) {
      let custom = JSON.parse(JSON.stringify(this.viewConfig));
      if (block == "social") {
        custom.image.size = "sm"; // just require to change the image size
      }
      return custom;
    },
  },
  created() {
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
