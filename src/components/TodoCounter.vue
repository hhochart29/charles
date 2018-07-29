<template>
<div>
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
        </div>

        <div class="step ui grid">
          <div class="two wide column">
            <i class="bars icon "></i>
          </div>
          <div class="six wide column content">
            <span class="title">{{ todosRemainingCount }} </span>
            <span class="description"><i>Remaining tasks</i></span>
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
      </div>
    </div>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoCounter',
  data() {
    return {
      newtodo: ''
    }
  },
  computed: {
    ...mapGetters([
      'todosCount',
      'todosAllCount',
      'todosRemaining',
      'todosRemainingCount',
      'todosCompletedCount'
    ])
  },
  methods: {
    ...mapActions({
      addTodoToStore: 'addTodo'
    }),
    addTodo() {
      if (this.newtodo !== '') {
        this.addTodoToStore(this.newtodo)
        this.newtodo = ''
      }
    }
  }
}
</script>
