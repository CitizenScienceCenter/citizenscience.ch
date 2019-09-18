<template>
  <div id="app">
    <!--<app-header :languages="['en']"></app-header>-->
    <app-header></app-header>
    <div class="content-area">
      <router-view platform></router-view>
    </div>
    <g-d-p-r></g-d-p-r>
  </div>
</template>

<script>

import {mapState} from 'vuex';
import Header from './components/shared/Header.vue'
import GDPR from "./components/shared/GDPR";

export default {
  name: 'app',
  components: {
    'app-header': Header,
    GDPR
  },
  metaInfo: function() {
      return {
          // if no subcomponents specify a metaInfo.title, this title will be used
          title: '',
          // all titles will be injected into this template
          titleTemplate: '%s | '+this.$t('site-title'),
          meta: [
              {
                  vmid: 'description', // because it gets overwritten by some
                  name: 'description',
                  content: this.$t('site-description')
              },
              {
                vmid: 'og:description', // because it gets overwritten by some
                property: 'og:description',
                content: this.$t('site-description')
              },
              {
                  property: 'og:type',
                  content: 'website'
              },
              {
                  property: 'og:url',
                  content: 'https://citizenscience.ch'+this.$route.path
              },
              {
                  vmid: 'og:image', // because it gets overwritten by some
                  property: 'og:image',
                  content: 'https://citizenscience.ch/img/citsci-promo.jpg'
              }
          ],
          link: [
              {rel: 'canonical', href: 'https://citizenscience.ch'+this.$route.path}
          ],
          htmlAttrs: {
              lang: this.language
          }
      }
  },
  computed: mapState({
      language: state => state.settings.language
  }),
  mounted: function() {

    // body fade
    var app = this.$el;
    var cover = new Image();
    cover.src = '/img/cover.jpg';
    cover.onload = function() {
        /*
        if( navigator.userAgent !== 'ReactSnap' ) {
            app.classList.add("show");
        }
       */
        app.classList.add("show");
    };
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
