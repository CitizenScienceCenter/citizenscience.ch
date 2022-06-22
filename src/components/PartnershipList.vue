<template>
  <div v-if="visible" :class="scrolled ? 'scrolled' : ''">
    <h3 class="subheading reduced-bottom-margin" v-if="br.title.visible && content.name">
      {{ content.name }}
    </h3>
    <!-- Description and Logos section -->
    <prismic-rich-text
      :field="content.description"
      :htmlSerializer="htmlSerializer"
      class="reduced-bottom-margin"
    />

    <!-- Button section -->
    <div
      class="button-section margin-bottom"
      v-if="br.button.visible && content.button && content.button.link"
    >
      <button
        class="button button-secondary button-icon"
        @click="openInNewTab(content.button.link)"
        :disabled="br.button.disabled"
      >
        <i :class="content.button.icon"></i>
        {{ content.button.text || content.button }}
      </button>
    </div>
  </div>
</template>

<script>
import { openUrl } from "@/assets/support.js";

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
    scrolled: Boolean,
  },
  computed: {},
  methods: {
    openInNewTab(url, selfwindow = false) {
      // open external links
      openUrl(url, selfwindow);
    },
    validateStyle() {
      for (const key in this.viewConfig) {
        if (Object.keys(this.br).includes(key)) {
          this.br[key] = this.viewConfig[key];
        }
      }
    },
    htmlSerializer(type, element, _content, _children) {
      // If element is a list item,
      if (type === "image") {
        // return some customized HTML.
        return `<img src="${element.url}" class="logo" alt="${element.url}" v-if="${this.br.logos.visible}" />`;
      }
      /// Otherwise, return null.
      return null;
    },
  },
  created() {
    this.validateStyle();
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
  max-height: 75px;
  max-width: 200px;
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
