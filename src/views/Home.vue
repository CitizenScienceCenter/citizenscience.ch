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
  <div>
    <!-- Cover component -->
    <app-cover></app-cover>

    <!-- Content Section -->
    <app-content-section class="small-padding overflow-hidden">
      <div class="row row-centered">
        <!-- Left Column -->
        <div class="col col-xlarge-9 col-tablet-portrait-8 col-mobile-large-12">
          <!-- Project Cards component -->
          <app-content-section class="row ph-mv" v-if="isProjectsLoaded">
            <project-cards-block
              :vOrientation="projectCardConfig.vOrientation"
              :visible="projectCardConfig.visible"
              :viewConfig="projectCardConfig"
              :content="projectCard"
              projectType="featured"
            ></project-cards-block>
          </app-content-section>
          <!-- News component  -->
          <app-content-section
            class="row ph-mv sm-margin-right"
            color="light-greyish"
            v-if="isNewsLoaded"
          >
            <news-block
              :visible="newsConfig.visible"
              :timeToRefresh="newsConfig.timeToRefresh"
              :limit="newsConfig.limit"
              :max_chars="newsConfig.max_chars"
            >
            </news-block>
          </app-content-section>
          <!-- Generic Content component for Our Community -->
          <app-content-section class="row ph-mv" v-if="isGCLoaded">
            <generic-content-block
              :visible="bottomLeftConfig.visible"
              :vOrientation="bottomLeftConfig.vOrientation"
              :content="ourCommunity"
              :viewConfig="bottomLeftConfig"
            ></generic-content-block>
          </app-content-section>
        </div>
        <!-- Right Column -->
        <div class="col col-xlarge-3 col-tablet-portrait-4 col-mobile-large-12">
          <!-- Generic Content component for Our Mission -->
          <app-content-section
            class="row ph-mv sm-margin-left"
            v-if="isGCLoaded"
          >
            <generic-content-block
              :visible="topRightConfig.visible"
              :vOrientation="topRightConfig.vOrientation"
              :content="ourMision"
              :viewConfig="topRightConfig"
            ></generic-content-block>
          </app-content-section>

          <!--What we offer-->
          <app-content-section
            class="row ph-mv sm-margin-left"
            v-if="isGCLoaded"
          >
            <generic-content-block
              :visible="centerRightConfig.visible"
              :vOrientation="centerRightConfig.vOrientation"
              :content="whatOffer"
              :viewConfig="topRightConfig"
            ></generic-content-block>
          </app-content-section>

          <!-- Our next Event -->
          <app-content-section
            class="row ph-mv sm-margin-left"
            v-if="isEventsLoaded"
          >
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

export default {
  name: "Home",
  data() {
    return {
      projectCard: {},
      projectCardConfig: { vOrientation: true, visible: false },
      ourCommunity: {},
      bottomLeftConfig: { vOrientation: false, visible: false },
      ourMision: {},
      topRightConfig: { vOrientation: true, visible: false },
      whatOffer: {},
      centerRightConfig: { vOrientation: true, visible: false },
      newsConfig: { visible: false },
      eventsContent: {},
      eventsConfig: { visible: false, limit: 1, hideImg: true },
      socialConfig: { visible: false },
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
    ...mapGetters({
      view: "viewconfig/getHomeConfig",
      getGContent: "content/getGenericContent",
    }),
    ...mapState({
      isProjectsLoaded: (state) => state.project.is_data_fetched,
      isNewsLoaded: (state) => state.content.isNewsLoaded,
      isGCLoaded: (state) => state.content.isGCLoaded,
      isEventsLoaded: (state) => state.content.isEventsLoaded,
      coverList: (state) => state.content.coverList,      
    }),
  },
  methods: {
    ...mapActions({
      getFeaturedProjectsRemote: "project/getFeaturedProjectsRemote",
      getNewsRemote: "content/getNewsRemote",
      getEventsRemote: "content/getEventsRemote",
    }),
    setProjectList() {
      this.projectCardConfig = this.view("projectCards");
      this.getFeaturedProjectsRemote({ limit: this.projectCardConfig.limit });
      this.projectCard = this.whatOffer = this.getGContent("home_get_involve");
    },
    setEventsConfig() {
      this.eventsConfig = this.view("events");
      this.eventsContent = {
        heading: "section-heading",
        eventsButton: "all-events-button",
      };
      this.getEventsRemote();
    },
    setNews() {
      this.newsConfig = this.view("news");
      this.getNewsRemote();
    },
    setSocialFeed() {
      this.socialConfig = this.view("social_feed");
    },
    setGenericContent() {
      //Load generic content view configuration
      this.bottomLeftConfig = this.view("bottom_left");
      this.topRightConfig = this.view("top_right");
      this.centerRightConfig = this.view("center_right");
      //Load generic content data
      this.ourCommunity = this.getGContent("home_our_community");
      this.ourMision = this.getGContent("home_our_mission");
      this.whatOffer = this.getGContent("home_what_offer");
    },
  },
  created() {
    // Load the view configuration in vuex state
    this.setProjectList();
    this.setEventsConfig();
    this.setNews();
    this.setSocialFeed();
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
