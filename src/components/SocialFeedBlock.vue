<i18n>
{
  "en": {
    "section-heading": "Follow Us",
    "footer-label": "Follow us on"
  },
  "de": {
    "section-heading": "Folgen Sie uns",
    "footer-label": "Folgen Sie uns auf"}
}
</i18n>
<template>
  <div class="social" v-if="visible">
    <!-- Heading Section -->
    <div class="row row-centered " v-if="br.heading.visible">
      <div class="col col-12 scroll-effect heading-section">
        <h2 class="heading small">
          {{ $t("section-heading") }}
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
            tweetLimit: limit,
            chrome: 'nofooter noheader noborders transparent',
            width: 600,
            lang: $i18n.locale,
            dnt: true,
          }"
        ></Timeline>
      </div>
    </div>
    <!-- Footer Section -->
    <div class="row" v-if="br.footer.visible">
      <div class="col col-12 scroll-effect footer-section">
        <span>{{ $t("footer-label") }}</span>
        <i
          class="fab fa-facebook icon fcbk"
          @click="openUrlTab(fb_link, br.fb_button.disabled)"
          v-if="br.fb_button.visible"
          :class="{ disabled: br.fb_button.disabled }"
        ></i>
        <i
          class="fab fa-twitter icon twttr"
          @click="openUrlTab(tw_link, br.tw_button.disabled)"
          v-if="br.tw_button.visible"
          :class="{ disabled: br.tw_button.disabled }"
        ></i>
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
      br: this.viewConfig,
      fb_link: "https://www.facebook.com/CitSciZurich/",
      tw_link: "https://twitter.com/CitSciZurich",
    };
  },
  props: {
    viewConfig: Object,
    visible: Boolean,
    limit: { type: Number, default: 1 },
  },
  methods: {
    openUrlTab: function(url, disabled = false) {
      if (disabled) return;
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
    margin-bottom: $spacing-2;
    max-height: 50vh;
    overflow-y: auto;
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
      &.disabled {
        cursor: default;
      }
    }
  }
}
@media only screen and (min-width: $viewport-mobile-large) {
  .social {
    .content-section {
      padding: 0 $spacing-2;
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .social {
    .content-section {
      max-height: 70vh;
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
