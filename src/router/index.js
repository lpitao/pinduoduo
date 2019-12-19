import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Footer from '@/components/FooterList/footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/foot',
    name: 'foot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../components/FooterList/footer.vue')
    component: Footer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
