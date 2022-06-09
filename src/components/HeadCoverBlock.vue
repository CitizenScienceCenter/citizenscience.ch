<i18n>
  {
  "en": {
    "joint-initiative-UZH_ETH": "A joint initiative by",
    "default-button-name":"More Information"
  },
  "de": {
    "joint-initiative-UZH_ETH": "Ein gemeinsamer Effort von",
    "default-button-name":"Weitere Informationen"
  }
  }
</i18n>
<template>
  <!-- cover section -->
  <section class="cover" v-if="br.visible">
    <!-- slider -->
    <div class="content-wrapper">
      <!-- slide -->
      <div
        v-for="(cover, id) in coverInfo"
        :key="id"
        class="row cover-content"
        v-show="toggleCover(id)"
        :style="{
          'background-image': `linear-gradient(120deg, 
          ${color.gradient_start}bf, ${color.gradient_end}bf), 
          url(${backgroundImage(cover.image)})`,
        }"
      >
        <div class="col-12">
          <h2
            class="cover-heading scroll-effect"
            :class="scrolled ? 'scrolled' : ''"
            v-if="br.heading.visible"
          >
            {{ localTranslation(cover.title) }}
          </h2>
          <p
            class="cover-subheading scroll-effect scroll-effect-delayed-3"
            :class="scrolled ? 'scrolled' : ''"
            v-if="br.subheading.visible"
          >
            {{ localTranslation(cover.lead) }}
          </p>
          <div class="row row-centered button-group centered ">
            <!-- simple external link handler, with target _blank -->
            <div v-if="localTranslation(cover.path)">
              <a
                v-if="localTranslation(cover.path).startsWith('http')"
                :href="localTranslation(cover.path)"
                target="_blank"
                rel="noopener"
                class="button button-primary-main"
                >{{
                  localTranslation(cover.button) || $t("default-button-name")
                }}
              </a>
              <router-link
                v-else
                :to="localTranslation(cover.path)"
                class="button button-primary-main"
                >{{
                  localTranslation(cover.button) || $t("default-button-name")
                }}
              </router-link>
            </div>

            <!-- Extra button -->
            <div v-if="localTranslation(cover.extra_path)">
              <a
                v-if="localTranslation(cover.extra_path).startsWith('http')"
                :href="localTranslation(cover.extra_path)"
                target="_blank"
                rel="noopener"
                class="button button-secondary button-secondary-inverted"
                >{{
                  localTranslation(cover.extra_button) ||
                    $t("default-button-name")
                }}
              </a>
              <router-link
                v-else
                :to="localTranslation(cover.extra_path)"
                class="button button-secondary button-secondary-inverted"
                >{{
                  localTranslation(cover.extra_button) ||
                    $t("default-button-name")
                }}
              </router-link>
            </div>
          </div>
        </div>
        <!-- Extra top right logos -->
        <div
          class="top-right-logo"
          v-if="cover.extra_logos"
          :class="{ mitrends: false }"
        >
          <img
            v-if="cover.extra_logos.logo_right"
            :src="cover.extra_logos.logo_right"
          />
          <img
            class="left"
            v-if="cover.extra_logos.logo_left"
            :src="cover.extra_logos.logo_left"
          />
        </div>
      </div>
    </div>
    <!-- controls  -->
    <div class="controls" v-if="coverInfo.length > 1">
      <div class="prev" @click="setPrev()">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="next" @click="setNext()">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- UZH and ETH logos -->
    <div class="uzh-eth" v-if="br.uzh_eth_logo.visible">
      <span>{{ $t("joint-initiative-UZH_ETH") }}</span>
      <img
        v-if="this.$i18n.locale === 'en'"
        alt="University of Zurich / ETH Zurich"
        src="@/assets/shared/uzh_eth_logo_e_neg.svg"
        @click="logoClick($event)"
        :class="{ disabled: br.uzh_eth_logo.disabled }"
      />
      <img
        v-else
        alt="Universität Zürich / ETH Zürich"
        src="@/assets/shared/uzh_eth_logo_d_neg.svg"
        @click="logoClick($event)"
        :class="{ disabled: br.uzh_eth_logo.disabled }"
      />
    </div>

    <!-- Goal logos -->
    <div
      class="bottom-right-logo"
      v-scroll-to="'#sdg'"
      v-if="br.sdg_logo.visible"
    >
      <img v-if="goal" class="goal" :src="goalImage" :alt="goalImage" />
      <img
        id="sdg_logo"
        alt="sdg_logo"
        src="@/assets/shared/sdg-logo-white.svg"
        @click="openInNewTab('https://sdgs.un.org/goals', br.sdg_logo.disabled)"
        :class="{ disabled: br.sdg_logo.disabled }"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import { getTranslation, openUrl } from "@/assets/support.js";
