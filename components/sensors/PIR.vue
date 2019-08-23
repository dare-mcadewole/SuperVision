<template>
    <Card icon="ui-wifi" :index="0">
        <div slot="title" class="has-text-weight-bold">
            PIR Sensor
        </div>
        <div slot="detail" class="has-text-weight-bold">
            MOTION {{ pir ? 'DETECTED' : 'UNDETECTED' }}
            <div class="is-size-5">
                <i class="icofont-safety has-text-success" v-if="!pir">Safe</i>
                <i class="icofont-danger-zone has-text-danger" v-else> Unsafe</i>
            </div>
        </div>
    </Card>
</template>

<script>
    import Card from '@/components/Card'
    export default {
        name: 'pir-sensor',
        components: {
            Card
        },
        computed: {
            pir () {
                return this.$store.getters.PIR
            }
        }
    }
</script>

<style scoped>

</style>