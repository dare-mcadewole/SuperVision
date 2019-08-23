<template>
    <Card icon="shield-alt" :index="2">
        <div slot="title" class="has-text-weight-bold">
            Override
        </div>
        <div slot="detail" class="has-text-weight-bold">
            <b-switch
                @input="update"
                v-model="state" type="is-success" size="is-small" /> <i
                class="icofont-spinner-alt-2 icofont-spin icofont-2x" v-if="updatingState"></i>
        </div>
    </Card>
</template>

<script>
    import controls from '@/mixins/controls'
    import Card from '@/components/Card'
    export default {
        name: 'override-control',
        components: {
            Card
        },
        mixins: [ controls ],

        data() {
            return {
                control: 'OVERRIDE'
            }
        }
    }
</script>

<style scoped>

</style>