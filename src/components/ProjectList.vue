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

  margin-bottom: $spacing-4;

  .project {

    background-size: cover;
    background-position: 50% 50%;
    position: relative;
    border-radius: $border-radius;
    overflow: hidden;

    .col-left {
      padding-right: 0;
      width: 66.667%;
    }
    .col-right {
      padding-left: 0;
      width: 33.333%;
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

      .project-type {
        display: block;
        font-size: $font-size-small;
        text-transform: uppercase;
      }

      h3 {
        font-size: $font-size-medium;
        font-weight: 700;
        margin-bottom: $spacing-2;
      }

      p {
        font-size: $font-size-small;
      }

      .buttons {
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
      min-height: 320px;
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

      .col-left {
        width: 50%;
      }
      .col-right {
        width: 50%;
      }

      .project-info {
        padding: $spacing-4 0 $spacing-4 $spacing-4;
      }

    }

  }

}

@media only screen and (min-width: $viewport-large) {

  .project-list {

    .project {

      .project-info {
        h3 {
          font-size: $font-size-large;
        }
      }

    }

  }

}

@media only screen and (min-width: $viewport-xlarge) {



}

</style>
