<template>
  <section class="cover" :class="styleClass" :style="{ 'background-image': 'url(' + bgImageUrl + ')' }">
    <div class="content-wrapper">
      <div class="row">
        <div class="col">
          <slot></slot>
        </div>
      </div>
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
    styleClass: function() {
      switch( this.subpage ) {
        case 'about':
          return 'subpage';
          break;
        default:
          return '';
      }
    },
    bgImageUrl: function() {
      switch( this.subpage ) {
        case 'about':
          return 'img/covers/carrots.jpg';
          break;
        default:
          return 'img/covers/sylwia-bartyzel-3149-unsplash.jpg';
      }
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

  .sdg-logo {
    height: 32px;
    position: absolute;
    bottom: $spacing-3;
    right: $spacing-3;
    z-index: 1;
    cursor: pointer;
  }


  .content-wrapper {
    position: relative;
    z-index: 1;

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
    background: linear-gradient(to bottom right, $color-secondary, $color-primary-shade-20 );
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

    .sdg-logo {
      height: 48px;
      bottom: $spacing-4;
      right: $spacing-4;
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