import defaultColor from "@/styles/theme.scss";

export default {
  name: "Cover",
  data() {
    return {
      br: {},
      coverInfo: [],
      color: defaultColor,
      currentCover: 0,
      timer: null,
      scrolled: false,
    };
  },
  props: {
    customCover: Object,
    customView: Object,
    logosMitrends: Boolean,
    goal: String,
  },
  computed: {
    ...mapState({
      coverList: (state) => state.content.coverList,
      language: (state) => state.settings.language,
    }),
    ...mapGetters({ view: "viewconfig/getHomeConfig" }),
    goalImage() {
      return require("@/assets/shared/sdgs/neg/" + this.goal + ".svg");
    },
  },
  methods: {
    ...mapActions({ getCoverRemote: "content/getCoverRemote" }),
    backgroundImage(image) {
      let img = image;
      if (image && !image.startsWith("http")) {
        img = `/img/${image}`;
      }
      return img;
    },
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    openInNewTab: function(url, disabled = false) {
      if (disabled) {
        return;
      }
      openUrl(url);
    },
    logoClick: function(e) {
      // Validate first if logo is disabled
      if (this.br.uzh_eth_logo.disabled) return;
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var width = rect.width;
      if (x < width / 2) {
        this.openInNewTab("https://www.uzh.ch");
      } else {
        this.openInNewTab("https://www.ethz.ch");
      }
    },
    setCoverInfo() {
      this.triggerScroll(false);
      // if covers content comes from props
      //TODO: pending restructure the schema for custom cover
      if (this.customCover) {
        this.coverInfo = this.customCover.covers;
        // color setting
        this.color = this.customCover.color || defaultColor;
      } else if (this.coverList) {
        let covers = this.coverList
          .filter(
            (slide) =>
              !slide.expiration || Date.parse(slide.expiration) >= Date.now()
          )
          .sort(function(a, b) {
            return Date.parse(a.expiration) - Date.parse(b.expiration);
          });
        // Only the three most upcoming covers in the list
        this.coverInfo = covers.slice(0, this.br.number_of_img || 3);
      } else {
        this.coverInfo = [];
      }
      if (this.coverInfo && this.coverInfo.length > 1) {
        this.setRefreshTimer();
      }
      this.triggerScroll(true);
    },

    // cover change section
    toggleCover(coverId) {
      return coverId === this.currentCover;
    },
    setPrev() {
      this.resetTimer();
      this.currentCover =
        this.currentCover == 0
          ? this.coverInfo.length - 1
          : this.currentCover - 1;
    },
    setNext() {
      this.resetTimer();
      this.currentCover =
        this.currentCover < this.coverInfo.length - 1
          ? this.currentCover + 1
          : 0;
    },
    setRefreshTimer() {
      // validate refresh_time or set default in 10 seconds
      this.br.refresh_time =
        this.br.refresh_time &&
        this.br.refresh_time <= 30000 &&
        this.br.refresh_time >= 3000
          ? this.br.refresh_time
          : 10000;
      this.timer = setInterval(this.autoPlay, this.br.refresh_time);
    },
    resetTimer() {
      // This function restart the timer to give the user most time to read
      clearInterval(this.timer);
      // then started again timer
      this.timer = setInterval(this.autoPlay, this.br.refresh_time);
    },
    autoPlay() {
      this.setNext();
    },
    triggerScroll(scrollValue = false) {
      const _this = this;
      setTimeout(function() {
        _this.scrolled = scrollValue;
      }, 1);
    },
  },
  created() {
    this.br = this.customView || this.view("cover");
    this.setCoverInfo();
  },
  watch: {
    async language() {
      await this.getCoverRemote();
      this.setCoverInfo();
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.cover {
  height: 50vh;
  max-height: 440px;
  overflow: hidden;
  position: relative;
  word-break: break-word !important;
  z-index: 1;
  -webkit-box-shadow: 0px 1px 2px #333, 0px 10px 15px -6px #777;
  -moz-box-shadow: 0px 1px 2px #333, 0px 10px 15px -6px #777;
  box-shadow: 0px 1px 2px #333, 0px 10px 15px -6px #777;
  .content-wrapper {
    .cover-content {
      padding: 0 $spacing-1;
      position: absolute;
      align-items: center;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: 1;
      display: flex;
      animation: slide 1.5s ease;
      @keyframes slide {
        0% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
      .cover-heading {
        font-size: $font-size-medium;
        line-height: 1.25;
        font-weight: 700;
        color: white;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: $spacing-1;
      }
      .cover-subheading {
        font-size: $font-size-small;
        font-weight: 400;
        color: white;
        text-align: center;
        margin-bottom: $spacing-1;
      }
    }
  }
  .controls {
    display: flex;
    .prev,
    .next {
      position: absolute;
      z-index: 2;
      top: 10%;
      font-size: $font-size-xlarge;
      width: 25%;
      height: 50%;
      color: rgba(255, 255, 255, 0);
      text-align: center;
      transition: all 0.5s ease;
    }
    .prev:hover,
    .next:hover {
      color: rgba(255, 255, 255, 0);
    }
    .prev {
      left: 1%;
    }
    .next {
      right: 1%;
    }
  }
  .scroll-effect {
    transition: all $transition-duration-super-long $transition-timing-function;
    transform: translateY($scroll-effect-offset);
    opacity: 0;

    &.scroll-effect-delayed-1 {
      transition-delay: 0.25s;
    }
    &.scroll-effect-delayed-2 {
      transition-delay: 0.5s;
    }
    &.scroll-effect-delayed-3 {
      transition-delay: 0.75s;
    }

    &.scrolled {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .button {
    margin: $spacing-1;
    transform: scale(0.75);
    transition: transform 1 ease-in-out;
  }
  .uzh-eth {
    display: block;
    position: absolute;
    bottom: $spacing-2;
    left: $spacing-1;
    z-index: 1;

    span {
      display: block;
      font-size: calc($font-size-mini / $font-scale);
      line-height: 1;
      margin-bottom: $spacing-1;
      color: white;
    }
    img {
      display: block;
      height: 20px;
      cursor: pointer;
      &.disabled {
        cursor: default;
      }
    }
  }
  .bottom-right-logo {
    height: 20px;
    position: absolute;
    bottom: $spacing-2;
    right: $spacing-1;
    z-index: 1;
    cursor: pointer;

    img {
      height: 100%;
      &.goal {
        margin-right: $spacing-1;
      }
      &.disabled {
        cursor: default;
      }
    }
  }
  .top-right-logo {
    position: absolute;
    top: $spacing-1;
    right: $spacing-1;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    img {
      max-height: 38px;
      max-width: 60px;
      &.left {
        display: none;
      }
    }

    &.mitrends {
      img {
        max-height: 46px;
        max-width: none;
      }
    }
  }
}

@media only screen and (min-width: $viewport-mobile-large) {
  .cover {
    height: 40vh;
    max-height: 480px;

    .top-right-logo {
      &.mitrends {
        img {
          max-height: 54px;
          max-width: none;
        }
      }
    }
    .content-wrapper {
      .cover-content {
        .cover-heading {
          font-size: $font-size-large;
        }
        .cover-subheading {
          font-size: $font-size-small;
          margin-bottom: $spacing-2;
        }
      }
    }
  }
}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .cover {
    height: 50vh;
    .uzh-eth {
      bottom: $spacing-2;
      left: $spacing-2;
      img {
        height: 22px;
      }
      span {
        font-size: $font-size-mini;
      }
    }
    .bottom-right-logo {
      height: 30px;
      bottom: $spacing-2;
      right: $spacing-2;
    }
    .top-right-logo {
      img {
        max-height: 40px;
        max-width: 60px;
        &.left {
          display: flex;
        }
        &:nth-child(2) {
          margin-left: $spacing-1;
        }
      }

      &.mitrends {
        img {
          max-height: 70px;
          max-width: none;
        }
      }
    }

    .content-wrapper {
      .cover-content {
        padding: 0 $spacing-5;
        .cover-heading {
          font-size: $font-size-xlarge;
        }
        .cover-subheading {
          font-size: $font-size-normal;
        }
      }
    }
    .controls {
      .prev,
      .next {
        top: 40%;
        font-size: $font-size-large;
        width: auto;
        height: auto;
        color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
      }
      .prev:hover,
      .next:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}

@media only screen and (min-width: $viewport-large) {
  .cover {
    height: 40vh;
    .uzh-eth {
      bottom: $spacing-2;
      left: $spacing-2;
      img {
        height: 28px;
      }
      span {
        font-size: $font-size-mini;
      }
    }
    .bottom-right-logo {
      height: 38px;
      bottom: $spacing-2;
      right: $spacing-2;
    }
    .top-right-logo {
      top: $spacing-1;
      right: $spacing-1;

      img {
        max-height: 62px;
        max-width: 84px;
      }

      &.mitrends {
        img {
          max-height: 78px;
          max-width: none;
        }
      }
    }
    .content-wrapper {
      .cover-content {
        padding: 0 $spacing-7;
        .cover-heading {
          font-size: $font-size-xxlarge;
        }
        .cover-subheading {
          font-size: $font-size-normal;
        }
      }
    }
    .controls {
      .prev,
      .next {
        font-size: $font-size-xlarge;
      }
    }
  }
}

@media only screen and (min-width: $viewport-xlarge) {
  .cover {
    max-height: 600px;

    .top-right-logo {
      &.mitrends {
        img {
          max-height: 100px;
          max-width: none;
        }
      }
    }
  }
}

@media only screen and (min-width: $viewport-xxlarge) {
  .cover {
    .top-right-logo {
      &.mitrends {
        img {
          max-height: 120px;
          max-width: none;
        }
      }
    }
    .uzh-eth {
      img {
        height: 35px;
      }
      span {
        font-size: $font-size-small;
      }
    }
    .bottom-right-logo {
      height: 45px;
    }
    .button {
      transform: scale(0.9);
    }
    .content-wrapper {
      .cover-content {
        .cover-heading {
          font-size: $font-size-xxxlarge;
        }
        .cover-subheading {
          font-size: $font-size-medium;
        }
      }
    }
    .controls {
      .prev,
      .next {
        font-size: $font-size-xxlarge;
      }
    }
  }
}
@media only screen and (min-width: $viewport-xxxlarge) {
  .cover {
    .uzh-eth {
      img {
        height: 40px;
      }
    }
    .bottom-right-logo {
      height: 50px;
    }
    .button {
      margin: $spacing-3 0;
      font-size: $font-size-normal;
      transform: scale(1);
    }
    .content-wrapper {
      .cover-content {
        .cover-heading {
          font-size: $font-size-4xlarge;
        }
        .cover-subheading {
          font-size: $font-size-large;
        }
      }
    }
  }
}
</style>
