<i18n>
  {
  "en": {
    "cover-heading": "Next Generation Citizen Science",
    "cover-subheading": "Citizen Science Center Zurich",
    "cover-button-projects": "Start contributing",
    "cover-button-your-project": "Suggest a project"
  },
  "de": {
    "cover-heading": "Next Generation Citizen Science",
    "cover-subheading": "Citizen Science Center Zurich",
    "cover-button-projects": "Jetzt mitforschen",
    "cover-button-your-project": "Neue Projektidee?"
  }
  }
</i18n>

<template>
  <section v-if="hasNews" class="news-cover">
    <!-- shows first upcoming news -->
    <div class="news-container">
      <div class="news-entry" :style="'background-image: url(/img/'+news[0].image+')'">
        <div class="news-content-wrapper">
          <div class="news-content">
            <content-section class="content-section-flat content-section-image" color="transparent">
              <div class="content-wrapper">
                <div class="row row-centered">
                  <div class="col col-large-6 col-large-before-6 scroll-effect">
                    <div class="news-image-wrapper">
                      <img :src="'/img/'+news[0].image" />
                      <img :src="'/img/'+news[0].image" />
                    </div>
                  </div>
                </div>
              </div>
            </content-section>
            <content-section class="content-section-flat content-section-text" color="transparent">
              <div class="content-wrapper">
                <div class="row row-middle">
                  <div class="col col-large-5 col-large-before-1 scroll-effect">
                    <h2 class="heading centered left-aligned-large">{{ news[0][$i18n.locale].title }}</h2>
                    <p class="centered left-aligned-large">{{ news[0][$i18n.locale].lead }}</p>
                    <div class="button-group centered left-aligned-large">
                      <!-- simple external link handler, with target _blank -->
                      <a v-if="news[0][$i18n.locale].path.startsWith('http')" :href="news[0][$i18n.locale].path" target="_blank" class="button button-primary">{{ news[0][$i18n.locale].button }}</a>
                      <router-link v-else :to="news[0][$i18n.locale].path" class="button button-primary">{{ news[0][$i18n.locale].button }}</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </content-section>
          </div>
        </div>
        <div class="slide-overlay"></div>
      </div>
    </div>

    <div class="uzh-eth">
      <span v-if="this.$i18n.locale === 'en'">A joint initiative by</span>
      <span v-else>Ein gemeinsamer Effort von</span>
      <img v-if="this.$i18n.locale === 'en'" alt="University of Zurich / ETH Zurich" src="@/assets/shared/uzh_eth_logo_e_neg.svg" @click="logoClick($event)"/>
      <img v-else alt="Universität Zürich / ETH Zürich" src="@/assets/shared/uzh_eth_logo_d_neg.svg" @click="logoClick($event)"/>
    </div>

    <div class="bottom-right-logo">
      <img src="@/assets/shared/sdg-logo-white.svg" />
    </div>

  </section>


  <!-- no news > default cover -->
  <cover v-else imageUrl="/img/cover.jpg">
    <h2 class="cover-heading scroll-effect">{{ $t('cover-heading') }}</h2>
    <p class="cover-subheading scroll-effect scroll-effect-delayed-1">{{ $t('cover-subheading') }}</p>
    <p class="button-group centered scroll-effect scroll-effect-delayed-2">
      <router-link tag="button" to="/contribute" class="button button-primary">{{ $t('cover-button-projects') }}</router-link>
      <router-link tag="button" to="/start" class="button button-secondary button-secondary-inverted">{{ $t('cover-button-your-project') }}</router-link>
    </p>
  </cover>
</template>

<script>

import news from "@/assets/cover_news.json";
import Cover from "./shared/Cover";
import ContentSection from "./shared/ContentSection";

export default {
  name: 'NewsCover',
  components: {ContentSection, Cover},
  data() {
    return {
      news: news
    }
  },
  computed: {
    hasNews() {
      if( this.news.length > 0 ) {
        return true;
      }
      else {
        return false;
      }
    }
  },
  methods: {
    logoClick: function(e) {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var width = rect.width;
      if (x < width / 2) {
        this.openInNewTab('https://www.uzh.ch');
      }
      else {
        this.openInNewTab('https://www.ethz.ch');
      }
    }
  },
  created() {
    this.news = this.news.filter(slide => Date.parse(slide.expiration) >= Date.now() );
    // sort by date
    this.news.sort(function(a, b){
      return Date.parse(a.start) - Date.parse(b.start);
    });
  },
}
</script>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';

