<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import Particle from './Particle'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CanvasComponent',
  data () {
    return {
      ctx: null,
      cDimension: null,
      particleNumber: 200,
      wMin: 5,
      wMax: 100,
      nbRetry: 500
    }
  },
  computed: {
    ...mapGetters(['particles'])
  },
  methods: {
    ...mapActions(['addParticle']),
    getRandomProperties () {
      let w = Math.floor(Math.random() * (this.wMax - this.wMin + 1) + this.wMin)
      let tmpX = Math.ceil(Math.random() * this.cDimension)
      let tmpY = Math.ceil(Math.random() * this.cDimension)
      // tweak x and y if they are out of canvas
      let x = tmpX - w < 0 ? w : tmpX + w > this.cDimension ? this.cDimension - w : tmpX
      let y = tmpY - w < 0 ? w : tmpY + w > this.cDimension ? this.cDimension - w : tmpY
      return {x, y, w}
    },
    resizeCanvas () {
      /* Used to store the width or height of the canvas */
      let dimension
      /* Reset the size */
      this.$refs.canvas.width = document.querySelector('.ui.container').clientWidth
      if (this.$refs.canvas.clientWidth > (window.innerHeight - 125)) {
        dimension = window.innerHeight - 125
      } else {
        dimension = this.$refs.canvas.clientWidth
      }
      this.$refs.canvas.height = dimension
      this.$refs.canvas.width = dimension
    },
    isCollision (p1) {
      if (this.particles.length === 0) {
        return false
      }
      return this.particles.some(p2 => {
        if (p1.id !== p2.id) { // Make sure we're not checking the particle with itself
          let distanceX = Math.abs(p1.x - p2.x)
          let distanceY = Math.abs(p1.y - p2.y)
          let particleWidth = p1.w + p2.w
          /* just maths stuff to check collision between 2 circles */
          return particleWidth > Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))
        }
      })
    },
    createParticle (id) {
      let {x, y, w} = this.getRandomProperties()
      let particle = new Particle(this.ctx, id, x, y, w)
      let nbCollision = 0
      while (this.isCollision(particle) && nbCollision < this.nbRetry) {
        /* if it's too big, juste lower the size, else just move it */
        let {x, y, w} = this.getRandomProperties()
        particle.x = x
        particle.y = y
        particle.w = w
        nbCollision++
        console.log(`collision for particle with id : ${id}`)
      }
      this.addParticle(particle)
    },
    createParticles () {
      for (let i = 0; i < this.particleNumber; i++) {
        this.createParticle(i)
      }
      this.particles.forEach(p1 => {
        p1.draw()
      })
    }
  },
  mounted () {
    this.resizeCanvas()
    window.addEventListener('resize', this.resizeCanvas)
    this.ctx = this.$refs.canvas.getContext('2d')
    this.cDimension = this.$refs.canvas.clientWidth
    this.createParticles()
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
    display: block;
    margin: auto;
  }
</style>
