<template>
  <div>
    <button class="btn myfav" @click="goToFav">♥ My Favorite</button>
    <br>
  </div>
</template>

<script>

export default {
  name: 'FavButton',
  methods: {
    goToFav() {
      // go to /fav path (MyFavorite)
      this.$router.push('/fav')
    }
  }
};
</script>

<style scope>
.myfav{
  float: right;
  background-color: #75cfb8;
  color: white;
}
</style>
