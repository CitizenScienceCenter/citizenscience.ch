<template>
  <div
    class="project shadow-bottom"
    @click.prevent="openInNewTab(localTranslation(project.link))"
    :class="{
      'not-allowed': br.button.visible && br.button.disabled,
    }"
  >
    <div class="project-info">
      <div class="row row-reverse-large row-centered row-wrapping">
        <!-- Project image section  -->
        <div
          class="col col-4 col-wrapping centered col-image"
          :class="validateOrientation('img-content')"
          v-if="br.img_project.visible"
        >
          <img
            :src="projectImage"
            :class="{ round: !project.img_project }"
            :alt="projectImage"
            loading="lazy"
          />
        </div>
        <!-- Text Content section  -->
        <div class="col col-8" :class="validateOrientation('text-content')">
          <span class="project-type" v-if="br.topic.visible">
            {{ localTranslation(project.topic) }}
          </span>
          <h3 v-if="br.name.visible">
            {{ localTranslation(project.name) }}
          </h3>
          <p v-if="br.description.visible">
            {{ localTranslation(project.description) }}
          </p>
        </div>
        <div class="col col-6 col-large-12">
          <button
            class="button button-primary-main"
            v-if="br.button.visible && project.link"
            :disabled="br.button.disabled"
          >
            {{ localTranslation(project.button) }}
          </button>
        </div>
      </div>
    </div>

    <div
      class="overlay"
      :style="{
        background: `linear-gradient(to bottom right, ${project.gradient.start}, ${project.gradient.end})`,
      }"
    ></div>

    <img
      class="project-bg-image"
      :src="backgroundImage"
      loading="lazy"
    />

    <div v-if="infoSign" class="info-sign">
      {{ infoSign }}
    </div>

    <div v-if="infoText" class="info-text">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg> -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576">
        <path
          class="cls-1"
          d="M569.52,472c18.45,32-4.71,72-41.58,72H48.05c-36.93,0-60-40.05-41.57-72L246.42,56c18.47-32,64.72-32,83.16,0L569.52,472ZM288,386a46,46,0,1,0,46,46A46,46,0,0,0,288,386ZM244.33,220.65l7.41,136a12,12,0,0,0,12,11.35h48.54a12,12,0,0,0,12-11.35l7.42-136a12,12,0,0,0-12-12.65H256.31a12,12,0,0,0-12,12.65Z"
        />
      </svg>
      {{ infoText }}
    </div>
  </div>
</template>

<script>
import variable from "@/styles/theme.scss";
import { getTranslation, openUrl } from "@/assets/support.js";

