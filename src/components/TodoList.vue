<template>
  <div class="ui relaxed divided list" v-if="todosCount">
    <div class="item" v-for="(todo, i) in todos" :key="i" @click="completeTodo(i)" :class="{completed: todo.completed}">
      <i class="large middle aligned icon" :class="[todo.completed ? 'paper plane outline' : 'paper plane']"></i>
      <div class="content">
        <a class="header">{{ todo.name }}</a>
        <div class="description">Updated 10 mins ago</div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="ui message">
      There is no task yet !
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  computed: {
    ...mapGetters(['todos', 'todosCount'])
  },
  methods: {
    ...mapActions(['completeTodo'])
  }
}
</script>

<style scoped lang="scss">
.item.completed {
  text-decoration: line-through;
  .header,
  .description {
    opacity: 0.5;
  }
}
</style>
