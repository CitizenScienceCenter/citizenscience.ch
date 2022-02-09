<i18n>
  {
  "en": {
  "page-title": "Projects",

  "section-projects-heading": "Projects"

  },
  "de": {
  "page-title": "Projekte",

  "section-projects-heading": "Projekte"

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
            <h2 class="heading centered " id="projects">
              {{ $t("section-projects-heading") }}
            </h2>
          </div>
        </div>
        <!-- Projects section -->
        <div class="scroll-effect">
          <app-content-section class="row" v-if="isProjectsLoaded">
            <project-cards-block
              :vOrientation="projectCardConfig.vOrientation"
              :visible="projectCardConfig.visible"
              :limit="projectCardConfig.limit"
              :viewConfig="projectCardConfig"
            ></project-cards-block>
          </app-content-section>
          <!-- Loading spiner -->
          <div class="row row-centered" v-if="!isProjectsLoaded">
            <i class="fas fa-spinner fa-pulse spinner"></i>
          </div>
        </div>
      </div>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import ProjectCardsBlock from "@/components/ProjectCardsBlock";
import ProjectTeaser from "@/components/ProjectTeaser";

import { openUrl } from "@/assets/support.js";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      projectCardConfig: { vOrientation: true, visible: false },
    };
  },
  components: {
    SectionNewsletterSignup,
    ProjectCardsBlock,
    ProjectTeaser,
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
      isProjectsLoaded: (state) => state.project.is_data_fetched,
      style: (state) => state.viewconfig.projects_view,
      categories: (state) => state.project.categories,
    }),
  },
  methods: {
    ...mapActions({
      getAllProjectsRemote: "project/getAllProjectsRemote",
      getFeaturedProjectsRemote: "project/getFeaturedProjectsRemote"
    }),
    openInNewTab: function(url) {
      openUrl(url);
    },
    setViewConfig() {
      this.projectCardConfig = this.style;
    },
    setProjectList: async function() {
      if(this.categories.length === 0) {
        await this.getFeaturedProjectsRemote({limit: 0})
      }  
      await this.getAllProjectsRemote();  
    },
  },
  created() {
    this.setViewConfig();
    this.setProjectList();
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.spinner {
  font-size: 100px;
  color: $color-secondary;
}
</style>
