<i18n>
  {
  "en": {
  "page-title": "Members",

  "section-members-heading": "Members"
  },
  "de": {
  "page-title": "Mitglieder",

  "section-members-heading": "Mitglieder"
  }
  }
</i18n>

<template>
  <div>
    <app-content-section class="overflow-hidden">
      <div class="content-wrapper">
        <div class="row row-centered">
          <!-- Heading section -->
          <div class="col col-large-10 scroll-effect">
            <h2 class="heading centered" id="members">
              {{ $t("section-members-heading") }}
            </h2>
          </div>
          <!-- Member list component -->
          <div class="col scroll-effect">
            <member-list
              :content="content"
              :viewConfig="viewConfig"
            ></member-list>
          </div>
        </div>
      </div>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";
import MemberList from "@/components/MemberList";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    MemberList,
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  data() {
    return {
      content: {},
      viewConfig: { visible: false },
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
    ...mapState({ style: (state) => state.viewconfig.members_view }),
    ...mapGetters({ getGContent: "content/getGenericContent" }),
  },
  methods: {
    setViewConfig() {
      this.viewConfig = this.style;
    },
    loadContent() {
      this.content = this.getGContent("members");
    },
  },
  created() {
    this.setViewConfig();
    this.loadContent();
  },
};
</script>

<style lang="scss"></style>
