<template>
  <div
    class="generic-content"
    :class="{ 'content-wrapper': !br.compact_view }"
    v-if="
      visible &&
        contentData &&
        Object.keys(contentData).length !== 0 &&
        contentData.constructor === Object
    "
  >
    <!-- Heading Section -->
    <div
      class="row row-centered"
      v-if="br.heading.visible && localTranslation(contentData.heading)"
    >
      <div class="col col-12 scroll-effect heading-section">
        <h2 class="heading small">
          {{ localTranslation(contentData.heading) }}
        </h2>
      </div>
    </div>
    <!-- Content Section -->
    <div
      class="row row-centered"
      :class="{ 'row-reverse-large': br.hReverse || this.hReverse }"
    >
      <!-- Image sub-section Content  -->
      <div
        class="col scroll-effect scroll-effect-delayed-3"
        :class="checkVerticalOrientation('img-content')"
        v-if="contentData.image && br.image.visible"
      >
        <div class="row row-centered img-section">
          <div class="col col-12 centered">
            <!-- If toggle_img_style the global style is changed for other ie if img rounded,
             then img is squared when this parameter is true -->
            <img
              rel="preload"
              :src="contentData.image"
              class="col-image"
              :class="getImageStyle"
              :alt="contentData.image"
            />
          </div>
          <div class="col col-12 centered" v-if="br.img_description.visible">
            <p>{{ localTranslation(contentData.img_description) }}</p>
          </div>
        </div>
      </div>
      <!-- Text sub-section Content  -->
      <div
        class="col col-11 scroll-effect text-section"
        :class="checkVerticalOrientation('text-content')"
      >
        <div
          class="row row-full-width row-centered row-large-left-aligned"
          v-if="br.title.visible && localTranslation(contentData.title)"
        >
          <h2 class="heading small centered left-aligned-large">
            {{ localTranslation(contentData.title) }}
          </h2>
        </div>
        <!-- Subtitle section -->
        <div class="row row-full-width" v-if="br.subtitle.visible">
          <div
            class="subheading"
            v-html="localTranslation(contentData.subtitle)"
          ></div>
        </div>
        <!-- Description section -->
        <div class="row" v-if="br.description.visible">
          <component :is="getDynamicData" class="text-description"></component>
        </div>
        <!-- Buttons section -->
        <div class="row row-full-width">
          <div
            class="button-section"
            v-if="
              br.button.visible &&
                contentData.button &&
                (contentData.button.link || contentData.button.route)
            "
          >
            <button
              class="button button-secondary"
              :class="{ 'button-icon': contentData.button.icon }"
              @click="
                triggerButton(
                  contentData.button.route,
                  contentData.button.link,
                  contentData.button.selfWindow
                )
              "
              :disabled="br.button.disabled"
            >
              <i :class="contentData.button.icon"></i>
              {{ localTranslation(contentData.button) }}
            </button>
          </div>
          <div
            class="button-section"
            v-if="
              br.second_button.visible &&
                contentData.second_button &&
                (contentData.second_button.link ||
                  contentData.second_button.route)
            "
          >
            <button
              class="button button-secondary"
              :class="{ 'button-icon': contentData.second_button.icon }"
              @click="
                triggerButton(
                  contentData.second_button.route,
                  contentData.second_button.link,
                  contentData.button.selfWindow
                )
              "
              :disabled="br.second_button.disabled"
            >
              <i :class="contentData.second_button.icon"></i>
              {{ localTranslation(contentData.second_button) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTranslation, openUrl, getNested } from "@/assets/support.js";
import { mapGetters, mapState } from "vuex";

export default {
  name: "GenericContentBlock",
  data() {
    return {
      br: {
        visible: false,
        vOrientation: false,
        hReverse: false,
        compact_view: false,
        heading: { visible: false },
        title: { visible: false },
        subtitle: { visible: false },
        description: { visible: false },
        image: { visible: false, size: "md", rounded: true },
        img_description: { visible: false },
        button: { disabled: true, visible: false },
        second_button: { disabled: true, visible: false },
      },
      contentData: {},
    };
  },
  props: {
    content: Object,
    visible: Boolean,
    vOrientation: Boolean,
    hReverse: Boolean,
    viewConfig: Object,
  },
  computed: {
    ...mapState({
      language: (state) => state.settings.language,
    }),
    getDynamicData: function() {
      return {
        template: `<div>${this.localTranslation(
          this.contentData.description
        )}</div>`,
      };
    },
    getImageStyle() {
      return {
        rounded: this.contentData.toggle_img_style
          ? !this.br.image.rounded
          : this.br.image.rounded,
        "vertical-img": this.br.vOrientation,
        "shadow-bottom":
          this.br.image.rounded && !this.contentData.toggle_img_style,
      };
    },
  },
  methods: {
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    triggerButton: function(route, url, selfWindow) {
      // open internal routes
      if (route) {
        this.$router.push(route);
        return;
      }
      // open external links
      openUrl(url, selfWindow);
    },
    checkVerticalOrientation: function(element) {
      const sizes = ["xsm", "sm", "md", "lg"];
      // This validation is only for large and bigger resolution screens
      const horizontal = {
        no_img: { "text-content": "col-large-12" },
        xsm: {
          "img-content": "col-8 col-tablet-portrait-6 col-large-2",
          "text-content": "col-large-6",
        },
        sm: {
          "img-content": "col-8 col-tablet-portrait-6 col-large-4",
          "text-content": "col-large-8",
        },
        md: {
          "img-content": "col-10 col-tablet-portrait-6 col-large-5",
          "text-content": "col-large-7",
        },
        lg: {
          "img-content": "col-12 col-tablet-portrait-8 col-large-7",
          "text-content": "col-large-5",
        },
      };
      const viewStyle = {
        vertical: {
          "img-content": " col-12 ",
          "text-content": " col-12 vertical",
        },
        horizontal: horizontal.sm, // by default horizontal asumes small image
      };
      if (!this.contentData.image) {
        viewStyle.horizontal = horizontal.no_img;
      }
      //validate the image size from remote config
      else if (
        getNested(this.br, "image", "size") != "sm" &&
        sizes.includes(getNested(this.br, "image", "size"))
      ) {
        viewStyle.horizontal = horizontal[getNested(this.br, "image", "size")];
      }
      let selectedView = viewStyle.horizontal;
      if (this.vOrientation) {
        selectedView = viewStyle.vertical;
      }
      return selectedView[element];
    },
    validateStyle() {
      for (const key in this.viewConfig) {
        if (Object.keys(this.br).includes(key)) {
          this.br[key] = this.viewConfig[key];
        }
      }
    },
  },
  created() {
    this.validateStyle();
    this.contentData = this.content;
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.generic-content {
  padding-top: 0;
  padding-bottom: $spacing-3;
  .heading-section {
    padding-left: $spacing-3;
  }
  .img-section {
    .col-image {
      transform: scale(0.75) translateY(-5%);
      border-radius: 10%;
      margin-bottom: -$spacing-2;
      position: relative;
      &.vertical-img {
        height: auto;
        width: 100%;
      }
    }
    .rounded {
      border-radius: 50%;
    }
    p {
      font-size: $font-size-mini;
      padding-bottom: $spacing-1;
      display: none;
    }
  }
  .text-section {
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    padding: 0 $spacing-2 !important;
    .subheading {
      margin-bottom: $spacing-1;
      font-size: $font-size-small;
    }
    .text-description {
      font-size: $font-size-small;
    }
    .button-section {
      padding: $spacing-2 0;
      padding-right: $spacing-2;
      .button {
        height: 35px;
        font-size: $font-size-small;
      }
    }
    &.vertical {
      .subheading,
      .text-description,
      .button-section {
        padding-left: $spacing-1;
        .button {
          height: 30px;
          font-size: $font-size-mini;
        }
      }
    }
  }
}
@media only screen and (min-width: $viewport-mobile-large) {
  .generic-content {
    .img-section {
      p {
        display: block;
      }
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .generic-content {
    .img-section {
      .col-image {
        transform: scale(0.8) translateY(-5%);
        margin-bottom: -$spacing-1;
      }
    }
    .text-section {
      padding: 0 $spacing-3 0 $spacing-1 !important;
      .subheading {
        font-size: $font-size-normal;
      }
      .text-description {
        font-size: $font-size-normal;
      }
      &.vertical {
        .text-description {
          font-size: $font-size-small;
        }
        .subheading,
        .text-description,
        .button-section {
          padding-left: $spacing-2;
          .button {
            height: 35px;
            font-size: $font-size-small;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .generic-content {
    padding-top: $spacing-2;
    .text-section {
      padding: 0 $spacing-3 0 $spacing-4 !important;
      .button-section {
        .button {
          height: 40px;
        }
      }
      &.vertical {
        padding: 0 $spacing-3 0 $spacing-1 !important;
      }
    }
  }
}
@media only screen and (min-width: $viewport-xlarge) {
  .generic-content {
    .img-section {
      .col-image {
        transform: scale(1) translateY(0%);
        margin-bottom: $spacing-1;
        width: 85%;
        height: auto;
        &.vertical-img {
          max-height: 450px;
          width: 80%;
        }
      }
      p {
        font-size: $font-size-small;
        padding-bottom: $spacing-1;
      }
    }
    .text-section {
      padding: 0 $spacing-3 0 $spacing-5 !important;
      .subheading {
        font-size: $font-size-medium;
      }
      .button-section {
        .button {
          height: 42px;
        }
      }
      &.vertical {
        padding: 0 $spacing-3 0 $spacing-2 !important;
        .text-description {
          font-size: $font-size-normal;
        }
        .button-section {
          font-size: $font-size-small;
        }
      }
    }
  }
}
@media only screen and (min-width: $viewport-xxxlarge) {
  .generic-content {
    .text-section {
      &.vertical {
        padding: 0 $spacing-3 0 $spacing-1 !important;
      }
    }
  }
}
</style>
