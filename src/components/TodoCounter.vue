<template>
  <div>
    <div>
      <form @submit.prevent="addTodo" class="ui fluid input">
        <input type="text" placeholder="Add a task" v-model="newtodo">
      </form>
    </div>

    <div class="ui vertical steps fluid">
      <div class="step">
        <i class="tasks icon"></i>
        <div class="content">
          <span class="title">{{ todosCount }}  </span>
          <span class="description"><i>Total tasks</i></span>
        </div>
      </div>

      <div class="step">
        <i class="bars icon"></i>
        <div class="content">
          <span class="title">{{ todosRemainingCount }}  </span>
          <span class="description"><i>Remaining tasks</i></span>
        </div>
      </div>

      <div class="step">
        <i class="check icon"></i>
        <div class="content">
          <span class="title">{{ todosCompletedCount }}  </span>
          <span class="description"><i>Completed tasks</i></span>
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
    ...mapGetters([
      'todosCount',
      'todosRemainingCount',
      'todosCompletedCount'
    ])
  },
  methods: {
    ...mapActions({
      addTodoToStore: 'addTodo'
    }),
    addTodo () {
      this.addTodoToStore(this.newtodo)
      this.newtodo = ''
    }
  }
}
</script>
