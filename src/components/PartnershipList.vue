<template>
  <div v-if="visible">
    <h3
      class="subheading reduced-bottom-margin"
      v-if="br.title.visible && contentData.name"
    >
      {{ localTranslation(contentData.name) }}
    </h3>
    <!-- Description section -->
    <component
      :is="getDynamicData"
      class="reduced-bottom-margin"
      v-if="br.description.visible"
    ></component>

    <!-- Logos section -->
    <div v-if="br.logos.visible">
      <span v-for="logo in contentData.logos" :key="logo.id">
        <img :src="logo" class="logo" />
      </span>
    </div>

    <!-- Button section -->
    <div
      class="button-section margin-bottom"
      v-if="br.button.visible && contentData.button && contentData.button.link"
    >
      <button
        class="button button-secondary button-icon"
        @click="openInNewTab(contentData.button.link)"
        :disabled="br.button.disabled"
      >
        <i :class="contentData.button.icon"></i>
        {{ localTranslation(contentData.button) }}
      </button>
    </div>
  </div>
</template>

<script>
import { getTranslation, openUrl } from "@/assets/support.js";

export default {
  name: "PeopleList",
  data: function() {
    return {
      br: {
        visible: false,
        title: { visible: false },
        description: { visible: false },
        button: { disabled: false, visible: false },
        logos: { visible: false },
      },
      contentData: {},
      showMembers: false,
    };
  },
  props: {
    content: Object,
    viewConfig: Object,
    visible: Boolean,
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
    openInNewTab(url, selfWindow = false) {
      // open external links
      openUrl(url, selfWindow);
    },
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    loadData() {
      this.contentData = this.content;
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
    this.loadData();
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.button-section {
  .button {
    height: 35px;
    font-size: $font-size-small;
  }
}
.logo {
  padding-right: $spacing-2;
  margin-bottom: $spacing-3;
  max-height: 55px;
  width: auto;
}

@media only screen and (min-width: $viewport-large) {
  .button-section {
    .button {
      height: 40px;
    }
  }
}
</style>