export default {
  name: "ProjectTeaser",
  data() {
    return {
      br: this.viewConfig,
      project: {},
    };
  },
  props: {
    dataProject: Object,
    colorGradient: Object,
    infoText: String,
    infoSign: String,
    vOrientation: Boolean,
    viewConfig: Object,
  },
  computed: {
    backgroundImage() {
      return this.project.img_background || "/img/cover.jpg";
    },
    projectImage() {
      return (
        this.project.img_project ||
        this.project.img_background ||
        "/img/cover.jpg"
      );
    },
  },
  methods: {
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    openInNewTab: function(url) {
      if (!url || (this.br.button.visible && this.br.button.disabled)) {
        return;
      }
      openUrl(url);
    },
    validateOrientation: function(e) {
      const vc = {
        vertical: {
          "img-content": " col-large-12 vertical",
          "text-content": " col-large-12 ",
        },
        horizontal: {
          "img-content": "col-large-4",
          "text-content": "col-large-7 col-large-after-1",
        },
      };
      let selectedView = vc.horizontal;
      if (this.vOrientation) {
        selectedView = vc.vertical;
      }
      return selectedView[e];
    },
    setProjectData() {
      const gradient = this.colorGradient
        ? {
            start: this.colorGradient.start || variable.primary,
            end: this.colorGradient.end || variable.secondary,
          }
        : { start: variable.primary, end: variable.secondary };
      this.project = {
        id: this.dataProject.id,
        name: this.dataProject.name,
        topic: this.dataProject.topic,
        description: this.dataProject.description,
        img_background: this.dataProject.img_background,
        img_project: this.dataProject.img_project,
        link: this.dataProject.url,
        button: this.dataProject.button,
        gradient: gradient,
      };
    },
  },
  created() {
    this.setProjectData();
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.project {
  position: relative;
  padding-bottom: $spacing-1;
  border-radius: $border-radius;
  box-shadow: 0px 4px 8px -4px rgba($color-black, 0.2);
  overflow: hidden;
  cursor: pointer;
  &.not-allowed {
    cursor: not-allowed;
  }

  .project-info {
    position: relative;
    z-index: 2;
    color: white;
    height: 100%;
    .project-type {
      font-size: $font-size-mini;
      text-transform: uppercase;
    }

    h3 {
      font-size: $font-size-small;
      font-weight: 700;
      line-height: 1.25;
      text-align: left;
      margin-bottom: $spacing-3;
      text-transform: uppercase;
      transition: margin-bottom 0.5s ease-in-out;
    }

    p {
      font-size: $font-size-small;
      margin-bottom: $spacing-2;
      display: none;
    }

    button {
      display: none;
    }

    .col-image {
      display: block;
      img {
        transform: scale(1) translateX(-10%);
        max-height: 100px;
        border-radius: $border-radius;
        transition: all 0.5s ease-in-out;
        &.round {
          border-radius: 50% !important;
        }
      }
    }
  }
  .project-info:hover {
    .col-image {
      img {
        max-height: 130px;
        position: relative;
      }
    }
    .vertical {
      &.col-image {
        img {
          max-height: 110px;
          position: relative;
        }
      }
    }
  }

  .overlay {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.8;
  }

  .project-bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
  }

  .info-text {
    svg {
      fill: white;
      width: $font-size-small;
      height: $font-size-small;
      position: absolute;
      top: calc(
        ((#{$font-size-mini} + #{$spacing-1} * 2) - #{$font-size-small}) / 2 -
          1px
      );
      left: $spacing-1;
    }
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-color: rgba($color-black, 0.6);
    color: white;
    font-size: $font-size-mini;
    line-height: 1;
    padding: $spacing-1;
    padding-left: calc(#{$spacing-2} + #{$font-size-small});
    border-radius: $border-radius 0 0 0;
    max-width: 120px;
  }

  .info-sign {
    display: block;
    position: absolute;
    top: $spacing-1;
    right: $spacing-1;
    z-index: 2;
    background-color: rgba($color-secondary, 0.5);
    color: white;
    font-size: $font-size-small;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    padding: $spacing-1;
    border-radius: $border-radius;
  }

  transition: all $transition-duration-long * 2 $transition-timing-function;
  &:active {
    //transform: translateY(-$spacing-1/2);
    .button-primary-main {
      background-color: $color-primary-shade-20;
    }
  }
  @media (hover: hover) {
    &:hover {
      //transform: translateY(-$spacing-1/2);
      .button-primary-main {
        background-color: $color-primary-shade-20;
      }
    }
  }
}

@media only screen and (min-width: $viewport-mobile-large) {
  .project {
    .project-info {
      padding: $spacing-3 $spacing-1;
      h3 {
        font-size: $font-size-normal;
        margin-bottom: $spacing-1;
      }
      .project-type {
        font-size: $font-size-mini;
        margin-bottom: $spacing-1;
      }
      p {
        font-size: $font-size-tiny;
        display: block;
      }
      .col-image {
        display: block;
        img {
          transform: scale(1.2) translateX(-10%);
        }
      }
    }

    .info-text {
      max-width: 160px;
    }
  }
}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .project {
    .project-info {
      p {
        font-size: $font-size-mini;
      }
      .col-image {
        img {
          transform: scale(1.2) translateX(-10%);
        }
      }
    }
    .info-text {
      max-width: none;
    }
  }
}

@media only screen and (min-width: $viewport-large) {
  .project {
    height: 100%;
    .project-info {
      padding-bottom: $spacing-4;
      .project-type {
        font-size: $font-size-mini;
      }
      .vertical {
        padding-bottom: $spacing-1;
        &.col-image {
          img {
            transform: scale(1.3) translateY(12.5%);
          }
        }
      }
      .button {
        display: block;
        position: relative;
        height: 35px;
        font-size: $font-size-mini;
        margin: 0 $spacing-2;
        margin-bottom: $spacing-3;
        transition: transform 0.5s ease-in-out;
        transform: translateY(200px);
      }

      .row {
        position: initial;
      }

      .col-image {
        img {
          transform: scale(2) translateY(15%);
        }
      }
    }

    .project-image {
      background-position: 50% 10%;
    }
  }
  .project-info:hover {
    .button {
      transform: translateY(0%);
    }
  }
}

@media only screen and (min-width: $viewport-xlarge) {
  .project {
    .project-info {
      .project-type {
        font-size: $font-size-small;
        padding: 0 $spacing-2;
      }
      h3 {
        font-size: $font-size-medium;
        padding: 0 $spacing-2;
      }
      p {
        font-size: $font-size-small;
        padding: 0 $spacing-2;
      }
      .vertical {
        &.col-image {
          img {
            transform: scale(1.5) translateY(15%);
          }
        }
      }
      .col-image {
        img {
          transform: scale(2.2) translateY(17%);
        }
      }
    }
  }
}
</style>
