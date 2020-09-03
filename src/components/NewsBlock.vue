<i18n>
{
  "en": {
    "section-heading": "News",
    "more-button": "More"
  },
  "de": {
    "section-heading": "Nachrichten",
    "more-button": "Mehr"}
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
          <span :key="index" class="date">
            {{ news[index].date }}
          </span>
        </transition>
      </div>
      <div class="col col-12 scroll-effect">
        <transition name="slide-fade" mode="out-in">
          <h3 :key="index">
            {{ localTranslation(news[index].title.content) }}
          </h3>
        </transition>
      </div>
      <!-- Text sub-section Content  -->
      <div class="col col-12 scroll-effect ">
        <transition name="slide-fade" mode="out-in">
          <p :key="index">
            {{ localTranslation(news[index].description.content) }}
            <a @click="openUrlTab(news[index].link)" v-show="news[index].link"
              >...{{ $t("more-button") }}</a
            >
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { getTranslation, openUrl } from "@/assets/support.js";

export default {
  name: "GenericContentBlock",
  data() {
    return {
      countDown: 0,
      news: [],
      index: 0,
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
      return getTranslation(textContent, this.$i18n.locale);
    },
    openUrlTab: function(url) {
      openUrl(url)
    },
    setData() {
      this.news = this.content
        .map((x, i) => this.validateNewsContent(x, i))
        .filter((nw) => typeof nw != "undefined");
      console.log(this.news);
    },
    validateNewsContent(n, i) {
      // This variable avoid undefined or null errors
      const keys = ["title", "date", "description"];
      const item = {};
      // Due to is a dyamic component is required filter the complete information
      if (
        keys.some((x) => typeof n[x] == "undefined") ||
        Object.values(n).some((x) => x == null)
      ) {
        return;
      }
      // This section looking the required keys
      keys.forEach((key) => {
        item[key] = n[key];
      });
      item["index"] = i;
      item["link"] = n.link || null;
      item.description.content = this.validateDescriptionLength(
        item.description.content
      );
      return item;
    },
    validateDescriptionLength(description) {
      // Here is fixed the maximun number of words and characters for news description
      const MAXCHARS = 350;
      Object.keys(description).map(function(key) {
        description[key] = description[key].slice(0, MAXCHARS);
      });
      return description;
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
        this.index = this.index < this.news.length - 1 ? this.index + 1 : 0;
        this.toggle = !this.toggle;
        this.countDownTimer();
      }
    },
  },
  created() {
    this.setData();
    if (this.news.length > 0 && this.timeToRefresh > 0) {
      this.countDownTimer();
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.news {
  height: 30vh;
  position: relative;
  box-sizing: border-box;
  .heading-section {
    padding-left: $spacing-3;
    .heading {
      margin-bottom: 0 !important;
    }
  }
  .text-section {
    padding-left: $spacing-2;
    padding-bottom: $spacing-2;
    h3 {
      font-weight: 700;
    }
    p {
      font-size: $font-size-tiny;
      a {
        cursor: pointer;
        font-weight: bold;
      }
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
}
@media only screen and (min-width: $viewport-mobile-large) {
  .news {
    .text-section {
      padding-left: $spacing-1;
      p {
        font-size: $font-size-mini;
      }
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .news {
    height: 35vh;
    .text-section {
      padding-left: $spacing-2;
      p {
        font-size: calc((2vw + 1.5vh) / 2);
      }
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .news {
  }
}
@media only screen and (min-width: $viewport-xlarge) {
  .news {
    .text-section {
      padding-left: $spacing-1;
    }
  }
}
@media only screen and (min-width: $viewport-xxlarge) {
  .news {
    .text-section {
      padding-left: 0;
      p {
        font-size: $font-size-normal;
      }
      .date {
        font-size: $font-size-mini;
      }
    }
  }
}
</style>
