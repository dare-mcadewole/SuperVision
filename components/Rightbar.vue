<template>
    <transition name="custom"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut" appear>
        <section class="sv-rightbar side-dark">
            <!-- <h6 class="is-size-7 has-text-weight-bold has-text-grey">
                <i class="icofont-wrench"></i>
                SYSTEM CONTROLS
            </h6> -->
            <h2 class="subtitle yellow-text">
                <i class="icofont-wrench"></i>
                System Controls
            </h2>

            <div>
                <Card icon="alarm" :index="0">
                    <div slot="title" class="has-text-weight-bold">
                        Alarm Control
                    </div>
                    <div slot="detail" class="has-text-weight-bold">
                        <button class="control-button" @click="soundAlarm">
                            Sound Alarm <i class="icofont-play-alt-1"></i>
                        </button>
                        <b-switch v-model="alarmControl" type="is-success" size="is-small" />
                    </div>
                </Card>

                <Card icon="skull-danger" :index="1">
                    <div slot="title" class="has-text-weight-bold">
                        Protect Zone
                    </div>
                    <div slot="detail" class="has-text-weight-bold">
                        <b-switch v-model="protectZone" type="is-success" size="is-small" />
                        <!-- <span>({{ protectZone ? 'Armed' : 'Di' }}Armed)</span> -->
                    </div>
                </Card>

                <Card icon="shield-alt" :index="2">
                    <div slot="title" class="has-text-weight-bold">
                        Override
                    </div>
                    <div slot="detail" class="has-text-weight-bold">
                        <b-switch v-model="override" type="is-success" size="is-small" />
                    </div>
                </Card>
            </div>
        </section>
    </transition>
</template>

<script>
    import Card from '@/components/Card'
    export default {
        name: 'rightbar',

        components: {
            Card
        },

        data () {
            return {
                alarmControl: true,
                override: true,
                protectZone: true
            }
        },

        methods: {
            soundAlarm () {
                this.$buefy.toast.open({
                    size: 'is-small',
                    message: 'Signal sent successfully',
                    type: 'is-success',
                    position: 'is-top'
                })
            }
        }
    }
</script>

<style>
.sv-rightbar {
    /* float: left; */
    position: fixed;
    right: .7em;
    top: .7em;
    bottom: .7em;
    width: 300px;
    /* height: 100vh; */
    padding: 2em;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}

h2.subtitle {
    margin-top: 1em;
    font-weight: 500 !important;
}

.control-button {
    border-radius: 2em;
    /* width: 1em;
    height: 1em; */
    /* margin-left: 5px; */
    margin: .4em 0;
    padding: .5em 1em;
    background: #111;
    font-size: 14px;
    transition: all 0.27s ease-in 0s;
    outline: 0;
}

.control-button:hover {
    /* transform: scale(1.2); */
    opacity: 0.7;
}

.control-button:active {
    transform: scale(0.9);
    opacity: 0.7;
    transition: all 0.1s ease-in 0s;
}

.switch {
    margin: .3em 0 0;
}

@media screen and (min-width: 320px) and (max-width: 640px) {
    .sv-rightbar {
        /* display: none; */
    }
}
</style>