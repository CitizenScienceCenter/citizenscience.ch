<i18n>
{
  "en": {
    "heading": "Next Events",
    "paragraph-1": "Event 1",
    "paragraph-2": "Event 2"
  },
  "de": {
    "heading": "Nächste Events",
    "paragraph-1": "Event 1",
    "paragraph-2": "Event 2"
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
