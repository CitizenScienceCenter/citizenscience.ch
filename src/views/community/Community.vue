<i18n>
  {
  "en": {
  "page-title": "Community",
  "section-collaborations-heading": "Citizen Science Zurich Community"
  },
  "de": {
  "page-title": "Community",
  "section-collaborations-heading": "Citizen Science Zürich Community"
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
            :visible="mainViewConfig.visible"
            :vOrientation="mainViewConfig.vOrientation"
            :hReverse="item.reverse"
            :content="item"
            :viewConfig="mainViewConfig"
          ></generic-content-block>
        </div>
      </div>
    </app-content-section>

    <!-- Our Community section -->
    <app-content-section class="overflow-hidden">
      <generic-content-width-block
        :content="ourCommunityContent"
        :viewConfig="ourCommunityViewConfig"
      ></generic-content-width-block>
    </app-content-section>

    <!-- How to join section -->
    <app-content-section
      class="content-section content-section-compact light-greyish scroll-effect"
    >
      <generic-content-block
        :visible="howJoinViewConfig.visible"
        :vOrientation="howJoinViewConfig.vOrientation"
        :hReverse="howJoinViewConfig.isReverse"
        :content="howJoinContent"
        :viewConfig="howJoinViewConfig"
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
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      content: {},
      howJoinContent: {},
      ourCommunityContent: {},
      isReverse: true,
      mainViewConfig: { visible: false },
      ourCommunityViewConfig: { visible: false },
      howJoinViewConfig: { visible: false },
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
    ...mapState({
      style: (state) => state.viewconfig.community_view,
    }),
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    setViewConfig() {
      this.mainViewConfig = this.style.main;
      this.ourCommunityViewConfig = this.style.our_community;
      this.howJoinViewConfig = this.style.how_join;
    },
    loadContent() {
      this.content = this.getGContent("community").main_content.map((x) =>
        this.toggleReverse(x)
      );
      this.howJoinContent = this.getGContent("community").how_join;
      this.ourCommunityContent = this.getGContent("community").our_community;
    },
    toggleReverse(contentItem) {
      contentItem.reverse = this.isReverse;
      this.isReverse = !this.isReverse;
      return contentItem;
    },
  },
  created() {
    this.setViewConfig();
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
