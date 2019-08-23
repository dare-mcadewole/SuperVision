<template>
    <Card icon="alarm" :index="0">
        <div slot="title" class="has-text-weight-bold">
            Alarm Control
        </div>
        <div slot="detail" class="has-text-weight-bold">
            <button class="control-button" @click="soundAlarm" :disabled="soundingAlarm || !state">
                Sound Alarm <i
                    class="icofont-play-alt-1" v-if="!soundingAlarm"></i> <i
                    class="icofont-spinner-alt-2 icofont-spin" v-else></i>
            </button>
            <b-switch @input="update" v-model="state" type="is-success" size="is-small" /> <i
                class="icofont-spinner-alt-2 icofont-spin icofont-2x" v-if="updatingState"></i>
        </div>
    </Card>
</template>

<script>
    import controls from '@/mixins/controls'
    import Events from '@/Events'
    import Card from '@/components/Card'
    export default {
        name: 'alarm-control',
        components: {
            Card
        },
        mixins: [ controls ],

        data() {
            return {
                soundingAlarm: false,
                changingAlarmControl: false,
                control: 'ALARM',
                soundAlarmState: false
            }
        },

        sockets: {
            [Events.SV_ALARM_STATE_DATA] (data) {
                var { zone, state } = data
                if (zone === this.$store.getters.zone) {
                    this.soundAlarmState = state
                    var message = `Alarm ${state ? 'is playing' : 'has stopped playing'}`
                    this.$buefy.toast.open({
                        size: 'is-small',
                        message,
                        type: 'is-success',
                        position: 'is-top'
                    })
                    // if (state !== this.soundAlarmState) {
                        
                    // }
                }
            }
        },

        methods: {
            soundAlarm () {
                this.soundingAlarm = true
                // this.soundAlarmState = true
                this.$http({
                    method: 'PUT',
                    url: `zone/${this.$store.getters.zone}/alarm`,
                    data: {
                        state: true
                    }
                }).then(() => {
                    this.soundingAlarm = false
                }).catch(e => {
                    this.soundingAlarm = false
                    console.log(e)
                    this.$buefy.toast.open({
                        size: 'is-small',
                        message: 'An Unknown error occured',
                        type: 'is-danger',
                        position: 'is-top'
                    })
                })
            }
        }
    }
</script>

<style scoped>
</style>