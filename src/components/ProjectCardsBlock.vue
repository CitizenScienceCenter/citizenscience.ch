<i18n>
{
  "en": {
    "section-projects-heading": "Get involved",
    "section-projects-button": "See all Projects",
    "new-project-button": "Create Project",
    "search-project-placeholder": "Search",
    "noresult-project-label": "No projects found, for your search"
  },
  "de": {
    "section-projects-heading": "Machen Sie mit",
    "section-projects-button": "Alle Projekte",
    "new-project-button": "Projekt erstellen",
    "search-project-placeholder": "Suchen",
    "noresult-project-label": "Keine Projekte gefunden, für Ihre Suche"}
}
</i18n>
<template>
  <div
    v-if="allProjectList && allProjectList.length != 0 && visible"
    class="project-cards"
  >
    <div class="row row-centered" v-if="viewConfig.title.visible">
      <div class="col col-12 scroll-effect">
        <h2 class="heading small">
          {{ $t("section-projects-heading") }}
        </h2>
      </div>
    </div>
    <div class="row row-centered search " v-if="viewConfig.search.visible">
      <!-- Searching section -->
      <div class="col-10">
        <input
          type="text"
          :placeholder="$t('search-project-placeholder')"
          v-model="search"
        />
      </div>
    </div>
    <div class="row row-centered scroll-effect">
      <!-- Project cards list -->
      <div
        class="col col-wrapping col-mobile-large-12 col-tablet-portrait-12"
        :class="validateOrientation()"
        v-for="p in projectList"
        v-bind:key="p.id"
      >
        <project-teaser
          v-bind:key="p.id"
          :projectTitle="p.name"
          :projectTopic="p.topic"
          :projectDescription="p.description"
          :button="p.button"
          :projectBgImage="p.img_background"
          :projectTbImage="p.img_project"
          :url="p.url"
          :colorGradient="p.color_gradient"
          :vOrientation="vOrientation"
          :projectId="p.id"
          :viewConfig="br"
        ></project-teaser>
      </div>
    </div>
    <div class="row row-centered" v-if="projectList.length == 0">
      <p class="no-result">{{ $t("noresult-project-label") }}</p>
    </div>
    <div
      class="col col-large-12 extra-margin-top-2 scroll-effect centered"
      v-if="viewConfig.buttons.visible"
    >
      <div class="button-group centered">
        <router-link
          tag="button"
          to="/contribute/projects"
          class="button button-primary-main"
          >{{ $t("section-projects-button") }}</router-link
        >
        <button
          @click="openUrl(`https://lab.citizenscience.ch/${$i18n.locale}`)"
          class="button button-secondary-main"
        >
          {{ $t("new-project-button") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectTeaser from "@/components/ProjectTeaser";
import { mapGetters, mapMutations, mapState } from "vuex";
import { getNested } from "@/assets/support.js";

// This variable avoid undefined or null errors
const keys = [
  "id",
  "name",
  "topic",
  "description",
  "img_background",
  "img_project",
  "url",
  "button",
  "color_gradient",
];

export default {
  name: "ProjectCardsBlock",
  data() {
    return {
      br: {},
      allProjectList: [],
      search: null,
    };
  },
  props: {
    vOrientation: Boolean,
    visible: Boolean,
    viewConfig: Object,
    projectType: String,
  },
  components: {
    ProjectTeaser,
  },
  computed: {
    ...mapState({
      projectList: (state) => state.project.projectList,
    }),
    ...mapGetters({ getProjectList: "project/getProjectList" }),
    getProjects() {
      const projects = this.getProjectList(this.projectType).map((p) =>
        this.validateProjectContent(p)
      );
      return projects;
    },
    searchProject() {
      const projects = this.allProjectList.filter((x) =>
        this.search
          .toLowerCase()
          .split(" ")
          .every((term) => this.getProjectName(x).includes(term))
      );
      this.updateProjectList(projects);
      return;
    },
  },
  methods: {
    ...mapMutations({ updateProjectList: "project/updateProjectList" }),
    setViewConfig() {
      // Set view configuration for project card
      keys.forEach((key) => {
        this.br[key] = this.viewConfig.project[key] || {};
      });
    },
    openUrl: function(url, disabled = false) {
      if (disabled) {
        return;
      }
      var win = window.open(url);
      win.focus();
    },
    validateOrientation: function() {
      // This function is used to set the columns per row acording vertical or horizontal orientation
      const viewConfig = {
        vertical: "col-tablet-portrait-12 col-large-4",
        horizontal: "col-tablet-portrait-12 col-large-6 col-xlarge-6",
      };
      if (this.vOrientation) {
        return viewConfig.vertical;
      }
      return viewConfig.horizontal;
    },
    validateProjectContent(p) {
      const project = {};
      keys.forEach((key) => {
        project[key] = p[key] || null;
      });
      project.id = project.id ? project.id.toString() : project.id;
      project.url =
        project.url ||
        `${process.env.VUE_APP_LAB_BASE_URL}${this.$i18n.locale}/project/${project.id}`;
      project.button = project.button || {
        en: "Contribute ",
        de: "Beitragen",
      };
      project.img_background =
        project.img_background || getNested(p, "info", "thumbnail_url");
      project.hide = false; // this attribute is used for realtime searching
      return project;
    },
    getProjectName(project) {
      const name = project.name[this.$i18n.locale] // validate if name for language exist
        ? project.name[this.$i18n.locale]
        : project.name.en // validate if english name exist by default
        ? project.name.en
        : project.name;
      return name.toString().toLowerCase();
    },
  },
  watch: {
    search: function(newValue, oldValue) {
      this.searchProject;
    },
  },
  created() {
    this.setViewConfig();
    this.allProjectList = this.getProjects;
    this.updateProjectList(this.allProjectList);
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.project-cards {
  width: 100% !important;
  .search {
    margin-bottom: $spacing-3;
  }
  .no-result {
    color: $color-primary-shade-20;
  }
}
</style>
