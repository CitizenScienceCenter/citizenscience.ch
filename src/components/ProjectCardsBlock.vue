<i18n>
{
  "en": {
    "new-project-button": "Create Project",
    "section-projects-button": "See All Projects",
    "search-project-placeholder": "Search",
    "noresult-project-label": "No projects found, for your search"
  },
  "de": {
    "new-project-button": "Projekt erstellen",
    "section-projects-button": "Alle Projekte",
    "search-project-placeholder": "Suchen",
    "noresult-project-label": "Keine Projekte gefunden, für Ihre Suche"
  }
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
          {{ localTranslation(content.heading) }}
        </h2>
      </div>
    </div>
    <div
      class="row row-centered extra-margin-bottom"
      v-if="viewConfig.description.visible"
    >
      <div class="col col-12 scroll-effect">
        <div
          class="description"
          v-html="localTranslation(content.description)"
        ></div>
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
      <project-pagination
        :items="projectList"
        @changePage="onChangePage"
        :styles="paginationStyle"
        :labels="paginationLabels"
        class="col col-12 col-wrapping"
      ></project-pagination>
      <!-- Project cards list -->
      <div
        class="col col-wrapping col-mobile-large-12 col-tablet-portrait-12"
        :class="validateOrientation()"
        v-for="p in currentProjectList"
        v-bind:key="p.id"
      >
        <project-teaser
          v-bind:key="p.id"
          :dataProject="p"
          :colorGradient="p.color_gradient"
          :vOrientation="vOrientation"
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
          >{{ $t("section-projects-button") }}
        </router-link>
        <button @click="openUrl(getUrl)" class="button button-secondary-main">
          {{ $t("new-project-button") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectTeaser from "@/components/ProjectTeaser";
import JwPagination from "jw-vue-pagination";
import { mapGetters, mapMutations, mapState } from "vuex";
import {
  getTranslation,
  getNested,
  trackEvent,
  openUrl,
} from "@/assets/support.js";

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
  "limit",
];

export default {
  name: "ProjectCardsBlock",
  data() {
    return {
      br: {},
      allProjectList: [],
      currentProjectList: [],
      search: null,
      paginationStyle: {
        ul: {
          display: "flex",
          "justify-content": "center",
          "margin-top": "1rem",
          "margin-bottom": "1rem",
        },
      },
      paginationLabels: {
        first: "<<",
        last: ">>",
        previous: "<",
        next: ">",
      },
    };
  },
  props: {
    vOrientation: Boolean,
    visible: Boolean,
    viewConfig: { type: Object, required: true },
    projectType: String,
    content: Object,
  },
  components: {
    ProjectTeaser,
    "project-pagination": JwPagination,
  },
  computed: {
    ...mapState({
      projectList: (state) => state.project.projectList,
    }),
    ...mapGetters({ getProjectList: "project/getProjectList" }),
    getProjects() {
      const all = this.getProjectList(this.projectType);
      const projects = all
        .slice(
          0,
          this.viewConfig.limit > 0 ? this.viewConfig.limit : all.length
        )
        .map((p) => this.validateProjectContent(p));
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
      return projects;
    },
    getUrl() {
      return `${process.env.VUE_APP_LAB_BASE_URL}${this.$i18n.locale}`;
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
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    openUrl: function(url, disabled = false) {
      if (disabled) {
        return;
      }
      if (url.includes(process.env.VUE_APP_LAB_BASE_URL)) this.tracking();
      openUrl(url);
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

    onChangePage(page) {
      // update page with pagination
      this.currentProjectList = page;
    },

    tracking() {
      // Information for gtag event
      const info = {
        category: "view_pb",
        label: "View Project Builder from citizenscience.ch",
        action: "go_to_pb",
      };
      trackEvent(this, info);
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
  .description {
    font-size: $font-size-small;
  }
  .search {
    margin-bottom: $spacing-3;
  }
  .no-result {
    color: $color-primary-shade-20;
  }
}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .project-cards {
    .description {
      font-size: $font-size-normal;
    }
  }
}
</style>
