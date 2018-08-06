<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
export default {
  name: 'CanvasComponent',
  methods: {
    resizeCanvas () {
      /* Used to store the width or height of the canvas */
      let dimension
      /* Reset the size */
      this.$refs.canvas.style.height = 'auto'
      this.$refs.canvas.style.width = '100%'
      if (this.$refs.canvas.clientWidth > (window.innerHeight - 150)) {
        dimension = window.innerHeight - 150
      } else {
        dimension = this.$refs.canvas.clientWidth
      }
      this.$refs.canvas.style.height = `${dimension}px`
      this.$refs.canvas.style.width = `${dimension}px`
    }
  },
  mounted () {
    this.resizeCanvas()
    window.addEventListener('resize', this.resizeCanvas)
  },
  destroyed () {
    // Don't forget to remove eventListener
    window.removeEventListener('scroll', this.resizeCanvas)
  }
}
</script>

<style scoped lang="scss">
  canvas {
    background-color: black;
    width: 100%;
  }
</style>
