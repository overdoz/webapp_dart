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
  width: calc(100%-20px);
  height: calc(100%-20px);
  color: #0285A8;
  margin: 10px;
  font-weight: 500;
}
</style>
