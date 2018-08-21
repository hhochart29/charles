export default class Particle {
  constructor (ctx, id, x, y, w) {
    this.ctx = ctx
    this.id = id
    this.w = w
    this.x = x
    this.y = y
  }

  draw () {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.w, 0, 2 * Math.PI, false)
    this.ctx.fillStyle = 'white'
    this.ctx.fill()
    this.ctx.closePath()
    // this.ctx.stroke() // makes a black border
  }
}
