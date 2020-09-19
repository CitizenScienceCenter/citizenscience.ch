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
  <section
    class="cover"
    :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    v-if="br.visible"
  >
    <div class="content-wrapper">
      <div class="row cover-content">
        <div class="col-12">
          <h2 class="cover-heading scroll-effect" v-if="br.heading.visible">
            {{ localTranslation(coverInfo.title) }}
          </h2>
          <p
            class="cover-subheading scroll-effect scroll-effect-delayed-5"
            v-if="br.subheading.visible"
          >
            {{ localTranslation(coverInfo.lead) }}
          </p>
          <div
            class="button-group centered"
            v-if="localTranslation(coverInfo.path)"
          >
            <!-- simple external link handler, with target _blank -->
            <a
              v-if="localTranslation(coverInfo.path).startsWith('http')"
              :href="localTranslation(coverInfo.path)"
              target="_blank"
              class="button button-primary-main"
              >{{
                localTranslation(coverInfo.button) || $t("default-button-name")
              }}</a
            >
            <router-link
              v-else
              :to="localTranslation(coverInfo.path)"
              class="button button-primary-main"
              >{{
                localTranslation(coverInfo.button) || $t("default-button-name")
              }}</router-link
            >
          </div>
        </div>
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
      <img v-if="goal" class="goal" :src="goalImage" />
      <img
        id="sdg_logo"
        src="@/assets/shared/sdg-logo-white.svg"
        @click="openInNewTab('https://sdgs.un.org/goals', br.sdg_logo.disabled)"
        :class="{ disabled: br.sdg_logo.disabled }"
      />
    </div>

    <!-- Extra top right logos -->
    <div
      class="top-right-logo"
      v-if="coverInfo.extra_logos"
      :class="{ mitrends: false }"
    >
      <img
        v-if="coverInfo.extra_logos.logo_right"
        :src="coverInfo.extra_logos.logo_right"
      />
      <img
        class="left"
        v-if="coverInfo.extra_logos.logo_left"
        :src="coverInfo.extra_logos.logo_left"
      />
    </div>

    <div class="cover-overlay"></div>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { getTranslation, openUrl } from "@/assets/support.js";
// import news from "@/assets/cover_list.json";

export default {
  name: "Cover",
  data() {
    return {
      br: {},
      coverInfo: {},
    };
  },
  props: {
    logosMitrends: Boolean,
    goal: String,
  },
  computed: {
    ...mapState({ coverList: (state) => state.content.coverList }),
    ...mapGetters({ view: "viewconfig/getHomeComponentConfig" }),
    goalImage() {
      return require("@/assets/shared/sdgs/neg/" + this.goal + ".svg");
    },
    backgroundImage() {
      let img = this.coverInfo.image;
      if (this.coverInfo.image && !this.coverInfo.image.startsWith("http")) {
        img = `/img/${this.coverInfo.image}`;
      }
      return img;
    },
  },
  methods: {
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
      let covers = [];
      if (this.coverList.hasOwnProperty("covers")) {
        covers = this.coverList.covers
          .filter((slide) => Date.parse(slide.expiration) >= Date.now())
          .sort(function(a, b) {
            return Date.parse(a.expiration) - Date.parse(b.expiration);
          });
      }
      this.coverInfo = covers[0] || this.coverList.default;
      console.log(this.coverInfo);
    },
  },
  created() {
    this.br = this.view("cover");
    this.setCoverInfo();
  },
  mounted: function() {
    let matches = this.$el.querySelectorAll(".scroll-effect");
    window.setTimeout(function() {
      for (let i = 0; i < matches.length; i++) {
        matches[i].classList.add("scrolled");
      }
    }, 1);
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.cover {
  height: 50vh;
  max-height: 440px;
  background-position: center center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
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
      font-size: $font-size-mini / $font-scale;
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

  .content-wrapper {
    position: relative;
    z-index: 1;
    width: 100%;
    padding-bottom: $spacing-2;
    .cover-content {
      display: flex;
      justify-content: center;
      align-items: center;
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
        font-size: $font-size-mini;
        font-weight: 400;
        color: white;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: $spacing-1;
      }
    }
  }

  .cover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    //background: linear-gradient(to bottom right, $color-secondary, $color-primary-secondary-mix );
    background: linear-gradient(
      120deg,
      $color-gradient-start,
      $color-gradient-end
    );
    opacity: 0.8;
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
    height: 40vh;
    max-height: 470px;

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
        .cover-heading {
          font-size: $font-size-xlarge;
        }
        .cover-subheading {
          font-size: $font-size-normal;
        }
      }
    }
  }
}

@media only screen and (min-width: $viewport-large) {
  .cover {
    height: 40vh;
    max-height: 470px;

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
    .button {
      transform: scale(0.9);
    }
    .content-wrapper {
      .cover-content {
        .cover-heading {
          font-size: $font-size-xxlarge;
        }
        .cover-subheading {
          font-size: $font-size-medium;
        }
      }
    }
  }
}

@media only screen and (min-width: $viewport-xlarge) {
  .cover {
    height: 40vh;
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
    .content-wrapper {
      .cover-content {
        .cover-heading {
          font-size: $font-size-xxxlarge;
        }
        .cover-subheading {
          font-size: $font-size-large;
        }
      }
    }
  }
}
</style>
