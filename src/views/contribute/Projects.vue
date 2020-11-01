<i18n>
  {
  "en": {
  "page-title": "Projects",

  "section-projects-heading": "Projects",

  "section-partner-projects-heading": "Partner's Projects",
  "section-partner-projects-crowdwater-text": "CrowdWater at the university of Zurich aims to examine the potential of crowdsourcing in the field of hydrology. The focus lies on water level, streamflow and soil moisture data. The aim of the project is to collect a large amount of data and to improve the forecast of hydrological events, such as droughts or floods.",
  "section-partner-projects-crowdwater-button": "Visit Project",
  "section-partner-projects-hatespeech-text": "The Stop Hate Speech project works against hostility and discrimination on the Internet. Using an algorithm that learns from an active community, Hate Speech is tracked down in the net and rejected by the community. Thus, an acute and global problem is tackled locally and innovatively.",
  "section-partner-projects-hatespeech-button": "Visit Project"

  },
  "de": {
  "page-title": "Projekte",

  "section-projects-heading": "Unsere Projekte",

  "section-partner-projects-heading": "Partnerprojekte",
  "section-partner-projects-crowdwater-text": "CrowdWater ist ein Projekt der Universität Zürich und untersucht das Potential von crowdsourcing im Bereich Hydrologie. Konkret geht es um Wasserstand, Abfluss und Bodenfeuchte. Das Ziel ist es, möglichst viele Beobachtungen zu erheben und damit die Vorhersage hydrologischer Ereignisse wie zum Beispiel Trockenheit oder Überschwemmung zu verbessern.",
  "section-partner-projects-crowdwater-button": "Zum Projekt",
  "section-partner-projects-hatespeech-text": "Das Projekt Stop Hate Speech geht gegen Anfeindungen und Diskriminierung im Internet vor. Mithilfe eines Algorithmus, welcher von einer aktiven Community lernt, wird Hate Speech im Netz aufgespürt und von der Community zurückgewiesen. So wird ein akutes und globales Problem lokal und innovativ bekämpft.",
  "section-partner-projects-hatespeech-button": "Zum Projekt"

  }
  }
</i18n>

<template>
  <div >
    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered " id="projects">
              {{ $t("section-projects-heading") }}
            </h2>
          </div>
        </div>
        <!-- Projects section -->
        <div class="scroll-effect">
          <app-content-section class="row ph-mv" v-if="isProjectsLoaded">
            <project-cards-block
              :vOrientation="projectCardConfig.vOrientation"
              :visible="projectCardConfig.visible"
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

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered" id="projects">
              {{ $t("section-partner-projects-heading") }}
            </h2>
          </div>
        </div>

        <div class="row row-centered scroll-effect row-wrapping margin-bottom">
          <div
            class="col col-6 col-tablet-portrait-6 col-large-3 col-large-before-2 col-wrapping"
          >
            <img src="/img/projects/crowdwater.png" />
          </div>
          <div
            class="col col-tablet-portrait-10 col-large-5 col-large-after-2 col-wrapping"
          >
            <p
              class="reduced-bottom-margin"
              v-html="$t('section-partner-projects-crowdwater-text')"
            ></p>
            <div class="centered left-aligned-large">
              <button
                class="button button-secondary"
                @click="openInNewTab('https://www.crowdwater.ch')"
              >
                {{ $t("section-partner-projects-crowdwater-button") }}
              </button>
            </div>
          </div>
        </div>

        <div class="row row-centered scroll-effect row-wrapping">
          <div
            class="col col-6 col-tablet-portrait-6 col-large-3 col-large-before-2 col-wrapping"
          >
            <img src="/img/projects/stophatespeech.png" />
          </div>
          <div
            class="col col-tablet-portrait-10 col-large-5 col-large-after-2 col-wrapping"
          >
            <p
              class="reduced-bottom-margin"
              v-html="$t('section-partner-projects-hatespeech-text')"
            ></p>
            <div class="centered left-aligned-large">
              <button
                class="button button-secondary"
                @click="openInNewTab('http://www.stophatespeech.ch')"
              >
                {{ $t("section-partner-projects-hatespeech-button") }}
              </button>
            </div>
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
import { mapActions, mapState, mapGetters } from "vuex";

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
      isViewLoaded: (state) => state.viewconfig.isLoaded,
    }),
    ...mapGetters({ view: "viewconfig/getProjectsConfig" }),
  },
  methods: {
    ...mapActions({
      getAllProjectsRemote: "project/getAllProjectsRemote",
    }),
    openInNewTab: function(url) {
      var win = window.open(url, "_blank");
      win.focus();
    },
    setViewConfig() {
      this.projectCardConfig = this.view("projectCards");
    },
    setProjectList: function() {
      this.getAllProjectsRemote();
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
