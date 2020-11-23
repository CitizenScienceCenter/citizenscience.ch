<template>
  <div
    class="generic-content_width"
    v-if="
      visible &&
        contentData &&
        Object.keys(contentData).length !== 0 &&
        contentData.constructor === Object
    "
  >
    <!-- Text section -->
    <div class="content-wrapper">
      <!-- TODO: verify the styles for this component -->
      <div class="row" :class="{ 'row-reverse-large': hReverse }">
        <div
          class="col col-tablet-portrait-11 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect text-section"
          :class="[content.image ? 'col-large-6' : 'col-large-12']"
        >
          <!-- Heading section -->
          <div
            class="row row-full-width row-centered row-large-left-aligned"
            v-if="localTranslation(content.heading)"
          >
            <h2 class="heading centered left-aligned-large">
              {{ localTranslation(contentData.heading) }}
            </h2>
          </div>

          <!-- Subheading section -->
          <div
            class="row row-full-width"
            v-if="localTranslation(contentData.subtitle)"
          >
            <div
              class="subheading"
              v-html="localTranslation(contentData.subtitle)"
            ></div>
          </div>
          <!-- Description section -->
          <div
            class="row row-centered"
            v-if="localTranslation(content.description)"
          >
            <component
              :is="getDynamicData"
              class="text-description"
            ></component>
          </div>
          <div
            class="row row-centered"
            v-if="contentData.logo && contentData.logo.en"
          >
            <img
              class="uzh-eth-logo"
              :alt="contentData.logo.alt"
              :src="localTranslation(contentData.logo)"
            />
          </div>
          <!-- Buttons section -->
          <div class="row row-full-width">
            <div
              class="button-section"
              v-if="
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
              >
                <i :class="contentData.button.icon"></i>
                {{ localTranslation(contentData.button) }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Image section  -->
    <div
      class="background-wrapper scroll-effect scroll-effect-delayed-1"
      :class="{
        'background-wrapper-move-right': !hReverse,
        'background-wrapper-move-left': hReverse,
      }"
    >
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-tablet-portrait-8 col-large-6 col-large-after-1">
            <img :src="content.image" style="border-radius:50%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTranslation, openUrl, getNested } from "@/assets/support.js";
import { mapGetters } from "vuex";

export default {
  name: "GenericContentBlock",
  data() {
    return {
      br: this.viewConfig,
      contentData: {},
    };
  },
  props: {
    content: Object,
    visible: Boolean,
    hReverse: Boolean,
    viewConfig: Object,
  },
  computed: {
    getDynamicData: function() {
      return {
        template: `<div>${this.localTranslation(
          this.contentData.description
        )}</div>`,
      };
    },
  },
  methods: {
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    loadData() {
      this.contentData = this.content;
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
  },
  created() {
    this.loadData();
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.generic-content_width {
  .text-section {
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    .subheading {
      margin-bottom: $spacing-1;
      font-size: $font-size-small;
    }
    .text-description {
      font-size: $font-size-small;
    }
    .uzh-eth-logo {
      padding: $spacing-2 0;
      height: 100%;
      max-height: 150px;
    }
  }
  .button-section {
    padding: $spacing-2 0;
    padding-right: $spacing-2;
    .button {
      height: 35px;
      font-size: $font-size-small;
    }
  }
}
@media only screen and (min-width: $viewport-mobile-large) {
  .generic-content_width {
    .text-section {
      .subheading {
      }
      .text-description {
      }
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .generic-content_width {
    .text-section {
      .subheading {
        font-size: $font-size-normal;
      }
      .text-description {
        font-size: $font-size-normal;
      }
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .generic-content_width {
    .text-section {
      padding: 0 $spacing-3 0 $spacing-4 !important;
      .subheading {
      }
      .text-description {
      }
    }
    .button-section {
      .button {
        height: 40px;
      }
    }
  }
}
@media only screen and (min-width: $viewport-xlarge) {
  .generic-content_width {
    .text-section {
      padding: 0 $spacing-3 0 $spacing-5 !important;
      .subheading {
      }
      .text-description {
      }
    }
    .button-section {
      .button {
        height: 42px;
      }
    }
  }
}
@media only screen and (min-width: $viewport-xxxlarge) {
  .generic-content_width {
    .text-section {
    }
  }
}
</style>
