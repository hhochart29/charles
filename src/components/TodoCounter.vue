<template>
  <div>
    <div>
      <form @submit.prevent="addTodo" class="ui fluid input">
        <input type="text" placeholder="Add a task" v-model="newtodo">
      </form>
    </div>

    <div class="ui vertical steps fluid">
      <div class="step ui grid">
        <div class="two wide column">
          <i class="tasks icon"></i>
        </div>
        <div class="six wide column content">
          <span class="title">{{ todosCount }}  </span>
          <span class="description"><i>Total tasks</i></span>
        </div>
        <div class="eight wide column right">
          <button class="ui button" @click.prevent="showAll"><i class="bars icon"></i> Show all</button>
        </div>
      </div>

      <div class="step ui grid">
        <div class="two wide column">
          <i class="bars icon "></i>
        </div>
        <div class="six wide column content">
          <span class="title">{{ todosRemainingCount }} </span>
          <span class="description"><i>Remaining tasks</i></span>
        </div>
        <div class="eight wide column">
          <button class="ui button" @click.prevent="showRemaining"><i class="bars icon"></i> Filter remaining</button>
        </div>
      </div>

      <div class="step ui grid">
        <div class="two wide column">
          <i class="check icon"></i>
        </div>
        <div class=" six wide column content">
          <span class="title">{{ todosCompletedCount }}  </span>
          <span class="description"><i>Completed tasks</i></span>
        </div>
      </div>
      <div class="step">
        <div class="content">
          <button class="ui google plus button" @click.prevent="removeAllTodos"><i class="trash icon"></i> Delete All
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoCounter',
  data () {
    return {
      newtodo: ''
    }
  },
  computed: {
    ...mapGetters(['todosCount', 'todosRemaining', 'todosRemainingCount', 'todosCompletedCount'])
  },
  methods: {
    ...mapActions({
      addTodoToStore: 'addTodo',
      removeAllTodos: 'removeAllTodos',
      showRemaining: 'showRemaining',
      showAll: 'showAll'
    }),
    addTodo () {
      if (this.newtodo !== '') {
        this.addTodoToStore(this.newtodo)
        this.newtodo = ''
      }
    }
  }
}
</script>
