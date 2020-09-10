<i18n>
{
  "en": {
    "page-title": "Citizen Science Center Zurich"

  },
  "de": {
    "page-title": "Citizen Science Center Zürich"
  }
}
</i18n>

<template>
  <div v-if="isLoaded">
    <!-- Cover component -->
    <app-cover></app-cover>

    <!-- Content Section -->
    <app-content-section class="small-padding">
      <div class="row row-centered">
        <!-- Left Column -->
        <div
          class="col col-xlarge-9 col-tablet-portrait-8 col-mobile-large-12 scroll-effect"
        >
          <!-- Project Cards component -->
          <app-content-section class="row ph-mv" v-if="is_data_fetched">
            <project-cards-block
              :vOrientation="projectCardConfig.vOrientation"
              :visible="projectCardConfig.visible"
              :limit="projectCardConfig.limit"
              :viewConfig="projectCardConfig"
            ></project-cards-block>
          </app-content-section>
          <!-- News component  -->
          <app-content-section
            class="row ph-mv sm-margin-right"
            color="light-greyish"
          >
            <news-block
              :visible="newsConfig.visible"
              :timeToRefresh="newsConfig.timeToRefresh"
            >
              ></news-block
            >
          </app-content-section>
          <!-- Generic Content component for Our Community -->
          <app-content-section class="row ph-mv">
            <generic-content-block
              :visible="bottomLeftConfig.visible"
              :vOrientation="bottomLeftConfig.vOrientation"
              :content="ourCommunity"
              :viewConfig="bottomLeftConfig"
            ></generic-content-block>
          </app-content-section>
        </div>
        <!-- Right Column -->
        <div
          class="col col-xlarge-3 col-tablet-portrait-4 col-mobile-large-12 scroll-effect"
        >
          <!-- Generic Content component for Our Mission -->
          <app-content-section class="row ph-mv sm-margin-left">
            <generic-content-block
              :visible="topRightConfig.visible"
              :vOrientation="topRightConfig.vOrientation"
              :content="ourMission"
              :viewConfig="topRightConfig"
            ></generic-content-block>
          </app-content-section>
          <!-- Our next Event -->
          <app-content-section class="row ph-mv sm-margin-left">
            <event-list
              :limit="eventsConfig.limit"
              :content="eventsContent"
              :viewConfig="eventsConfig"
              :visible="eventsConfig.visible"
            ></event-list>
          </app-content-section>
          <!-- Twitter embed feed -->
          <app-content-section class="row ph-mv sm-margin-left">
            <social-feed-block
              :visible="socialConfig.visible"
              :viewConfig="socialConfig"
              :limit="socialConfig.limit"
            ></social-feed-block>
          </app-content-section>
        </div>
      </div>
    </app-content-section>

    <!-- Sign up for our Newsletter -->
    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import HeadCoverBlock from "../components/HeadCoverBlock";
import ContentSection from "@/components/shared/ContentSection.vue";
import GenericContentBlock from "@/components/GenericContentBlock.vue";
import ProjectCardsBlock from "@/components/ProjectCardsBlock";
import NewsBlock from "@/components/NewsBlock";
import SocialFeedBlock from "@/components/SocialFeedBlock.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "../components/shared/SectionNewsletterSignup";
import EventList from "../components/EventList";

import { mapActions, mapGetters, mapState } from "vuex";
import content from "@/assets/generic_content.json";

export default {
  name: "Home",
  data() {
    return {
      projectList: [],
      projectCardConfig: { vOrientation: true, visible: true },
      ourCommunity: {},
      bottomLeftConfig: { vOrientation: false, visible: true },
      ourMission: {},
      topRightConfig: { vOrientation: true, visible: true },
      newsConfig: { visible: true },
      eventsContent: {},
      eventsConfig: { visible: true, limit: 1, hideImg: true },
      socialConfig: { visible: true },
    };
  },
  components: {
    EventList,
    SectionNewsletterSignup,
    ProjectCardsBlock,
    GenericContentBlock,
    NewsBlock,
    SocialFeedBlock,
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
    ...mapGetters({ view: "viewconfig/getHomeConfig" }),
    ...mapState({
      is_data_fetched: (state) => state.project.is_data_fetched,
      isLoaded: (state) => state.viewconfig.isLoaded,
    }),
  },
  methods: {
    ...mapActions({
      getFeaturedProjects: "project/getFeaturedProjects",
      getFlagshipProjects: "project/getFlagshipProjects",
    }),
    openInNewTab: function(url) {
      var win = window.open(url, "_blank");
      win.focus();
    },
    setProjectList: function() {
      this.projectCardConfig = this.view("projectCards");
      if (this.projectCardConfig.flagship) {
        //TODO: Load flagship projects, pending to do
        this.getFlagshipProjects();
      } else {
        //Load featured projects from pybossa
        this.getFeaturedProjects();
      }
    },
    setOurCommunity() {
      this.bottomLeftConfig = this.view("bottom_left");
      this.ourCommunity = content.home_ourCommunity;
    },
    setOurMission() {
      this.topRightConfig = this.view("top_right");
      this.ourMission = content.home_ourMission;
    },
    setEventsConfig() {
      this.eventsConfig = this.view("events");
      this.eventsContent = content.events;
    },
    setNews() {
      this.newsConfig = this.view("news");
    },
    setSocialFeed() {
      this.socialConfig = this.view("social_feed");
    },
  },
  created() {
    // Load the view configuration in vuex state

    this.setProjectList();
    this.setOurCommunity();
    this.setOurMission();
    this.setEventsConfig();
    this.setNews();
    this.setSocialFeed();
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.row {
  &.ph-mv {
    padding: 0 $spacing-1;
    margin: $spacing-2 0;
  }
}
.sm-margin-right {
  margin-right: 0 !important;
}
@media only screen and (min-width: $viewport-large) {
  .row {
    &.ph-mv {
      padding: 0 $spacing-3;
      margin: $spacing-3 0;
    }
  }
}
@media only screen and (min-width: $viewport-xxlarge) {
  .row {
    &.ph-mv {
      padding: 0 $spacing-4;
    }
  }
  .sm-margin-right {
    margin-right: $spacing-2 !important;
  }
}
</style>
