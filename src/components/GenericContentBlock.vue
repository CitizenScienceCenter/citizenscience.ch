<template>
  <div
    v-if="
      visible &&
        contentData &&
        Object.keys(contentData).length !== 0 &&
        contentData.constructor === Object
    "
  >
    <!-- Heading Section -->
    <div class="row row-centered " v-if="br.heading.visible">
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
        class="col col-6 scroll-effect"
        :class="checkVerticalOrientation('img-content')"
        v-if="contentData.image && br.image.visible"
      >
        <div class="row row-centered img-section">
          <div class="col col-12 centered">
            <img
              :src="contentData.image"
              class="col-image"
              :class="{ rounded: br.image.rounded }"
            />
          </div>
          <div class="col col-12 centered" v-if="br.img_description.visible">
            <p>{{ this.localTranslation(contentData.img_description) }}</p>
          </div>
        </div>
      </div>
      <!-- Text sub-section Content  -->
      <div
        class="col col-10 scroll-effect text-section"
        :class="checkVerticalOrientation('text-content')"
      >
        <!-- Subheading section -->
        <div class="row" v-if="br.subheading.visible">
          <div
            class="subheading"
            v-html="this.localTranslation(contentData.subheading)"
          ></div>
        </div>
        <!-- Description section -->
        <div class="row" v-if="br.description.visible">
          <div
            class="text-description"
            v-html="this.localTranslation(contentData.description)"
          ></div>
        </div>
        <!-- Buttons section -->
        <div class="row">
          <div
            class="button-section"
            v-if="
              br.button.visible && contentData.button && contentData.button.link
            "
          >
            <button
              class="button button-secondary"
              @click="openUrlTab(contentData.button.link)"
              :disabled="br.button.disabled"
            >
              <i :class="contentData.button.icon"></i>
              {{ this.localTranslation(contentData.button) }}
            </button>
          </div>
          <div
            class="button-section"
            v-if="
              br.second_button.visible &&
                contentData.second_button &&
                contentData.second_button.link
            "
          >
            <button
              class="button button-secondary"
              @click="openUrlTab(contentData.second_button.link)"
              :disabled="br.second_button.disabled"
            >
              <i :class="contentData.second_button.icon"></i>
              {{ this.localTranslation(contentData.second_button) }}
            </button>
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
    vOrientation: Boolean,
    hReverse: Boolean,
    viewConfig: Object,
  },
  computed: {
    getdata() {
      try {
        if (this.content) {
          return this.content;
        }
        return null;
      } catch (error) {
        return null;
      }
    },
  },
  methods: {
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    openUrlTab: function(url) {
      openUrl(url, true);
    },
    checkVerticalOrientation: function(e) {
      const sizes = ["sm", "md", "lg"];
      // This validation is only for large and bigger resolution screens
      const horizontal = {
        sm: { "img-content": "col-large-3", "text-content": "col-large-9" },
        md: { "img-content": "col-large-5", "text-content": "col-large-7" },
        lg: { "img-content": "col-large-7", "text-content": "col-large-5" },
      };
      const viewStyle = {
        vertical: {
          "img-content": " col-12 ",
          "text-content": " col-12 vertical",
        },
        horizontal: horizontal.sm, // by default horizontal asumes small image
      };
      //validate the image size from remote config
      if (
        getNested(this.br, "image", "size") != "sm" &&
        sizes.includes(getNested(this.br, "image", "size"))
      ) {
        viewStyle.horizontal = horizontal[getNested(this.br, "image", "size")];
      }

      let selectedView = viewStyle.horizontal;
      if (this.vOrientation) {
        selectedView = viewStyle.vertical;
      }
      return selectedView[e];
    },
  },
  created() {
    this.contentData = this.getdata;
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.heading-section {
  padding-left: $spacing-3;
}
.img-section {
  .col-image {
    transform: scale(0.75) translateY(-10%);
    border-radius: 20%;
    margin-bottom: -$spacing-3;
    position: relative;
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
  padding: 0 $spacing-5 0 $spacing-2 !important;
  .subheading {
    margin-bottom: $spacing-1;
    font-size: $font-size-small;
  }
  .text-description {
    font-size: $font-size-tiny;
  }
  .button-section {
    padding: $spacing-2 0;
    padding-right: $spacing-2;
    .button {
      height: 30px;
      font-size: $font-size-mini;
    }
  }
  &.vertical {
    .text-description,
    .button-section {
    }
  }
}
@media only screen and (min-width: $viewport-mobile-large) {
  .img-section {
    p {
      display: block;
    }
  }
  .text-section {
    .text-description {
      font-size: $font-size-mini;
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .img-section {
    .col-image {
      transform: scale(0.8) translateY(-5%);
      margin-bottom: -$spacing-2;
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
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .text-section {
    padding: 0 $spacing-3 0 $spacing-4 !important;
    .subheading {
    }
    .text-description {
    }
    .button-section {
      .button {
        height: 35px;
        font-size: $font-size-small;
      }
    }
    &.vertical {
      padding: 0 $spacing-3 0 $spacing-1 !important;
      .text-description,
      .button-section {
        .button {
          height: 30px;
          font-size: $font-size-mini;
        }
      }
    }
  }
}
@media only screen and (min-width: $viewport-xlarge) {
  .img-section {
    .col-image {
      transform: scale(1) translateY(0%);
      margin-bottom: $spacing-1;
      width: 90%;
      height: auto;
    }
    p {
      font-size: $font-size-small;
      padding-bottom: $spacing-1;
    }
  }
  .text-section {
    padding: 0 $spacing-3 0 $spacing-5 !important;
    .text-description {
      font-size: $font-size-normal;
    }
    .button-section {
      .button {
        height: 40px;
      }
    }
    &.vertical {
      padding: 0 $spacing-3 0 $spacing-2 !important;
      .text-description,
      .button-section {
        font-size: $font-size-small;
      }
    }
  }
}
@media only screen and (min-width: $viewport-xxxlarge) {
  .text-section {
    &.vertical {
      padding: 0 $spacing-3 0 $spacing-1 !important;
    }
  }
}
</style>
