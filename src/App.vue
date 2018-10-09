<template>
  <div id="app">
    test
    <cmp-header></cmp-header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'cmp-header': Header
  }
}
</script>

<style>

</style>
