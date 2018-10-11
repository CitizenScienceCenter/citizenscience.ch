<template>
  <header :class="{ 'fixed': fixed,'animated': animated, 'pulled': pulled }">

    <button class="menu-button" @click="showMenu">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Artboard 1</title><rect x="32" y="68" width="448" height="56" rx="28" ry="28"/><rect x="32" y="228" width="448" height="56" rx="28" ry="28"/><rect x="32" y="388" width="448" height="56" rx="28" ry="28"/></svg>
    </button>

    <router-link to="/" class="home-link" active-class="active" exact>
      <h1><img alt="Citizen Science Center Zurich" class="logo" src="@/assets/logo.svg"/></h1>
    </router-link>

    <div class="uzh-eth">
      <img alt="University of Zurich / ETH Zurich" src="@/assets/uzh_eth_logo_e_pos.svg"/>
    </div>

    <div class="navigation-wrapper" :class="{ 'active': menuOn }">
      <div class="drawer">
        <div class="drawer-content">
          <div class="menu-header">
            <button class="menu-button" @click="hideMenu">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Artboard 1</title><rect x="32" y="68" width="448" height="56" rx="28" ry="28"/><rect x="32" y="228" width="448" height="56" rx="28" ry="28"/><rect x="32" y="388" width="448" height="56" rx="28" ry="28"/></svg>
            </button>
            <router-link to="/" class="home-link" active-class="active" exact @click.native="hideMenu">
              <img alt="Citizen Science Center Zurich" class="logo" src="@/assets/logo-white.svg"/>
            </router-link>
          </div>
          <ul class="navigation">
            <li><router-link to="/about" active-class="active" @click.native="hideMenu"><span>Citizen Science</span></router-link></li>
            <li><router-link to="/about" active-class="active" @click.native="hideMenu"><span>SDG</span></router-link></li>
            <li><router-link to="/about" active-class="active" @click.native="hideMenu"><span>Contact</span></router-link></li>
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
      </div>
      <div class="overlay" @click="hideMenu"></div>
    </div>
  </header>
</template>

<script>


export default {
  name: 'Header',
  data: function() {
    return {
      menuOn: false,
      scrollY: 0,
      scrollYpreviously: 0,
      fixed: false,
      animated: false,
      pulled: false
    }
  },
  methods: {
    scroll() {

      if( window.scrollY <= this.scrollY ) {
        // scroll up
        if( this.scrollYpreviously <= this.scrollY ) {
          // first time
          if( window.scrollY > 80 ) {
            this.pulled = false;
            this.fixed = true;
          }
        }
        else {
          // second time
          if( window.scrollY > 80 ) {
            this.pulled = true;
            this.animated = true;
          }
          else {
            if( window.scrollY === 0 ) {
              this.animated = false;
              this.pulled = false;
              this.fixed = false;
            }
          }
        }
      }
      else {
        // scroll down
        if( window.scrollY > 80 ) {
          this.fixed = true;
          this.pulled = false;
        }
        else {
          this.fixed = false;
          this.animated = false;
        }
      }

      this.scrollYpreviously = this.scrollY
      this.scrollY = window.scrollY;

    },
    showMenu() {
      this.menuOn = true;
    },
    hideMenu() {
      this.menuOn = false;
    }
  },
  created() {
    window.addEventListener('scroll', this.scroll);
  }
}
</script>

<style lang="scss">

@import '@/variables.scss';


