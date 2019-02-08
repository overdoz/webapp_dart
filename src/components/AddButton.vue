<template>
  <div class="addButton">
      <span @click="$emit('press')">+ hinzufügen</span>
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
    height: 2vh;
    padding: 0.9em;
    background-color: #DDD;
    border-radius: 2em;
    font-size: 20px;
    margin: 10px;
}
</style>