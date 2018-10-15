<template>
  <div>

    <app-cover>
      <h2 class="cover-heading">The People's Way of Research</h2>
      <h3 class="cover-subheading">Citizen Science Center Zurich</h3>
      <div class="buttons">
        <button class="button button-primary" v-scroll-to="'#projects'">Discover Projects</button>
        <button class="button button-secondary button-secondary-inverted" v-scroll-to="'#start-project'">Start a Project</button>
      </div>
    </app-cover>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-narrow">
            <h2 id="projects">Start Researching.</h2>
          </div>
        </div>
        <div class="row">
          <div class="col col-narrow">
            <p class="centered">
              Participate in research of all kinds, from classifying galaxies to counting penguins to transcribing manuscripts. Whatever your interest, there's a project for you.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col col-wide">
            <app-project-list></app-project-list>
          </div>
        </div>
        <div class="row">
          <div class="col col-narrow">
            <p class="centered">
              More projects coming soon ...
            </p>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section type="grey">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-narrow">
            <h2>What is Citizen Science?</h2>
          </div>
        </div>
        <div class="row">
          <div class="col col-narrow">
            <p class="centered">
              Citizen Science complements traditional scientific expertise by engaging the general public in the scientific process, and provides new knowledge by supporting collaborative intelligence and co-creation.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col col-wide">
            <p>
              <img src="img/illustration.png" />
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col col-narrow">
            <div class="buttons centered">
              <button class="button button-secondary">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-narrow">
            <h2 id="start-project">We help you Build your Project</h2>
          </div>
        </div>
        <div class="row">
          <div class="col col-narrow">
            <p class="centered">
              Citizen Science complements traditional scientific expertise by engaging the general public in the scientific process, and provides new knowledge by supporting collaborative intelligence and co-creation.
            </p>
            <div class="buttons centered">
              <button class="button button-secondary button-icon">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M502.3,190.8c3.9-3.1,9.7-0.2,9.7,4.7V400c0,26.5-21.5,48-48,48H48c-26.5,0-48-21.5-48-48V195.6c0-5,5.7-7.8,9.7-4.7
                  c22.4,17.4,52.1,39.5,154.1,113.6c21.1,15.4,56.7,47.8,92.2,47.6c35.7,0.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8z
                   M256,320c23.2,0.4,56.6-29.2,73.4-41.4c132.7-96.3,142.8-104.7,173.4-128.7c5.8-4.5,9.2-11.5,9.2-18.9v-19c0-26.5-21.5-48-48-48H48
                  C21.5,64,0,85.5,0,112v19c0,7.4,3.4,14.3,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7C199.4,290.8,232.8,320.4,256,320L256,320z"/>
                </svg>
                info@citizenscience.ch
              </button>
              <button class="button button-secondary button-icon">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <path d="M493.4,24.6l-104-24c-11.3-2.6-22.9,3.3-27.5,13.9l-48,112c-4.2,9.8-1.4,21.3,6.9,28l60.6,49.6
                	c-36,76.7-98.9,140.5-177.2,177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112,48c-10.7,4.7-16.6,16.3-14,27.6l24,104
                	C27.1,504.2,36.7,512,48,512c256.1,0,464-207.5,464-464C512,36.8,504.3,27.1,493.4,24.6z"/>
                </svg>
                +41 44 634 21 97
              </button>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <app-content-section type="image">
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-narrow">
            <h2>Empowered by the Sustainable Development Goals</h2>
          </div>
        </div>
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

  </div>
</template>

<script>

import Cover from '@/components/Cover.vue'
import ContentSection from '@/components/ContentSection.vue'
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'Home',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-project-list': ProjectList
  }
}

</script>

<style lang="scss">

</style>
