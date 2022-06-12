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
  <div class="news" v-if="visible && newslist && newslist.length">
    <!-- Section Title  -->
    <div class="row row-centered extra-margin-top-2">
      <div
        class="col col-12 scroll-effect heading-section "
        :class="scrolled ? 'scrolled' : ''"
      >
        <h2 class="heading small">
          {{ $t("section-heading") }}
        </h2>
      </div>
    </div>
    <!-- Section Content  -->

    <div class="row row-centered text-section">
      <div class="col col-12 scroll-effect" :class="scrolled ? 'scrolled' : ''">
        <transition name="slide-fade" mode="out-in">
          <span :key="index" class="date">
            {{ formatDate(newslist[index].date) }}
          </span>
        </transition>
      </div>
      <div class="col col-12 scroll-effect" :class="scrolled ? 'scrolled' : ''">
        <transition name="slide-fade" mode="out-in">
          <h3 :key="index">
            {{ newslist[index].title }}
          </h3>
        </transition>
      </div>
      <!-- Text sub-section Content  -->
      <div
        class="col col-12 scroll-effect "
        :class="scrolled ? 'scrolled' : ''"
      >
        <transition name="slide-fade" mode="out-in">
          <prismic-rich-text :field="newslist[index].description" />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import moment from "moment";

export default {
  name: "GenericContentBlock",
  data() {
    return {
      countDown: 0,
      newslist: [],
      index: -1,
      toggle: false,
      scrolled: false,
    };
  },
  props: {
    visible: Boolean,
    timeToRefresh: { type: Number, default: 20 },
    limit: { type: Number, default: 5 },
    max_chars: { type: Number, default: 350 },
  },
  computed: {
    ...mapState({
      language: (state) => state.settings.language,
    }),
    ...mapGetters({ getNewsList: "content/getNewsList" }),
  },
  methods: {
    ...mapActions({ getNewsRemote: "content/getNewsRemote" }),
    // retrieve data from store
    getData() {
      this.triggerScroll(false);
      this.newslist = null;
      try {
        if (this.getNewsList) {
          this.newslist = this.getNewsList
            .slice(0) // soft copy the array
            .sort((b, a) => moment(a.date).diff(b.date))
            .slice(0, this.limit); // limit the array after sorting
        }
        if (this.newslist && this.newslist.length && this.timeToRefresh) {
          this.countDownTimer();
        }
      } catch (error) {
        this.newslist = null;
      } finally {
        this.triggerScroll(true);
      }
    },
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY");
    },
    // // Control the timer of slides
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
    triggerScroll(scrollValue = false) {
      const _this = this;
      setTimeout(function() {
        _this.scrolled = scrollValue;
      }, 1);
    },
  },
  created() {
    // Define the locale for moment datetime
    moment.locale(this.$i18n.locale);
    // get news from remote storage
    this.getData();
  },
  watch: {
    // validate when language change, to change the format date
    language: async function(lan) {
      await this.getNewsRemote();
      this.getData();
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
