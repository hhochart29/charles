<template>
  <div id="app">
    <Menu />
    <router-view class="ui container two column grid" />
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'App',
  components: { Menu }
}
</script>
