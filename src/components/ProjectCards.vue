<i18n>
{
  "en": {
    "section-projects-heading": "Get involved",
    "section-projects-button": "See all Projects"
  },
  "de": {
    "section-projects-heading": "Machen Sie mit",
    "section-projects-button": "Alle Projekte"}
}
</i18n>
<template>
  <div class="row ph-mv">
    <div class="row row-centered">
      <div class="col col-large-12 scroll-effect">
        <h2 class="heading small">
          {{ $t("section-projects-heading") }}
        </h2>
      </div>
    </div>
    <div class="row row-centered row-wrapping scroll-effect ">
      <div
        class="col col-wrapping col-mobile-large-12 col-tablet-portrait-6 col-large-4 scroll-effect"
      >
        <project-teaser
          :projectTitle="$t('project-mitrends-title')"
          :projectTopic="$t('project-mitrends-topic')"
          :projectDescription="$t('project-mitrends-description')"
          :buttonText="$t('project-mitrends-button')"
          projectBgImage="/img/projects/mitrends.jpg"
          projectImage="/img/projects/mitrends-graphic.png"
          url="https://mitrends.citizenscience.ch"
          colorGradientStart="#fc5c4a"
          colorGradientEnd="#7284cd"
        ></project-teaser>
      </div>

      <div
        class="col col-wrapping col-mobile-large-12 col-tablet-portrait-6 col-large-4 scroll-effect"
      >
        <project-teaser
          projectTitle="PROJECT BUILDER"
          projectTopic="Citizen Science"
          :projectDescription="$t('builder-lead')"
          :buttonText="$t('builder-button')"
          projectBgImage="/img/projects/project-builder-launch.jpg"
          projectImage="/img/projects/pb-launch.png"
          :url="$t('builder-path')"
          colorGradientStart="#6e4f9e"
          colorGradientEnd="#478161"
        ></project-teaser>
      </div>

      <div
        class="col col-wrapping col-mobile-large-12 col-tablet-portrait-6 col-large-4 scroll-effect"
      >
        <project-teaser
          :projectTitle="$t('project-snake-title')"
          :projectTopic="$t('project-snake-topic')"
          :projectDescription="$t('project-snake-description')"
          :buttonText="$t('project-snake-button')"
          projectBgImage="/img/projects/snakechallenge.jpg"
          projectImage="/img/projects/snakechallenge-intro.png"
          url="https://snakes.citizenscience.ch"
          colorGradientStart="#A35026"
          colorGradientEnd="#448D7D"
        ></project-teaser>
      </div>
    </div>
    <div class="col col-large-12 scroll-effect extra-margin-top centered">
      <div class="button-group centered">
        <router-link
          tag="button"
          to="/contribute/projects"
          class="button button-secondary"
          >{{ $t("section-projects-button") }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import ProjectTeaser from "@/components/ProjectTeaser";

export default {
  name: "ProjectCards",
  components: {
    ProjectTeaser,
  },
};
</script>
