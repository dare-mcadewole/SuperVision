<template>
    <section class="sv-card row" :class="{ odd: index % 2 === 1 }">
        <div :class="`large-3 medium-3 column sv-card-icon ${colorClasses[index % 3]}`">
            <i :class="`icofont-${icon} icofont-2x has-text-white`"></i>
        </div>
        <div class="sv-card-detail large-9 medium-9 column">
            <h6 class="has-text-grey-darke has-text-grey-lighter">
                <slot name="title"></slot>
            </h6>
            <div class="is-size-7 detail">
                <slot name="detail"></slot>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'card',
        props: {
            index: {
                type: Number,
                required: true
            },

            icon: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                colorClasses: [
                    'purple', 'red', 'yellow'
                ]
            }
        }
    }
</script>

<style scoped>
.red {
    background-color: #fa8f65;
}

.yellow {
    background-color: #ffcd41;
}

.purple {
    background-color: #7159fe !important;
}

.sv-card {
    /* margin: 1.5em 0; */
    padding: 1.5em 0 1em 0;
    border-bottom: 2px dotted #EAEAEA;
    border-bottom: 2px dotted #202020;
}

.sv-card-detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.sv-card.odd {
    /* background-color: #f0ecff; */
}

.sv-card-icon {
    border-radius: 18px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* text-shadow: 0 0 3px #999; */
}

h6 {
    font-size: 15px;
    font-weight: 600 !important;
}

.detail {
    color: #888;
}

</style>