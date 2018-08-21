import Vue from 'vue'
import Vuex from 'vuex'
import todoStore from './store/todoStore'
import particleStore from './store/particleStore'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    todoStore,
    particleStore
  }
})
