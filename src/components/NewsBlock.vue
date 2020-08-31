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
  <div class="news" v-if="visible && content.length !== 0">
    <!-- Section Title  -->
    <div class="row row-centered extra-margin-top-2">
      <div class="col col-12 scroll-effect heading-section ">
        <h2 class="heading small">
          {{ $t("section-heading") }}
        </h2>
      </div>
    </div>
    <!-- Section Content  -->

    <div class="row row-centered text-section">
      <div class="col col-12 scroll-effect">
        <transition name="slide-fade" mode="out-in">
          <span :key="indexCurrentNew" class="date">
            {{ currentNew.date }}
          </span>
        </transition>
      </div>
      <div class="col col-12 scroll-effect">
        <transition name="slide-fade" mode="out-in">
          <h3 :key="indexCurrentNew">
            {{ localTranslation(currentNew.title.content) }}
          </h3>
        </transition>
      </div>
      <!-- Text sub-section Content  -->
      <div class="col col-12 scroll-effect ">
        <transition name="slide-fade" mode="out-in">
          <p :key="indexCurrentNew">
            {{ localTranslation(currentNew.description.content) }}
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GenericContentBlock",
  data() {
    return {
      countDown: 0,
      news: [],
      currentNew: {},
      indexCurrentNew: 0,
      toggle: false,
    };
  },
  props: {
    content: Array,
    visible: Boolean,
    timeToRefresh: Number,
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
      this.news = this.content.map((x, i) => this.validateNewsContent(x, i));
    },
    validateNewsContent(n, i) {
      // This variable avoid undefined or null errors
      const keys = ["title", "date", "description"];
      const item = {};
      item["index"] = i;
      keys.forEach((key) => {
        item[key] = n[key] || null;
      });
      return item;
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        const time =
          typeof this.timeToRefresh === "number" && this.timeToRefresh > 0
            ? this.timeToRefresh
            : 30;
        this.countDown = time;
        this.currentNew = this.news[this.indexCurrentNew];
        this.indexCurrentNew =
          this.indexCurrentNew < this.news.length - 1
            ? this.indexCurrentNew + 1
            : 0;
        this.toggle = !this.toggle;
        this.countDownTimer();
      }
    },
  },
  created() {
    this.setData();
    if (this.news.length > 1 && this.timeToRefresh > 0) this.countDownTimer();
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
  padding-left: $spacing-2;
  h3 {
    font-weight: 700;
  }
  p {
    font-size: $font-size-tiny;
    padding-bottom: $spacing-2;
  }
  .date {
    font-size: $font-size-tiny;
  }
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
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
      font-size: calc((2vw + 1.3vh) / 2);
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .text-section {
    padding-left: $spacing-1;
    p {
      font-size: $font-size-small;
    }
  }
}
@media only screen and (min-width: $viewport-xlarge) {
  .text-section {
    p {
      font-size: calc((2vw + 1.3vh) / 2);
    }
    .date {
      font-size: $font-size-mini;
    }
  }
}
@media only screen and (min-width: $viewport-xxlarge) {
  .text-section {
    p {
      font-size: $font-size-normal;
    }
  }
}
</style>
