<i18n>
{
  "en": {
    "members-button-show": "Show all Members",
    "members-button-hide": "Hide all Members",
    "members-text": "Membership at the Citizen Science Center Zurich is open to professors with research groups at the two founding Institutions, leaders of research groups from other universities or public-legal institutions, and individual researchers and students.<br>Researchers at both UZH and ETHZ have a strong track record in citizen science, participatory research, and citizen science-related fields such as artificial intelligence, social science and the law. Currently the Center has a scientific community of more than 200 researchers in fields ranging epidemiology, psychology, geography, neurosciences, and more. Combining these researchers’ expertise represents a unique opportunity for synergy."
  },
  "de": {
    "members-button-show": "Alle Mitglieder anzeigen",
    "members-button-hide": "Mitglieder verbergen",
    "members-text": "<router-link to='/'>Die Mitgliedschaft </router-link>am Citizen Science Center Zürich steht Professorinnen und Professoren mit ihren Forschungsgruppen an den beiden Gründungsuniversitäten, Forschungsgruppenleitern von anderen Universitäten oder öffentlich-rechtlichen Institutionen, sowie auch einzelnen Forschenden und Studierenden offen.<br>Forschende an UZH und ETH haben umfangreiche Erfahrungen in Citizen Science, partizipativer Forschung und verwandten Bereichen, wie künstlicher Intelligenz, den Sozialwissenschaften und der Rechtswissenschaft. Das Center stützt sich auf eine wachsende wissenschaftliche Community von derzeit über 200 Forschenden aus den unterschiedlichsten Bereichen, wie Epidemiologie, Psychologie, Geographie und Neurowissenschaften – um nur einige zu nennen. Diese Kombination an Erfahrung und Kompetenzen ermöglicht einzigartige Synergien."
  }
}
</i18n>

<template>
  <div class="member-list" v-if="br.visible">
    <div class="row row-centered">
      <div class="col col-11 col-large-10">
        <div
          class="row row-full-width"
          v-if="contentData.title && br.title.visible"
        >
          <!-- title section -->
          <div
            class="subheading"
            v-html="localTranslation(contentData.title)"
          ></div>
        </div>
        <!-- description section -->
        <div
          class="row extra-margin-top-2"
          v-if="contentData.description && br.description.visible"
        >
          <component :is="getDynamicData" class="text-description"></component>
        </div>
        <!-- button section  -->
        <div class="row row-full-width">
          <div
            v-if="
              br.button.visible &&
                contentData.button &&
                (contentData.button.link || contentData.button.route)
            "
          >
            <button
              class="button button-secondary"
              @click="
                triggerButton(
                  contentData.button.route,
                  contentData.button.link,
                  contentData.button.selfWindow
                )
              "
              :disabled="br.button.disabled"
            >
              <i :class="contentData.button.icon"></i>
              {{ localTranslation(contentData.button) }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- list of members section -->
    <div class="row row-centered extra-margin-top" v-if="br.memberList.visible">
      <!-- 2 columns -->
      <div
        v-for="column in [members_lef, members_right]"
        :key="column.index"
        class="col col-11 col-large-5"
      >
        <ul>
          <li v-for="member in column" :key="member.index" class="member">
            <span v-if="member.name">{{ member.name }} - </span>
            <span v-if="member.organization">{{ member.organization }}</span>
            <div class="contact">
              <a
                v-if="member.email"
                class="item"
                @click="triggerButton(null, 'mailto:' + member.email, true)"
                ><i class="fas fa-envelope"></i
                ><span class="label">{{ member.email }}</span>
              </a>
              <a
                v-if="member.tel"
                class="item"
                @click="triggerButton(null, 'tel:' + member.tel, true)"
                ><i class="fas fa-phone"></i>
                <span class="label">{{ member.tel }}</span></a
              >
              <a
                v-if="member.web"
                class="item"
                @click="triggerButton(null, member.web, false)"
                ><i class="fas fa-globe"></i>
                <span class="label">{{ member.web }}</span></a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getTranslation, openUrl, getNested } from "@/assets/support.js";

export default {
  name: "PeopleList",
  data: function() {
    return {
      contentData: {},
      members_lef: [],
      members_right: [],
      br: this.viewConfig,
    };
  },
  props: {
    content: Object,
    viewConfig: Object,
  },
  computed: {
    getDynamicData: function() {
      return {
        template: `<div>${this.localTranslation(
          this.contentData.description
        )}</div>`,
      };
    },
  },
  methods: {
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    loadData() {
      this.contentData = this.content;
      if (
        this.contentData.member_list &&
        this.contentData.member_list.length > 0
      ) {
        const half = Math.ceil(this.contentData.member_list.length / 2);
        this.members_lef = this.contentData.member_list.slice(0, half);
        this.members_right = this.contentData.member_list.slice(half);
      }
    },
    triggerButton: function(route, url, selfWindow) {
      // open internal routes
      if (route) {
        this.$router.push(route);
        return;
      }
      // open external links
      openUrl(url, selfWindow);
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
.member-list {
  .subheading,
  .text-description,
  .member {
    font-size: $font-size-small;
  }
  .contact {
    font-size: $font-size-small;
    padding-top: $spacing-1;
    .item {
      padding-right: $spacing-4;
      display: inline-block;
    }
    i {
      padding-right: $spacing-1;
      font-size: $font-size-medium;
      cursor: pointer;
    }
    .label {
      display: none;
      color: $color-black;
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .member-list {
    .subheading,
    .text-description,
    .member {
      font-size: $font-size-normal;
    }
  }
}
@media only screen and (min-width: $viewport-large) {
  .member-list {
    .contact {
      .item {
        padding-right: $spacing-2;
      }
      i {
        font-size: $font-size-normal;
      }
      .label {
        display: inline;
      }
    }
  }
}
</style>
