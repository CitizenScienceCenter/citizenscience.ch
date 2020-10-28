<i18n>
  {
  "en": {
  "page-title": "Mission & Goals",

  "section-mission-heading": "Mission & Goals",
  "section-mission-text": "<b>The Center aims at:</b>",
  "section-mission-listitem-1": "Engaging academic scientists and the public in next-generation citizen science projects, tackling problems in different fields of science and society, from fundamental physics to human health.",
  "section-mission-listitem-2": "Providing the resources, expertise and technical know-how to develop, set up, and run citizen science projects.",
  "section-mission-listitem-3": "Maintaining the highest standards of excellence in research methodology, including scientific results, quality of data, and research ethics.",
  "section-mission-listitem-4": "Contributing to the global effort toward sustainable development, by creating actionable knowledge and data that can help tackle the UN SDGs at the local, regional and global level.",
  "section-mission-text-2": "The Citizen Science Center Zurich adheres to the principles of <b>Open Science</b> and operates in a fully <b>transparent</b> manner.",
  "section-mission-download-text": "Here You can find the Center’s Statute, including organizational structure:",
  "section-mission-download-button": "Center’s Statute"
  },
  "de": {
  "page-title": "Mission & Ziele",

  "section-mission-heading": "Mission & Ziele",
  "section-mission-text": "<b>Die Ziele des Centers sind folgende:</b>",
  "section-mission-listitem-1": "Forscherinnen und Forschern sowie Bürgerinnen und Bürgern die Möglichkeit zu geben, gemeinsame Forschungsprojekte in verschiedenen Bereichen von Wissenschaft und Gesellschaft durchzuführen, von Grundlagenphysik bis hin zu Gesundheitsthemen.",
  "section-mission-listitem-2": "Die Ressourcen, das Fachwissen und das technische Know-how zur Verfügung zu stellen um Citizen Science Projekt zu planen, zu entwickeln und durchzuführen.",
  "section-mission-listitem-3": "Exzellente Standards in der Forschungsmethodologie einzuhalten, einschliesslich der Ergebnisfindung, Datengewinnung und -qualität und der Forschungsethik.",
  "section-mission-listitem-4": "Uns an den weltweiten Bestrebungen für eine nachhaltige Entwicklung zu beteiligen, indem wir anwendbares Wissen und Daten generieren, um die SDGs auf lokaler, regionaler und globaler Ebene zu erreichen.",
  "section-mission-text-2": "Das Citizen Science Center Zürich sieht sich den Prinzipien von <b>Open Science</b> und <b>Transparenz</b> verpflichtet.",
  "section-mission-download-text": "Hier finden Sie die Geschäftsordnung des Centers mit Informationen zu Organisation und Struktur:",
  "section-mission-download-button": "Geschäftsordnung"
  }
  }
</i18n>

