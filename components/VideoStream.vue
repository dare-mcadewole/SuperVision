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
            <b-loading :is-full-page="false" :active.sync="loadingVideo">
                <div class="zone-loader flex-centered flex-column">
                    <i class="icofont-spinner-alt-2 icofont-3x icofont-spin has-text-grey"></i>
                    <h6 class="has-text-grey is-size-7 has-text-weight-bold">
                        Fetching Video feed ...
                    </h6>
                </div>
            </b-loading>
            <video width="100%" src="/violin_show.mp4" />
            <section class="sv-video-detail">
                <h6 class="has-text-weight-bold has-text-white-ter">Live Video Camera Feed</h6>
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
    export default {
        name: 'video-stream',

        mounted () {
            setTimeout(() => {
                this.loadingVideo = false
            }, 5000)
        },

        data () {
            return {
                loadingVideo: true
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
</style>