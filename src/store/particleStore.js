export default {
  state: {
    particles: []
  },
  getters: {
    particles: (state) => state.particles
  },
  mutations: {
    'ADD_PARTICLE' (state, particle) {
      state.particles.push(particle)
    }
  },
  actions: {
    addParticle ({ commit }, particle) {
      commit('ADD_PARTICLE', particle)
    }
  }
}
