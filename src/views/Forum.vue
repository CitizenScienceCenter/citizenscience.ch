<i18n>
    {

    "en": {

    "page-title": "Forum",

    "forum-heading": "Questions & Discussions",

    "section-newsletter-heading": "Sign up for our Newsletter"

    },
    "de": {

    "page-title": "Forum",

    "forum-heading": "Fragen & Diskussionen",

    "section-newsletter-heading": "Abonniere unseren Newsletter"

    }

    }
</i18n>

<template>
    <div>
        <app-content-section>

            <div class="content-wrapper">

                <div class="row row-centered">
                    <div class="col col-large-6">
                        <h2 class="heading">{{ $t('forum-heading') }}</h2>
                        <comments :sourceId="activityId" withTitles></comments>
                    </div>
                </div>

            </div>

        </app-content-section>


        <app-content-section color="greyish">
            <div class="content-wrapper">
                <div class="row row-centered">
                    <div class="col col-mobile-large-10">
                        <h2 class="heading centered">{{ $t('section-newsletter-heading') }}</h2>
                    </div>
                </div>
                <div class="row row-centered">
                    <div class="col col-mobile-large-10 col-tablet-portrait-8 col-large-12">
                        <app-newsletter-signup></app-newsletter-signup>
                    </div>
                </div>
            </div>
        </app-content-section>

        <app-footer></app-footer>

    </div>
</template>

<script>

    import {mapState} from 'vuex'

    import ContentSection from '@/components/shared/ContentSection.vue'
    import Comments from '@/components/shared/Comments.vue'
    import NewsletterSignup from '@/components/shared/NewsletterSignup.vue'
    import Footer from '@/components/shared/Footer.vue'

    export default {
        name: 'Forum',
        components: {
            'app-content-section': ContentSection,
            'app-newsletter-signup': NewsletterSignup,
            'app-footer': Footer,
            Comments
        },
        metaInfo: function() {
            return {
                title: this.$t('page-title')
            }
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                //user: state => state.user.user,
                activityId: state => state.consts.activityId,

                loading: state => state.c3s.settings.loading
            })
        }
    }
</script>

<style lang="scss">


    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';



</style>
