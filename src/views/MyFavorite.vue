<template>
  <div class="container mt-5">
    <back-button/>
    <h2 class="mt-5">My Favorite</h2>
    <favorite-item  />
  </div>
</template>

<script>
import BackButton from '../components/Buttons/BackButton'
import FavoriteItem from '../components/FavoriteItem'

export default {
  components: {
    BackButton,
    FavoriteItem
  },
  name: "MyFavorite",
};
</script>

<style scope>
</style>
