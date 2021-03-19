<template>
  <div>
    <button class="btn btn-outline-secondary" @click="goPrevious">❮ Back</button>
    <br>
  </div>
</template>

<script>

export default {
  name: 'BackButton',
  methods: {
    goPrevious() {
      // go to previous page
      this.$router.go(-1)
    }
  }
};
</script>
.mybtn{
  float: left;
}
<style scope>
</style>
