<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-narrow">
            <h2 class="heading">About us</h2>
            <p>
              Das Citizen Science Center Zürich ist ein von der Universität Zürich und der ETH Zürich gemeinsam geführtes Kompetenzzentrum. Das Zentrum unterstützt akademische Wissenschaftlerinnen und Wissenschaftler und Bürgerinnen und Bürger, die gemeinsam Forschungsprojekte durchführen möchten. Die möglichen Themen reichen von Physik über Linguistik bis zur Gesundheit des Menschen.
            </p>
            <p>
              Das Zentrum stellt Forscherinnen und Forschern Ressourcen, Fachwissen und technisches Know-how zur Verfügung um Citizen Science-Projekte unter Einhaltung höchster Datensicherheitsstandards zu entwickeln und durchzuführen. Forscherinnen und Forscher der UZH und der ETH verfügen über lange Erfahrung in Citizen Science und partizipativer Forschung. Ausserdem bietet die Schweiz mit ihrer langen Tradition der direkten Demokratie beste Voraussetzungen für Citizen Science. Citizen Science kann als Umsetzung der direkten Demokratie im wissenschaftlichen Prozess verstanden werden.
            </p>
            <h3 class="subheading">Sustainable Development Goals</h3>
            <p>
              Staats- und Regierungschefs verpflichteten sich im September 2015 zu 17 Zielen für nachhaltige Entwicklung (Sustainable Development Goals - SDGs). Unter anderem sollen sie dazu beitragen, Armut zu beenden, Ungleichheit, Ungerechtigkeit und den Klimawandel zu bekämpfen. Um die SDGs erreichen zu können, ist es wichtig, dass relevante und aktuelle Daten zur Verfügung stehen, auf deren Basis Probleme bearbeitet werden können.
            </p>
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
  name: 'About',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
