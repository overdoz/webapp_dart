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
    width: 35vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.6vh;
    padding: 0.9em;
    background-color: white;
    color: #0285A8;
    border-radius: 2em;
    font-size: 15px;
    margin: 10px;
    box-shadow: 7px 7px 13px rgba(0,0,0,0.1);
    cursor: pointer;
    font-weight: 600;
}
</style>