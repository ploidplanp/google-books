<template>
  <div class="container mt-5">
    <back-home-button/>
    <h2 class="mt-5">My Favorite</h2>
    <favorite-item />
  </div>
</template>

<script>
import BackHomeButton from '../components/BackHomeButton'
import FavoriteItem from '../components/FavoriteItem'

export default {
  components: {
    BackHomeButton,
    FavoriteItem,
  },
  name: "MyFavorite",
};
</script>

<style scope>
</style>
