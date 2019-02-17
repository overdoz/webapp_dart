<template>
  <div class="config">
    <section class="header">
      <h1>Dart Zähler</h1>
    </section>

    <section class="player">
      <AddPlayer v-for="(value, key) in player" :key="key" v-model="value['name']" />
      <AddButton class="addButton" @press="addPlayer()" />
    </section>
    <!-- 
    <section class="player">
      <AddPlayer v-for="(value, key) in player" :key="key" v-model="value['name']" />
      <AddButton @press="addPlayer()" />
    </section>
    <section class="button-section">
      <ToggleButton value="501" />
      <ToggleButton value="Double Out" />
    </section>
    
    <router-link to="/game"><div class="start">Start</div></router-link> -->
  </div>
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
      score: 501,
      doubleOut: false,
      player: [
        {name: 'Thanh'},
        {name: 'Sophie'},
      ],
    }
  },
  methods: {
    addPlayer: function () {
      console.log('clicked');
      if (this.player.length <= 4) {
        this.player.push({name: 'Spieler'});
      }
    },
    initializeGame: function () {

    }
  }
}
</script>

<style scoped>
h1 {
  margin: 0;
}

.addButton {
  margin-top: 30px;
}

.button-section {
  position: absolute;
  bottom: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  width: 100vw;
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
  background-color: #BBB;
  height: 100vh;
  display: grid;
  grid-template-rows: 10fr 40fr 10fr 7fr;
  grid-template-columns: 50% 50%;
  
}

.start {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 10vh;
  background-color: green;
  color: white;
}

</style>

