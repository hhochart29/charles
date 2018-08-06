<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
export default {
  name: 'CanvasComponent',
  methods: {
    resizeCanvas () {
      this.$refs.canvas.style.width = '100%'
      if ((document.documentElement.clientHeight - 20) < this.$refs.canvas.width) {
        this.$refs.canvas.width = document.documentElement.clientHeight - 200
        console.log(`canvas resized to : ${this.$refs.canvas.width}`)
      }
      this.$refs.canvas.height = this.$refs.canvas.width
      console.log(this.$refs.canvas.clientWidth, this.$refs.canvas.clientHeight)
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
    height: auto;
    width: 100%;
  }
</style>
