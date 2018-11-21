export default {
  state: {
    particles: []
  },
  getters: {
    particles: (state) => state.particles
  },
  mutations: {
    ADD_PARTICLE(state, particle) {
      state.particles.push(particle)
    },
    DELETE_PARTICLES(state) {
      state.particles = []
    }
  },
  actions: {
    addParticle({ commit }, particle) {
      commit('ADD_PARTICLE', particle)
    },
    deleteParticles({ commit }) {
      commit('DELETE_PARTICLES')
    }
  }
}
