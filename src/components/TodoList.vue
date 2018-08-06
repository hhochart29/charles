<template>
  <transition mode="out-in" name="fade">
    <transition-group class="ui relaxed divided list" tag="div" @enter="todoEnter" @leave="todoLeave" name="todo" v-if="todosCount">
      <div class="item" v-for="(todo, i) in todos" :key="i" @click="completeTodo(i)" :class="{completed: todo.completed}">
        <transition name="fade" mode="out-in">
          <i class="large middle aligned icon" :class="[todo.completed ? 'paper plane outline' : 'paper plane']"></i>
        </transition>
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
    todoEnter (el, done) {
      // es-lint-disable-next-line
      TweenLite.from(el, 1, {y: -10, autoAlpha: 0})
      done()
    },
    todoLeave (el, done) {
      TweenLite.to(el, 1, {y: -10, autoAlpha: 0})
      setTimeout(() => {
        done()
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
  .item {
    .header {
      position: relative;
      transition: 1s opacity ease-in-out;
      &::before {
        content: '';
        opacity: .4;
        height: 10px;
        background-color: red;
        position: absolute;
        left: -1%;
        top: 100%;
        width: 100%;
        transform: rotateZ(-5deg) scaleX(0);
        transition: all 1s ease-in-out;
      }
    }
    &.completed {
      .header, .description {
        opacity: 0.5;
      }
      .header {
        &::before {
          transform: rotateZ(-5deg) scaleX(1);
        }
      }
    }
  }
</style>
