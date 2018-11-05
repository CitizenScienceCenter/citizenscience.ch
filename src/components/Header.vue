<i18n>
{
  "en": {
    "nav-activities": "What we do",
    "nav-offer": "What we offer",
    "nav-about": "About us"
  },
  "de": {
    "nav-activities": "Aktivitäten",
    "nav-offer": "Angebot",
    "nav-about": "Über uns"
  }
}
</i18n>


<template>
  <header :class="{ 'fixed': fixed,'animated': animated, 'pulled': pulled }">

    <button class="menu-button" @click="showMenu">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Artboard 1</title><rect x="32" y="68" width="448" height="56" rx="28" ry="28"/><rect x="32" y="228" width="448" height="56" rx="28" ry="28"/><rect x="32" y="388" width="448" height="56" rx="28" ry="28"/></svg>
    </button>

    <router-link to="/" class="home-link" active-class="active" exact>
      <h1><img alt="Citizen Science Center Zurich" class="logo" src="@/assets/logo.svg"/></h1>
    </router-link>

    <div class="navigation-wrapper" :class="{ 'active': menuOn }">
      <div class="drawer">
        <div class="drawer-content">
          <div class="menu-header">
            <button class="menu-button" @click="hideMenu">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect x="32" y="68" width="448" height="56" rx="28" ry="28"/><rect x="32" y="228" width="448" height="56" rx="28" ry="28"/><rect x="32" y="388" width="448" height="56" rx="28" ry="28"/></svg>
            </button>
            <router-link to="/" class="home-link" active-class="active" exact @click.native="hideMenu">
              <img alt="Citizen Science Center Zurich" class="logo" src="@/assets/logo-white.svg"/>
            </router-link>
          </div>
          <ul class="navigation">
            <li><router-link to="/activities" active-class="active" @click.native="hideMenu"><span>{{ $t('nav-activities') }}</span></router-link></li>
            <li><router-link to="/offer" active-class="active" @click.native="hideMenu"><span>{{ $t('nav-offer') }}</span></router-link></li>
            <li><router-link to="/about" active-class="active" @click.native="hideMenu"><span>{{ $t('nav-about') }}</span></router-link></li>
          </ul>
          <div class="custom-select language-select">
            <select v-model="language">
              <option value="de">De</option>
              <option value="en">En</option>
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
      pulled: false,
    }
  },
  computed: {
    language: {
      get() {
        return this.$store.state.language;
      },
      set(language) {
        var vm = this.$root;
        this.$store.dispatch('setLanguage', {vm, language} );
        this.hideMenu();
      }
    }
  },
  methods: {
    reset() {
      this.menuOn = false;
      this.scrollY = 0;
      this.scrollYpreviously = 0;
      this.fixed = false;
      this.animated = false;
      this.pulled = false;
    },
    scroll() {
      if( window.scrollY === 0 ) {
        this.reset();
      }

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

        if( this.scrollYpreviously >= this.scrollY ) {
          // first time
        }
        else {
          // second time
          if( window.scrollY > 80 ) {
            this.fixed = true;
            this.pulled = false;
          }
          else {
            this.fixed = false;
            this.animated = false;
          }
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
  box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);

  &.fixed {
    position: fixed;
    margin-top: -48px;
    box-shadow: none;
  }
  &.animated {
    transition: all $transition-duration-long $transition-timing-function;
  }
  &.pulled {
    margin-top: 0px;
    box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);
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
      fill: $color-black;
    }

    &:active {
      svg {
        fill: $color-black-tint-50;
      }
    }
    @media (hover: hover) {
      &:hover {
        svg {
          fill: $color-black-tint-50;
        }
      }
    }
  }

  .home-link {
    display: block;
    float: left;
    height: 48px;
    padding: 8px 0;

    .logo {
      display: block;
      height: 32px;
    }
  }


  .navigation-wrapper {

    position: fixed;
    left: 0;
    top: 0;

    height: 100vh;

    z-index: 999;

    &.active {
      width: 100%;
      .drawer {
        width: 240px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
      background: $color-primary;
      //background: linear-gradient(to bottom right, $color-secondary, $color-primary-shade-20 );
      transition: width $transition-duration-long $transition-timing-function;
      backface-visibility: hidden;

      .drawer-content {
        height: 100%;
        width: 240px;
        position: relative;

        overflow: hidden;

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
          border-top: 1px solid rgba(255,255,255,0.2);

          li {
            display: block;
            border-bottom: 1px solid rgba(255,255,255,0.2);

            a {
              display: block;
              height: 48px;
              padding: 12px 24px;
              text-decoration: none;
              text-transform: uppercase;
              color: white;

              span {
                display: block;
                font-size: $font-size-small;
                line-height: 24px;
                transform: translateY(-1px);
              }

              &.active {
                background-color: $color-primary-shade-20;
              }

              &:active {
                color: $color-black-tint-90;
              }
              @media (hover: hover) {
                &:hover {
                  color: $color-black-tint-90;
                }
              }
            }
          }
        }

        .language-select {
          margin-left: 12px;
          margin-top: $spacing-3;

          select {
            font-size: $font-size-small;
            text-transform: uppercase;
            padding-left: 12px;
            color: white;
            border: 1px solid rgba( $color-black-tint-90, 0.25 );
            border-radius: $border-radius;
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

    height: 64px;

    &.fixed {
      margin-top: -64px;
    }
    &.pulled {
      margin-top: 0px;
    }

    .menu-button {
      width: 64px;
      height: 64px;
      svg {
        top: 24px;
        left: 24px;
        pointer-events: none;
      }
    }

    .home-link {
      height: 64px;
      padding: 14px 0;
      .logo {
        height: 36px;
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
            height: 64px;
            margin-bottom: 64px;
          }
          .navigation {
            li {
              a {
                height: 64px;
                padding: 20px 32px;
              }
            }
          }
          .language-select {
            margin-left: 20px;
            margin-top: $spacing-4;
          }
        }
      }
    }

  }

}

@media only screen and (min-width: $viewport-tablet-portrait) {

  header {

    height: 64px;

    &.fixed {
      margin-top: -64px;
    }
    &.pulled {
      margin-top: 0px;
    }

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
      padding: 14px 0;
      .logo {
        height: 36px;
      }
    }



  }

}


