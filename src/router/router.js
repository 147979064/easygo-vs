import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../modules/home/Home.vue'
import Login from '../modules/login/Login.vue'

Vue.use(VueRouter)
const routes = [
    { path: '/login', component: Login },
    { path: '/home', component: Home,
      children:[
        { path: 'login', component: Login },
        { path: 'home', component: Home }
      ]
    },
    { path: '*', redirect: '/login' }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
