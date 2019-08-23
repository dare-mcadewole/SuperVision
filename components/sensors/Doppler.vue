<template>
    <Card icon="listening" :index="1">
        <div slot="title" class="has-text-weight-bold">
            Doppler
        </div>
        <div slot="detail" class="has-text-weight-bold">
            MOTION {{ doppler ? 'DETECTED' : 'UNDETECTED' }}
            <div class="is-size-5">
                <i class="icofont-safety has-text-success" v-if="!doppler">Safe</i>
                <i class="icofont-danger-zone has-text-danger" v-else> Unsafe</i>
            </div>
        </div>
    </Card>
</template>

<script>
    import Card from '@/components/Card'
    export default {
        name: 'doppler-sensor',
        components: {
            Card
        },
        computed: {
            doppler () {
                return this.$store.getters.DOPPLER
            }
        }
    }
</script>

<style scoped>

</style>