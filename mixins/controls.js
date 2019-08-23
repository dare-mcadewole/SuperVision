import Events from '@/Events'

export default {

    data () {
        return {
            state: false,
            updatingState: false,
            previousState: false
        }
    },

    sockets: {
        [Events.SV_CONTROL_DATA] ({
            zone, control, state
        }) {
            if (
                zone === this.$store.getters.zone
                && control === this.control
            )
            this.state = state
            if (this.state !== this.previousState) {
                this.previousState = state
                var message = `${this.clean(control)} control has been ${state ? 'enabled' : 'disabled'}`
                this.$buefy.toast.open({
                    type: 'is-success',
                    message
                })
            }
        }
    },

    methods: {
        update () {
            var { control, state } = this
            this.updatingState = true
            this.$http({
                method: 'PUT',
                url: `zone/${this.$store.getters.zone}/control`,
                data: {
                    control,
                    state
                }
            }).then(response => {
                this.updatingState = false
                this.state = state
            }).catch((err) => {
                console.log('Axios says: ', err)
                this.updatingState = false
                this.state = !this.state
                this.$buefy.toast.open({
                    type: 'is-danger',
                    message: `An error occurred in an attempt to change control state`
                })
            })
        },

        clean (ctrl) {
            return ctrl.replace('_', ' ')
        }
    }
}
