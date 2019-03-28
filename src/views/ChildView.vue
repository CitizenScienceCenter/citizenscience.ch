<template>
  <div>

    <app-content-section class="content-section-flat" color="superlight-greyish">
      <div class="content-wrapper">
        <div class="row row-centered">
          <div class="col col-tablet-portrait-8 col-large-12">
            <div class="sub-navigation">
              <!-- <label>{{ $t(this.$router.currentRoute.meta.i18n).link }}:</label> -->
              <ul>
                <li v-for="child in $router.options.routes.filter(x=>x.path==$route.matched[0].path)[0].children">
                  <router-link :to="child.path" active-class="active">{{ $t(child.meta.i18n+'.link') }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </app-content-section>

    <router-view platform></router-view>

  </div>
</template>

<script>

    import ContentSection from '@/components/shared/ContentSection.vue'

    export default {
        name: 'Parent',
        components: {
            'app-content-section': ContentSection
        },
        props: {
            platform: {
                type: Boolean,
                default: false
            }
        }
    }

</script>

<style lang="scss">

</style>
