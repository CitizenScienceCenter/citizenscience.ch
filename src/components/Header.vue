<template>
  <header>

    <button class="menu-button" @click="showMenu">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Artboard 1</title><rect x="32" y="68" width="448" height="56" rx="28" ry="28"/><rect x="32" y="228" width="448" height="56" rx="28" ry="28"/><rect x="32" y="388" width="448" height="56" rx="28" ry="28"/></svg>
    </button>

    <router-link to="/" class="home-link" active-class="active" exact>
      <h1><img alt="Citizen Science Center Zurich" class="logo" src="@/assets/logo.svg"/></h1>
    </router-link>

    <div class="uzh-eth">
      <img alt="University of Zurich / ETH Zurich" src="@/assets/uzh_eth_logo_e_pos.svg"/>
    </div>

    <div class="navigation-wrapper" v-click-outside="hideMenu" :class="{ 'active': menuOn }">
      <ul class="navigation">
        <li><router-link to="/about" active-class="active"><span>Citizen Science</span></router-link></li>
        <li><router-link to="/about" active-class="active"><span>SDG</span></router-link></li>
        <li><router-link to="/about" active-class="active"><span>Contact</span></router-link></li>
      </ul>
      <div class="custom-select language-select">
        <select>
          <option>De</option>
          <option>En</option>
        </select>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
           <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1
        	C100.6,213.5,109.5,192,127.3,192z"/>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>

import ClickOutside from 'vue-click-outside'

export default {
  name: 'Header',
  data: function() {
    return {
      menuOn: false
    }
  },
  methods: {
    showMenu() {
      this.menuOn = true;
    },
    hideMenu() {
      if( !event.target.classList.contains('menu-button') ) {
        console.log("outside pressed, not button");
        if( this.menuOn ) {
          console.log("outside 2");
          this.menuOn = false;
        }
      }
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">

@import '@/variables.scss';


header {
  height: 48px;
  background: white;


  .menu-button {
    display: block;
    float: left;
    width: 48px;
    height: 100%;
    background: transparent;
    outline: none;
    position: relative;
    cursor: pointer;

    svg {
      position: absolute;
      top: 16px;
      left: 16px;
      width: 16px;
      height: 16px;
      fill: #918F8F;
    }
  }

  .home-link {
    display: block;
    float: left;
    height: 100%;
    padding: 12px 0;

    h1 {
      height: 100%;
      .logo {
        display: block;
        height: 24px;
      }
    }
  }

  .uzh-eth {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 12px 0;
    margin-right: 16px;

    img {
      display: block;
      height: 24px;
    }
  }


  .navigation-wrapper {

    position: fixed;
    left: 0;
    top: 0;

    z-index: 999;
    background: grey;
    height: 100vh;
    width: 320px;

    display: none;
    &.active {
      display: block;
    }

    .navigation {

      li {
        display: block;

        a {
          display: block;
          padding: 0 24px;
          height: 80px;
          text-decoration: none;
          text-transform: uppercase;
          color: $color-text;

          span {
            display: block;
            line-height: 40px;
            padding-top: 21px;
            padding-bottom: 19px;
          }

          &:hover {
            color: $color-primary;
          }
        }
      }
    }

    .language-select {
      display: inline-block;
      margin: 20px 0;
      margin-left: 24px;
    }
  }

  .header-right {
    display: none;
  }
}


@media only screen and (min-width: $viewport-mobile-large) {

  header {

    height: 56px;

    .menu-button {
      width: 56px;
      svg {
        top: 20px;
        left: 20px;
        pointer-events: none;
      }
    }

    .home-link {
      h1 {
        .logo {
          height: 32px;
        }
      }
    }

    .uzh-eth {
      padding: 14px 0;
      img {
        height: 28px;
      }
    }

  }

}

@media only screen and (min-width: $viewport-tablet-portrait) {

  header {

    height: 64px;

    .menu-button {
      width: 64px;
      svg {
        top: 24px;
        left: 24px;
      }
    }

    .home-link {
      h1 {
        .logo {
          height: 40px;
        }
      }
    }

    .uzh-eth {
      padding: 16px 0;
      img {
        height: 32px;
      }
    }

  }

}


@media only screen and (min-width: $viewport-large) {

  header {

    height: 80px;

    .menu-button {
      display: none;
    }

    .home-link {
      padding: 16px;
      border-right: 1px solid #ddd;
      h1 {
        .logo {
          height: 48px;
        }
      }
    }

    .uzh-eth {
      position: relative;
      float: left;

      padding: 24px 0;
      padding-left: 16px;
      img {
        height: 32px;
      }
    }

  }

}




</style>
