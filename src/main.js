import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueResource form "vue-resource"
Vue.use(BootstrapVue)

Vue.use(VueResorce);



new Vue({
  el: '#app',
  render: h => h(App)
})