.news-cover {
  height: 440px;
  position: relative;

  .news-container {
    height: 100%;
    .news-entry {
      height: 100%;
      background-size: cover;
      background-position: 50% 50%;

      .news-content-wrapper {

        position: relative;
        overflow: visible;
        z-index: 1;

        height: calc(100% - 80px);

        .news-content {

          height: 100%;
          display: flex;
          flex-direction: column;

          .content-section-image {
            flex-grow: 1;
            .content-wrapper {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;

              padding: $spacing-2 0;
              .row {
                height: 100%;
                .col {
                  height: 100%;
                  .news-image-wrapper {
                    height: 100%;
                    position: relative;
                    img {
                      box-shadow: 0 0 0 $spacing-1 rgba(white, 0.1);
                      display: block;
                      position: absolute;
                      top: 0;
                      left: 50%;
                      height: 100%;
                      transform: translateX(-50%);
                      border-radius: 50%;
                    }
                  }
                }
              }
            }
          }

          // heading / paragraph change
          .content-section {
            width: 100%;
            .heading {
              color: white;
              padding-bottom: 0;
              margin-bottom: $spacing-1;
              &:after {
                opacity: 0;
              }
            }
            p {
              color: white;
              margin-bottom: $spacing-2;
            }
          }

        }

      }

      .slide-overlay {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        //background: linear-gradient(to bottom right, $color-secondary, $color-primary-secondary-mix );
        background: linear-gradient(120deg, $color-gradient-start, $color-gradient-end );
        opacity: 0.8;
      }
    }
  }

  .uzh-eth {
    display: block;
    position: absolute;
    bottom: $spacing-2;
    left: $spacing-2;
    z-index: 1;

    span {
      display: block;
      font-size: $font-size-small / $font-scale;
      line-height: 1;
      margin-bottom: $spacing-1;
      color: white;
    }
    img {
      display: block;
      height: 28px;
      cursor: pointer;
    }
  }

  .bottom-right-logo {
    height: 28px;
    position: absolute;
    bottom: $spacing-2;
    right: $spacing-2;
    z-index: 1;
    cursor: pointer;

    img {
      height: 100%;
      &.goal {
        margin-right: $spacing-1;
      }
    }
  }

  .cover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    //background: linear-gradient(to bottom right, $color-secondary, $color-primary-secondary-mix );
    background: linear-gradient(120deg, $color-gradient-start, $color-gradient-end );
    opacity: 0.8;
  }

}

@media only screen and (min-width: $viewport-mobile-large) {
  .news-cover {
    height: 480px;

    .news-container {
      .news-entry {
        .news-content-wrapper {
          height: calc(100% - 80px);
        }
      }
    }
  }
}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .news-cover {
    height: 470px;

    .news-container {
      .news-entry {
        .news-content-wrapper {
          height: calc(100% - 96px);

        }
      }
    }

    .uzh-eth {
      bottom: $spacing-3;
      left: $spacing-3;
      img {
        height: 36px;
      }
    }
    .bottom-right-logo {
      height: 36px;
      bottom: $spacing-3;
      right: $spacing-3;
    }
  }
}

@media only screen and (min-width: $viewport-large) {
  .news-cover {
    height: 80vh;
    max-height: 470px;

    .news-container {
      .news-entry {
        overflow: hidden;
        .news-content-wrapper {
          height: calc(100% - 104px);
          .news-content {
            display: block;
            .content-section-image {
              position: absolute;
              top: 0;
              //right: -25%;
              height: calc( 100% + 104px );
              .content-wrapper {
                padding: 0;
                max-width: none;
                .row {
                  display: block;
                  .col {
                    padding: 0;
                    text-align: right;
                    .news-image-wrapper {
                      display: inline-block;
                      overflow: hidden;
                      border-radius: 50%;
                      transform-origin: left;
                      transform: scale(2);
                      box-shadow: 0 0 0 $spacing-2 rgba(white, 0.1);
                      img {
                        box-shadow: none;
                        position: relative;
                        left: 0;
                        right: 0;
                        transform: none;
                        display: inline-block;
                        border-radius: 0;
                        &:last-child {
                          position: absolute;
                          left: 0;
                          top: 25%;
                          width: 50%;
                          height: 50%;
                        }
                      }
                    }
                  }
                }
              }
            }

            .content-section-text {
              height: 100%;
              .content-wrapper {
                height: 100%;
                .row {
                  height: 100%;
                }
              }
            }

            // heading / paragraph change
            .content-section {
              .heading {
                font-size: $font-size-large;
                padding-bottom: $spacing-3;
                margin-bottom: $spacing-3;
                &:after {
                  opacity: 1;
                }
              }
              p {
                margin-bottom: $spacing-3;
              }
            }
          }
        }
      }
    }

    .uzh-eth {
      bottom: $spacing-3;
      left: $spacing-3;
      img {
        height: 48px;
      }
    }
    .bottom-right-logo {
      height: 48px;
      bottom: $spacing-3;
      right: $spacing-3;
    }

  }
}

@media only screen and (min-width: $viewport-xlarge) {
  .news-cover {

    height: 80vh;
    max-height: 600px;

    .news-container {
      .news-entry {
        .news-content-wrapper {
          height: calc(100% - 104px);

          .news-content {

            // heading / paragraph change
            .content-section {
              .heading {
                font-size: $font-size-xlarge;
                padding-bottom: $spacing-4;
                margin-bottom: $spacing-4;
              }

              p {
                margin-bottom: $spacing-4;
              }
            }
          }
        }
      }
    }

  }
}

</style>
