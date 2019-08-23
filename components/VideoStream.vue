<template>
    <transition name="custom"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear>
        <section class="sv-video-stream">
            <div
                class="sv-live-video is-size-7 has-text-weight-bold yellow has-text-grey animated infinite flash">
                <i class="icofont-video-cam"></i>
                LIVE
            </div>
            <b-loading :is-full-page="false" :active.sync="videoIsLoading">
                <div class="zone-loader flex-centered flex-column">
                    <i class="icofont-spinner-alt-2 icofont-3x icofont-spin has-text-grey"></i>
                    <h6 class="has-text-grey is-size-7 has-text-weight-bold">
                        Fetching Video feed ...
                    </h6>
                </div>
            </b-loading>
            <!-- <video width="100%" src="/violin_show.mp4" /> -->
            <section align="center">
                <img
                    v-if="frame"
                    :src="`data:image/jpeg;base64, ${frame}`"
                    :width="`${dimensions.width}px`"
                    :height="`${dimensions.height}px`"
                    alt="Frame"
                />
                <div class="dummy-image-box" v-else></div>
            </section>

            <section class="sv-video-detail">
                <h6 class="has-text-weight-bold has-text-white-ter">
                    Zone {{ zone }}
                </h6>
                <h6 class="has-text-weight-bold has-text-white-ter">
                    Video Camera Feed
                </h6>
                <p class="is-size-7 has-text-grey">
                    <i class="icofont-flikr"></i>
                    {{ new Date().toDateString() }}
                    <i class="icofont-flikr"></i>
                </p>
            </section>
        </section>
    </transition>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Events from '../Events'
    export default {
        name: 'video-stream',

        mounted () {
            this.stopLoading()
        },

        data () {
            return {
                loadingVideo: true,
                frame: null,
                dimensions: {
                    width: 640,
                    height: 360
                }
            }
        },

        computed: {
            ...mapGetters([
                'zone'
            ]),
            videoIsLoading () {
                return this.loadingVideo || !this.frame
            }
        },

        sockets: {
            [Events.SV_NEW_FRAME] ({ frame }) {
                this.frame = frame
            },
            
            disconnect () {
                this.frame = null
            }
        },

        watch: {
            zone (v) {
                this.loadingVideo = true
                this.frame = null
                this.stopLoading()
            }
        },

        methods: {
            stopLoading () {
                setTimeout(() => {
                    this.loadingVideo = false
                }, 5000)
            }
        }
    }
</script>

<style scoped>
.sv-video-stream {
    width: 95%;
    margin: auto;
    /* padding: 8px; */
    /* border: 1px solid #F9F9F9;
    border: 1px solid #000; */
    background: linear-gradient(to bottom, #010101, #111);
    box-shadow: 0 20px 80px rgba(0,0,0,0.7);
    border-radius: 20px;
    position: relative;
}

.sv-live-video {
    position: absolute;
    right: 1em;
    top: 1em;
    /* background: #ffcd41; */
    padding: 4px 10px;
    border-radius: 2em;
}

video {
    background: #010101;
    outline: 0;
    height: 450px;
    width: 100%;
    border-radius: 20px 20px 0 0;
}

img, .dummy-image-box {
    width: 640px;
    height: 360px;
    margin: auto;
}

.sv-video-detail {
    font-size: 14px;
    padding: 1em 1.5em;
    border-radius: 20px;
    /* box-shadow: inset 0 20px 85px #444; */
}

.loading-overlay.is-active {
    border-radius: 20px;
    background: rgba(0,0,0,0);
}

@media screen and (min-width: 320px) and (max-width: 640px) {
    video {
        /* height: calc(); */
        /* height: calc(10% - 33.5px); */
        height: 200px;
    }
}
</style>