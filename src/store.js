import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    doubleOut: false,
    score: 301,
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
    },
    initialize (state, configs) {
      state.doubleOut = configs.doubleOut;
      state.score = configs.score;
    },

  },
  getters: {
    getPlayers: state => {
      return state.players;
    }
  }
})
