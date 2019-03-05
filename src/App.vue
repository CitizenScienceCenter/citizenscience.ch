<i18n>
{
  "en": {
    "site-title": "Citizen Science Center Zurich",
    "site-description": "Next Level Citizen Science"
  },
"de": {
    "site-title": "Citizen Science Center Zürich",
    "site-description": "Next Level Citizen Science"
  }
}
</i18n>

<template>
  <div id="app">
    <!--<app-header :languages="['en']"></app-header>-->
    <app-header></app-header>
    <div class="content-area">
      <router-view platform @hashNav="hashNav"></router-view>
    </div>
  </div>
</template>

<script>

import Header from './components/shared/Header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
  },
  metaInfo: function() {
      return {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: '',
        // all titles will be injected into this template
        titleTemplate: '%s | '+this.$t('site-title'),
          meta: [
              {
                  name: 'description',
                  content: this.$t('site-description')
              },
              {
                  property: 'og:title',
                  content: this.$t('site-title')
              },
              {
                  property: 'og:description',
                  content: this.$t('site-description')
              },
              {
                  property: 'og:type',
                  content: 'website'
              },
              {
                  property: 'og:url',
                  content: 'https://www.citizenscience.ch'
              },
              {
                  property: 'og:image',
                  content: 'https://www.citizenscience.ch/img/citsci-promo.jpg'
              }
          ]
      }
  },
  mounted: function() {
    var app = this.$el;
    window.setTimeout(function() {
      app.classList.add("show");
    }, 1);
  },
  methods: {
    hashNav( hash ) {
        this.$router.push( { hash: hash } );
    }
  }
}

</script>

<style lang="scss" src="@/styles/shared/main.scss"></style>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';

#app {
  opacity: 0;
  transition: all $transition-duration-super-long $transition-timing-function;
  &.show {
    opacity: 1;
  }
}

</style>
