<i18n>
{
  "en": {
    "section-projects-heading": "Get involved",
    "section-projects-button": "See all Projects",
    "new-project-button": "Create Project"
  },
  "de": {
    "section-projects-heading": "Machen Sie mit",
    "section-projects-button": "Alle Projekte",
    "new-project-button": "Projekt erstellen"}
}
</i18n>
<template>
  <div v-if="projectList && projectList.length != 0 && visible">
    <div class="row row-centered">
      <div class="col col-12 scroll-effect">
        <h2 class="heading small">
          {{ $t("section-projects-heading") }}
        </h2>
      </div>
    </div>
    <div class="row row-centered scroll-effect">
      <div
        class="col col-wrapping col-tablet-portrait-bottom-margin-2 col-mobile-large-12 scroll-effect"
        :class="validateOrientation()"
        v-for="p in getProjects"
        :key="p.id"
      >
        <project-teaser
          :projectTitle="p.title"
          :projectTopic="p.topic"
          :projectDescription="p.description"
          :button="p.button"
          :projectBgImage="p.img_background"
          :projectImage="p.img_project"
          :url="p.link"
          :colorGradient="p.gradient"
          :vOrientation="vOrientation"
          :projectId="p.id"
        ></project-teaser>
      </div>
    </div>
    <div class="col col-large-12 extra-margin-top-2 scroll-effect centered">
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

export default {
  name: "ProjectCards",
  data() {
    return {
      numberOfProjects: 3,
      projects: [],
    };
  },
  props: {
    vOrientation: Boolean,
    projectList: Array,
    visible: Boolean,
  },
  components: {
    ProjectTeaser,
  },
  computed: {
    getProjects() {
      const projects = this.projectList
        .slice(0, this.numberOfProjects)
        .map((p) => this.validateProjectContent(p));
      return projects;
    },
  },
  methods: {
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
        horizontal: "col-tablet-portrait-12 col-large-6",
      };
      if (this.vOrientation) {
        return viewConfig.vertical;
      }
      return viewConfig.horizontal;
    },
    validateProjectContent(p) {
      // This variable avoid undefined or null errors
      const keys = [
        "id",
        "title",
        "topic",
        "description",
        "img_background",
        "img_project",
        "link",
        "button",
        "gradient",
      ];
      const project = {};
      keys.forEach((key) => {
        project[key] = p[key] || null;
      });
      return project;
    },
  },
  created() {},
  destroyed() {},
};
</script>

<style scoped>
.row {
  width: 100%;
  margin: auto !important;
}
</style>
