<template>
  <div class="event-list">
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
            <div
              class="col col-wrapping col-6 col-tablet-portrait-4 event-image"
              v-if="true"
            >
              <img :src="'/img/events/' + event.image" />
            </div>
            <div class="col col-wrapping col-tablet-portrait-12">
              <p class="event-date">
                {{ eventDisplayDate(event.start, event.end) }}
              </p>

              <h3 class="subheading event-title" v-html="event.title"></h3>

              <p
                v-if="event.abstract !== ''"
                v-html="event.abstract"
                class="event-abstract"
              ></p>

              <div class="event-speakers" v-if="event.speakers !== ''">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M256,256A128,128,0,1,0,128,128,128,128,0,0,0,256,256Zm89.6,32H328.9a174.08,174.08,0,0,1-145.8,0H166.4A134.43,134.43,0,0,0,32,422.4V464a48,48,0,0,0,48,48H432a48,48,0,0,0,48-48V422.4A134.43,134.43,0,0,0,345.6,288Z"
                  />
                </svg>
                <p v-html="event.speakers"></p>
              </div>

              <div class="event-location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M236.27,501.67C91,291,64,269.41,64,192,64,86,150,0,256,0S448,86,448,192c0,77.41-27,99-172.27,309.67a24,24,0,0,1-39.46,0ZM256,272a80,80,0,1,0-80-80A80,80,0,0,0,256,272Z"
                  />
                </svg>
                <p v-html="event.location"></p>
              </div>

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
    heading: { type: Object, default: { text: null, visible: false } },
    eventsButton: {
      type: Object,
      default: { text: null, visible: false, disabled: true },
    },
  },
  methods: {
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
      margin-bottom: -$spacing-2;
      img {
        border-radius: 50%;
        transform: scale(0.75) translateY(-10%);
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
    .event-abstract {
      margin-bottom: $spacing-1;
      font-size: $font-size-mini;
    }
    .event-speakers,
    .event-location {
      font-size: $font-size-mini;
      position: relative;
      margin-bottom: $spacing-1;
      svg {
        position: absolute;
        top: calc((#{$font-size-normal}* 1.5 - 20px) / 2);
        left: 0;
        width: 15px;
        height: 15px;
        fill: $color-secondary;
      }
      p {
        padding-left: calc(15px + #{$spacing-2});
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
      .event-abstract {
        font-size: $font-size-mini;
      }
      .event-speakers,
      .event-location {
        font-size: calc((2vw + 1.5vh) / 2);
        svg {
          width: 10px;
          height: 10px;
        }
        p {
          padding-left: calc(10px + #{$spacing-1});
        }
      }
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .event-list {
    .event {
      .event-speakers,
      .event-location {
        font-size: calc((2vw + 1.5vh) / 2);
        svg {
          width: 13px;
          height: 13px;
        }
        p {
          padding-left: calc(13px + #{$spacing-1});
        }
      }
    }
  }
}
@media only screen and (min-width: $viewport-xlarge) {
  .event-list {
    .event {
      .event-image {
        margin-bottom: $spacing-1;
        img {
          transform: scale(1) translateY(10%);
          max-height: 200px;
        }
      }
      .event-date {
        font-size: $font-size-small;
      }
      .event-title {
        font-size: $font-size-normal;
      }
      .event-speakers,
      .event-location {
        font-size: $font-size-small;
        svg {
          width: 15px;
          height: 15px;
        }
        p {
          padding-left: calc(15px + #{$spacing-1});
        }
      }
    }
  }
}
</style>
