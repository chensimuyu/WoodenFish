import Vue from 'vue'
import Router from 'vue-router'
import blogIndex from '../views/blog/index.vue'
import Login from '../views/blockService/login.vue'
import ShowTable from '../views/showTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blog',
      component: blogIndex
    },
    {
      path: '/service/login.html',
      name: 'Login',
      component: Login
    },
    {
      path: '/showTable',
      name: 'ShowTable',
      component: ShowTable
    }
  ]
})
