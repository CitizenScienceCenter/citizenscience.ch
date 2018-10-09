<template>
  <header>
    <div class="header-left">
      <router-link to="/" class="home-link" active-class="active" exact>
        <h1><img alt="Citizen Science Center Zurich" class="logo" src="@/assets/logo.svg"/></h1>
      </router-link>
      <div class="uzh-eth">
        <img alt="University of Zurich / ETH Zurich" src="@/assets/uzh_eth_logo_e_pos.svg"/>
      </div>
    </div>
    <div class="header-right">
      <ul class="navigation">
        <li><router-link to="/about" active-class="active">About</router-link></li>
        <li><router-link to="/about" active-class="active">About</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">

@import '@/colors.scss';

header {
  height: 80px;
  background: white;
  position: relative;

  .header-left {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;

    .home-link {
      height: 100%;
      padding: 16px;
      border-right: 1px solid #231F20;

      h1 .logo {
        height: 48px;
      }
    }
    .uzh-eth {
      height: 100%;
      padding: 20px 24px;

      img {
        height: 40px;
      }
    }
  }

  .header-right {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;

    .navigation {
      height: 100%;

      li {
        display: inline-block;
        height: 100%;

        a {
          display: block;
          padding: 0 32px;
          line-height: 80px;
          text-decoration: none;
          color: $color-text;
        }
      }
    }
  }
}

</style>