header {
  height: 48px;
  width: 100%;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  backface-visibility: hidden;

  margin-top: 0px;

  &.fixed {
    position: fixed;
    margin-top: -80px;
  }
  &.animated {
    transition: margin-top 1000ms $transition-timing-function;
  }
  &.pulled {
    margin-top: 0px;
  }

  .menu-button {
    display: block;
    float: left;
    width: 48px;
    height: 48px;
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
      fill: $color-black-tint-50;
    }

    &:hover {
      svg {
        fill: $color-black;
      }
    }
  }

  .home-link {
    display: block;
    float: left;
    height: 48px;
    padding: 12px 0;

    .logo {
      display: block;
      height: 24px;
    }
  }

  .uzh-eth {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 48px;
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

    height: 100vh;
    width: 0;

    z-index: 999;

    &.active {
      width: 100%;
      .drawer {
        width: 240px;
      }
    }

    .drawer {

      width: 0;
      overflow: hidden;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;

      height: 100%;
      background: $color-black-tint-10;
      transition: width 250ms $transition-timing-function;
      backface-visibility: hidden;

      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

      .drawer-content {
        height: 100%;
        width: 240px;
        position: relative;

        .menu-header {
          height: 48px;
          margin-bottom: 48px;

          .menu-button {
            svg {
              fill: white;
            }
          }
        }

        .navigation {

          li {
            display: block;
            padding: 0 24px;
            border-bottom: 1px solid $color-black-tint-20;

            a {
              display: block;
              height: 48px;
              padding-top: 12px;
              text-decoration: none;
              text-transform: uppercase;
              color: white;

              span {
                display: block;
                line-height: 24px;
                padding-top: 1px;
              }

              &:hover {
                color: $color-black-tint-90;
              }
            }
          }
        }

        .language-select {
          margin-left: 24px;
          margin-bottom: 24px;
          position: absolute;
          bottom: 48px;
          left: 0;
          border: 1px solid $color-black-tint-50;
          select {
            color: white;
          }
          svg {
            fill: white;
          }
        }
      }
    }

    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: transparent;
    }
  }
}


@media only screen and (min-width: $viewport-mobile-large) {

  header {

    height: 56px;

    .menu-button {
      width: 56px;
      height: 56px;
      svg {
        top: 20px;
        left: 20px;
        pointer-events: none;
      }
    }

    .home-link {
      height: 56px;
      .logo {
        height: 32px;
      }
    }

    .uzh-eth {
      padding: 14px 0;
      height: 56px;
      img {
        height: 28px;
      }
    }

    .navigation-wrapper {
      &.active {
        .drawer {
          width: 280px;
        }
      }
      .drawer {
        .drawer-content {
          width: 280px;
          .menu-header {
            height: 56px;
            margin-bottom: 56px;
          }
          .navigation {
            li {
              padding: 0 32px;
              a {
                height: 56px;
                padding-top: 16px;
              }
            }
          }
          .language-select {
            margin-left: 32px;
            margin-bottom: 32px;
          }
        }
      }
    }

  }

}

@media only screen and (min-width: $viewport-tablet-portrait) {

  header {

    height: 64px;

    .menu-button {
      width: 64px;
      height: 64px;
      svg {
        top: 24px;
        left: 24px;
      }
    }

    .home-link {
      height: 64px;
      .logo {
        height: 40px;
      }
    }

    .uzh-eth {
      height: 64px;
      padding: 16px 0;
      img {
        height: 32px;
      }
    }

    .navigation-wrapper {
      .drawer {
        .drawer-content {
          .menu-header {
            height: 64px;
          }
        }
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
      border-right: 1px solid $color-black-tint-90;
      height: 80px;
      .logo {
        height: 48px;
      }
    }

    .uzh-eth {
      position: relative;
      float: left;
      height: 80px;

      padding: 20px 0;
      padding-left: 16px;
      img {
        height: 40px;
      }
    }

    .navigation-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: flex-end;

      background: none;
      width: 100%;
      height: auto;

      pointer-events: none;

      .drawer {
        .drawer-content {
          .menu-button, .home-link {
            display: none;
          }

          .navigation {
            pointer-events: all;
            display: inline-block;
            li {
              display: inline-block;
            }
          }

          .language-select {
            pointer-events: all;
            display: inline-block;
          }
        }
      }
    }

  }

}




</style>
