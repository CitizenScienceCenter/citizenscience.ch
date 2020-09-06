<template>
  <div class="event-list" v-if="events && events.length != 0 && visible">
    <!-- Heading Section -->
    <div class="row row-centered extra-margin-top-2" v-if="heading.visible">
      <div class="col col-12 scroll-effect heading-section">
        <h2 class="heading small">
          {{ heading.text }}
        </h2>
      </div>
    </div>
    <!-- Event section -->
    <div class="row row-centered" v-for="event in events" :key="event.path">
      <div class="scroll-effect">
        <router-link :to="'/events/' + event.path" style="display:none"
          >link</router-link
        >
        <router-link tag="div" class="event" :to="'/events/' + event.path">
          <div class="row row-wrapping row-centered">
            <!-- Image Subsection -->
            <div
              class="col col-wrapping event-image"
              :class="validateImage('img-content', event)"
              v-if="event.image && !hideImage"
            >
              <img :src="'/img/events/' + event.image" />
            </div>
            <div
              class="col col-wrapping"
              :class="validateImage('text-content', event)"
            >
              <!-- Date Subsection -->
              <p class="event-date">
                {{ eventDisplayDate(event.start, event.end) }}
              </p>
              <!-- Title Subsection -->
              <h3 class="subheading event-title" v-html="event.title"></h3>
              <!-- Abstract Subsection -->
              <div class="event-abstract" v-if="event.abstract">
                <i class="fas fa-info-circle icon"></i>
                <p v-if="event.abstract !== ''" v-html="event.abstract"></p>
              </div>
              <!-- Speakers Subsection -->
              <div class="event-speakers" v-if="event.speakers !== ''">
                <i class="fas fa-user icon"></i>
                <p v-html="event.speakers"></p>
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
                  >Details</router-link
                >
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <!-- All events button -->
    <div class="row button-section" v-if="eventsButton.visible">
      <router-link
        tag="button"
        to="/events"
        class="button button-secondary scroll-effect"
        :disabled="eventsButton.disabled"
        >{{ eventsButton.text }}</router-link
      >
    </div>
  </div>
</template>

<script>
import events from "@/assets/events.json";

export default {
  name: "EventList",
  data() {
    return {
      events: events,
      i18nWeekdays: [
        "weekday-sunday",
        "weekday-monday",
        "weekday-tuesday",
        "weekday-wednesday",
        "weekday-thursday",
        "weekday-friday",
        "weekday-saturday",
      ],
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
    heading: {
      type: Object,
      default() {
        return {
          text: null,
          visible: false,
        };
      },
    },
    eventsButton: {
      type: Object,
      default() {
        return {
          text: null,
          visible: false,
          disabled: true,
        };
      },
    },
    visible: Boolean,
    hideImage: { type: Boolean, default: false },
  },
  methods: {
    validateImage(item, event) {
      const viewConfig = {
        withImage: {
          "img-content": " col-6 col-tablet-portrait-4",
          "text-content": " col-tablet-portrait-8 ",
        },
        withoutImage: {
          "img-content": "col-large-4",
          "text-content": "col-tablet-portrait-12",
        },
      };
      let selectedView = viewConfig.withoutImage;
      if (event.image && !this.hideImage) {
        selectedView = viewConfig.withImage;
      }
      return selectedView[item];
    },
    eventDisplayDate(start, end) {
      let startDate = new Date(start);
      let endDate = new Date(end);

      if (
        startDate.getDate() === endDate.getDate() &&
        startDate.getMonth() === endDate.getMonth() &&
        startDate.getFullYear() === endDate.getFullYear()
      ) {
        // same day
        return (
          this.$t(this.i18nWeekdays[startDate.getDay()]) +
          ", " +
          startDate.getDate() +
          "." +
          (startDate.getMonth() + 1) +
          "." +
          startDate.getFullYear() +
          ", " +
          startDate.getHours() +
          ":" +
          (startDate.getMinutes() < 10 ? "0" : "") +
          startDate.getMinutes() +
          "–" +
          endDate.getHours() +
          ":" +
          (endDate.getMinutes() < 10 ? "0" : "") +
          endDate.getMinutes()
        );
      } else {
        // different day
        return (
          this.$t(this.i18nWeekdays[startDate.getDay()]) +
          ", " +
          startDate.getDate() +
          "." +
          (startDate.getMonth() + 1) +
          "." +
          startDate.getFullYear() +
          ", " +
          startDate.getHours() +
          ":" +
          (startDate.getMinutes() < 10 ? "0" : "") +
          startDate.getMinutes() +
          " – " +
          this.$t(this.i18nWeekdays[endDate.getDay()]) +
          ", " +
          endDate.getDate() +
          "." +
          (endDate.getMonth() + 1) +
          "." +
          endDate.getFullYear() +
          ", " +
          endDate.getHours() +
          ":" +
          (endDate.getMinutes() < 10 ? "0" : "") +
          endDate.getMinutes()
        );
      }
    },
  },
  created() {
    if (!this.past) {
      // filter for future events
      this.events = this.events.filter(
        (event) => Date.parse(event.end) >= Date.now()
      );
      // sort by date
      this.events.sort(function(a, b) {
        return Date.parse(a.start) - Date.parse(b.start);
      });
    } else {
      // filter for past events
      this.events = this.events.filter(
        (event) => Date.parse(event.end) < Date.now()
      );
      // sort by date
      this.events.sort(function(a, b) {
        return Date.parse(b.start) - Date.parse(a.start);
      });
    }

    if (this.limit) {
      this.events = this.events.slice(0, this.limit);
    }
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.event-list {
  .heading-section {
    padding-left: $spacing-3;
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
      }
    }
    .event-date {
      display: block;
      margin-bottom: $spacing-1;
      text-transform: uppercase;
      font-size: $font-size-mini;
    }
    .event-title {
      margin-bottom: $spacing-1;
      font-size: $font-size-normal;
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
