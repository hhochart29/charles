<template>
  <div>
    <TodoList class="column" />
    <TodoCounter class="column" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList'
import TodoCounter from '@/components/TodoCounter'

export default {
  name: 'TodoListStore',
  components: {
    TodoList,
    TodoCounter
  }
}
</script>
