<template>
    <Card icon="skull-danger" :index="1">
        <div slot="title" class="has-text-weight-bold">
            Protect Zone
        </div>
        <div slot="detail" class="has-text-weight-bold">
            <b-switch
                @input="update"
                v-model="state" type="is-success"
                size="is-small" /> <i
                class="icofont-spinner-alt-2 icofont-spin icofont-2x" v-if="updatingState"></i>
            <!-- <span>({{ protectZone ? 'Armed' : 'Di' }}Armed)</span> -->
        </div>
    </Card>
</template>

<script>
    import controls from '@/mixins/controls'
    import Card from '@/components/Card'
    export default {
        name: 'protect-zone-control',
        components: {
            Card
        },
        mixins: [ controls ],

        data() {
            return {
                control: 'PROTECT_ZONE'
            }
        }
    }
</script>

<style scoped>

</style>