<template>
  <div>

    <app-content-section overflow-y="visible">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-5 col-large-push-1 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">What is Citizen Science?</h2>
            <p class="centered left-aligned-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-right">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6">
              <img src="img/graphic-citizen-science.png"/>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section overflow-y="visible">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-5 col-large-push-5 col-wrapping col-large-no-bottom-margin">
            <h2 class="subheading centered left-aligned-large">Citizen Science for the SDGs</h2>
            <p class="centered left-aligned-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6">
              <img src="img/sdg-wheel.png"/>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section color="light-greyish" overflow-y="hidden">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-5 col-large-push-1 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">The Open Seventeen</h2>
            <p class="centered left-aligned-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-right">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6">
              <img src="img/o17.jpg" style="border-radius:50%" />
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section overflow-y="hidden">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-tablet-portrait-7 col-large-5 col-large-push-5 col-wrapping col-large-no-bottom-margin">
            <h2 class="heading centered left-aligned-large">Roadmap</h2>
            <p class="centered left-aligned-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </p>
            <h3 class="subheading centered left-aligned-large">SDG Toolkit</h3>
            <p class="centered left-aligned-large">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            </p>
          </div>

        </div>
      </div>
      <div class="background-wrapper background-wrapper-move-left">
        <div class="content-wrapper">
          <div class="row row-centered row-in-background">
            <div class="col col-6">
              <img src="img/graphic-create-project.png" />
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
