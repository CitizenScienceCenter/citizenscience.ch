<template>
  <div id="app">
    <app-header :resetNow="resetNow" @undoResetNow="undoResetNow"></app-header>
    <div class="content-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
  },
  data() {
    return {
      resetNow: false
    }
  },
  methods: {
    scrollTop() {
      this.resetNow = true;
    },
    undoResetNow() {
      this.resetNow = false;
    }
  }
}

</script>

<style lang="scss" src="@/main.scss"></style>
