<template>
    <Card icon="shield-alt" :index="3">
        <div slot="title" class="has-text-weight-bold">
            Auto Protect
            <span class="has-text-grey-light has-text-weight-bold is-size-7">
                ({{ state ? 'ON' : 'OFF' }})
            </span>
        </div>
        <div slot="detail">
            <b-switch
                @input="update"
                v-model="state"
                type="is-success"
                size="is-small" /> <i
                class="icofont-spinner-alt-2 icofont-spin icofont-2x" v-if="updatingState"></i>
        </div>
    </Card>
</template>

<script>
    import controls from '@/mixins/controls'
    import Card from '@/components/Card'
    export default {
        name: 'alarm-control',
        components: {
            Card
        },
        mixins: [ controls ],

        data() {
            return {
                control: 'AUTO_PROTECT'
            }
        }
    }
</script>

<style scoped>

</style>