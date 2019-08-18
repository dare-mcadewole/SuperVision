<template>
    <transition name="custom"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut" appear>
        <section class="sv-leftbar side-dark">

            <b-loading is-full-page :active.sync="loadingZoneInformation">
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
                            class="has-text-white"
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
                    <Card icon="ui-wifi" :index="0">
                        <div slot="title" class="has-text-weight-bold">
                            PIR Sensor
                        </div>
                        <div slot="detail" class="has-text-weight-bold">
                            MOTION {{ pyroE ? 'DETECTED' : 'UNDETECTED' }}
                            <i class="icofont-check has-text-success" v-if="pyroE"></i>
                            <i class="icofont-close has-text-danger"  v-else></i>
                        </div>
                    </Card>

                    <Card icon="listening" :index="1">
                        <div slot="title" class="has-text-weight-bold">
                            Dopler
                        </div>
                        <div slot="detail" class="has-text-weight-bold">
                            MOTION {{ dopler ? 'DETECTED' : 'UNDETECTED' }}
                            <i class="icofont-check has-text-success" v-if="dopler"></i>
                            <i class="icofont-close has-text-danger"  v-else></i>
                        </div>
                    </Card>

                    <Card icon="thief" :index="2">
                        <div slot="title" class="has-text-weight-bold">
                            Intrusion System
                        </div>
                        <div slot="detail" class="has-text-weight-bold">
                            MOTION {{ intrusionSystem ? 'DETECTED' : 'UNDETECTED' }}
                            <i class="icofont-check has-text-success" v-if="intrusionSystem"></i>
                            <i class="icofont-close has-text-danger"  v-else></i>
                        </div>
                    </Card>


                    <Card icon="shield-alt" :index="3">
                        <div slot="title" class="has-text-weight-bold">
                            Auto Protect
                            <span class="has-text-grey-light has-text-weight-bold is-size-7">
                                ({{ autoProtect ? 'ON' : 'OFF' }})
                            </span>

                        </div>
                        <div slot="detail">
                            <b-switch v-model="autoProtect" type="is-success" size="is-small" />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
    import Card from '@/components/Card'
    export default {
        name: 'leftbar',

        components: {
            Card
        },

        data () {
            return {
                loadingZoneInformation: false,
                autoProtect: true,
                selectedZone: 1,
                pyroE: 1,
                dopler: 0,
                intrusionSystem: 0
            }
        },

        methods: {
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
}

.switch {
    margin: 0;
}

.button {
    background: #0A0A0A;
    border-color: #0A0A0A;
    box-shadow: 0 25px 85px #444;
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

.button.is-small {
    margin: 0;
    border-radius: 0 0 6px 6px !important;
    height: 3em;
}

.button.is-small:hover {
    margin: 0;
}

.loading-overlay.is-full-page {
    z-index: 2000;
}

.loading-overlay .loading-background {
    background: rgba(0, 0, 0, 0.9);
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
</style>