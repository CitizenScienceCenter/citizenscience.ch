<template>
    <div class="project" @click="openInNewTab(url)">

        <div class="project-info">

            <div class="row row-reverse-large row-centered row-middle row-wrapping">


                <div class="col col-8 col-tablet-portrait-4 col-large-4 col-image col-wrapping">
                    <img :src="projectImage" />
                </div>


                <div class="col col-tablet-portrait-8 col-large-6 col-large-after-2 col-wrapping">

                    <span class="project-type">{{ projectTopic }}</span>
                    <h3>{{ projectTitle }}</h3>
                    <p v-html="projectDescription"></p>

                    <button class="button button-primary" @click="link('http://wenker.citizenscience.ch')">{{ buttonText }}</button>

                </div>


            </div>

        </div>

        <div class="overlay" :style="{
            background: 'linear-gradient(to bottom right, '+colorGradientStart+'' +', '+colorGradientEnd+')'
        }"></div>

        <div class="project-bg-image" :style="{
            backgroundImage: 'url('+projectBgImage+')'
        }"></div>


    </div>
</template>

<script>
    export default {
        name: "ProjectTeaser",
        props: {
            projectBgImage: String,
            projectImage: String,
            projectTitle: String,
            projectTopic: String,
            projectDescription: String,
            buttonText: String,
            url: String,
            colorGradientStart: String,
            colorGradientEnd: String
        },
        methods: {
            openInNewTab: function(url) {
                var win = window.open(url, '_blank');
                win.focus();
            }
        }
    }
</script>


<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';


    /*
    .button {
        &.button-primary {
            background-color: $color-primary;
            &:active {
                background-color: $color-primary-shade-20;
            }
            @media (hover: hover) {
                &:hover {
                    background-color: $color-primary-shade-20;
                }
            }
        }
    }
    */


    .project {

        position: relative;
        border-radius: $border-radius;
        box-shadow: 0px 4px 8px -4px rgba($color-black,0.2);
        overflow: hidden;
        cursor: pointer;

        .project-info {

            position: relative;
            z-index: 2;
            color: white;
            height: 100%;
            padding: $spacing-3 $spacing-2;

            .project-type {
                display: block;
                font-size: $font-size-small;
                text-transform: uppercase;
                margin-bottom: $spacing-1;
            }

            h3 {
                font-size: $font-size-medium;
                font-weight: 700;
                line-height: 1.25;
                text-align: left;
                text-transform: none;
                margin-bottom: $spacing-2;
            }

            p {
                font-size: $font-size-small;
                margin-bottom: $spacing-2;
            }

            .col-image {
                display: none;
                img {
                }
            }

        }

        .overlay {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0.8;
        }

        .project-bg-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/img/projects/wenker.jpg');
            background-size: cover;
            background-position: 50% 50%;
        }


        transition: all $transition-duration-long*2 $transition-timing-function;
        &:active {
            //transform: translateY(-$spacing-1/2);
            .button-primary {
                background-color: $color-primary-shade-20;
            }
        }
        @media (hover: hover) {
            &:hover {
                //transform: translateY(-$spacing-1/2);
                .button-primary {
                    background-color: $color-primary-shade-20;
                }
            }
        }

    }




    @media only screen and (min-width: $viewport-mobile-large) {


        .project {

            .project-info {

                padding: $spacing-4 $spacing-3;

            }

        }


    }


    @media only screen and (min-width: $viewport-tablet-portrait) {


        .project {

            .project-info {
                .col-image {
                    display: block;
                    img {
                        transform: scale(1.5);
                    }
                }
            }

        }


    }

    @media only screen and (min-width: $viewport-large) {


        .project {
            height: 100%;

            .project-info {

                p {
                    margin-bottom: $spacing-7;
                }

                .button {
                    position: absolute;
                    bottom: $spacing-4;
                    left: $spacing-3;
                }

                .row {
                    position: initial;
                }

                .col-image {
                    img {
                        transform: scale(1.75);
                    }
                }


            }

            .project-image {
                background-position: 50% 10%;
            }

        }

    }

    @media only screen and (min-width: $viewport-xlarge) {


    }

</style>
