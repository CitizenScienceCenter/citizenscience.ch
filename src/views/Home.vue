<i18n>
{
  "en": {
    "page-title": "Citizen Science Center Zurich",
    "section-projects-text": "The study of languages is connected to the 17 SDGs, which aim at engaging not only governments but “all people everywhere”, at all levels of society. This requires equal access to education and communication in a multiplicity of languages, including indigenous and heritage language minorities. Knowledge about the structure and history of each language is therefore important to enable this communication in a sustainable way.",

    "section-events-heading": "Coming Up",
    "section-events-button": "All Events",

    "section-social-heading": "Follow Us",

    "section-build-project-heading": "Do you have a project in mind? We can help you.",
    "section-build-project-text": "We are always happy to brainstorm and discuss how we can change the world with Citizen Science! If you have an idea for a project, get in touch with us. We can help you evaluate it and potentially provide you with expertise and tools to develop, set up, and run your project.",
    "section-build-project-button": "Learn more",

    "section-explanation-heading": "Citizen Science «Zurich Style»",
    "section-explanation-lead": "The Citizen Science Center Zurich enables <b>researchers</b> and <b>citizens</b> to create and conduct research projects that produce <b>excellent</b> and <b>participatory science</b> while supporting the UN SDGs.",
    "section-explanation-text": "In next–generation Citizen Science projects the general public provides new and invaluable knowledge in areas from physics to linguistics to human health. Projects produce excellent science but also quality open data that can help citizens, communities and governments to assess and monitor the UN SDGs.",
    "section-explanation-button": "Learn more",

    "section-about-heading": "A Joint Initiative",
    "section-about-text": "The Citizen Science Center is run jointly by the University of Zurich and the ETH Zurich.",
    "section-about-text-2": "Switzerland has a deep tradition of direct democracy and participatory decision-making, and Citizen Science can be viewed in many ways as the application of direct democracy to the scientific process.",
    "section-about-text-3": "Researchers at both UZH and ETHZ have a strong track record in citizen science, participatory research, and citizen science-related fields such as artificial intelligence, social science and the law. Combining these researchers’ expertise represents a unique opportunity for synergy.",
    "section-about-button": "Learn more about us",

    "builder-title": "Explore the Citizen Science PROJECT BUILDER",
    "builder-lead": "The CS Center released the beta version of the CS Project Builder, an open, free and simple tool to create your own Citizen Science Data Analysis project. ",
    "builder-path": "https://lab.citizenscience.ch/en/",
    "builder-button": "Explore"
  },
  "de": {
    "page-title": "Citizen Science Center Zürich",
    "section-projects-text": "In unserem erstes Citizen Science Projekt geht es um Sprache. Helfen Sie Forschenden der Uni Zürich dabei, schweizerdeutsche Sätze aus den 1930er Jahren abzuschreiben und neu zu übersetzen und sehen Sie selbst, wie Ihr Dialekt sich in den letzten 100 Jahren verändert hat. Das Studium von Sprache ist auch für 17 SDGs von grosser Bedeutung, denn das Thema Nachhaltigkeit betrifft uns alle. Um möglichst vielen Menschen auf allen gesellschaftlichen Ebenen den Zugang zu Bildung und Information rund um das Thema zu ermöglichen, muss in vielen Sprachen kommuniziert werden. Das Wissen über die Struktur und die historische Entwicklung jeder Sprache ist dafür massgeblich.",

    "section-events-heading": "Demnächst",
    "section-events-button": "Alle Ereignisse",

    "section-social-heading": "Folgen Sie uns",

    "section-build-project-heading": "Haben Sie eine Projekt-Idee? Wir helfen Ihnen!",
    "section-build-project-text": "Wir sind jederzeit offen für Austausch und Gespräch. Gerne überlegen wir mit Ihnen gemeinsam, wie man die Welt mit Citizen Science ein kleines Stück besser machen könnte. Treten Sie mit uns in Kontakt, wenn Sie eine Projektidee haben. Wir können Ihnen bei der Weiterentwicklung der Idee helfen und Ihnen bei positiver Evaluation unsere Tools und Expertise zur Verfügung stellen, um das Projekt realisieren.",
    "section-build-project-button": "Mehr erfahren",

    "section-explanation-heading": "Citizen Science «Züri Style»",
    "section-explanation-lead": "Das Citizen Science Center Zürich bringt <b>Wissenschaftler</b> und <b>Bürger</b> zusammen, um gemeinsam <b>exzellente</b> und <b>partizipative Forschung</b> zu betreiben, die die UN SDGs unterstützt.",
    "section-explanation-text": "In zukunftsweisenden Citizen Science Projekten entsteht durch Einbezug der breiten Bevölkerung neues und wertvolles Wissen in Bereichen wie Physik, Linguistik oder Gesundheit. Projekte mit hohen wissenschaftlichen Standards und Open Data helfen Bürgern, Communities und Regierungen die UN Ziele für nachhaltige Entwicklung umzusetzen.",
    "section-explanation-button": "Mehr erfahren",

    "section-about-heading": "Eine gemeinsame Initiative",
    "section-about-text": "Das Citizen Science Center wird gemeinsam von der Universität Zürich und der ETH Zürich geführt.",
    "section-about-text-2": "Die Schweiz ist bekannt für ihre lange Tradition in direkter Demokratie und politischer Mitbestimmung. Citizen Science könnte als Übertragung dieser Idee von der Politik in die Wissenschaft angesehen werden.",
    "section-about-text-3": "Auch Forschende an UZH und ETH haben umfangreiche Erfahrungen in Citizen Science, partizipativer Forschung und verwandten Bereichen, wie künstlicher Intelligenz, den Sozialwissenschaften und der Rechtswissenschaft. Diese Kombination an Wissen und Kompetenzen am Standort Zürich ermöglicht vielfältige Synergien.",
    "section-about-button": "Mehr über uns",

    "builder-title": "Entdecke den Citizen Science PROJECT BUILDER",
    "builder-lead": "Das CS Center hat die Beta-Version des CS Project Builders veröffentlicht: Ein offenes, kostenloses und einfaches Tool zum Erstellen Deines eigenen Citizen Science Datenanalyse-Projekts.",
    "builder-path": "https://lab.citizenscience.ch/de/",
    "builder-button": "Entdecken"
  }
}
</i18n>

