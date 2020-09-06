<template>
  <div class="social" v-if="visible">
    <!-- Heading Section -->
    <div class="row row-centered " v-if="heading.visible">
      <div class="col col-12 scroll-effect heading-section">
        <h2 class="heading small">
          {{ heading.text }}
        </h2>
      </div>
    </div>
    <!-- Content Section -->
    <div class="row row-centered">
      <div class="col col-12 scroll-effect content-section">
        <Timeline
          id="CitSciZurich"
          sourceType="profile"
          class="scroll-effect"
          :options="{
            tweetLimit: '1',
            chrome: 'nofooter noheader noborders transparent',
            width: 600,
            lang: $i18n.locale,
            dnt: true,
          }"
        ></Timeline>
      </div>
    </div>
    <!-- Footer Section -->
    <div class="row">
      <div class="col col-12 scroll-effect footer-section">
        <span>Follow us on</span>
        <i class="fab fa-facebook icon fcbk" @click="openUrlTab(fb_link)"></i>
        <i class="fab fa-twitter icon twttr" @click="openUrlTab(tw_link)"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { openUrl } from "@/assets/support.js";
// Tweeter
import { Tweet, Moment, Timeline } from "vue-tweet-embed";

export default {
  name: "SocialFeedBlock",
  components: { Timeline },
  data() {
    return {
      fb_link: "https://www.facebook.com/CitSciZurich/",
      tw_link: "https://twitter.com/CitSciZurich",
    };
  },
  props: {
    heading: {
      type: Object,
      default() {
        return { text: "", visible: false };
      },
    },
    visible: Boolean,
  },
  methods: {
    openUrlTab: function(url) {
      openUrl(url);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.social {
  .heading-section {
    padding-left: $spacing-3;
    .heading {
      margin-bottom: $spacing-1;
    }
  }
  .content-section {
    padding: 0 $spacing-2;
  }
  .footer-section {
    padding-left: $spacing-3;
    font-size: $font-size-mini;
    span {
      margin-right: $spacing-1;
      font-weight: 700;
    }
    .icon {
      font-size: $font-size-small;
      margin: 0 0.2em;
      cursor: pointer;
      &.fcbk {
        color: #3b5998;
      }
      &.twttr {
        color: #00acee;
      }
    }
  }
}
@media only screen and (min-width: $viewport-mobile-large) {
  .social {
    .content-section {
      padding: 0 $spacing-8;
      margin: -$spacing-3 0;
      transform: scaleY(0.9);
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .social {
    .content-section {
      padding: 0 $spacing-2;
      margin: 0;
      transform: scale(1);
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .social {
    .footer-section {
      font-size: $font-size-small;
      .icon {
        font-size: $font-size-normal;
      }
    }
  }
}
</style>
