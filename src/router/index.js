import Vue from 'vue'
import VueRouter from 'vue-router'
import ModuleRestart from '../views/ModuleRestart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ModuleRestart',
    component: ModuleRestart
  },
  {
    path: '/grep',
    name: 'GrepConnection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GrepConnection.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
