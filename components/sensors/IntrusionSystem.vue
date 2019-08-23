<template>
    <Card icon="thief" :index="2">
        <div slot="title" class="has-text-weight-bold">
            Intrusion System
        </div>
        <div slot="detail" class="has-text-weight-bold">
            MOTION {{ intrusion ? 'DETECTED' : 'UNDETECTED' }}
            <div class="is-size-5">
                <i class="icofont-safety has-text-success" v-if="!intrusion">Safe</i>
                <i class="icofont-danger-zone has-text-danger" v-else> Unsafe</i>
            </div>
        </div>
    </Card>
</template>

<script>
    import Card from '@/components/Card'
    export default {
        name: 'intrusion-system',
        components: {
            Card
        },
        computed: {
            intrusion () {
                return this.$store.getters.INTRUSION
            }
        }
    }
</script>

<style scoped>

</style>