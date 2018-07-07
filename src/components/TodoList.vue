<template>
  <div class="ui relaxed divided list">
    <div class="item" v-for="(todo, i) in todos" :key="i" @click="completeTodo(i)" :class="{completed: todo.completed}">
      <i class="large middle aligned icon" :class="[todo.completed ? 'paper plane outline' : 'paper plane']"></i>
      <div class="content">
        <a class="header">{{ todo.name }}</a>
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
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions({
      completeTodoStore: 'completeTodo'
    }),
    completeTodo (i) {
      this.completeTodoStore(i)
    }
  }
}
</script>

<style scoped lang="scss">
.item.completed {
  text-decoration: line-through;
  .header, .description {
    opacity: .5
  }
}
</style>
