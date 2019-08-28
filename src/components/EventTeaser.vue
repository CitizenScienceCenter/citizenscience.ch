<i18n>
    {

    "de": {

    "teaser-title": "Scientifica 2019:<br> Science Fiction – Science Facts",
    "teaser-date": "30. Aug. – 1. Sept.",
    "teaser-text": "Besuchen Sie uns an unserem Stand.",
    "teaser-button": "Mehr erfahren"

    },
    "en": {

    "teaser-title": "Scientifica 2019:<br> Science Fiction – Science Facts",
    "teaser-date": "30. Aug. – 1. Sept.",
    "teaser-text": "Visit us at our Stand.",
    "teaser-button": "Learn more"

    }

    }
</i18n>

<template>
    <div class="event-teaser">
        <div class="row">
            <div class="col col-large-6">
                <div class="image"></div>
            </div>
            <div class="col col-large-6">
                <div class="text">
                    <h2 class="subheading centered left-aligned-large" v-html="$t('teaser-title')"></h2>
                    <p class="centered lead left-aligned-large" v-html="$t('teaser-date')"></p>
                    <p class="centered left-aligned-large" v-html="$t('teaser-text')"></p>
                    <div class="button-group centered left-aligned-large">
                        <router-link tag="button" to="/events" class="button button-secondary">{{ $t('teaser-button') }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EventTeaser"
    }
</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .event-teaser {
        background-color: white;

        position: relative;

        border-radius: $border-radius;
        overflow: hidden;

        .image {
            background-image: url('/img/events/scientifica-teaser.jpg');
            background-size: cover;
            width: 100%;
            height: 100%;
            min-height: 160px;
        }

        .col:nth-child(2) {
            .text {

                padding-top: $spacing-3;
                padding-bottom: $spacing-3;
                padding-right: $grid-gutter-large;

                .subheading {
                    margin-bottom: $spacing-1;
                }
                p {
                    margin-bottom: $spacing-2;
                }
            }


        }
    }


</style>
