<i18n>
{
  "en": {
    "section-heading": "Coming Up",
    "all-events-button": "All Events",
    "event-cancel":"canceled",
    "event-postpone":"postponed",
    "upcoming-events-not-found": "No events found"
  },
  "de": {
    "section-heading": "Demnächst",
    "all-events-button": "Alle Ereignisse",
    "event-cancel":"abgesagt",
    "event-postpone":"verschoben",
    "upcoming-events-not-found": "Keine Veranstaltungen gefunden"
  }
}
</i18n>
<template>
  <div v-if="visible">
    <div class="event-list" v-if="events && events.length != 0">
      <!-- Heading Section -->
      <div class="row row-centered extra-margin-top-2" v-if="br.heading.visible">
        <div class="col col-12 scroll-effect heading-section" :class="scrolled ? 'scrolled' : ''">
          <h2 class="heading small">
            {{ $t(localTranslation(pl.heading)) }}
          </h2>
        </div>
      </div>
      <!-- Event section -->
      <router-link
        tag="div"
        class="row row-centered event scroll-effect"
        :class="scrolled ? 'scrolled' : ''"
        v-for="event in events"
        :key="event.path"
        :to="'/events/' + event.path"
      >
        <!-- Image Subsection -->
        <div
          class="col-6 event-image"
          :class="validateImage('img-content', event)"
          v-if="event.image && !br.hideImage"
        >
          <img :src="event.image" :alt="event.image + event.path" />
        </div>

        <!-- Details Subsection -->
        <div class="col-12" :class="validateImage('text-content', event)">
          <!-- Date Subsection -->
          <p class="event-date">
            {{ eventDisplayDate(event.start, event.end) }}
          </p>
          <!-- Title Subsection -->
          <h3 class="subheading event-title" :class="event.state" v-html="event.title"></h3>
          <h4 class="event-state" v-if="event.state !== 'normal'">
            {{ localTranslation(event.state) }}
          </h4>
          <!-- Abstract Subsection -->
          <div class="event-abstract" v-if="event.abstract">
            <i class="fas fa-info-circle icon"></i>
            <p v-if="event.abstract !== ''" v-html="event.abstract"></p>
          </div>
          <!-- Speakers Subsection -->
          <div class="event-speakers" v-if="event.speakers && event.speakers.length">
            <i class="fas fa-user icon"></i>
            <small><prismic-rich-text :field="event.speakers"/></small>
          </div>
          <!-- Location Subsection -->
          <div class="event-location">
            <i class="fas fa-map-marker-alt icon"></i>
            <p v-html="event.location"></p>
          </div>
          <!-- Details button Subsection -->
          <div class="button-group" v-if="false">
            <router-link
              tag="button"
              class="button button-secondary button-secondary-naked"
              :to="'/events/' + event.path"
            >
              Details
            </router-link>
          </div>
        </div>
      </router-link>

      <!-- All events button -->
      <div class="row button-section" v-if="br.button.visible">
        <router-link
          tag="button"
          to="/events"
          class="button button-secondary scroll-effect"
          :class="scrolled ? 'scrolled' : ''"
          :disabled="br.button.disabled"
        >
          <i class="far fa-calendar-alt"></i>
          {{ $t(localTranslation(pl.eventsButton)) }}</router-link
        >
      </div>
    </div>
    <h3
      v-else
      class="centered scroll-effect scroll-effect-delayed-2 "
      :class="scrolled ? 'scrolled' : ''"
    >
      {{ $t("upcoming-events-not-found") }}
    </h3>
  </div>
</template>

<script>
import { getTranslation } from "@/assets/support.js";
import { mapGetters, mapState, mapActions } from "vuex";
import moment from "moment";

