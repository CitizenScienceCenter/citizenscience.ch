<i18n>
    {
    "en": {
    "page-title": "404",
    "notfound-button":"Home",
    "notfound-label":"Page not found"
    },
    "de": {
    "page-title": "404",
    "notfound-button":"Home",
    "notfound-label":"Seite nicht gefunden"
    }
    }
</i18n>
<template>
  <div>
    <app-content-section>
      <div class="content-wrapper">
        <div class="row row-centered scroll-effect">
          <div class="col col-12">
            <h2 class="heading centered">{{ $t("page-title") }}</h2>
            <h2 class="subheading centered">{{ $t("notfound-label") }}</h2>
            <input
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
            />
            <button v-on:click="submitFile()">Submit</button>
            <div class="button-group centered">
              <router-link
                tag="button"
                to="/"
                class="button button-primary-main"
                >{{ $t("notfound-button") }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer></app-footer>
  </div>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "../components/shared/SectionNewsletterSignup";
import { updateStringFile } from "@/minio.js";

export default {
  name: "404",
  data() {
    return {
      file: "",
    };
  },
  components: {
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
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
  methods: {
    // *******************************************
    // TODO: methods for update json files in minion
    getContent(file) {
      const promise = new Promise(function(resolve, reject) {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
      return promise;
    },
    async handleFileUpload() {
      this.file = await this.getContent(this.$refs.file.files[0]);
    },
    submitFile() {
      updateStringFile("data/testname.json", this.file);
    },
    // *******************************************
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.heading {
  font-size: $font-size-4xlarge;
}
</style>
