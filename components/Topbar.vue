<template>
    <section class="sv-topbar is-flex flex-centered flex-column">
        <div class="is-flex flex-column">
            <div>
                <span class="title">
                    SuperVisi<i class="icofont-eye-open"></i>n
                </span>
                <i class="icofont-ui-press" :class="{
                    'has-text-success': $store.getters.isConnected,
                    'has-text-danger': !$store.getters.isConnected
                }"></i>
            </div>
            <p class="has-text-grey-light has-text-weight-bold">
                Anti-Vandalism Supervisory Panel
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'topbar'
    }
</script>

<style scoped>
body {
    /* background: #F0F0F0 !important; */
}
.sv-topbar {
    /* background-color: rgba(255,255,255,0.6); */
    /* border-bottom: 1px solid #e5e5e5; */
    min-height: 100px;
    align-items: flex-start;
    padding: 0 2em;
}

.title {
    margin: 0;
    background: linear-gradient(to bottom right, #ffcd41, #ff4a00);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    /* color: #fa8f65; */
    font-weight: 300 !important;
}

p {
    margin: 0;
    font-size: 14px;
}

@media screen and (min-width: 320px) and (max-width: 640px) {
    .title {
        font-size: 23px;
    }
}
</style>