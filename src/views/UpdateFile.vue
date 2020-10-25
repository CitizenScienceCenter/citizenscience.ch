<i18n>
    {
    "en": {
    "page-title": "Update Content Files"
    },
    "de": {
    "page-title": "Inhaltsdateien aktualisieren"
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
          </div>
        </div>
        <div class="row row-centered scroll-effect">
          <div class="col col-12">
            <upload-file></upload-file>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-footer></app-footer>
  </div>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";
import UploadFile from "@/components/UploadFile.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "UpdateFileView",
  components: {
    UploadFile,
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
  methods: {},
};
</script>

<style lang="scss" scoped></style>
