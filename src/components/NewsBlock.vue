<i18n>
{
  "en": {
    "section-heading": "News"
  },
  "de": {
    "section-heading": "Nachrichten"}
}
</i18n>
<template>
  <div
    v-if="
      visible &&
        Object.keys(content).length !== 0 &&
        content.constructor === Object
    "
  >
    <!-- Section Title  -->
    <div
      class="row row-centered extra-margin-top-2"
      v-if="heading.config.visible"
    >
      <div class="col col-12 scroll-effect heading-section ">
        <h2 class="heading small">
          {{ $t("section-heading") }}
        </h2>
      </div>
    </div>
    <!-- Section Content  -->
    <div class="row row-centered text-section">
      <div class="col col-12 scroll-effect">
        <small>
          {{ new Date().toDateString() }}
        </small>
      </div>
      <div class="col col-12 scroll-effect">
        <h3>{{ localTranslation(heading.content) }} - {{ countDown }}</h3>
      </div>
      <!-- Text sub-section Content  -->
      <div class="col col-12 scroll-effect ">
        <p>{{ localTranslation(description.content) }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GenericContentBlock",
  data() {
    return {
      countDown: 30,
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
    setData() {
      this.description = this.content.description || this.description;
      this.heading = this.content.heading || this.heading;
      this.img_description =
        this.content.img_description || this.img_description;
      this.button = this.content.button || this.button;
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.countDown = 30;
        this.countDownTimer();
      }
    },
  },
  created() {
    this.setData();
    this.countDownTimer();
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.heading-section {
  padding-left: $spacing-3;
}
.text-section {
  padding-left: $spacing-1;
  h3 {
    font-weight: 700;
  }
  p {
    font-size: $font-size-tiny;
    padding-bottom: $spacing-2;
  }
}
@media only screen and (min-width: $viewport-mobile-large) {
  .text-section {
    p {
      font-size: $font-size-mini;
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .text-section {
    p {
      font-size: $font-size-small;
    }
  }
}
@media only screen and (min-width: $viewport-xlarge) {
  .text-section {
    p {
      font-size: $font-size-normal;
    }
  }
}
</style>
