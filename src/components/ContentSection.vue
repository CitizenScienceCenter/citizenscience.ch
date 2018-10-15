<template>
  <section class="content-section" :class="styleClass">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    'type': String
  },
  computed: {
    styleClass: function() {
      console.log( this.type )
      switch( this.type ) {
        case 'grey':
          return 'grey';
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
  &.image {
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

  h2 {
    font-size: $font-size-large;
    line-height: 1.25;
    text-align: center;
    font-weight: 700;
    color: $color-secondary;
    padding-bottom: $spacing-4;
    margin-bottom: $spacing-4;

    position: relative;

    &:after {
      content: '';
      width: 28px;
      height: 8px;
      background: url('../assets/title-separator.svg');
      position: absolute;
      bottom: 0;
      left: calc( 50% - 14px );
    }
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

}


@media only screen and (min-width: $viewport-mobile-large) {


}

@media only screen and (min-width: $viewport-tablet-portrait) {

  .content-section {

    padding: $spacing-6 0;

    .col-wide {
      width: 100%;
    }
    .col-narrow {
      width: 66.667%;
    }

    h2 {
      font-size: $font-size-xlarge;
    }

  }

}

@media only screen and (min-width: $viewport-large) {

  .content-section {

    padding: $spacing-7 0;

    .col-wide {
      width: 83.333%;
    }
    .col-narrow {
      width: 66.667%;
    }

    h2 {
      font-size: $font-size-xlarge;
    }

  }

}

@media only screen and (min-width: $viewport-xlarge) {

  .content-section {

    .col-wide {
      width: 66.667%;
    }
    .col-narrow {
      width: 50%;
    }

  }

}

</style>
