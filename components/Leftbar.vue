<template>
    <transition name="custom"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut" appear>
        <section class="sv-leftbar side-dark">

            <b-loading :is-full-page="false" :active.sync="loadingZoneInformation">
                <div class="zone-loader flex-centered flex-column">
                    <i class="icofont-spinner-alt-2 icofont-3x icofont-spin has-text-grey"></i>
                    <h6 class="has-text-grey is-size-7 has-text-weight-bold">
                        Updating Information for Zone {{ selectedZone }} ...
                    </h6>
                </div>
            </b-loading>

            <div>
                <div class="sv-zone-selection">
                    <b-dropdown @change="loadZoneInformation" aria-role="list" v-model="selectedZone">
                        <b-button
                            size="is-small"
                            class="has-text-white zone-selector"
                            slot="trigger">
                            <i class="icofont-chart-flow-2"></i>
                            <span class="has-text-weight-bold">
                                Zone {{ selectedZone }}
                            </span>
                            <i class="icofont-caret-down"></i>
                        </b-button>

                        <b-dropdown-item aria-role="listitem" :value="1">Zone 1</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem" :value="2">Zone 2</b-dropdown-item>
                        <b-dropdown-item aria-role="listitem" :value="3">Zone 3</b-dropdown-item>
                    </b-dropdown>
                </div>

                <h2 class="subtitle yellow-text sv-zone-number">
                    <i class="icofont-opposite"></i>
                    Zone {{ selectedZone }}
                </h2>

                <div>
                    <PIRSensor />
                    <DopplerSensor />
                    <IntrusionSystem />
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
    import Events from '@/Events'
    import { mapActions } from 'vuex'
    import PIRSensor from '@/components/sensors/PIR'
    import DopplerSensor from '@/components/sensors/Doppler'
    import IntrusionSystem from '@/components/sensors/IntrusionSystem'
    export default {
        name: 'leftbar',

        components: {
            PIRSensor,
            DopplerSensor,
            IntrusionSystem
        },

        mounted () {
            this.$socket.client.emit('SV_ALL_VALUES', {})
        },

        data () {
            return {
                loadingZoneInformation: false,
                autoProtect: true,
                selectedZone: 1
            }
        },

        watch: {
            selectedZone (val) {
                this.setZone(val)
            }
        },

        sockets: {
            [Events.SV_SENSOR_DATA] (data) {
                if (data.zone === this.$store.getters.zone) {
                    this.$store.dispatch(`set${data.sensor}`, data.state)
                }
            }
        },

        methods: {
            ...mapActions([
                'setZone'
            ]),
            loadZoneInformation () {
                // this.$buefy.toast.open(`Fetching information for Zone ${this.selectedZone} ... `)
                this.loadingZoneInformation = true
                setTimeout(() => {
                    this.loadingZoneInformation = false
                }, 3000)
            }
        }
    }
</script>

<style>
.sv-leftbar {
    position: fixed;
    left: .7em;
    top: .7em;
    bottom: .7em;
    float: left;
    width: 300px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    z-index: 1000;
}

.sv-leftbar > div {
    position: relative;
    padding: 2em;
    height: 100%;
    width: 100%;
}

.sv-zone-selection {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
}

h2.sv-zone-number {
    margin-top: 1em;
    font-weight: 500 !important;
}

.switch {
    margin: 0;
}

.button {
    background: #111;
    border-color: #000;
    box-shadow: 0 25px 85px #000;
    border-radius: 6px !important;
}

.button:hover {
    border-color: transparent;
    background: #111;
}

.button:focus:not(:active), .button.is-focused:not(:active) {
    outline: 0;
    border-color: transparent;
    box-shadow: none;
    background: #222;
    border-radius: 0 !important;
}

.button.zone-selector {
    margin: 0;
    border-radius: 0 0 12px 12px !important;
    height: 3.1em;
    width: 13em;
}

.button.zone-selector:hover {
    margin: 0;
}

.loading-overlay.is-full-page {
    z-index: 2000;
}

.loading-overlay .loading-background {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}

.zone-loader {
    z-index: 2010;
    align-items: center;
    letter-spacing: 0.3px;
    text-align: center;
}

.zone-loader i {
    background: linear-gradient(to bottom right, #ffcd41, #ff4a00);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.zone-loader h6 {
    margin-top: 1em;
}

@media screen and (min-width: 320px) and (max-width: 640px) {
    .sv-leftbar {
        display: none;
    }
}
</style>