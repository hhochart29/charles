<template>
  <div id="app">
    <Menu />
    <transition mode="out-in" appear @enter="routerEnter" @leave="routerLeave">
      <router-view class="ui container" />
    </transition>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import TweenLite from 'gsap'

export default {
  name: 'App',
  components: { Menu },
  methods: {
    routerEnter(el, done) {
      // eslint-disable-next-line
      TweenLite.from(el, 0.5, { autoAlpha: 0, ease: Circ.easeInOut })
      done()
    },
    routerLeave(el, done) {
      // eslint-disable-next-line
      TweenLite.to(el, 0.5, { autoAlpha: 0, ease: Circ.easeInOut })
      setTimeout(() => {
        done()
      }, 500)
    }
  }
}
</script>

<style lang="scss">
/* Make an absolute position for the 'in-out' mode to work properly */
.ui.container.two.column.grid {
  position: absolute !important;
  overflow: hidden;
  top: 80px;
  left: 0;
  right: 0;
  margin-top: 0 !important; // reset semantic ui style
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s all ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
