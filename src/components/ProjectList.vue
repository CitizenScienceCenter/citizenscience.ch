<template>
  <div class="project-list">
    <div class="project project-wenker">
      <div class="row">
        <div class="col col-left">
          <div class="project-info">
            <span class="project-type">Sprachwissenschaften</span>
            <h3>Project Wenker</h3>
            <p>
              Im Rahmen eines Forschungsprojekts wurden vor rund 100 Jahren 40 hochdeutsche Sätze in die Dialekte der Schweiz übersetzt. Hilf uns, diesen Schatz zu heben.
            </p>
            <div class="buttons">
              <button class="button button-secondary button-secondary-inverted">Visit Project</button>
            </div>
          </div>
        </div>
        <div class="col col-right">
          <div class="project-image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList'
}
</script>

<style lang="scss">

@import '@/variables.scss';

.project-list {

  margin-bottom: $spacing-5;

  .project {

    background-size: cover;
    background-position: 50% 50%;
    position: relative;
    border-radius: $border-radius;
    box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);
    overflow: hidden;

    .row {
      min-height: 240px;
      height: 100%;
      .col-left {
        padding-right: 0;
        width: 66.667%;
        min-height: 100%;
      }
      .col-right {
        padding-left: 0;
        width: 33.333%;
        min-height: 100%;
      }
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: .75;
    }

    &.project-wenker {
      background-image: url('/img/projects/wenker-bg.jpg');
      background-position: 25% 25%;
      &:after {
        background-color: #5E5037;
      }
    }

    .project-info {
      position: relative;
      z-index: 1;
      color: white;
      padding: $spacing-3 0 $spacing-3 $spacing-3;
      height: 100%;

      .project-type {
        display: block;
        font-size: $font-size-small;
        text-transform: uppercase;
      }

      h3 {
        font-size: $font-size-medium;
        font-weight: 700;
        line-height: 1.25;
        text-align: left;
        text-transform: none;
        margin-bottom: $spacing-2;
      }

      p {
        font-size: $font-size-small;
        margin-bottom: $spacing-6;
      }

      .buttons {
        position: absolute;
        bottom: $spacing-3;
        left: $spacing-3;
        .button {
          margin: 0;
        }
      }
    }

    .project-image {
      position: relative;
      height: 100%;
      z-index: 1;
      background-image: url('/img/projects/wenker.png');
      background-size: cover;
      background-position: 0 0;
    }

  }

}


@media only screen and (min-width: $viewport-tablet-portrait) {
  .project-list {



  }
}


@media only screen and (min-width: $viewport-tablet-portrait) {

  .project-list {

    .project {


      .row {
        min-height: 320px;
        .col-left {
          width: 50%;
        }
        .col-right {
          width: 50%;
        }
      }

      .project-info {
        padding: $spacing-4;

        .buttons {
          bottom: $spacing-4;
          left: $spacing-4;
        }
      }

    }

  }

}

@media only screen and (min-width: $viewport-large) {

  .project-list {

    .project {

      .row {
        min-height: 360px;
      }

      .project-info {
        h3 {
          font-size: $font-size-large;
        }
      }

    }

  }

}

@media only screen and (min-width: $viewport-xlarge) {

  .project-list {

    .project {

      .row {
        min-height: 400px;
      }

    }

  }

}

</style>
