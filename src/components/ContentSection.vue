<template>
  <section class="content-section" :class="styleClass">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    'type': String,
  },
  computed: {
    styleClass: function() {
      switch( this.type ) {
        case 'greyish':
          return 'greyish';
          break;
        case 'light-greyish':
          return 'light-greyish';
          break;
        case 'parallax':
          return 'parallax';
          break;
        default:
          return '';
      }
    }
  }
}
</script>

<style lang="scss">

@import '@/variables.scss';

.content-section {

  position: relative;
  padding: $spacing-5 0;
  background: white;

  &.light-greyish {
    background: linear-gradient(to bottom right, $color-secondary-tint-95, $color-primary-secondary-mix-tint-95 );
  }

  &.greyish {
    background: linear-gradient(to bottom right, $color-secondary-tint-80, $color-primary-secondary-mix-tint-80 );
  }

  .heading {
    font-size: $font-size-large;
    line-height: 1.25;
    font-weight: 700;
    color: $color-secondary;
    padding-bottom: $spacing-4;
    margin-bottom: $spacing-4;
    text-align: center;
    position: relative;

    &:after {
      content: '';
      width: 24px;
      height: 4px;
      background: url('../assets/title-separator.svg');
      position: absolute;
      bottom: 0;
      left: calc( 50% - 12px );
    }

  }

  .subheading {
    font-size: $font-size-medium;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: $spacing-4;
    text-align: center;
  }

  p {
    margin-bottom: $spacing-4;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .button {
    margin: $spacing-1;
  }

  .uzh-eth-logo {
    height: 40px;
  }

  .col-half, .col-third {
    margin-bottom: $spacing-5;
  }

  .col-super-narrow {
    width: 83.333%;
  }

}


@media only screen and (min-width: $viewport-mobile-large) {

  .content-section {
    .sdg-logo {
      height: 56px;
    }
  }

}

@media only screen and (min-width: $viewport-tablet-portrait) {

  .content-section {

    padding: $spacing-6 0;

    &.image {
      min-height: 480px;
    }


    .sdg-logo {
      height: 64px;
    }

    .heading {
      font-size: $font-size-xlarge;
      padding-bottom: $spacing-5;
      margin-bottom: $spacing-5;
    }

    .subheading {
      margin-bottom: $spacing-5;
    }

    p {
      margin-bottom: $spacing-5;
    }

    .uzh-eth-logo {
      height: 48px;
    }

    .col-half {
      width: 66.667%;
    }
    .col-third {
      width: 66.667%;
    }
    .col-narrow {
      width: 66.667%;
    }
    .col-super-narrow {
      width: 50%;
    }

  }

}

@media only screen and (min-width: $viewport-large) {

  .content-section {

    padding: $spacing-7 0;

    &.image {
      min-height: 560px;
    }

    .sdg-logo {
      height: 80px;
    }

    .heading {
      font-size: $font-size-xlarge;
    }

    .uzh-eth-logo {
      height: 56px;
    }

    .row-reverse {
      flex-direction: row-reverse;
    }


    .col-half {
      margin-bottom: 0;

      width: 41.667%;
      display: flex;
      align-items: center;

      .heading {
        text-align: left;
        &:after {
          left: 0;
        }
      }

      .centered {
        text-align: left;
      }
    }

    .col-third {
      margin-bottom: 0;
      width: 33.333%;
    }

    .col-wide {
      width: 83.333%;
    }
    .col-medium {
      width: 83.333%;
    }
    .col-narrow {
      width: 66.667%;
    }
    .col-super-narrow {
      width: 33.333%;
    }

  }

}

@media only screen and (min-width: $viewport-xlarge) {

  .content-section {

    &.image {
      min-height: 640px;
    }

    .col-wide {
      width: 83.333%;
    }
    .col-medium {
      width: 66.667%;
    }
    .col-narrow {
      width: 50%;
    }

  }

}

</style>
