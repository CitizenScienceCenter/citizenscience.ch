<template>
  <section class="cover" :class="styleClass" :style="{ 'background-image': 'url(' + bgImageUrl + ')' }">
    <div class="content-wrapper">
      <div class="row">
        <div class="col">
          <slot></slot>
        </div>
      </div>
    </div>

    <div class="uzh-eth">
      <span v-if="language === 'en'">A joined initiative by</span>
      <span v-else>Ein gemeinsamer Effort von</span>
      <img v-if="language === 'en'" alt="University of Zurich / ETH Zurich" src="@/assets/uzh_eth_logo_e_neg.svg"/>
      <img v-else alt="Universität Zürich / ETH Zürich" src="@/assets/uzh_eth_logo_d_neg.svg"/>
    </div>

    <img class="sdg-logo" src="@/assets/sdg-logo-white.svg" v-scroll-to="'#sdg'"/>
    <div class="cover-overlay"></div>
  </section>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    'subpage': String
  },
  computed: {
    language: function() {
      return this.$i18n.locale;
    },
    styleClass: function() {
      let cover = '';
      switch( this.subpage ) {
        case 'about':
          cover ='subpage';
          break;
      }
      return cover;
    },
    bgImageUrl: function() {
      let url = 'img/covers/sylwia-bartyzel-3149-unsplash.jpg';
      switch( this.subpage ) {
        case 'about':
          url = 'img/covers/carrots.jpg';
          break;
      }
      return url;
    }
  }
}
</script>

<style lang="scss">

@import '@/variables.scss';

.cover {
  height: 400px;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  display: flex;
  align-items: center;


  .uzh-eth {
    display: block;
    position: absolute;
    bottom: $spacing-2;
    left: $spacing-2;
    z-index: 1;

    span {
      display: block;
      font-size: $font-size-small / $font-scale;
      line-height: 1;
      margin-bottom: $spacing-1;
      color: white;
    }
    img {
      display: block;
      height: 28px;
    }
  }

  .sdg-logo {
    height: 32px;
    position: absolute;
    bottom: $spacing-2;
    right: $spacing-2;
    z-index: 1;
    cursor: pointer;
  }

  .content-wrapper {
    position: relative;
    z-index: 1;
    width: 100%;

    padding-bottom: $spacing-4;

    .cover-heading {
      font-size: $font-size-large;
      line-height: 1.25;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: $spacing-1;
    }
    .cover-subheading {
      font-size: $font-size-normal;
      font-weight: 400;
      color: white;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: $spacing-2;
    }
    .buttons {
      text-align: center;
      .button {
        margin: $spacing-1;
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
    background: linear-gradient(to bottom right, $color-secondary, $color-primary-secondary-mix );
    opacity: 0.8;
  }


  &.subpage {
    height: 64px;
    .sdg-logo {
      display: none;
    }
    .cover-heading, .cover-subheading {
      margin: 0;
    }
    .cover-overlay {
      opacity: 1;
    }
  }
}

@media only screen and (min-width: $viewport-mobile-large) {
  .cover {
    height: 480px;

    .content-wrapper {
      .cover-heading {
        font-size: $font-size-xlarge;
      }
      .cover-subheading {
        font-size: $font-size-normal;
      }
    }

    &.subpage {
      height: 80px;
    }
  }
}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .cover {
    height: 560px;

    .uzh-eth {
      bottom: $spacing-3;
      left: $spacing-3;
      img {
        height: 36px;
      }
    }
    .sdg-logo {
      height: 40px;
      bottom: $spacing-3;
      right: $spacing-3;
    }

    .content-wrapper {
      .cover-heading {
        font-size: $font-size-xlarge;
      }
      .cover-subheading {
        font-size: $font-size-medium;
      }
    }

    &.subpage {
      height: 96px;
    }
  }
}

@media only screen and (min-width: $viewport-large) {
  .cover {

    .content-wrapper {
      .cover-heading {
        font-size: $font-size-xxlarge;
      }
      .cover-subheading {
        font-size: $font-size-large;
      }
    }

    &.subpage {
      height: 128px;
    }
  }
}

@media only screen and (min-width: $viewport-xlarge) {
  .cover {

    height: 640px;

    .content-wrapper {
      .cover-heading {
        font-size: $font-size-xxxlarge;
      }
      .cover-subheading {
        font-size: $font-size-xlarge;
      }
    }
  }
}

</style>
