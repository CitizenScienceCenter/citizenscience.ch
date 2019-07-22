<i18n>
  {
  "en": {
  "page-title": "Sustainable Development Goals",

  "section-sdg-heading": "Citizen Science for the SDGs",
  "section-sdg-text": "The Sustainable Development Goals (SDGs) are a set of global goals developed in 2015 by the 193 UN member states and representatives of civil society. They are part of the UN Agenda 2030, a comprehensive call for action to achieve a better and more sustainable future for all.",
  "section-sdg-text-2": "High quality, timely and accessible data are required to monitor progress towards the goals, and there is a strong consensus that citizen engagement is critical.",
  "section-sdg-text-3": "<b>Through citizen science, people can directly engage with and monitor issues that affect them, bring new perspectives and knowledge into science and decision-making, and ultimately demand or drive change.</b>",

  "section-sdgquote-quote": "«The monitoring and accountability framework [...] must be people ­centred, inclusive, transparent and participatory»",
  "section-sdgquote-source": "<a href='http://tapnetwork2030.org/' target='_blank'>Transparency, Accountability & Participation (TAP) Network 2030</a>"

  },
  "de": {
  "page-title": "Sustainable Development Goals",

  "section-sdg-heading": "Citizen Science für die SDGs",
  "section-sdg-text": "Die UN Ziele für nachhaltige Entwicklung (engl. Sustainable Development Goals, kurz SDGs) sind eine Liste von globalen Zielen, die 2015 gemeinsam von den 193 UN-Mitgliedstaaten und Vertretern der Zivilgesellschaft erarbeitet wurden. Sie sind Teil der UN Agenda 2030, ein globaler Call for Action für eine bessere und nachhaltigere Zukunft auf unserem Planeten.",
  "section-sdg-text-2": "Verlässliche, aktuelle und frei verfügbare Daten sind notwendig, um Fortschritte auf dem Weg zur Erreichung der UN-Ziele zu messen. Dafür ist eine aktive Beteiligung von Bürgerinnen und Bürgern absolut notwendig und erwünscht.",
  "section-sdg-text-3": "<b>Durch Citizen Science hat jeder die Möglichkeit, sich mit den Themen auseinanderzusetzen, die einen unmittelbar selbst betreffen; eigene, neue Sichtweisen und Wissensgebiete in die Wissenschaft einzubringen und möglicherweise sogar politische Entscheidungen zu beeinflussen.</b>",

  "section-sdgquote-quote": "«The monitoring and accountability framework [...] must be people ­centred, inclusive, transparent and participatory»",
  "section-sdgquote-source": "<a href='http://tapnetwork2030.org/' target='_blank'>Transparency, Accountability & Participation (TAP) Network 2030</a>"

  }
  }
</i18n>

<template>
  <div>

    <app-content-section class="overflow-hidden">
      <div class="background-wrapper background-wrapper-move-left scroll-effect scroll-effect-delayed-1">
        <div class="content-wrapper">
          <div class="row row-centered">
            <div class="col col-8 col-large-6 col-wrapping col-large-no-bottom-margin">
              <img src="/img/sdg-wheel.png"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper scroll-effect">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-no-bottom-margin">
            <h2 class="heading centered left-aligned-large" id="sdgs">{{ $t('section-sdg-heading') }}</h2>
            <p v-html="$t('section-sdg-text')"></p>
            <p v-html="$t('section-sdg-text-2')"></p>
            <p v-html="$t('section-sdg-text-3')"></p>
          </div>

        </div>
      </div>
    </app-content-section>


    <app-content-section color="light-greyish">
      <div class="content-wrapper scroll-effect">
        <div class="row row-centered">
          <div class="col col-large-8">
            <p class="quote centered" v-html="$t('section-sdgquote-quote')"></p>
            <p class="centered small" v-html="$t('section-sdgquote-source')"></p>
          </div>
        </div>
      </div>
    </app-content-section>

    <section-newsletter-signup></section-newsletter-signup>

    <app-footer :platform="platform"></app-footer>

  </div>
</template>

<script>

    import ContentSection from '@/components/shared/ContentSection.vue'
    import Footer from '@/components/shared/Footer.vue'
    import SectionNewsletterSignup from "@/components/shared/SectionNewsletterSignup";

    export default {
        components: {
            SectionNewsletterSignup,
            'app-content-section': ContentSection,
            'app-footer': Footer
        },
        props: {
            platform: {
                type: Boolean,
                default: false
            }
        },
        metaInfo: function() {
            return {
                title: this.$t('page-title'),
                meta: [
                    {
                        property: 'og:title',
                        content: this.$t('page-title'),
                        template: '%s | '+this.$t('site-title')
                    }
                ]
            }
        }
    }

</script>

<style lang="scss">

</style>
