<template>
  <div>
    <button class="btn btn-outline-secondary" @click="goToHome">❮ Back</button>
    <br>
  </div>
</template>

<script>

export default {
  name: 'BackHomeButton',
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
};
</script>
.mybtn{
  float: left;
}
<style scope>
</style>
