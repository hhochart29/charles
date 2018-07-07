<template>
  <div>
    <div class="ui menu">
      <a href="#" class="item header">Charles</a>
      <a href="#" class="item">Game</a>
      <a href="#" class="item active">Store example</a>
      <a href="#" class="item">Animation</a>
    </div>
    <div class="ui container two column grid">
      <TodoList class="column" />
      <TodoCounter class="column" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList'
import TodoCounter from '@/components/TodoCounter'

export default {
  name: 'home',
  components: {
    TodoList,
    TodoCounter
  }
}
</script>
