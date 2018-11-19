<template>
  <div id="app">
    <!--<app-header :languages="['en']"></app-header>-->
    <app-header hideLogin></app-header>
    <div class="content-area">
      <router-view></router-view>
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
  mounted: function() {
    var app = this.$el;
    window.setTimeout(function() {
      app.classList.add("show");
    }, 1);
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
