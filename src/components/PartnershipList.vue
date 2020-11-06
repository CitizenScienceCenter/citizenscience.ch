<template>
  <div>
    <h3 class="subheading reduced-bottom-margin" v-if="contentData.name">
      {{ localTranslation(contentData.name) }}
    </h3>
    <!-- Description section -->
    <component :is="getDynamicData" class="reduced-bottom-margin"></component>

    <!-- Logos section -->
    <span
      v-for="logo in contentData.logos"
      :key="logo.id"
    >
      <img :src="logo" class="logo" />
    </span>

    <!-- Button section -->
    <div
      class="button-section margin-bottom"
      v-if="contentData.button && contentData.button.link"
    >
      <button
        class="button button-secondary button-icon"
        @click="openInNewTab(contentData.button.link)"
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
      contentData: {},
      showMembers: false,
    };
  },
  props: {
    content: Object,
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
  },
  created() {
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
  height: 50px;
}

@media only screen and (min-width: $viewport-large) {
  .button-section {
    .button {
      height: 40px;
    }
  }
}
</style>
