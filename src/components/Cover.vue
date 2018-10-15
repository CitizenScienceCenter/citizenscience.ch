<template>
  <div>
    <div class="cover">
      <div class="content-wrapper">
        <div class="row">
          <div class="col">
            <slot></slot>
          </div>
        </div>
      </div>
      <div class="cover-overlay"></div>
    </div>
  </div>
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

  .content-wrapper {
    position: relative;
    z-index: 1;

    .cover-heading {
      font-size: $font-size-xlarge;
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
      margin-bottom: $spacing-2
    }
    .buttons {
      text-align: center;
      .button {
        color: white;
        margin: $spacing-1;
        &.button-secondary {
          border-color: rgba( 255,255,255,0.5 );
        }
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
