import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueResource from "vue-resource"
import VueRouter from "vue-router"

import Routes from "./routes.js"

Vue.use(BootstrapVue)

Vue.use(VueResource);

Vue.use(VueRouter);

const router = new VueRouter({

  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
