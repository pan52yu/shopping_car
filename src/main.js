import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
axios.defaults.timeout = 5000
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
