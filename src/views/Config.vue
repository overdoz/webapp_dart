<template>
  <div class="config">
    <section>
      <h1>Dart Zähler</h1>
    </section>
    <section>
      <AddPlayer v-for="(value, key) in player" :key="key" v-model="value['name']" />
      <AddButton @press="addPlayer" />
    </section>
    
    <div class="start">Start</div>
  </div>
</template>

<script>
import AddPlayer from '@/components/AddPlayer.vue'
import AddButton from '@/components/AddButton.vue'

export default {

  name: 'config',
  components: {
    AddPlayer,
    AddButton
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
      this.player.push({name: 'Spieler'});
      console.log(this.player)
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 0;
}

section {
  width: 100vw;
  height: 10vh;;
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

