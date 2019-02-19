import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    doubleOut: false,
    gameState: [

    ],
  },
  mutations: {
    addPlayer (state, infos) {
      state.players.push({
        name: infos.name,
        score: infos.score,
        average: 0,
        round: 0,
        points: 0,
      })
    },
    clearList (state) {
      state.players = [];
    },
    setDoubleOut (state, value) {
      state.doubleOut = value;
    }

  },
  actions: {

  }
})
