<i18n>
{
  "en": {
    },
  "de": { 
    }
}
</i18n>
<template>
  <div>
    <app-content-section>
      <div class="row row-centered ">
        <div class="col col-11">
          <generic-content-block
            :visible="viewConfig.visible"
            :vOrientation="viewConfig.vOrientation"
            :hReverse="false"
            :content="content"
            :viewConfig="viewConfig"
          ></generic-content-block>
        </div>
      </div>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";
import GenericContentBlock from "@/components/GenericContentBlock";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";

import { mapGetters, mapState } from "vuex";
import moment from "moment";
import { getTranslation } from "@/assets/support.js";

export default {
  components: {
    SectionNewsletterSignup,
    GenericContentBlock,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  props: {
    platform: {
      type: Boolean,
      default: false,
    },
  },
  metaInfo: function() {
    return {
      title: this.localTranslation(this.news.title),
      meta: [
        {
          property: "og:title",
          content: this.localTranslation(this.news.title),
          template: "%s | " + this.$t("site-title"),
        },
        {
          vmid: "og:image",
          property: "og:image",
          content: "https://citizenscience.ch/img/news/" + this.news.image,
        },
      ],
    };
  },
  data() {
    return {
      news: {},
      content: {
        heading: "",
        subtitle: "",
        description: "",
        image: "",
      },
      viewConfig: {
        visible: true,
        vOrientation: true,
        heading: { visible: true },
        title: { visible: false },
        subtitle: { visible: true },
        description: { visible: true },
        image: { visible: true, size: "lg", rounded: false },
        img_description: { visible: false },
        button: { disabled: false, visible: false },
        second_button: { disabled: false, visible: false },
      },
    };
  },
  computed: {
    ...mapState({
      language: (state) => state.settings.language,
    }),
    ...mapGetters({ getNews: "content/getNewsList" }),
  },
  methods: {
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    validateContet() {
      //fit news data to content type
      this.content = {
        heading: this.news.title,
        subtitle: this.formatDate(this.news.date),
        description: this.news.description,
        image: this.news.image,
      };
    },
    formatDate(date) {
      return moment(date).format("dddd, MMMM Do YYYY");
    },
  },
  created() {
    // Define the locale for moment datetime
    moment.locale(this.$i18n.locale);

    this.news = this.getNews.find((x) => x.path === this.$route.params.new);
    if (!this.news) {
      this.$router.push("/notfound");
    }
    this.validateContet();
  },
  watch: {
    // validate when laguage change, to change the format date
    language: function(lan) {
      moment.locale(lan);
      this.content.subtitle = this.formatDate(this.news.date);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
</style>
