<template>
<transition name="fade">
  <div class="config">
    <section class="header">
      <h1>Dart Zähler</h1>
    </section>

    <section class="player">
      <AddPlayer 
        v-for="(value, key) in player" 
        :key="key" 
        v-model="value['name']" 
        @close="removePlayer(key)"/>
      <AddButton class="addButton" @press="addPlayer()" />
    </section>
  
    
    <section class="scoreButton button">
      <!-- TODO: Mach das ganze DIV clickable, nicht nur den Text -->
      <div  class="scoreButton" @click="addScore()"><p>{{score}}</p></div>
      <!-- <ToggleButton @click.native="addScore()" :value="score" /> -->
    </section>
    <section class="doubleButton button">
      <div @click="doubleOut = !doubleOut">
        <p>{{doubleOut ? 'Double Out' : 'Single Out'}}</p>
      </div>
    </section>
    
    <div @click="initializeGame()" class="start">START</div>
  </div>
   </transition>
</template>

<script>
import AddPlayer from '@/components/AddPlayer.vue'
import AddButton from '@/components/AddButton.vue'
import ToggleButton from '@/components/ToggleButton.vue'

export default {

  name: 'config',
  components: {
    AddPlayer,
    AddButton,
    ToggleButton
  },
  data: function () {
    return {
      score: 301,
      doubleOut: false,
      player: [
        {name: 'Thanh'},
        {name: 'Sophie'},
      ],
    }
  },
  methods: {
    addScore: function () {
      if (this.score < 901) {
        this.score += 100;
      } else {
        this.score = 301;
      }
    },
    addPlayer: function () {
      console.log('clicked');
      if (this.player.length < 4) {
        this.player.push({name: ''});
      }
    },
    initializeGame: function () {
      this.$store.commit('setDoubleOut', this.doubleOut);
      console.log('DoubleOut: ' + this.doubleOut);
      this.$store.commit('initialize', {doubleOut: this.doubleOut, score: this.score});
      this.player.forEach((child) => {
        this.$store.commit('addPlayer', {name: child.name, score: this.score});
        console.log(this.$store.state.players);
        console.log('Spieler: ' + child.name + '---- Score: ' + this.score);
      })
      this.$router.push('/game');

    },
    removePlayer: function (index) {
      this.player.splice(index, 1);
    }

  }
}
</script>

<style scoped>
h1 {
  margin: 0;
  color: #02547D;
  font-weight: 1000;
  letter-spacing: 2px;
}

.addButton {
  margin-top: 30px;
}

.button {
  font-size: 110%;
  letter-spacing: 2px;
  display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 20px;
    cursor: pointer;
    box-shadow: 7px 7px 13px rgba(0,0,0,0.1);
}

/* section {
  width: 100vw;
} */
.scoreButton {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    

}
.doubleButton {
  grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;

}

.header {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.player {
  grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}

.config {
  background-color: #E1F7E6;
  height: 100vh;
  display: grid;
  grid-template-rows: 10fr 40fr 10fr 7fr;
  grid-template-columns: 50% 50%;
  color: #0285A8;
  
}

.start {
  grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 130%;
  letter-spacing: 5px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

