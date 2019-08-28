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

        <div v-if="infoText" class="info-text">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path class="cls-1" d="M569.52,472c18.45,32-4.71,72-41.58,72H48.05c-36.93,0-60-40.05-41.57-72L246.42,56c18.47-32,64.72-32,83.16,0L569.52,472ZM288,386a46,46,0,1,0,46,46A46,46,0,0,0,288,386ZM244.33,220.65l7.41,136a12,12,0,0,0,12,11.35h48.54a12,12,0,0,0,12-11.35l7.42-136a12,12,0,0,0-12-12.65H256.31a12,12,0,0,0-12,12.65Z"/></svg>
            {{ infoText }}
        </div>


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
            colorGradientEnd: String,
            infoText: String
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

        .info-text {
            svg {
                fill: white;
                width: $font-size-small;
                height: $font-size-small;
                position: absolute;
                top: calc( ( ( #{$font-size-mini} + #{$spacing-1} * 2 ) - #{$font-size-small} ) / 2 - 1px );
                left: $spacing-1;
            }
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 2;
            background-color: rgba( $color-black, 0.6 );
            color: white;
            font-size: $font-size-mini;
            line-height: 1;
            padding: $spacing-1;
            padding-left: calc( #{$spacing-2} + #{$font-size-small} );
            border-radius: $border-radius 0 0 0;
            max-width: 120px;
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

            .info-text {
                max-width: 160px;
            }


        }


    }


    @media only screen and (min-width: $viewport-tablet-portrait) {


        .project {

            .project-info {
                .col-image {
                    display: block;
                    img {
                        transform: scale(1.5) translateX(-10%);
                    }
                }
            }

            .info-text {
                max-width: none;
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
                        transform: scale(1.75) translateY(20%);
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
