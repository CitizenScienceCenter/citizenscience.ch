<i18n>
{
  "en": {
    "heading": "The Sustainable Development Goals",
    "paragraph-1": "In September 2015, world leaders at the United Nations committed to 17 Sustainable Development Goals (SDGs) that by the year 2030 should help end extreme poverty, and fight inequality, injustice, and climate change, amongst other objectives. Success depends largely on the availability of relevant and timely data for decision-making and monitoring of progresses, and to keep governments accountable for their promises.",
    "paragraph-2": "The role of science in supporting this global effort is evident, as success depends largely on the availability of data for assessments and monitoring of progresses (think about environmental changes). However, scientists alone cannot provide information at the necessary scale and resolution. As some of the most important data sets to help achieve the SDGs are local in nature, they can often be generated and collected by citizens."
  },
  "de": {
    "heading": "Die Sustainable Development Goals",
    "paragraph-1": "Staats- und Regierungschefs verpflichteten sich im September 2015 zu 17 Zielen für nachhaltige Entwicklung (Sustainable Development Goals - SDGs). Unter anderem sollen sie dazu beitragen, Armut zu beenden, Ungleichheit, Ungerechtigkeit und den Klimawandel zu bekämpfen. Um die SDGs erreichen zu können, ist es wichtig, dass relevante und aktuelle Daten zur Verfügung stehen, auf deren Basis Probleme bearbeitet werden können.",
    "paragraph-2": "Die Wissenschaft spielt hier eine besondere Rolle. Mit wissenschaftlichen Methoden und Herangehensweisen können Informationen systematisch gesammelt werden. Wissenschaftlerinnen und Wissenschaftler sind häufig alleine jedoch nicht in der Lage, Daten im erforderlichen Umfang zu sammeln und auszuwerten. Viele der wichtigsten Daten zur Erreichung der SDGs sind ausserdem lokaler Natur. Bei der Sammlung und Auswertung dieser Daten können Bürgerinnen und Bürger eine wichtige Rolle spielen."
  }
}
</i18n>
<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-narrow">
            <h2 class="heading">{{ $t('heading') }}</h2>
            <p>{{ $t('paragraph-1') }}</p>
            <p>{{ $t('paragraph-2') }}</p>
          </div>
        </div>
      </div>
    </app-content-section>


    <app-footer></app-footer>

  </div>
</template>

<script>

import Cover from '@/components/Cover.vue'
import ContentSection from '@/components/ContentSection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Who',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
