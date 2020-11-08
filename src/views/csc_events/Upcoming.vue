<i18n>
{
  "en": {

    "page-title": "Upcoming Events",
    "upcoming-events-heading": "Upcoming Events"

    },
  "de": {

    "page-title": "Bevorstehende Ereignisse",
    "upcoming-events-heading": "Bevorstehende Events"

    }
}
</i18n>
<template>
  <div>
    <app-content-section id="upcoming-events">
      <div class="content-wrapper" >
        <div class="row row-centered">
          <div class="col col-large-10 col-xlarge-8">
            <h2 class="heading centered scroll-effect">
              {{ $t("upcoming-events-heading") }}
            </h2>

            <event-list visible :viewConfig="eventsConfig"></event-list>
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
import Expandable from "@/components/shared/Expandable";
import EventList from "@/components/EventList";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      eventsConfig: { visible: true, hideImg: false },
    };
  },
  components: {
    EventList,
    Expandable,
    SectionNewsletterSignup,
    "app-content-section": ContentSection,
    "app-footer": Footer,
  },
  props: {
    platform: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({ view: "viewconfig/getEventsConfig" }),
  },
  created() {
    // Load the view configuration in vuex state
    this.eventsConfig = this.view("events");
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
};
</script>
