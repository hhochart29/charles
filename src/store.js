import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    todosBackup: [] // used for backing up before filter
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
      state.todosBackup = [] // don't forget to clear the backup
    },
    'COMPLETE_TODO' (state, i) {
      state.todos[i].completed = !state.todos[i].completed
    },
    'SHOW_REMAINING' (state, data) {
      state.todosBackup = state.todos
      state.todos = data
    },
    'SHOW_ALL' (state) {
      state.todos = state.todosBackup
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
    },
    showRemaining ({commit, getters}) {
      let data = getters.todosRemaining
      commit('SHOW_REMAINING', data)
    },
    showAll ({commit}) {
      commit('SHOW_ALL')
    }
  }
})
