<template>
  <div>

    <app-content-section>
      <div class="content-wrapper">
        <div class="row">
          <div class="col col-narrow">
            <h2 class="heading">Next Events</h2>
            <p>
              Bevorstehende Brown Bag Lunches (in English):
            </p>
            <p>
              Sep 24, 2018, 12:00 Support by the CS Center Zurich: what it is and how to access it<br/>
              Oct 29, 2018, 12:00 Membership & Partnerships - Criteria and procedures<br/>
              Nov 15, 2018, 12:00 Ethics, data security and data privacy - a one-stop-shop CS projects<br/>
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
  name: 'Events',
  components: {
    'app-cover': Cover,
    'app-content-section': ContentSection,
    'app-footer': Footer
  }
}

</script>

<style lang="scss">

</style>
