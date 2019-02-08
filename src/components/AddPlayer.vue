<template>
  <div class="addPlayer">
      <input v-if="edit" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" type="text" placeholder="Name"/>
      <span>&times;</span>
  </div>
</template>

<script>
export default {
  name: 'addPlayer',
  components: {
    
  },
  data: function () {
    return {
        edit: true,
        content: 'Spieler'
    }
  },
  methods: {
  
  },
  props: {
      value: String,
    }
}
</script>

<style scoped>
input {
    background-color: #DDD;
    border: none;
    font-size: 20px;
}
span {
    font-size: 25px;
}
input:focus {
    background-color: #DDD;
    border: none;
}
.addPlayer {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2vh;
    padding: 0.9em;
    font-size: 10px;
    background-color: #DDD;
    border-radius: 2em;
    margin: 10px;
}
</style>