<template>
  <div>
    <!-- Cover component -->
    <app-cover></app-cover>

    <!-- Content Section -->
    <app-content-section class="small-padding">
      <div class="row row-centered">
        <!-- Left Column -->
        <div
          class="col col-xlarge-9 col-tablet-portrait-8 col-mobile-large-12 scroll-effect"
        >
          <!-- Project Cards component -->
          <app-content-section class="row ph-mv">
            <project-cards-block
              :projectList="projectList"
              :vOrientation="projectCardConfig.vOrientation"
              :visible="projectCardConfig.visible"
            ></project-cards-block>
          </app-content-section>
          <!-- News component  -->
          <app-content-section
            class="row ph-mv sm-margin-right"
            color="light-greyish"
          >
            <news-block
              :visible="newsConfig.visible"
              :content="news"
              :timeToRefresh="newsConfig.timeToRefresh"
            >
              ></news-block
            >
          </app-content-section>
          <!-- Generic Content component for Our Community -->
          <app-content-section class="row ph-mv">
            <generic-content-block
              :visible="bottomLeftConfig.visible"
              :vOrientation="bottomLeftConfig.vOrientation"
              :content="ourCommunity"
              :viewConfig="bottomLeftConfig"
            ></generic-content-block>
          </app-content-section>
        </div>
        <!-- Right Column -->
        <div
          class="col col-xlarge-3 col-tablet-portrait-4 col-mobile-large-12 scroll-effect"
        >
          <!-- Generic Content component for Our Mission -->
          <app-content-section class="row ph-mv sm-margin-left">
            <generic-content-block
              :visible="topRightConfig.visible"
              :vOrientation="topRightConfig.vOrientation"
              :content="ourMission"
              :viewConfig="topRightConfig"
            ></generic-content-block>
          </app-content-section>
          <!-- Our next Event -->
          <app-content-section class="row ph-mv sm-margin-left">
            <event-list
              :limit="eventsConfig.limit"
              :heading="{ text: $t('section-events-heading'), visible: true }"
              :hideImage="eventsConfig.hideImg"
              :eventsButton="{
                text: $t('section-events-button'),
                visible: true,
                disabled: false,
              }"
              :visible="eventsConfig.visible"
            ></event-list>
          </app-content-section>
          <!-- Twitter embed feed -->
          <app-content-section class="row ph-mv sm-margin-left">
            <social-feed-block
              :visible="true"
              :heading="{ text: $t('section-social-heading'), visible: true }"
            ></social-feed-block>
          </app-content-section>
        </div>
      </div>
    </app-content-section>

    <!-- Sign up for our Newsletter -->
    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>
  </div>
