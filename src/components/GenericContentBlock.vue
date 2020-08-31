<template>
  <div
    v-if="
      visible &&
        Object.keys(content).length !== 0 &&
        content.constructor === Object
    "
  >
    <!-- Section Title  -->
    <div class="row row-centered " v-if="heading.config.visible">
      <div class="col col-12 scroll-effect heading-section">
        <h2 class="heading small">
          {{ localTranslation(heading.content) }}
        </h2>
      </div>
    </div>
    <!-- Section Content  -->
    <div class="row row-centered">
      <!-- Image sub-section Content  -->
      <div
        class="col scroll-effect"
        :class="validateOrientation('img-content')"
        v-if="content.image"
      >
        <div class="row row-centered img-section">
          <div class="col col-12 centered">
            <img :src="content.image" class="col-image" />
          </div>
          <div
            class="col col-12 centered"
            v-if="img_description.config.visible"
          >
            <p>{{ localTranslation(img_description.content) }}</p>
          </div>
        </div>
      </div>
      <!-- Text sub-section Content  -->
      <div
        class="col scroll-effect text-section"
        :class="validateOrientation('text-content')"
      >
        <div class="row" v-if="description.config.visible">
          <p>{{ localTranslation(description.content) }}</p>
        </div>
        <div
          class="row button-section"
          v-if="button.config.visible && button.link"
        >
          <button
            class="button button-secondary"
            @click="openUrlTab(button.link)"
            :disabled="button.config.disabled"
          >
            {{ localTranslation(button.content) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GenericContentBlock",
  data() {
    return {
      heading: { content: {}, config: { visible: false } },
      description: { content: {}, config: { visible: false } },
      img_description: { content: {}, config: { visible: false } },
      button: { content: {}, config: { visible: false, disabled: true } },
    };
  },
  props: {
    content: Object,
    visible: Boolean,
    vOrientation: Boolean,
  },
  methods: {
    localTranslation(textContent) {
      // Recieves the text content in multiple languages and return the selected
      const lang = this.$i18n.locale;
      return textContent[lang] || textContent.en;
    },
    openUrlTab: function(url) {
      if (!url) {
        return;
      }
      var win = window.open(url, "_self");
      win.focus();
    },
    validateOrientation: function(e) {
      const viewConfig = {
        vertical: {
          "img-content": " col-12 ",
          "text-content": " col-12 vertical",
        },
        horizontal: {
          "img-content": "col-3",
          "text-content": "col-9",
        },
      };
      let selectedView = viewConfig.horizontal;
      if (this.vOrientation) {
        selectedView = viewConfig.vertical;
      }
      return selectedView[e];
    },
    setData() {
      this.description = this.content.description || this.description;
      this.heading = this.content.heading || this.heading;
      this.img_description =
        this.content.img_description || this.img_description;
      this.button = this.content.button || this.button;
    },
  },
  created() {
    this.setData();
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
    border-radius: 50%;
    margin-bottom: -$spacing-3;
    max-height: 200px;
  }
  p {
    font-size: $font-size-mini;
    padding-bottom: $spacing-1;
    display: none;
  }
}
.text-section {
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
    p {
      font-size: $font-size-small;
    }
  }
  .text-section {
    p {
      font-size: $font-size-small;
    }
    .button-section {
      .button {
        height: 35px;
        font-size: $font-size-small;
      }
    }
  }
}
@media only screen and (min-width: $viewport-xlarge) {
  .img-section {
    .col-image {
      transform: scale(1) translateY(0%);
      margin-bottom: $spacing-2;
      max-height: 250px;
    }
    p {
      font-size: $font-size-small;
      padding-bottom: $spacing-1;
    }
  }
  .text-section {
    padding: 0 $spacing-4;
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
    }
  }
  }
}
</style>