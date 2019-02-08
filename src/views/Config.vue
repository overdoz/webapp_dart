<template>
  <div class="config">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'config',
  components: {
    
  },
  data: function () {
    return {
      score: 501,
      doubleOut: false,
      player: [],
    }
  },
  methods: {
    addPlayer: function (name, score) {
      this.player.push({
        name,
        score,
        average: 0,
      })
    }
  }
}
</script>
