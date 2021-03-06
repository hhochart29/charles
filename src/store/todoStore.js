export default {
  state: {
    todos: [],
    todosBackup: [], // used for backing up before filter
    filtered: false
  },
  getters: {
    todos: (state) => state.todos,
    todosCount: (state, getters) => state.todosBackup.length !== 0 ? state.todosBackup.length : getters.todos.length,
    todosRemaining: (state, getters) => getters.todos.filter(todo => todo.completed !== true),
    /*
    * To access other getters, use parameter 'getters'
    * */
    todosRemainingCount: (state, getters) => getters.todosRemaining.length,
    todosCompleted: (state, getters) => getters.todos.filter(todo => todo.completed === true),
    todosCompletedCount: (state, getters) => getters.todosCompleted.length
  },
  mutations: {
    ADD_TODO (state, name) {
      state.todos.push({
        name,
        completed: false
      })
    },
    REMOVE_ALL_TODOS (state) {
      state.todos = []
      state.todosBackup = [] // don't forget to clear the backup
    },
    COMPLETE_TODO (state, i) {
      state.todos[i].completed = !state.todos[i].completed
    },
    SHOW_REMAINING (state, data) {
      if (!state.filtered) { // if not filtered yet, save a backup
        state.todosBackup = state.todos
      }
      state.filtered = true // set the filter as active
      state.todos = data
    },
    SHOW_ALL (state) {
      state.filtered = false
      if (state.todosBackup.length !== 0) {
        state.todos = state.todosBackup
      }
      return state.todos
    },
    MARK_ALL_COMPLETED (state) {
      state.todos.forEach(todo => {
        todo.completed = true
      })
    },
    MARK_ALL_UNCOMPLETED (state) {
      state.todos.forEach(todo => {
        todo.completed = false
      })
    }
  },
  actions: {
    addTodo ({ commit }, name) {
      commit('ADD_TODO', name)
    },
    removeAllTodos ({ commit }) {
      commit('REMOVE_ALL_TODOS')
    },
    completeTodo ({ commit }, i) {
      commit('COMPLETE_TODO', i)
    },
    showRemaining ({ commit, getters }) {
      let data = getters.todosRemaining
      commit('SHOW_REMAINING', data)
    },
    showAll ({ commit }) {
      commit('SHOW_ALL')
    },
    markAll({ commit }, status) {
      /* status = true means we should mark all task as completed */
      status ? commit('MARK_ALL_COMPLETED') : commit('MARK_ALL_UNCOMPLETED')
    }
  }
}