export default {
  name: "EventList",
  data() {
    return {
      br: {
        visible: false,
        hideImage: false,
        limit: null,
        heading: { visible: false },
        button: { disabled: true, visible: false },
      },
      pl: {},
      events: [],
      scrolled: false,
    };
  },
  props: {
    past: {
      type: Boolean,
      default: false,
    },
    limit: {
      type: Number,
      default: 0,
    },
    content: Object,
    visible: Boolean,
    viewConfig: Object,
  },
  computed: {
    ...mapState({
      language: (state) => state.settings.language,
    }),
    ...mapGetters({ getEvents: "content/getEvents" }),
  },
  methods: {
    ...mapActions({
      getEventsRemote: "content/getEventsRemote",
    }),
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    validateImage(item, event) {
      const imageConfig = {
        withImage: {
          "img-content": "col-tablet-portrait-4",
          "text-content": "col-tablet-portrait-8 ",
        },
        withoutImage: {
          "img-content": "col-large-4",
          "text-content": "col-tablet-portrait-12",
        },
      };
      let selectedView = imageConfig.withoutImage;
      if (event.image && !this.br.hideImage) {
        selectedView = imageConfig.withImage;
      }
      return selectedView[item];
    },
    setStyle() {
      for (const key in this.viewConfig) {
        if (Object.keys(this.br).includes(key)) {
          this.br[key] = this.viewConfig[key];
        }
      }
      this.pl["heading"] = this.content ? this.content.heading : null;
      this.pl["eventsButton"] = this.content ? this.content.eventsButton : null;
    },
    eventDisplayDate(start, end) {
      let startDate = new Date(start);
      let endDate = new Date(end);
      if (
        startDate.getDate() == endDate.getDate() &&
        startDate.getMonth() == endDate.getMonth() &&
        startDate.getFullYear() == endDate.getFullYear()
      ) {
        return `${moment(startDate).format("llll")} - ${moment(endDate).format("LT")}`;
      }
      return `${moment(startDate).format("llll")} - ${moment(endDate).format("llll")}`;
    },
    getdata() {
      try {
        this.triggerScroll(false);
        this.events = null;
        if (this.getEvents) {
          this.events = this.getEvents;
        }
        if (!this.past) {
          // filter for future events
          this.events = this.events.filter((event) => Date.parse(event.end) >= Date.now());
          // sort by date
          this.events.sort(function(a, b) {
            return Date.parse(a.start) - Date.parse(b.start);
          });
        } else {
          // filter for past events
          this.events = this.events.filter((event) => Date.parse(event.end) < Date.now());
          // sort by date
          this.events.sort(function(a, b) {
            return Date.parse(b.start) - Date.parse(a.start);
          });
        }
        if (this.limit) {
          this.events = this.events.slice(0, this.limit);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.triggerScroll(true);
      }
    },
    triggerScroll(scrollValue = false) {
      const _this = this;
      setTimeout(function() {
        _this.scrolled = scrollValue;
      }, 1);
    },
  },
  created() {
    // Define the locale for moment datetime
    moment.locale(this.$i18n.locale);

    this.setStyle();
    this.getdata();
  },
  watch: {
    // validate when laguage change, to change the format date
    language: async function(lan) {
      await this.getEventsRemote();
      this.getdata();
      moment.locale(lan);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.event-list {
  .heading-section {
    padding-left: $spacing-3;
    .heading {
      margin-bottom: 0;
    }
  }
  .button-section {
    padding: $spacing-2 $spacing-3;
    .button {
      height: 30px;
      font-size: $font-size-mini;
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
  .event {
    padding: $spacing-2 $spacing-3;
    cursor: pointer;
    .event-image {
      margin-bottom: $spacing-1;
      img {
        border-radius: 50%;
        transform: scale(0.9);
        max-height: 200px;
        -webkit-box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.5);
        box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.5);
      }
    }
    .event-date {
      display: block;
      margin-bottom: $spacing-1;
      text-transform: capitalize;
      font-size: $font-size-mini;
    }
    .event-title {
      margin-bottom: $spacing-1;
      font-size: $font-size-normal;
      &.canceled {
        color: $color-primary;
        text-decoration: line-through;
      }
      &.postponed {
        text-decoration: line-through;
      }
    }
    .event-state {
      color: $color-primary;
      font-size: $font-size-normal;
      font-weight: bold;
      text-transform: uppercase;
    }
    .event-abstract,
    .event-speakers,
    .event-location {
      display: inline-flex;
      width: 100%;
      padding-left: $spacing-1;
      .icon {
        font-size: $font-size-small;
        color: $color-secondary;
        transform: translateY(5%);
      }
      p {
        padding-left: $spacing-1;
        font-size: $font-size-mini;
        margin-bottom: $spacing-1;
      }
    }
    button {
      padding: 0;
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .event-list {
    .event {
      .event-title {
        font-size: $font-size-small;
      }
      .event-abstract,
      .event-speakers,
      .event-location {
        .icon {
          font-size: $font-size-mini;
        }
      }
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .event-list {
    .event {
      .event-title {
        font-size: $font-size-normal;
      }
      .event-abstract,
      .event-speakers,
      .event-location {
        .icon {
          font-size: $font-size-small;
        }
        p {
          padding-left: $spacing-1;
          font-size: $font-size-small;
        }
      }
    }
  }
}
</style>
