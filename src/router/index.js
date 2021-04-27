import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Result from '../views/Result.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: "default-layout"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path:'/results',
    name: 'Result',
    component: Result,
    meta: {
      layout: "results-page"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
