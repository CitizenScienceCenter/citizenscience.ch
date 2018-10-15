<template>
  <section class="cover">
    <div class="content-wrapper">
      <div class="row">
        <div class="col">
          <slot></slot>
        </div>
      </div>
    </div>
    <img class="sdg-logo" src="@/assets/sdg-logo.svg"/>
    <div class="cover-overlay"></div>
  </section>
</template>

<script>
export default {
  name: 'Cover'
}
</script>

<style lang="scss">

@import '@/variables.scss';

.cover {
  height: 400px;
  background-image: url('../assets/sylwia-bartyzel-3149-unsplash.jpg');
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  display: flex;
  align-items: center;

  .sdg-logo {
    height: 40px;
    position: absolute;
    bottom: $spacing-3;
    right: $spacing-3;
    z-index: 1;
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
}

@media only screen and (min-width: $viewport-mobile-large) {
  .cover {
    height: 480px;

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
        font-size: $font-size-normal;
      }
    }
  }
}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .cover {
    height: 560px;

    .sdg-logo {
      height: 64px;
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
  }
}

@media only screen and (min-width: $viewport-large) {
  .cover {
    height: 560px;

    .content-wrapper {
      .cover-heading {
        font-size: $font-size-xxlarge;
      }
      .cover-subheading {
        font-size: $font-size-large;
      }
    }
  }
}

@media only screen and (min-width: $viewport-xlarge) {
  .cover {
    height: 560px;

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
