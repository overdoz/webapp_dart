<template>
  <div class="config">
    <section>
      <h1>Dart Zähler</h1>
    </section>
    <section>
      <AddPlayer v-for="(value, key) in player" :key="key" v-model="value['name']" />
      <AddButton @press="addPlayer" />
    </section>
    <section class="button-section">
      <ToggleButton value="501" />
      <ToggleButton value="Double Out" />
    </section>
    
    <div class="start">Start</div>
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
        {name: 'Paul'},
        {name: 'Sophie'},
      ],
    }
  },
  methods: {
    addPlayer: function () {
      if (this.player.length < 4) {
        this.player.push({name: 'Spieler'});
      }
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 0;
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
  height: 20vh;;
}

.config {
  background-color: #BBB;
  height: 100vh;
  
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

