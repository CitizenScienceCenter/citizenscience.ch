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
    <div class="row row-centered">
      <!-- Image sub-section Content  -->
      <div
        class="col-8 scroll-effect"
        :class="validateOrientation('img-content')"
        v-if="contentData.image && br.image.visible"
      >
        <div class="row row-centered img-section">
          <div class="col col-12 centered">
            <img :src="contentData.image" class="col-image" />
          </div>
          <div class="col col-12 centered" v-if="br.img_description.visible">
            <p>{{ this.localTranslation(contentData.img_description) }}</p>
          </div>
        </div>
      </div>
      <!-- Text sub-section Content  -->
      <div
        class="col-10 scroll-effect text-section"
        :class="validateOrientation('text-content')"
      >
        <div class="row" v-if="br.description.visible">
          <p>{{ this.localTranslation(contentData.description) }}</p>
        </div>
        <div
          class="row button-section"
          v-if="br.button.visible && contentData.button.link"
        >
          <button
            class="button button-secondary"
            @click="openUrlTab(contentData.button.link)"
            :disabled="br.button.disabled"
          >
            {{ this.localTranslation(contentData.button) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTranslation, openUrl , getNested} from "@/assets/support.js";
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
    content: String,
    visible: Boolean,
    vOrientation: Boolean,
    viewConfig: Object,
  },
  computed: {
    ...mapGetters({ getContent: "content/getGenericContent" }),
    getdata() {
      try {
        const contentData = this.getContent(this.content);
        if (contentData) {
          return contentData;
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
    validateOrientation: function(e) {
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
  .heading {
    margin-bottom: $spacing-2;
  }
}
.img-section {
  .col-image {
    transform: scale(0.75) translateY(-10%);
    border-radius: 50%;
    margin-bottom: -$spacing-3;
    position: relative;
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
  p {
    font-size: $font-size-tiny;
    padding-bottom: $spacing-2;
    padding-right: $spacing-3;
  }
  .button-section {
    padding-bottom: $spacing-1;
    .button {
      height: 30px;
      font-size: $font-size-mini;
    }
  }
  &.vertical {
    p,
    .button-section {
      padding-left: $spacing-3;
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
    p {
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
    p {
      font-size: $font-size-small;
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .text-section {
    .button-section {
      .button {
        height: 35px;
        font-size: $font-size-small;
      }
    }
    &.vertical {
      p,
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
    padding-left: $spacing-4;
    padding-right: $spacing-3;
    p {
      font-size: $font-size-normal;
    }
    .button-section {
      .button {
        height: 40px;
        font-size: $font-size-normal;
      }
    }
    &.vertical {
      p,
      .button-section {
        padding-left: $spacing-1;
        font-size: $font-size-small;
      }
    }
  }
}
@media only screen and (min-width: $viewport-xxlarge) {
  .text-section {
    &.vertical {
      p,
      .button-section {
        padding-left: $spacing-2;
      }
    }
  }
}
</style>
