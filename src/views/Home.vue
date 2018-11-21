<template>
  <div>
    <h1>Some canvas showcase</h1>
    <keep-alive>
      <CanvasComponent />
    </keep-alive>
  </div>
</template>

<script>
import CanvasComponent from '../components/CanvasComponent'

export default {
  name: 'Home',
  components: { CanvasComponent }
}
</script>
