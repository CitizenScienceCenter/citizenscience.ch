<template>
  <div class="people-list" v-if="br.visible && people_list.length > 0">
    <h3
      class="subheading centered scroll-effect"
      :class="scrolled ? 'scrolled' : ''"
      v-if="br.category.visible && content.category"
    >
      {{ localTranslation(content.category) }}
    </h3>

    <div
      class="people-section scroll-effect scroll-effect-delayed-1"
      :class="scrolled ? 'scrolled' : ''"
    >
      <div class="row row-centered row-wrapping">
        <div
          class="col col-tablet-portrait-6 col-large-3 col-wrapping"
          v-for="person in people_list"
          :key="person.item"
        >
          <div class="person centered">
            <img
              :src="person.photo"
              :alt="person.name"
              class="photo shadow-bottom"
              onerror="this.src='/img/people_default.png';"
            />
            <span class="name">{{ person.name }}</span>
            <span class="position">{{ localTranslation(person.position) }}</span>
            <a :href="['mailto:' + person.email]">{{ person.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTranslation } from "@/assets/support.js";

export default {
  name: "PeopleList",
  data: function() {
    return {
      br: {
        visible: false,
        category: { visible: false },
      },
      showMembers: false,
      people_list: [],
    };
  },
  props: {
    content: Object,
    viewConfig: Object,
    scrolled: Boolean,
  },
  methods: {
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    loadData() {
      this.people_list = this.content.people_list;
    },
    validateStyle() {
      for (const key in this.viewConfig) {
        if (Object.keys(this.br).includes(key)) {
          this.br[key] = this.viewConfig[key];
        }
      }
    },
  },
  created() {
    this.validateStyle();
    this.loadData();
  },
  watch: {
    scrolled(newVal) {
      this.loadData();
    }
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.people-list {
  margin-bottom: $spacing-5;

  .people-section {
    margin-bottom: $spacing-3;

    &:last-child {
      margin-bottom: 0;
    }

    .person {
      .photo {
        width: 25%;
        border-radius: 50%;
        margin-bottom: $spacing-2;
      }

      .name,
      .position,
      a {
        display: block;
      }
      .position,
      a {
        font-size: $font-size-small;
      }

      a {
        color: $color-black-tint-50;
      }
    }
  }

  .members {
    margin-top: $spacing-4;

    li {
      margin: 0;
      margin-bottom: $spacing-2;
      &:before {
        display: none;
      }
      span {
        display: block;
        &.position {
          font-size: $font-size-small;
        }
      }
    }
  }
}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .people-list {
    margin-bottom: $spacing-6;

    .people-section {
      margin-bottom: $spacing-5;

      .person {
        .photo {
          width: 33.333%;
        }
      }
    }

    .members {
      margin-top: $spacing-5;
    }
  }
}

@media only screen and (min-width: $viewport-large) {
  .people-list {
    .people-section {
      .person {
        .photo {
          width: 50%;
        }
      }
    }
  }
}
</style>
