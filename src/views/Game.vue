<template>
  <div class="game">
    <div class="header">
      <div class="user" v-for="(user, key) in player" :key="key">
        <p>{{user.name}}</p>
        <p class="score">{{user.score}}</p>
        <p>{{Math.round(user.average * 10) / 10}}</p>
      </div>
    </div>
    <div class="currentPlayer">
      <p>{{currentPlayer}}</p>
      <div v-for="(shot, key) in shots" :key="key">{{shot}}</div>
    </div>
    <div
      v-bind:class="{ active: doubleHit, button: !doubleHit }"
      class="doubleButton"
      @click="doubleHit = !doubleHit; tripleHit = false"
    >Double</div>
    <div
      v-bind:class="{ active: tripleHit, button: !tripleHit }"
      class="tripleButton"
      @click="tripleHit = !tripleHit; doubleHit = false"
    >Triple</div>
    <div class="button no1" @click="shoot(1)">1</div>
    <div class="button no2" @click="shoot(2)">2</div>
    <div class="button no3" @click="shoot(3)">3</div>
    <div class="button no4" @click="shoot(4)">4</div>
    <div class="button no5" @click="shoot(5)">5</div>
    <div class="button no6" @click="shoot(6)">6</div>
    <div class="button no7" @click="shoot(7)">7</div>
    <div class="button no8" @click="shoot(8)">8</div>
    <div class="button no9" @click="shoot(9)">9</div>
    <div class="button no10" @click="shoot(10)">10</div>
    <div class="button no11" @click="shoot(11)">11</div>
    <div class="button no12" @click="shoot(12)">12</div>
    <div class="button no13" @click="shoot(13)">13</div>
    <div class="button no14" @click="shoot(14)">14</div>
    <div class="button no15" @click="shoot(15)">15</div>
    <div class="button no16" @click="shoot(16)">16</div>
    <div class="button no17" @click="shoot(17)">17</div>
    <div class="button no18" @click="shoot(18)">18</div>
    <div class="button no19" @click="shoot(19)">19</div>
    <div class="button no20" @click="shoot(20)">20</div>
    <div class="button daneben" @click="shoot(0)">daneben</div>
    <div
      v-bind:class="{ disable: tripleHit }"
      class="button bull"
      @click="shoot(25)"
    >{{doubleHit ? 'bullseye' : 'bull'}}</div>
    <div @click="returnHome()" class="beenden">beenden</div>
    <div class="undo" @click="undo">oops!</div>
  </div>
</template>

