<template>
    <section class="sv-app-loading-screen is-flex flex-centered flex-column">
        <div class="is-flex flex-centered flex-column">
            <Logo />
            <p class="has-text-grey-light">Anti-Vandalism Supervisory Panel</p>
            <p class="has-text-grey is-size-7 has-text-weight-bold">
                (Version {{ version }})
            </p>
            <i class="icofont-spinner-alt-2 icofont-2x icofont-spin has-text-white"></i>
        </div>
    </section>
</template>

<script>
    import Logo from '@/components/Logo'
    export default {
        name: 'app-loading-screen',

        components: {
            Logo
        },

        data () {
            return {
                version: '2.0'
            }
        }
    }
</script>

<style scoped>
.sv-app-loading-screen {
    width: 100%;
    height: 100vh;
    /* background: #F0F0F0; */
}

.sv-app-loading-screen > div {
    /* border-radius: 6px;
    padding: 1em;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07); */
}

.title {
    /* font-weight: 400 !important; */
    margin: .2em 0;
    /* letter-spacing: 0.5px; */
    /* font-size: 35px; */
    color: #444;
}

p {
    margin: 0;
    font-size: 15px;
    font-weight: 500 !important;
    /* text-shadow: 0 0px 0.5px #333; */
}

i {
    margin-top: .7em;
}
</style>