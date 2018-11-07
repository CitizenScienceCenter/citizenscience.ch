<i18n>
{
  "en": {
    "project-wenker-title": "Project Wenker",
    "project-wenker-topic": "Linguistics",
    "project-wenker-description": "Im Rahmen eines Forschungsprojekts wurden vor rund 100 Jahren 40 hochdeutsche Sätze in die Dialekte der Schweiz übersetzt. Hilf uns, diesen Schatz zu heben.",

    "project-button": "Contribute"
  },
  "de": {
    "project-wenker-title": "Project Wenker",
    "project-wenker-topic": "Linguistics",
    "project-wenker-description": "Im Rahmen eines Forschungsprojekts wurden vor rund 100 Jahren 40 hochdeutsche Sätze in die Dialekte der Schweiz übersetzt. Hilf uns, diesen Schatz zu heben.",

    "project-button": "Contribute"
  }
}
</i18n>

<template>
  <div class="project-list">
    <div class="project">

      <div class="project-info">

        <span class="project-type">{{ $t('project-wenker-topic') }}</span>
        <h3>{{ $t('project-wenker-title') }}</h3>
        <p>
          {{ $t('project-wenker-description') }}
        </p>
        <div class="buttons">
          <button class="button button-primary" @click="link('http://wenker.citizenscience.ch')">{{ $t('project-button') }}</button>
        </div>

      </div>

      <div class="project-image"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  methods: {
    link: function(link) {
      window.location.href = link;
    }
  }
}
</script>

<style lang="scss">

@import '@/variables.scss';

.project-list {

  margin-bottom: $spacing-4;

  .project {

    position: relative;
    border-radius: $border-radius;
    box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);
    overflow: hidden;

    .project-info {

      position: relative;
      z-index: 1;
      color: white;
      height: 100%;
      padding: $spacing-2;
      padding-top: 120px;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, $color-secondary 50%, $color-primary-secondary-mix );
        mask-image: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0));
        // ms edge fallback
        @supports (-ms-ime-align:auto) {
            opacity: 0.75;
        }
        z-index: -1;
      }

      .project-type {
        display: block;
        font-size: $font-size-small;
        text-transform: uppercase;
        margin-bottom: $spacing-1;
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
        margin-bottom: $spacing-2;
      }

      .buttons {
        .button {
          margin: 0;
        }
      }
    }

    .project-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/img/projects/wenker.jpg');
      background-size: cover;
      background-position: 50% 0;
    }

  }

}


@media only screen and (min-width: $viewport-mobile-large) {
  .project-list {

    .project {
      .project-info {
        padding: $spacing-3;
        padding-top: 140px;

        p {
          margin-bottom: $spacing-3;
        }
      }
    }

  }
}


@media only screen and (min-width: $viewport-tablet-portrait) {

  .project-list {
    margin-bottom: $spacing-5;
    .project {
      .project-info {
        padding: $spacing-3;
        padding-right: 50%;

        &:after {
          background: linear-gradient(to bottom right, $color-secondary, $color-primary-secondary-mix 75% );
          mask-image: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0));
        }
      }
    }
  }

}

@media only screen and (min-width: $viewport-large) {

  .project-list {

    .project {
      min-height: 320px;

      .project-info {
        position: absolute;
        padding: $spacing-4;
        padding-right: 50%;

        .buttons {
          position: absolute;
          left: $spacing-4;
          bottom: $spacing-4;
        }
      }

      .project-image {
        background-position: 50% 10%;
      }

    }

  }

}

@media only screen and (min-width: $viewport-xlarge) {


}

</style>
