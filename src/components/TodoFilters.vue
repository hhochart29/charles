<template>
  <div class="step ui icon buttons four">
    <button class="ui button" @click.prevent="markAll(!todos[0].completed)" :class="{'flex-shrinked': !todos[0]}">
      <i class="icon" :class="todos[0] && !todos[0].completed ? 'check' : 'eraser'"></i>
      {{ todos[0] && !todos[0].completed ? 'M' : 'Unm'}}ark all done
    </button>
    <button class="ui button" @click.prevent="showAll"><i class="bars icon"></i> Show all</button>
    <button class="ui button" @click.prevent="showRemaining"><i class="bars icon"></i> Filter remaining</button>
    <button class="ui google plus button" @click.prevent="removeAllTodos"><i class="trash icon"></i> Delete All</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoFilters',
  computed: {
    ...mapGetters([
      'todos',
      'todosCount',
      'todosAllCount',
      'todosRemaining',
      'todosRemainingCount',
      'todosCompletedCount'
    ]),
    allMarkedDone () {
      return this.todos[0] ? this.todos[0].completed : true
    }
  },
  methods: {
    ...mapActions({
      removeAllTodos: 'removeAllTodos',
      showRemaining: 'showRemaining',
      showAll: 'showAll',
      markAll: 'markAll'
    })
  }
}
</script>

<style lang="scss" scoped>
  .ui.buttons .button {
    transition: 1s all;
    height: 36px;
    overflow: hidden;
    &.flex-shrinked {
      padding-left: 0;
      padding-right: 0;
      flex-grow: 0;
      width: 1px;
      opacity: 0;
    }
  }
</style>
