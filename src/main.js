import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'

import ProductCatalog from './components/ProductCatalog'
import ManageProducts from './components/ManageProducts'

import store from './vuex/store'

// import some global styles
import './styles/style.scss'

Vue.use(VueRouter)

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/manage-products', component: ManageProducts }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
