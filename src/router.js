import Vue from 'vue'
import Router from 'vue-router'
// This is basically how you make an async component loading
const Home = () => import('./views/Home.vue')
const TodoListStore = () => import('./views/TodoListStore.vue')
const Page404 = () => import('./views/Page404.vue')

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
    }, {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})
