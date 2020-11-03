<i18n>
{
  "en": {
    "subheading-directors-chair": "Chair of the Board of Directors",
    "subheading-directors": "Directors",
    "subheading-advisors": "Advisors",
    "subheading-team": "Team",
    "subheading-guest-researchers": "Researchers in Residence",
    "subheading-members": "Members",

    "people-abraham-position": "Department of Informatics – University of Zurich",
    "people-ernst-position": "Department of Biology - ETH Zurich",
    "people-mike-position": "Department of Psychology Gerontopsychology - University of Zurich",
    "people-michael-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-effy-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-claudia-position": "Institute of Complementary and Integrative Medicine - University of Zurich",

    "people-dirk-position": "Department of Humanities, Social and Political Sciences - ETH Zurich",

    "people-marina-position": "Admin Assistant",
    "people-chris-position": "Developer",
    "people-nikos-position": "Developer",
    "people-fanny-position": "Community Manager",
    "people-rosy-position": "Managing Director",
    "people-marcel-position": "UX Designer / Frontend Developer",
    "people-anna-position": "Researcher (Ethics)",

    "people-liesbet-position": "Post-doctoral Researcher, KU Leuven",
    "people-liesbet-duration": "June-Sep 2019",
    "people-clea-position": "Intern, Citizen Science Global Partnership",
    "people-clea-duration": "May-August 2019",

    "members-button-show": "Show all Members",
    "members-button-hide": "Hide all Members",
    "members-text": "Membership at the Citizen Science Center Zurich is open to professors with research groups at the two founding Institutions, leaders of research groups from other universities or public-legal institutions, and individual researchers and students.<br>Researchers at both UZH and ETHZ have a strong track record in citizen science, participatory research, and citizen science-related fields such as artificial intelligence, social science and the law. Currently the Center has a scientific community of more than 200 researchers in fields ranging epidemiology, psychology, geography, neurosciences, and more. Combining these researchers’ expertise represents a unique opportunity for synergy."
  },
  "de": {
    "subheading-directors-chair": "Vorsitzende",
    "subheading-directors": "Direktorium",
    "subheading-advisors": "Beraterinnen und Berater",
    "subheading-team": "Team",
    "subheading-guest-researchers": "Gastforscher",
    "subheading-members": "Mitglieder",

    "people-abraham-position": "Department of Informatics – University of Zurich",
    "people-ernst-position": "Department of Biology - ETH Zurich",
    "people-mike-position": "Department of Psychology Gerontopsychology - University of Zurich",
    "people-michael-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-effy-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-claudia-position": "USZ, Institut für Komplementäre und Integrative Medizin",

    "people-dirk-position": "Department of Humanities, Social and Political Sciences - ETH Zurich",

    "people-marina-position": "Admin Assistant",
    "people-chris-position": "Developer",
    "people-nikos-position": "Developer",
    "people-fanny-position": "Community Manager",
    "people-rosy-position": "Managing Director",
    "people-marcel-position": "UX Designer / Frontend Developer",
    "people-anna-position": "Forscherin (Ethik)",

    "people-liesbet-duration": "June-Sep 2019",
    "people-liesbet-position": "Postdoktorandin, KU Leuven",
    "people-clea-position": "Praktikantin, Citizen Science Global Partnership",
    "people-clea-duration": "May-August 2019",

    "members-button-show": "Alle Mitglieder anzeigen",
    "members-button-hide": "Mitglieder verbergen",
    "members-text": "Die Mitgliedschaft am Citizen Science Center Zürich steht Professorinnen und Professoren mit ihren Forschungsgruppen an den beiden Gründungsuniversitäten, Forschungsgruppenleitern von anderen Universitäten oder öffentlich-rechtlichen Institutionen, sowie auch einzelnen Forschenden und Studierenden offen.<br>Forschende an UZH und ETH haben umfangreiche Erfahrungen in Citizen Science, partizipativer Forschung und verwandten Bereichen, wie künstlicher Intelligenz, den Sozialwissenschaften und der Rechtswissenschaft. Das Center stützt sich auf eine wachsende wissenschaftliche Community von derzeit über 200 Forschenden aus den unterschiedlichsten Bereichen, wie Epidemiologie, Psychologie, Geographie und Neurowissenschaften – um nur einige zu nennen. Diese Kombination an Erfahrung und Kompetenzen ermöglicht einzigartige Synergien."
  }
}
</i18n>

<template>
  <div class="people-list">
    <h3 class="subheading centered">{{ $t("subheading-directors-chair") }}</h3>

    <div class="people-section">
      <div class="row row-centered row-wrapping">
        <div
          class="col col-tablet-portrait-6 col-large-3 col-wrapping"
          v-for="person in people_list"
          :key="person.item"
        >
          <div class="person centered">
            <img :src="validatePhoto(person.photo)" class="photo" />
            <span class="name">{{ person.name }}</span>
            <span class="position">{{
              localTranslation(person.position)
            }}</span>
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
      showMembers: false,
      people_list: [],
    };
  },
  props: {
    content: Object,
  },
  methods: {
    localTranslation(textContent) {
      return getTranslation(textContent, this.$i18n.locale);
    },
    loadData() {
      this.people_list = this.content.people_list.map((x) =>
        this.validateData(x)
      );
    },
    validateData(item) {
      const person_schema = {
        name: "",
        position: "",
        email: "",
        photo: "/img/people/default.png",
      };
      for (const key in person_schema) {
        if (Object.keys(item).includes(key)) {
          person_schema[key] = item[key];
        }
      }
      return person_schema;
    },
    validatePhoto: function (image) {
      return image || "/img/people/default.png";
    }
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.people-list {
  margin-bottom: $spacing-4;

  &:last-child {
    margin-bottom: 0;
  }

  .people-section {
    margin-bottom: $spacing-4;

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
    margin-bottom: $spacing-5;

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
