<template>
  <div class="welcome">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'welcome',
  components: {
    
  },
  created() {
    setTimeout(() => {
      this.$router.push('/config');
    }, 5000)
  },
  methods: {
    goToNextPage: function () {
      this.$router.push('/config');
    }
  }
}
</script>

<style>

</style>
