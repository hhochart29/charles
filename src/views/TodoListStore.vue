<template>
  <div>
    <TodoFilters />
    <div class="ui divider"></div>
    <div class="ui two column grid">
      <TodoList class="column" />
      <TodoCounter class="column" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoFilters from '@/components/TodoFilters'
import TodoList from '@/components/TodoList'
import TodoCounter from '@/components/TodoCounter'

export default {
  name: 'TodoListStore',
  components: { TodoList, TodoCounter, TodoFilters }
}
</script>
