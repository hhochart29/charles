<template>
  <div class="ui relaxed divided list">
    <div class="item" v-for="(todo, index) in todos" :key="index" @click="completeTodo(index)">
      <i class="large middle aligned icon" :class="[todo.completed ? 'paper plane outline' : 'paper plane']"></i>
      <div class="content">
        <a class="header">{{ todo.name }}</a>
        <a class="header">{{ index}}</a>
        <div class="description">Updated 10 mins ago</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  computed: {
    ...mapGetters([
      'todos'
    ]),
    // ...mapActions([
    //   'completeTodo'
    // ])
    ...mapActions({
      completeTodoStore: 'completeTodo'
    })
  },
  methods: {
    completeTodo (index) {
      this.completeTodoStore(index)
    }
  }
}
</script>
