<template>
  <transition mode="out-in" name="fade">
    <transition-group class="ui relaxed divided list" tag="div" @enter="todoEnter" @leave="todoLeave" name="todo" v-if="todosCount">
      <div class="item" v-for="(todo, i) in todos" :key="i" @click="completeTodo(i)" :class="{completed: todo.completed}">
        <i class="large middle aligned icon" :class="[todo.completed ? 'paper plane outline' : 'paper plane']"></i>
        <div class="content">
          <a class="header">{{ todo.name }}</a>
          <div class="description">Updated 10 mins ago</div>
        </div>
      </div>
    </transition-group>
    <div v-else>
      <div class="ui message">
        There is no task yet !
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { TweenLite } from 'gsap'

export default {
  name: 'TodoList',
  computed: {
    ...mapGetters(['todos', 'todosCount'])
  },
  methods: {
    ...mapActions(['completeTodo']),
    todoEnter(el, done) {
      TweenLite.from(el, 1, { y: -10, autoAlpha: 0 })
      done()
    },
    todoLeave(el, done) {
      TweenLite.to(el, 1, { y: -10, autoAlpha: 0 })
      setTimeout(() => {
        done()
      }, 1000)
    }
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
