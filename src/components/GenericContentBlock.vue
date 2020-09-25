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
          <button @click="submitInfo()">try me</button>
        </h2>
      </div>
    </div>
    <!-- Content Section -->
    <div class="row row-centered">
      <!-- Image sub-section Content  -->
      <div
        class="col scroll-effect"
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
        class="col scroll-effect text-section"
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
import { getTranslation, openUrl } from "@/assets/support.js";
import { mapGetters, mapActions } from "vuex";

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
    ...mapActions({
      signIn: "user/signIn",
      getAccountProfile: "user/getAccountProfile",
    }),
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    openUrlTab: function(url) {
      openUrl(url, true);
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
    submitInfo() {
      this.signIn({
        email: process.env.VUE_APP_EMAIL,
        password: process.env.VUE_APP_PASS,
      });
    },
  },
  created() {
    this.getAccountProfile();
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
      margin-bottom: $spacing-2;
      max-height: 225px;
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
