<i18n>
  {
  "en": {
    "cover-heading": "Next Generation Citizen Science",
    "cover-subheading": "Citizen Science Center Zurich",
    "cover-button-projects": "Start contributing",
    "cover-button-your-project": "Suggest a project"
  },
  "de": {
    "cover-heading": "Citizen Science der nächsten Generation",
    "cover-subheading": "Citizen Science Center Zürich",
    "cover-button-projects": "Jetzt mitforschen",
    "cover-button-your-project": "Neue Projektidee?"
  }
  }
</i18n>
<template>
  <section class="cover" :style="{ 'background-image': 'url('+backgroundImage+')' }">
    <div class="content-wrapper">
      <div class="row">
        <div class="col">
          <h2 class="cover-heading scroll-effect">{{ $t("cover-heading") }}</h2>
          <p class="cover-subheading scroll-effect scroll-effect-delayed-1">
            {{ $t("cover-subheading") }}
          </p>
          <p
            class="button-group centered scroll-effect scroll-effect-delayed-2"
          >
            <router-link
              tag="button"
              to="/contribute"
              class="button button-primary"
              >{{ $t("cover-button-projects") }}</router-link
            >
            <router-link
              tag="button"
              to="/start"
              class="button button-secondary button-secondary-inverted"
              >{{ $t("cover-button-your-project") }}</router-link
            >
          </p>
        </div>
      </div>
    </div>

    <div class="uzh-eth">
      <span v-if="this.$i18n.locale === 'en'">A joint initiative by</span>
      <span v-else>Ein gemeinsamer Effort von</span>
      <img
        v-if="this.$i18n.locale === 'en'"
        alt="University of Zurich / ETH Zurich"
        src="@/assets/shared/uzh_eth_logo_e_neg.svg"
        @click="logoClick($event)"
      />
      <img
        v-else
        alt="Universität Zürich / ETH Zürich"
        src="@/assets/shared/uzh_eth_logo_d_neg.svg"
        @click="logoClick($event)"
      />
    </div>

    <div class="bottom-right-logo" v-scroll-to="'#sdg'">
      <img v-if="goal" class="goal" :src="goalImage" />
      <img src="@/assets/shared/sdg-logo-white.svg" />
    </div>

    <div
      class="top-right-logo"
      v-if="logoUrl"
      :class="{ mitrends: logosMitrends }"
    >
      <img :src="logoUrl" />
      <img v-if="logo2Url" :src="logo2Url" />
    </div>

    <div class="cover-overlay"></div>
  </section>
</template>

<script>
export default {
  name: "Cover",
  props: {
    imageUrl: String,
    logoUrl: String,
    logo2Url: String,
    logosMitrends: Boolean,
    goal: String,
  },
  computed: {
    goalImage() {
      return require("@/assets/shared/sdgs/neg/" + this.goal + ".svg");
    },
    backgroundImage() {
      const img = this.imageUrl
        ? this.imageUrl
        : "/img/cover.jpg";
      return img;
    }
  },
  methods: {
    openInNewTab: function (url) {
      var win = window.open(url, "_blank");
      win.focus();
    },
    logoClick: function (e) {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var width = rect.width;
      if (x < width / 2) {
        this.openInNewTab("https://www.uzh.ch");
      } else {
        this.openInNewTab("https://www.ethz.ch");
      }
    },
  },
  mounted: function () {
    let matches = this.$el.querySelectorAll(".scroll-effect");
    window.setTimeout(function () {
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
  background-position: 50% 50%;
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
  }

  .uzh-eth {
    display: block;
    position: absolute;
    bottom: $spacing-1;
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
    }
  }

  .bottom-right-logo {
    height: 20px;
    position: absolute;
    bottom: $spacing-1;
    right: $spacing-1;
    z-index: 1;
    cursor: pointer;

    img {
      height: 100%;
      &.goal {
        margin-right: $spacing-1;
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
      max-height: 48px;
      max-width: 72px;

      &:nth-child(2) {
        margin-left: $spacing-1;
      }
    }

    &.mitrends {
      img {
        max-height: 56px;
        max-width: none;
      }
    }
  }

  .content-wrapper {
    position: relative;
    z-index: 1;
    width: 100%;

    padding-bottom: $spacing-4;

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
          max-height: 64px;
          max-width: none;
        }
      }
    }

    .content-wrapper {
      .cover-heading {
        font-size: $font-size-large;
      }
      .cover-subheading {
        font-size: $font-size-normal;
        margin-bottom: $spacing-2;
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
      span{
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
        max-height: 64px;
        max-width: 80px;

        &:nth-child(2) {
          margin-left: $spacing-2;
        }
      }

      &.mitrends {
        img {
          max-height: 80px;
          max-width: none;
        }
      }
    }

    .content-wrapper {
      .cover-heading {
        font-size: $font-size-xlarge;
      }
      .cover-subheading {
        font-size: $font-size-medium;
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
      span{
        font-size: $font-size-mini;
      }
    }
    .bottom-right-logo {
      height: 38px;
      bottom: $spacing-2;
      right: $spacing-2;
    }
    .top-right-logo {
      top: $spacing-2;
      right: $spacing-2;

      img {
        max-height: 72px;
        max-width: 104px;
      }

      &.mitrends {
        img {
          max-height: 88px;
          max-width: none;
        }
      }
    }

    .content-wrapper {
      .cover-heading {
        font-size: $font-size-xlarge;
      }
      .cover-subheading {
        font-size: $font-size-medium;
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
          max-height: 104px;
          max-width: none;
        }
      }
    }

    .content-wrapper {
      .cover-heading {
        font-size: $font-size-xlarge;
      }
      .cover-subheading {
        font-size: $font-size-medium;
      }
    }
  }
}
</style>
