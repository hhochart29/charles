<template>
  <div class="ui menu">
      <router-link :to="{name: 'Home'}" class="item header active">Charles</router-link>
      <router-link :to="{name: 'TodoListStore'}" class="item">Todolist - Store</router-link>
      <router-link :to="{name: 'Home'}" class="item">Animation</router-link>
    </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>
