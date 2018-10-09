<template>
  <div class="cmp-header">
    <router-link to="/" active-class="active" exact><img class="logo" src="@/assets/logo.svg"/></router-link>
    <ul class="navigaton">
      <li><router-link to="/about" active-class="active">About</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

.cmp-header {

}

</style>
