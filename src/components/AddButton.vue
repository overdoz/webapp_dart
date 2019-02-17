<template>
  <div class="addButton" @click="$emit('press')">
      <span>+ hinzufügen</span>
  </div>
</template>

<script>
export default {
  name: 'addButton',
  data: function () {
    return {
      
    }
  },
  methods: {
  
  }
}
</script>

<style scoped>
.addButton {
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.6vh;
    padding: 0.9em;
    background-color: #DDD;
    border-radius: 2em;
    font-size: 20px;
    margin: 10px;
    box-shadow: 5px 5px 5px #aaaaaa;
    cursor: pointer;
}
</style>