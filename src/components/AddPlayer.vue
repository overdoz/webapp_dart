<template>
  <div class="addPlayer">
      <input 
        v-if="edit" 
        v-bind:value="value" 
        v-on:input="$emit('input', $event.target.value)" 
        type="text" 
        placeholder="Name"
        maxlength="20"
        />
      <span @click="$emit('close')">&times;</span>
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
    background-color: rgba(0,0,0,0);
    border: none;
    font-size: 20px;
    color: #0285A8;
    font-weight: 500;
}
span {
    font-size: 25px;
    cursor: pointer;
    font-weight: 700;
}
input:focus {
    background-color: rgba(0,0,0,0);;
    border: none;
}
.addPlayer {
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2vh;
    padding: 0.9em;
    font-size: 10px;
    background-color: rgba(0,0,0,0);
    border-radius: 2em;
    margin: 10px;
}
</style>