<template>
  <div id="top">
    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-large-10">
            <h2 class="heading centered">
              {{ $t("section-mission-heading") }}
            </h2>
          </div>
        </div>
      </div>

      <div class="content-wrapper">
        <!-- Generic Content component for Mission -->
        <div
          class="row row-centered row-middle content-item"
          v-for="item in content"
          v-bind:key="item.id"
        >
          <generic-content-block
            class="extra-margin-bottom"
            :visible="viewConfig.visible"
            :vOrientation="viewConfig.vOrientation"
            :hReverse="item.reverse"
            :content="item"
            :viewConfig="viewConfig"
          ></generic-content-block>
        </div>
      </div>
    </app-content-section>

    <!-- TODO: verify before removing -->
    <!-- <app-content-section class="overflow-hidden">
      <div
        class="background-wrapper background-wrapper-move-right scroll-effect scroll-effect-delayed-1"
      >
        <div class="content-wrapper">
          <div class="row row-centered">
            <div
              class="col col-6 col-large-7 col-large-before-1 col-wrapping col-large-no-bottom-margin"
            >
              <img src="/img/graphic-roadmap.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="row">
          <div
            class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect"
          >
            <h2 class="heading centered left-aligned-large" id="mission">
              {{ $t("section-mission-heading") }}
            </h2>
            <p class="list-intro" v-html="$t('section-mission-text')"></p>
            <ul>
              <li v-html="$t('section-mission-listitem-1')"></li>
              <li v-html="$t('section-mission-listitem-2')"></li>
              <li v-html="$t('section-mission-listitem-3')"></li>
              <li v-html="$t('section-mission-listitem-4')"></li>
            </ul>
            <p v-html="$t('section-mission-text-2')"></p>
            <p
              class="list-intro"
              v-html="$t('section-mission-download-text')"
            ></p>
          </div>
        </div>
      </div>
    </app-content-section> 
    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row">
          <div
            class="col col-tablet-portrait-7 col-large-10 col-large-before-1 col-wrapping col-large-no-bottom-margin scroll-effect"
          >
            <p class="list-intro" v-html="$t('section-mission-text')"></p>
            <ul>
              <li v-html="$t('section-mission-listitem-1')"></li>
              <li v-html="$t('section-mission-listitem-2')"></li>
              <li v-html="$t('section-mission-listitem-3')"></li>
              <li v-html="$t('section-mission-listitem-4')"></li>
            </ul>
            <p v-html="$t('section-mission-text-2')"></p>
            <p
              class="list-intro"
              v-html="$t('section-mission-download-text')"
            ></p>
            <p class="centered left-aligned-large">
              <button
                class="button button-secondary button-icon"
                @click="openInNewTab('/files/geschaeftsordnung_cccs.pdf')"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;"
                  xml:space="preserve"
                >
                  <path
                    d="M245.9,256.1c-5-16-4.9-46.9-2-46.9C252.3,209.2,251.5,246.1,245.9,256.1z M244.2,303.3c-7.7,20.2-17.3,43.3-28.4,62.7
                      c18.3-7,39-17.2,62.9-21.9C266,334.5,253.8,320.7,244.2,303.3L244.2,303.3z M150.1,428.1c0,0.8,13.2-5.4,34.9-40.2
                      C178.3,394.2,155.9,412.4,150.1,428.1z M312,160h136v328c0,13.3-10.7,24-24,24H88c-13.3,0-24-10.7-24-24V24C64,10.7,74.7,0,88,0h200
                      v136C288,149.2,298.8,160,312,160z M304,331.8c-20-12.2-33.3-29-42.7-53.8c4.5-18.5,11.6-46.6,6.2-64.2
                      c-4.7-29.4-42.4-26.5-47.8-6.8c-5,18.3-0.4,44.1,8.1,77c-11.6,27.6-28.7,64.6-40.8,85.8c-0.1,0-0.1,0.1-0.2,0.1
                      c-27.1,13.9-73.6,44.5-54.5,68c5.6,6.9,16,10,21.5,10c17.9,0,35.7-18,61.1-61.8c25.8-8.5,54.1-19.1,79-23.2
                      c21.7,11.8,47.1,19.5,64,19.5c29.2,0,31.2-32,19.7-43.4C363.7,325.4,323.3,329.3,304,331.8z M441,105L343,7c-4.5-4.5-10.6-7-17-7h-6
                      v128h128v-6.1C448,115.6,445.5,109.5,441,105z M366.9,360.3c4.1-2.7-2.5-11.9-42.8-9C361.2,367.1,366.9,360.3,366.9,360.3z"
                  />
                </svg>
                {{ $t("section-mission-download-button") }}
              </button>
            </p>
          </div>
        </div>
      </div>
    </app-content-section> -->

    <!-- Special section joit initiative -->
    <!-- <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-reverse-large">
          <div
            class="col col-tablet-portrait-11 col-large-6 col-large-after-1 col-wrapping col-large-no-bottom-margin scroll-effect"
          >
            <div class="row">
              <h2 class="heading centered left-aligned-large">
                {{ localTranslation(joinInitiativeContent.heading) }}
              </h2>
            </div>

            <div class="row row-centered">
              <component
                :is="getDynamicData"
                class="text-description"
              ></component>
            </div>
            <br />
            <p class="centered left-aligned-large">
              <img
                v-if="this.$i18n.locale === 'en'"
                class="uzh-eth-logo"
                alt="University of Zurich / ETH Zurich"
                src="@/assets/shared/uzh_eth_logo_e_pos.svg"
              />
              <img
                v-else
                alt="Universität Zürich / ETH Zürich"
                class="uzh-eth-logo"
                src="@/assets/shared/uzh_eth_logo_d_pos.svg"
              />
            </p>
          </div>
        </div>
      </div>
      <div
        class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1"
      >
        <div class="content-wrapper">
          <div class="row row-centered">
            <div
              class="col col-tablet-portrait-10 col-large-7 col-large-after-1"
            >
              <img
                :src="joinInitiativeContent.image"
                style="border-radius:50%"
              />
            </div>
          </div>
        </div>
      </div>
    </app-content-section> -->

    <!-- TODO: verify the style config -->
    <!-- Join Initiative section -->
    <app-content-section class="overflow-hidden content-section-compact">
      <generic-content-width-block
        :content="joinInitiativeContent"
        :visible="true"
        :hReverse="true"
      ></generic-content-width-block>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";
import GenericContentBlock from "@/components/GenericContentBlock.vue";
import GenericContentWidthBlock from "@/components/GenericContentWidthBlock.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";

import { getTranslation } from "@/assets/support.js";
import { mapGetters } from "vuex";

export default {
  components: {
    GenericContentBlock,
    GenericContentWidthBlock,
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  data() {
    return {
      content: {},
      joinInitiativeContent: {},
      isReverse: false,
      viewConfig: {
        visible: true,
        vOrientation: false,
        heading: { visible: false },
        subheading: { visible: true },
        description: { visible: true },
        image: { visible: true, size: "md", rounded: true },
        img_description: { visible: false },
        button: { disabled: false, visible: true },
        second_button: { disabled: false, visible: false },
      },
    };
  },
  props: {
    platform: {
      type: Boolean,
      default: false,
    },
  },
  metaInfo: function() {
    return {
      title: this.$t("page-title"),
      meta: [
        {
          property: "og:title",
          content: this.$t("page-title"),
          template: "%s | " + this.$t("site-title"),
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ getGContent: "content/getGenericContent" }),
    getDynamicData: function() {
      return {
        template: `<div>${this.localTranslation(
          this.joinInitiativeContent.description
        )}</div>`,
      };
    },
  },
  methods: {
    // openInNewTab: function(url) {
    //   var win = window.open(url, "_blank");
    //   win.focus();
    // },
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    loadContent() {
      this.content = this.getGContent("mission").contentList.map((x) =>
        this.toggleReverse(x)
      );
      this.joinInitiativeContent = this.getGContent("mission").joinInitiative;
    },
    toggleReverse(contentItem) {
      contentItem.reverse = this.isReverse;
      this.isReverse = !this.isReverse;
      return contentItem;
    },
  },
  created() {
    this.loadContent();
  },
};
</script>

<style lang="scss"></style>
