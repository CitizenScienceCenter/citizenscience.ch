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
  <div class="news" v-if="visible && newslist && newslist.length !== 0">
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
            {{ formatDate(newslist[index].date) }}
          </span>
        </transition>
      </div>
      <div class="col col-12 scroll-effect">
        <transition name="slide-fade" mode="out-in">
          <h3 :key="index">
            {{ localTranslation(newslist[index].title) }}
          </h3>
        </transition>
      </div>
      <!-- Text sub-section Content  -->
      <div class="col col-12 scroll-effect ">
        <transition name="slide-fade" mode="out-in">
          <component :is="getDynamicData" :key="index"></component>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { getTranslation, openUrl } from "@/assets/support.js";
import { mapState, mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "GenericContentBlock",
  data() {
    return {
      countDown: 0,
      newslist: [],
      index: -1,
      toggle: false,
    };
  },
  props: {
    visible: Boolean,
    timeToRefresh: { type: Number, default: 20 },
    limit: { type: Number, default: 3 },
    max_chars: { type: Number, default: 350 },
  },
  computed: {
    ...mapState({
      language: (state) => state.settings.language,
    }),
    ...mapGetters({ getNewsList: "content/getNewsList" }),
    getdata() {
      try {
        if (this.getNewsList) {
          return this.getNewsList
            .map((x, i) => this.validateNewsContent(x, i))
            .sort((b, a) => moment(a.date).diff(b.date))
            .filter((nw) => typeof nw != "undefined")
            .slice(0, this.limit);
        }
        return null;
      } catch (error) {
        return null;
      }
    },
    getDynamicData: function() {
      return {
        template: `<p>${this.localTranslation(
          this.newslist[this.index].description
        )}
        </p>`,
      };
    },
  },
  methods: {
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    validateNewsContent(n, i) {
      // This variable avoid undefined or null errors
      const keys = ["title", "date", "description"];
      const item = {};
      const element = { ...n };
      // Due to is a dyamic component is required filter the complete information
      if (keys.some((x) => typeof n[x] == "undefined" || n[x] == null)) {
        return;
      }
      // This section looking the required keys
      keys.forEach((key) => {
        item[key] = element[key];
      });
      item["index"] = i;
      item["path"] = element.path || null;
      item["description"] = this.validateDescriptionLength(element.description);
      return item;
    },
    validateDescriptionLength(description) {
      // Here is fixed the maximun number of words and characters for news description
      const MAX = this.max_chars;
      // any character that is not a word character or whitespace
      const endChars = [".", ",", " ", "!", "?", ";", ")", "]", "}"];
      let newDescription = {};
      Object.keys(description).map(function(key) {
        let RealMax = MAX;
        let lastChar;
        do {
          RealMax++;
          lastChar = description[key].slice(0, RealMax).slice(-1);
        } while (description[key].length > MAX && !endChars.includes(lastChar) && RealMax <= MAX + 15);
        RealMax--;
        newDescription[key] = description[key].slice(0, RealMax);
      });
      return newDescription;
    },
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY");
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
        this.index = this.index < this.newslist.length - 1 ? this.index + 1 : 0;
        this.toggle = !this.toggle;
        this.countDownTimer();
      }
    },
  },
  created() {
    // Define the locale for moment datetime
    moment.locale(this.$i18n.locale);

    // get news from remote storage
    this.newslist = this.getdata;
    if (this.newslist && this.newslist.length > 0 && this.timeToRefresh > 0) {
      this.countDownTimer();
    }
  },
  watch: {
    // validate when laguage change, to change the format date
    language: function(lan) {
      moment.locale(lan);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.news {
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
    .text-section {
      p {
        font-size: $font-size-small;
      }
    }
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
