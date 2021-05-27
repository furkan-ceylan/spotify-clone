import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import search from '../views/search.vue'
import collection from '../views/collection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'search',
    component: search,
  },
  {
    path: '/collection',
    name: 'collection',
    component: collection,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
