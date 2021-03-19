<template>
  <div class="row mt-5">
    <div v-for="(fav, index) in $store.state.favorites" :key="index" class="card col-lg-3 col-md-4 mt-3">
      <div class="card-body">
        <img class="card-img-top" :src="fav.volumeInfo.imageLinks.smallThumbnail" alt="Card image cap">
        <h5 class="card-title my-fav-title" @click="goToBookInfoID(fav.id)">{{ fav.volumeInfo.title }}</h5>
        <p class="card-text">{{ fav.volumeInfo.subtitle}}</p>
        <button @click.prevent="removeFavorite(index)" class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FavoriteItem',
  methods: {
    ...mapActions([
      'removeFavorite'
    ]),
    goToBookInfoID(fav_id) {
      this.$router.push(`/book-info/${fav_id}`)
    },
  },
};
</script>

<style scope>
.my-fav-title:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
