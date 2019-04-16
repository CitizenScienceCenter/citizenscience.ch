<i18n>
    {

    "en": {

    "page-title": "Forum",

    "forum-heading": "Questions & Discussions"

    },
    "de": {

    "page-title": "Forum",

    "forum-heading": "Fragen & Diskussionen"
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


        <section-newsletter-signup></section-newsletter-signup>

        <app-footer></app-footer>

    </div>
</template>

<script>

    import {mapState} from 'vuex'

    import ContentSection from '@/components/shared/ContentSection.vue'
    import Comments from '@/components/shared/Comments.vue'
    import Footer from '@/components/shared/Footer.vue'
    import SectionNewsletterSignup from "../components/shared/SectionNewsletterSignup";

    export default {
        name: 'Forum',
        components: {
            SectionNewsletterSignup,
            'app-content-section': ContentSection,
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
