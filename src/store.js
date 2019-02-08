import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      {
        name: "Thanh",
        score: 501,
        average: 30.2,
      }
    ],
    score: 0,
    singleOut: true,
  },
  mutations: {
    addPlayer (state, name, score) {
      state.players.push({
        name,
        score,
        average: 0,
      })
    }

  },
  actions: {

  }
})