</template>

<script>
import HeadCoverBlock from "../components/HeadCoverBlock";
import ContentSection from "@/components/shared/ContentSection.vue";
import GenericContentBlock from "@/components/GenericContentBlock.vue";
import ProjectCardsBlock from "@/components/ProjectCardsBlock";
import NewsBlock from "@/components/NewsBlock";
import SocialFeedBlock from "@/components/SocialFeedBlock.vue";
import Footer from "@/components/shared/Footer.vue";
import SectionNewsletterSignup from "../components/shared/SectionNewsletterSignup";
import EventList from "../components/EventList";

import { mapMutations, mapGetters } from "vuex";
import content from "@/assets/generic_content.json";

export default {
  name: "Home",
  data() {
    return {
      projectList: [],
      projectCardConfig: { vOrientation: true, visible: true },
      ourCommunity: {},
      bottomLeftConfig: { vOrientation: false, visible: true },
      ourMission: {},
      topRightConfig: { vOrientation: true, visible: true },
      news: [],
      newsConfig: { visible: true },
      eventsConfig: { visible: true, limit: 1, hideImg: true },
    };
  },
  components: {
    EventList,
    SectionNewsletterSignup,
    ProjectCardsBlock,
    GenericContentBlock,
    NewsBlock,
    SocialFeedBlock,
    "app-cover": HeadCoverBlock,
    "app-content-section": ContentSection,
    "app-footer": Footer,
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
      titleTemplate: null,
      meta: [
        {
          property: "og:title",
          content: this.$t("page-title"),
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ view: "viewconfig/getHomeConfig" }),
  },
  methods: {
    ...mapMutations({ setHomeConfig: "viewconfig/setHomeConfig" }),
    openInNewTab: function(url) {
      var win = window.open(url, "_blank");
      win.focus();
    },
    setProjectList: function() {
      // TODO: This information will be replaced by database retrieved data
      this.projectList = [
        {
          id: "83",
          title: {
            content: {
              en: "MitrendS Study",
              de: "MITRENDS STUDIE",
            },
            config: { visible: true },
          },
          topic: {
            content: {
              en: "Health",
              de: "Gesundheit",
            },
            config: { visible: true },
          },
          description: {
            content: {
              en:
                "The MitrendS study will help researchers to gain a deeper, more differentiated knowledge of the individual progression of the disease.",
              de:
                "Durch Ihre Teilnahme an dieser Studie helfen Sie, ein tieferes, differenziertes Wissen über den individuellen Verlauf der Krankheit und die Symptome.",
            },
            config: { visible: true },
          },
          img_background: "/img/projects/mitrends.jpg",
          img_project: "/img/projects/mitrends-graphic.png",
          gradient: { start: "", end: "#ebdc34" },
          link: "https://mitrends.citizenscience.ch",
          button: {
            content: {
              en: "Take part",
              de: "Mitmachen",
            },
            config: { visible: true, disabled: false },
          },
        },
        {
          id: "104",
          title: {
            content: {
              en: "Snake ID Challenge",
              de: "Snake-ID Herausforderung",
            },
            config: { visible: true },
          },
          topic: {
            content: {
              en: "Herpetology",
              de: "Herpetologie",
            },
            config: { visible: true },
          },
          description: {
            content: {
              en:
                "Fall is here! You can take advantage of the cooler weather to test and refine your identification skills with the second phase of the SnakeID challenge.",
              de:
                "Der Herbst ist da! Nutzt das kühlere Wetter, um eure Identifikationsfähigkeiten in der zweiten Phase der SnakeID-Challenge zu testen und zu verfeinern.",
            },
            config: { visible: true },
          },
          img_background:
            "https://specials-images.forbesimg.com/imageserve/5ea5284f165a170006a5c82b/960x0.jpg?cropX1=0&cropX2=1440&cropY1=32&cropY2=1113",
          img_project: "/img/projects/snakechallenge-intro.png",
          gradient: { start: "#ABCDEF", end: "green" },
          link: "https://snakes.citizenscience.ch",
          button: {
            content: {
              en: "Take a look",
              de: "Ansehen",
            },
            config: { visible: true, disabled: false },
          },
        },
        {
          id: "12",
          title: {
            content: {
              en: "Weasel Wanted",
              de: "Wiesel gesucht",
            },
            config: { visible: true },
          },
          topic: {
            content: {
              en: "Wild Life Research",
              de: "Wildtierforschung",
            },
            config: { visible: true },
          },
          description: {
            content: {
              en:
                "At various locations we have set up boxes equipped with a wildlife camera. The pictures give us an insight into the visitors of the box.",
              de:
                "An verschiedenen Standorten haben wir Boxen aufgestellt, die mit einer Wildtierkamera ausgestattet sind. Die Aufnahmen der Kameras geben uns einen Einblick in die Besucher der Box.",
            },
            config: { visible: true },
          },
          img_background: "/img/projects/wiesel.jpg",
          img_project: "/img/projects/wiesel-intro.png",
          gradient: { end: "#3f6fa0" },
          link: "https://wiesel-gesucht.citizenscience.ch",
          button: {
            content: {
              en: "Contribute",
              de: "Beitragen",
            },
            config: { visible: false, disabled: false },
          },
        },
      ];
    },
    setOurCommunity() {
      this.bottomLeftConfig = this.view("bottom_left");
      this.ourCommunity = content.home_ourCommunity;
    },
    setOurMission() {
      this.topRightConfig = this.view("top_right");
      this.ourMission = content.home_ourMission;
    },
    setNews() {
      this.newsConfig = this.view("news");
      this.news = [
        {
          title: {
            content: {
              en: "Citizen Science",
              de: "Bürgerwissenschaft",
            },
          },
          date: new Date().toDateString(),
          link: "https://en.wikipedia.org/wiki/Citizen_science",
          description: {
            content: {
              en: `Citizen science (CS; also known as community science, crowd science, 
              crowd-sourced science, civic science, volunteer monitoring, or online citizen 
              science) is scientific research conducted, in whole or in part, by amateur 
              (or nonprofessional) scientists.[1] Citizen science is sometimes described as 
              "public participation in scientific research," participatory monitoring, 
              and participatory action research whose outcomes are often advancements 
              in scientific research, as well as an increase in the public's understanding 
              of science.[2][3] Based on Alexa rankings[4] iNaturalist is currently 
              the most popular citizen science website[5] followed by eBird[6] and then 
              Zooniverse[7] in second and third place respectively`,
              de: `Citizen Science (Bürgerwissenschaft) ist eine Form der Offenen Wissenschaft, 
              ei der Projekte unter Mithilfe von oder komplett durch interessierte Laien 
              durchgeführt werden. Sie melden Beobachtungen, führen Messungen durch oder 
              werten Daten aus.`,
            },
          },
        },
        {
          title: {
            content: {
              en: "News #2",
              de: "Nachrichten #2",
            },
          },
          date: new Date().toDateString(),
          link: "https://lab.citizenscience.ch/",
          description: {
            content: {
              en: `At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 😄`,
              de: `At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.`,
            },
          },
        },
        {
          title: {
            content: {
              en: "News #3",
              de: "Nachrichten #3",
            },
          },
          date: new Date().toDateString(),
          description: {
            content: {
              en: `At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 😄`,
              de: `At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.`,
            },
          },
        },
      ];
    },
  },
  created() {
    // Load the view configuration in vuex state
    this.setHomeConfig();

    this.setProjectList();
    this.setOurCommunity();
    this.setOurMission();
    this.setNews();
  },
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.row {
  &.ph-mv {
    padding: 0 $spacing-1;
    margin: $spacing-2 0;
  }
}
.sm-margin-right {
  margin-right: 0 !important;
}
@media only screen and (min-width: $viewport-large) {
  .row {
    &.ph-mv {
      padding: 0 $spacing-3;
      margin: $spacing-3 0;
    }
  }
}
@media only screen and (min-width: $viewport-xxlarge) {
  .row {
    &.ph-mv {
      padding: 0 $spacing-4;
    }
  }
  .sm-margin-right {
    margin-right: $spacing-2 !important;
  }
}
</style>