@media only screen and (min-width: $viewport-large) {

  header {

    height: 80px;

    &.fixed {
      margin-top: -80px;
    }
    &.pulled {
      margin-top: 0px;
    }

    .menu-button {
      display: none;
    }

    .home-link {
      padding: 16px;
      height: 80px;
      .logo {
        height: 48px;
      }
    }

    .navigation-wrapper {

      &.active {
        width: auto;
        .drawer {
          width: auto;
          box-shadow: none;
        }
      }

      position: relative;
      float: right;
      height: auto;

      .drawer {
        width: auto;
        height: auto;
        position: relative;
        background: transparent;

        .drawer-content {
          width: auto;
          padding-right: 16px;

          .menu-header {
            display: none;
          }

          .navigation {
            border-top: 0;
            display: inline-block;
            padding-right: 12px;

            li {
              display: inline-block;
              border: none;
              a {
                color: $color-black;
                height: 80px;
                padding: 28px 24px;
                &:active {
                  color: $color-primary;
                }
                @media (hover: hover) {
                  &:hover {
                    color: $color-primary;
                  }
                }
                &.active {
                  color: $color-primary;
                  background-color: transparent;
                }
              }
            }
          }

          .language-select {
            margin: 16px 0;

            select {
              color: $color-black;
              border-color: transparent;

              &:active {
                color: $color-primary;
                border-color: $color-black-tint-90;
              }
              @media (hover: hover) {
                &:hover {
                  color: $color-primary;
                  border-color: $color-black-tint-90;
                }
              }

            }
            svg {
              fill: $color-black;
            }

          }
        }
      }

      .overlay {
        display: none;
      }

    }

  }

}




</style>
