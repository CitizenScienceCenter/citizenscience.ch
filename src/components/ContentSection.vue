<template>
  <section class="content-section" :class="[colorClass]">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'ContentSection',
  data: function() {
    return {
      matches: []
    }
  },
  props: {
    'color': String
  },
  computed: {
    colorClass: function() {
      switch( this.color ) {
        case 'greyish':
          return 'greyish';
          break;
        case 'light-greyish':
          return 'light-greyish';
          break;
        default:
          return 'white';
      }
    }
  },
  methods: {
    scroll: function() {
      this.matches.forEach(function(element) {
        let {top,bottom} = element.getBoundingClientRect();
        let height = document.documentElement.clientHeight;
        let scrolled = top < height && bottom >0;
        if( scrolled ) {
          element.classList.add("scrolled");
        }
      });
    }
  },
  mounted: function() {
    window.addEventListener('scroll', this.scroll);
    this.matches = this.$el.querySelectorAll(".scroll-effect");

    this.scroll();
  },
  destroyed() {
    //window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">

@import '@/variables.scss';

.content-section {
  position: relative;
  padding: $spacing-6 0;
  background: white;
  overflow: hidden;


  .content-subsection {
    position: relative;
    padding: $spacing-4 0;

    &:first-of-type {
      padding-top: 0;
    }
    &:last-of-type {
      padding-bottom: 0;
    }
  }


  .scroll-effect {
    transition: all $transition-duration-super-long $transition-timing-function;
    transform: translateY($scroll-effect-offset);
    opacity: 0;

    &.scrolled {
      transform: translateY(0);
      opacity: 1;
    }
  }

  // Section Style

  &.light-greyish {
    background: linear-gradient(to bottom right, $color-secondary-tint-95, $color-primary-secondary-mix-tint-95 );
  }

  &.greyish {
    background: linear-gradient(to bottom right, $color-secondary-tint-80, $color-primary-secondary-mix-tint-80 );
  }

  .content-wrapper {
    position: relative;
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

    &.centered {
      &:after {
        left: calc( 50% - 12px );
      }
    }

  }

  .subheading {
    font-size: $font-size-medium;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: $spacing-4;
    &:first-child {
      padding-top: 0;
    }
  }

  p {
    margin-bottom: $spacing-4;

    .linebreak {
      display: block;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  .button {
    margin: $spacing-1;
  }


}


@media only screen and (min-width: $viewport-mobile-large) {

  .content-section {

  }

}

@media only screen and (min-width: $viewport-tablet-portrait) {

  .content-section {

    .content-subsection {
      padding: $spacing-5 0;
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

  }

}

@media only screen and (min-width: $viewport-large) {

  .content-section {

    padding: $spacing-7 0;
    overflow: hidden;


    .scroll-effect {
      &.scroll-effect-delayed-1 {
        transition-delay: $transition-delay-1;
      }
      &.scroll-effect-delayed-2 {
        transition-delay: $transition-delay-2;
      }
      &.scroll-effect-delayed-3 {
        transition-delay: $transition-delay-3;
      }
      &.scroll-effect-delayed-4 {
        transition-delay: $transition-delay-3;
      }
    }


    .content-wrapper-large-min-height {
      min-height: 500px;
    }

    .background-wrapper {
      position: absolute;
      width: 100%;
      top: 5%;
      left: auto;
      pointer-events: none;

      &.background-wrapper-move-right {
        left: 33.333%;
      }
      &.background-wrapper-move-left {
        left: -33.333%;
      }
    }

    .heading {
      &.left-aligned-large {
        &:after {
          left: 0;
        }
      }
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

    padding: $spacing-8 0;

    &.image {
      min-height: 640px;
    }

  }

}

</style>