<script>
export default {
  name: "game",
  components: {},
  beforeMount() {
      this.player = this.playerList;
        this.initializeGame();
    // TODO: Link player mit dem VUEX Store
  },
  created() {
      this.score = this.$store.state.score;
      this.doubleOut = this.$store.state.doubleOut;
      
    
  },
  data: function() {
    return {
        // stateobjekt erstellen und alles mit gettern connecten
      state: {
          doubleHit: false,
          triplehit: false,
          disableButtons: false,
          doubleOut: false,
          currentIndex: 0,
          player: {
              
          }

      },
      shotsState: {

      },

      doubleHit: false,
      tripleHit: false,

      disableButtons: false,

      doubleOut: false,
      currentPlayer: "",
      currentIndex: 0,
      shots: [],
      player: [
        // {
        //   name: "Thanh",
        //   score: 501,
        //   average: 0,
        //   points: 0,
        //   round: 0
        // },
        // {
        //   name: "Flo",
        //   score: 501,
        //   average: 0,
        //   points: 0,
        //   round: 0
        // },
        // {
        //   name: "Sophie",
        //   score: 501,
        //   average: 0,
        //   points: 0,
        //   round: 0
        // },
        // {
        //   name: "Paul",
        //   score: 501,
        //   average: 0,
        //   points: 0,
        //   round: 0
        // }
      ]
    };
  },
  computed: {
    playerList: function () {
      return this.$store.state.players;
    },
    lastState: function () {
        return this.gamestate.pop();
    }


  },
  methods: {
    returnHome: function() {
      this.$store.commit("clearList");
      this.$router.push("/");
      // TODO: show MOdal
    },
    initializeGame: function() {
      this.currentPlayer = this.player[this.currentIndex].name;
    },
    safeState: function() {
        const tempstate = {
          score: this.score,
          doubleHit: this.doubleHit,
          tripleHit: this.tripleHit,
          disableButtons: this.disableButtons,
          doubleOut: this.doubleOut,
          currentPlayer: this.currentPlayer,
          currentIndex: this.currentIndex,
          player: this.player,
        }
        this.gamestate.push(tempstate);
        this.shotsState.push(this.shots);
                console.log(this.gamestate);

      
    },
    undo: function() {
        console.log(this.gamestate);
        const tempstate = this.lastState;

    
        this.score = tempstate.score;
        this.doubleHit = tempstate.doubleHit;
        this.tripleHit = tempstate.tripleHit;
        this.disableButtons = tempstate.disableButtons;
        this.doubleOut = tempstate.doubleOut;
        this.currentPlayer = tempstate.currentPlayer;
        this.currentIndex = tempstate.currentIndex;
        this.shots = this.shotsState.pop();
        this.player = tempstate.player;

    },
    shoot: function(value) {
      if (this.disableButtons == true) {
        return;
      }
      let tempValue = value;
      let playerScore = this.player[this.currentIndex].score;
      let tempScore = (playerScore -= this.shots.reduce(this.add, 0));
      if (this.doubleHit == true) {
        tempValue = value * 2;
      } else if (this.tripleHit == true && tempValue != 25) {
        tempValue = value * 3;
      }
      // Wenn der Wurf <,>,= der aktuellen Punktzahl (- bereits geworfener Würfe)
      switch (true) {
        case tempValue < tempScore:
          // Zieh den Wurf vom Punktestand ab
          this.player[this.currentIndex].score -= tempValue;
          this.player[this.currentIndex].points += tempValue;
          break;

        case tempValue > tempScore:
          // Wenn der Wurf höher als die Restpunktzahl ist, wechsle zum nächsten Spieler
          this.shots = [];
          this.nextPlayer();
          break;

        case tempValue == tempScore:
        // TODO
        // doubleHit muss true bleiben, um doubleOut zu ermöglichen
      }

      if (this.shots.length <= 3 && this.disableButtons == false) {
        this.shots.push(tempValue);
        console.log(this.shots);
      }

      if (this.shots.length == 3) {
        // füge die Punkte zum Spieler hinzu, berechne den Durchschitt und leere wieder alles
        this.disableButtons = true;
        setTimeout(() => {
          this.shots = [];
          this.player[this.currentIndex].round++;
          this.player[this.currentIndex].average =
            this.player[this.currentIndex].points /
            this.player[this.currentIndex].round;
          this.nextPlayer();
          this.disableButtons = false;
        }, 2000);
      }
      this.doubleHit = false;
      this.tripleHit = false;

      this.safeState();
    },
    nextPlayer: function() {
      // wenn der letzte dran ist, index wieder auf 0 setzen
      if (
        this.currentIndex < this.player.length &&
        this.currentIndex != this.player.length - 1
      ) {
        this.currentIndex++;
        // der nächste Spieler ist dran
        this.currentPlayer = this.player[this.currentIndex].name;
      } else {
        // Wenn der letzte dran ist, setzte den Index wieder auf 0
        this.currentIndex = 0;
        this.currentPlayer = this.player[0].name;
      }
    },
    isGameOver: function() {
      this.player.forEach(child => {
        if (child.score == 0) {
          console.log("Game Over");
        }
      });
    },
    add: function(a, b) {
      return a + b;
    }
  }
};
</script>

<style scoped>
.game {
  display: grid;
  grid-template-rows: 20fr 15fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr;
  grid-template-columns: 25% 25% 25% 25%;
  height: 100vh;
  color: #0285a8;
  font-weight: 700;
  background-color: #e1f7e6;
}

.user {
  text-align: center;
  width: 25vw;
}

.disable {
  display: none;
  z-index: -6;
}

.active {
  background-color: #a9e8dc;
  border-radius: 20px;
  margin: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.score {
  font-weight: 1000;
  font-size: 120;
  letter-spacing: 3px;
  color: #02547d;
}

.header {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #e1f7e6;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.currentPlayer {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #02547d;
  box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.button {
  background-color: #e1f7e6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.doubleButton {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  color: #02547d;
}
.tripleButton {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  color: #02547d;
}

.daneben {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 9;
  grid-row-end: 10;
  color: #02547d;
}
.bull {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 9;
  grid-row-end: 10;
  color: #02547d;
}
.beenden {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 10;
  grid-row-end: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  border-radius: 20px;
  margin: 5px 10px;
  box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.undo {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 10;
  grid-row-end: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  margin: 5px 20px;
  color: #0285a8;
  box-shadow: 7px 7px 13px rgba(0, 0, 0, 0.1);
}
</style>


