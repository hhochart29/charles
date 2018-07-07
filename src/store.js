import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todos: []
  },
  getters: {
    todos: (state) => state.todos,
    todosCount: (state, getters) => getters.todos.length,
    todosRemaining: (state, getters) => getters.todos.filter(todo => todo.completed !== true),
    /*
    * To access other getters, use parameter 'getters'
    * */
    todosRemainingCount: (state, getters) => getters.todosRemaining.length,
    todosCompleted: (state, getters) => getters.todos.filter(todo => todo.completed === true),
    todosCompletedCount: (state, getters) => getters.todosCompleted.length
  },
  mutations: {
    'ADD_TODO' (state, name) {
      state.todos.push({
        name,
        completed: false
      })
    },
    'REMOVE_ALL_TODOS' (state) {
      state.todos = []
    },
    'COMPLETE_TODO' (state, i) {
      console.log(i)
      state.todos[i].completed = !state.todos[i].completed
    }
  },
  actions: {
    addTodo ({commit}, name) {
      commit('ADD_TODO', name)
    },
    removeAllTodos ({commit}) {
      commit('REMOVE_ALL_TODOS')
    },
    completeTodo ({commit}, i) {
      commit('COMPLETE_TODO', i)
    }
  }
})
