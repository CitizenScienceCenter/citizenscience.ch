<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">Platform for Citizen Science Projects</h2>
            <p class="centered left-aligned-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-right">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-6">
              <img src="img/graphic-tools.png"/>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-5 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">Community</h2>
            <p class="centered left-aligned-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-6">
              <img src="img/graphic-community.png"/>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-6 col-large-before-1 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">Knowledge</h2>
            <p class="centered left-aligned-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-right">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-tablet-portrait-10 col-large-6">
              <img src="img/graphic-knowledge.png"/>
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
