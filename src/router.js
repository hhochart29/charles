import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TodoListStore from './views/TodoListStore.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history', doesn't work with ghpage
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todoliststore',
      name: 'TodoListStore',
      component: TodoListStore
    }
  ]
})
