<template>
    <div class="event-list">
        <div class="margin-bottom" v-for="event in events" :key="event.path">
            <div class="scroll-effect">
                <!-- <router-link :to="'/events/'+event.path" style="display:none">link</router-link> -->
                <router-link tag="div" class="event" :to="'/events/'+event.path">
                    <div class="row row-wrapping row-centered">
                        <div class="col col-wrapping col-6 col-tablet-portrait-4">
                            <img :src="'/img/events/'+event.image" style="border-radius:50%"/>
                        </div>
                        <div class="col col-wrapping col-tablet-portrait-8">

                            <p class="event-date">{{eventDisplayDate(event.start,event.end)}}</p>

                            <h3 class="subheading event-title" v-html="event.title"></h3>

                            <p v-if="event.abstract !== ''" v-html="event.abstract" class="event-abstract"></p>

                            <div class="event-speakers" v-if="event.speakers !== ''">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,256A128,128,0,1,0,128,128,128,128,0,0,0,256,256Zm89.6,32H328.9a174.08,174.08,0,0,1-145.8,0H166.4A134.43,134.43,0,0,0,32,422.4V464a48,48,0,0,0,48,48H432a48,48,0,0,0,48-48V422.4A134.43,134.43,0,0,0,345.6,288Z"/></svg>
                                <p v-html="event.speakers"></p>
                            </div>

                            <div class="event-location">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M236.27,501.67C91,291,64,269.41,64,192,64,86,150,0,256,0S448,86,448,192c0,77.41-27,99-172.27,309.67a24,24,0,0,1-39.46,0ZM256,272a80,80,0,1,0-80-80A80,80,0,0,0,256,272Z"/></svg>
                                <p v-html="event.location"></p>
                            </div>

                            <div class="button-group">
                                <router-link tag="button" class="button button-secondary button-secondary-naked" :to="'/events/'+event.path">Details</router-link>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

    import events from "@/assets/events.json";

    export default {
        name: "EventList",
        data() {
            return {
                events: events,
                i18nWeekdays: [
                    'weekday-sunday',
                    'weekday-monday',
                    'weekday-tuesday',
                    'weekday-wednesday',
                    'weekday-thursday',
                    'weekday-friday',
                    'weekday-saturday',
                ]
            }
        },
        props: {
            past: {
                type: Boolean,
                default: false
            },
            limit: {
                type: Number,
                default: 0
            }
        },
        methods: {
            eventDisplayDate( start, end ) {
                let startDate = new Date(start);
                let endDate = new Date(end);

                if( startDate.getDate() === endDate.getDate()
                    && startDate.getMonth() === endDate.getMonth()
                    && startDate.getFullYear() === endDate.getFullYear() ) {
                    // same day
                    return this.$t(this.i18nWeekdays[startDate.getDay()]) +', '+ startDate.getDate()+'.'+(startDate.getMonth()+1)+'.'+startDate.getFullYear()+', '+startDate.getHours()+':'+startDate.getMinutes()+'–'+endDate.getHours()+':'+(endDate.getMinutes()<10?'0':'') + endDate.getMinutes();
                }
                else {
                    // different day
                    //console.log('different day');
                    return this.$t(this.i18nWeekdays[startDate.getDay()]) +', '+ startDate.getDate()+'.'+(startDate.getMonth()+1)+'.'+startDate.getFullYear()+', '+startDate.getHours()+':'+(startDate.getMinutes()<10?'0':'') + startDate.getMinutes()+' – '+this.$t(this.i18nWeekdays[endDate.getDay()]) +', '+ endDate.getDate()+'.'+(endDate.getMonth()+1)+'.'+endDate.getFullYear()+', '+endDate.getHours()+':'+(endDate.getMinutes()<10?'0':'') + endDate.getMinutes();
                }
            }
        },
        created() {

            if( !this.past ) {
                // filter for future events
                this.events = this.events.filter(event => Date.parse(event.end) >= Date.now() );
                // sort by date
                this.events.sort(function(a, b){
                    return Date.parse(a.start) - Date.parse(b.start);
                });
            }
            else {
                // filter for past events
                this.events = this.events.filter(event => Date.parse(event.end) < Date.now() );
                // sort by date
                this.events.sort(function(a, b){
                    return Date.parse(b.start) - Date.parse(a.start);
                });
            }

            if( this.limit ) {
                this.events = this.events.slice(0,this.limit);
            }

        }
    }

</script>

<style lang="scss">

    @import '@/styles/theme.scss';
    @import '@/styles/shared/variables.scss';

    .event-list {
        .event {
            cursor: pointer;

            .event-date {
                display: block;
                margin-bottom: $spacing-1;
                text-transform: uppercase;
            }
            .event-title {
                margin-bottom: $spacing-1;
            }
            .event-abstract {
                margin-bottom: $spacing-1;
            }
            .event-speakers, .event-location {
                position: relative;
                svg {
                    position: absolute;
                    top: calc(( #{$font-size-normal}*1.5 - 16px ) /2);
                    left: 0;
                    width: 16px;
                    height: 16px;
                    fill: $color-secondary;
                }
                p {
                    padding-left: calc( 16px + #{$spacing-2} );
                }
            }
            .event-speakers {
                margin-bottom: $spacing-1;
            }
            .event-location {
                margin-bottom: $spacing-1;
            }

            button {
                padding-left: 0;
                padding-right: 0;
            }
        }
    }


</style>
