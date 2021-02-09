<i18n>
{
  "en": {
    "page-title": "Project"

  },
  "de": {
    "page-title": "Projek"
  }
}
</i18n>

<template>
  <div>
    <!-- Cover component -->
    <app-cover :customCover="project.details"></app-cover>

    <!-- Content Section -->
    <app-content-section class="small-padding overflow-hidden">
      <div class="content-wrapper">
        <!-- Generic Content component for Our Community -->
        <div
          class="row row-centered row-middle content-item"
          v-for="item in content"
          v-bind:key="item.id"
        >
          <generic-content-block
            :visible="true"
            :vOrientation="false"
            :hReverse="false"
            :content="item"
            :viewConfig="viewConfig"
          ></generic-content-block>
        </div>
      </div>
    </app-content-section>

    <!-- Sign up for our Newsletter -->
    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import HeadCoverBlock from "@/components/HeadCoverBlock";
import ContentSection from "@/components/shared/ContentSection.vue";
import GenericContentBlock from "@/components/GenericContentBlock.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      project: {},
      content: [],
      viewConfig: { vOrientation: false, visible: false },
    };
  },
  components: {
    SectionNewsletterSignup,
    GenericContentBlock,
    "app-cover": HeadCoverBlock,
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
      titleTemplate: null,
      meta: [
        {
          property: "og:title",
          content: this.$t("page-title"),
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      view: "viewconfig/getHomeConfig",
      getPartnerProject: "content/getPartnerProjects",
    }),
  },
  methods: {
    setGenericContent() {
      this.project = this.getPartnerProject(this.$route.params.id);
      //Load generic content view configuration
      this.viewConfig = this.view("bottom_left");
      this.content =
        "content" in this.project.details ? this.project.details.content : {};
    },
  },
  created() {
    this.setGenericContent();
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.sm-margin-right {
  margin-right: 0 !important;
}
@media only screen and (min-width: $viewport-xxlarge) {
  .sm-margin-right {
    margin-right: $spacing-2 !important;
  }
}
</style>
