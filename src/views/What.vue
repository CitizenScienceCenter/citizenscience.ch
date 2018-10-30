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
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section type="image-bg">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-narrow">
            <p class="centered" id="sdg">
              <img class="sdg-logo" src="@/assets/sdg-logo.svg" />
            </p>
            <h2 class="heading">Empowered by the Sustainable Development Goals</h2>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col col-narrow">
            <p><img src="/img/sdg-icons.png" /></p>
          </div>
        </div> -->
        <div class="row">
          <div class="col col-narrow">
            <p class="centered">
              Heads of State, Government leaders, UN High Level Representatives and civil society  met in September 2015, at the 70th Session of the United Nations General Assembly, and adopted the Sustainable Development Goals (SDGs). These represent a universal, ambitious, sustainable development agenda, an agenda “of the people, by the people and for the people,” crafted with UNESCO’s active involvement.
            </p>
            <div class="buttons centered">
              <button class="button button-secondary">Learn more</button>
            </div>
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
  name: 'What',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
