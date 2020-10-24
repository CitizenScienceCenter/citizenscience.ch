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
  <div class="member-list">
    <div class="row row-centered">
      <div class="col col-11 col-large-10">
        <div class="row row-full-width" v-if="true">
          <!-- title section -->
          <div
            class="subheading"
            v-html="localTranslation(contentData.title)"
          ></div>
        </div>
        <!-- description section -->
        <div class="row extra-margin-top-2">
          <component :is="getDynamicData" class="text-description"></component>
        </div>
      </div>
    </div>
    <!-- list of members section -->
    <div class="row row-centered extra-margin-top">
      <div class="col col-11 col-large-5">
        <ul>
          <li v-for="member in contentData.memberList" :key="member.index">
            <span v-if="member.name">{{ member.name }} - </span>
            <span v-if="member.organization">{{ member.organization }}</span>
          </li>
        </ul>
      </div>
      <div class="col col-11 col-large-5">
        <ul>
          <li v-for="member in contentData.memberList" :key="member.index">
            {{ member.name }} - {{ member.organization }}
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
      showMembers: false,
    };
  },
  props: {
    content: Object,
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
  },
  created() {
    this.contentData = this.content;
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
</style>
