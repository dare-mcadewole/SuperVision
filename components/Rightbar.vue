<template>
    <transition name="custom"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut" appear>
        <section class="sv-rightbar side-dark">
            <h2 class="subtitle yellow-text">
                <i class="icofont-wrench"></i>
                System Controls
            </h2>

            <div>
                <AlarmControl />
                <ProtectZoneControl />
                <OverrideControl />
                <AutoProtectControl />
            </div>
        </section>
    </transition>
</template>

<script>
    import AlarmControl from '@/components/AlarmControl'
    import ProtectZoneControl from '@/components/ProtectZoneControl'
    import OverrideControl from '@/components/OverrideControl'
    import AutoProtectControl from '@/components/AutoProtectControl'
    export default {
        name: 'rightbar',

        components: {
            AlarmControl,
            ProtectZoneControl,
            OverrideControl,
            AutoProtectControl
        },

        mounted () {
            this.$socket.client.emit('SV_ALL_VALUES', {})
        },

        methods: {
        },

    }
</script>

<style>
.sv-rightbar {
    /* float: left; */
    position: fixed;
    right: .7em;
    top: .7em;
    bottom: .7em;
    width: 300px;
    /* height: 100vh; */
    padding: 2em;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}

h2.subtitle {
    margin-top: 1em;
    font-weight: 500 !important;
}

.control-button {
    border-radius: 2em;
    /* width: 1em;
    height: 1em; */
    /* margin-left: 5px; */
    margin: .4em 0;
    padding: .5em 1em;
    background: #111;
    font-size: 14px;
    transition: all 0.27s ease-in 0s;
    outline: 0;
}

.control-button:hover {
    /* transform: scale(1.2); */
    opacity: 0.7;
}

.control-button:active {
    transform: scale(0.9);
    opacity: 0.7;
    transition: all 0.1s ease-in 0s;
}

.switch {
    margin: .3em 0 0;
}

@media screen and (min-width: 320px) and (max-width: 640px) {
    .sv-rightbar {
        /* display: none; */
    }
}
</style>