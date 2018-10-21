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
        case 'grey':
          return 'grey';
          break;
        case 'dark-grey':
          return 'dark-grey';
          break;
        case 'image-bg':
          return 'image-bg';
          break;
        case 'image':
          return 'image';
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

  &.grey {
    background-color: $color-black-tint-97;
  }

  &.image-bg {
    background-image: url('/img/flags.jpg');
    background-size: cover;
    background-position: 50% 50%;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      opacity: 0.95;
    }
    .content-wrapper {
      position: relative;
      z-index: 1;
    }
  }

  &.image {
    background-image: url('/img/uzh-eth.jpg');
    background-size: cover;
    background-position: 50% 50%;
    min-height: 320px;
  }

  .sdg-logo {
    height: 48px;
  }

  .heading {
    font-size: $font-size-large;
    line-height: 1.25;
    font-weight: 700;
    color: $color-secondary;
    padding-bottom: $spacing-4;
    margin-bottom: $spacing-4;

    position: relative;

    &:after {
      content: '';
      width: 24px;
      height: 4px;
      background: url('../assets/title-separator.svg');
      position: absolute;
      bottom: 0;
      left: 0;
    }

    &.heading-centered {
      text-align: center;
      &:after {
        left: calc( 50% - 12px );
      }
    }
  }

  .subheading {
    font-size: $font-size-medium;
    line-height: 1.5;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: $spacing-4;
  }

  p {
    margin-bottom: $spacing-4;

    img {
      width: 100%;
    }
  }

  .buttons {
    .button {
      margin: $spacing-1;
    }
  }

  .uzh-eth-logo {
    height: 40px;
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

    .col-narrow {
      width: 66.667%;
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

  }

}

@media only screen and (min-width: $viewport-large) {

  .content-section {

    padding: $spacing-7 0;

    &.image {
      min-height: 560px;
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

    .sdg-logo {
      height: 80px;
    }

    .heading {
      font-size: $font-size-xlarge;
    }

    .uzh-eth-logo {
      height: 56px;
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
