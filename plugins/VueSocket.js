import Vue from 'vue'
import IO from 'socket.io-client'
import VueSocketIO from 'vue-socket.io-extended'

const CLOUD_SOCKET_SERVER = 'wss://super-vision.herokuapp.com';
const LOCAL_SOCKET_SERVER = 'ws://localhost:8888';

const socket = IO(`${CLOUD_SOCKET_SERVER}/sv?token=thMywknoM3A0Gi5KGckgjpPueyj3ccfD`, {
    transports: [ 'websocket' ],
    timeout: 5000,
    // reconnectionAttempts: 'Infinity'
  })

export default ({ store }) => {
  Vue.use(
    VueSocketIO,
    socket,
    { store }
  )
  // Vue.use(new VueSocketIO({
  //   debug: true,
  //   connection: socket,
  //   vuex: {
  //       store,
  //       actionPrefix: 'SV',
  //       mutationPrefix: 'SV'
  //   }
  // }))
}
