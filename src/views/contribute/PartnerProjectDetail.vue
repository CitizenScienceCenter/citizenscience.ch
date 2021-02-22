<i18n>
{}
</i18n>

<template>
  <div>
    <!-- Cover component -->
    <app-cover :customCover="cover" :customView="viewConfig.cover"></app-cover>

    <!-- Content Section -->
    <app-content-section class="small-padding overflow-hidden">
      <div class="content-wrapper">
        <!-- Generic Content component for partner project content -->
        <div
          class="row row-centered row-middle content-item"
          v-for="item in content"
          v-bind:key="item.id"
        >
          <generic-content-block
            :visible="viewConfig.content.visible"
            :vOrientation="viewConfig.content.vOrientation"
            :hReverse="item.reverse"
            :content="item"
            :viewConfig="viewConfig.content"
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
      pageTitle: undefined,
      cover: {},
      content: [],
      viewConfig: {
        cover: {
          visible: true,
          heading: { visible: true },
          subheading: { visible: true },
          uzh_eth_logo: { disabled: false, visible: true },
          sdg_logo: { disabled: false, visible: true },
          refresh_time: 10000,
        },
        content: {
          visible: true,
          vOrientation: false,
          compact_view: false,
          heading: { visible: true },
          title: { visible: true },
          subtitle: { visible: true },
          description: { visible: true },
          image: { visible: true, size: "sm", rounded: false },
          img_description: { visible: false },
          button: { disabled: false, visible: true },
          second_button: { disabled: false, visible: true },
        },
      },
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
      title: this.pageTitle,
      meta: [
        {
          property: "og:title",
          content: this.pageTitle,
          template: "%s | " + this.$t("site-title"),
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getPartnerProject: "content/getPartnerProjects",
    }),
  },
  methods: {
    setGenericContent() {
      // The partner project by id is retrieved
      const project = this.getPartnerProject(this.$route.params.id);
      this.cover = project.details;
      this.content =
        "content" in project.details ? project.details.content : {};
      this.pageTitle = project.name;
    },
  },
  created() {
    // If content for this project is not available the user is redirect to partners' projects
    if (!this.getPartnerProject(this.$route.params.id)) {
      this.$router.push("/contribute/partners_projects");
    }
  },
  beforeMount() {
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
