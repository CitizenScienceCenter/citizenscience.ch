<template>
  <div id="app">
    <app-header></app-header>
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
  }
}

</script>

<style lang="scss" src="@/main.scss"></style>
