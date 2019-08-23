import Vue from 'vue'
import Axios from 'axios'

const CLOUD_SERVER = 'https://super-vision.herokuapp.com';
const LOCAL_SERVER = 'http://dare:8888';

// Axios Setup
var axiosInstance = Axios.create({
  baseURL: `${CLOUD_SERVER}/api/`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer rge2ulWJgH4ghCb1ZITkv9mwjtb381wz'
  }
});
Vue.prototype.$http = axiosInstance
