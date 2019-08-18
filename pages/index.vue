<template>
  <section class="sv-home">
    <transition name="custom"
      mode="out-in"
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutUp" appear>
      <AppLoadingScreen key="1" v-if="!pageLoaded" />
      <div key="2" class="sv-main" v-else>
        <Leftbar />
        <div class="main">
          <div>
            <transition
              enter-active-class="animated fadeInDown" 
              leave-active-class="animated fadeOutUp" appear>
              <Topbar />
            </transition>
            <Events />
            <VideoStream />
          </div>
          <Rightbar />
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import AppLoadingScreen from '@/components/AppLoadingScreen'
import Leftbar from '@/components/Leftbar'
import Rightbar from '@/components/Rightbar'
import Topbar from '@/components/Topbar'
import Events from '@/components/Events'
import VideoStream from '@/components/VideoStream'
export default {
  name: 'HomePage',

  components: {
    AppLoadingScreen,
    Leftbar,
    Rightbar,
    Topbar,
    Events,
    VideoStream
  },

  mounted () {
    setTimeout(() => {
      this.pageLoaded = true
    }, 3000)
  },

  data () {
    return {
      pageLoaded: false
    }
  }
}
</script>

<style scoped>
.sv-main {
  position: relative;
  background: #111;
  /* margin: 1em; */
}
div.main {
  float: left;
  width: -webkit-fill-available;
  height: 100vh;
  margin-left: 300px;
}

div.main > div {
  height: 100vh;
  clear: both;
  margin-right: 300px;
}
</style>
