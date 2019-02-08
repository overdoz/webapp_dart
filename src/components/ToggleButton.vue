<template>
  <div class="toggleButton" @click="$emit('toggle')">
    <span>{{value}}</span>
  </div>
</template>

<script>
export default {
  name: 'toggleButton',
  components: {
    
  },
  data: function () {
    return {
   
    }
  },
  props: {
      value: String,
  }
}
</script>

<style scoped>
.toggleButton {
  width: 40%;
  background-color: white;
  margin: 10px;
}
</style>
