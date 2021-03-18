<template>
  <div class="container mt-5">
    <fav-button />
    <div class="input-group mt-5">
      <input v-model="inputtext" type="text" class="form-control">
      <span class="input-group-text">🔍</span>
    </div>
    <book-list :search="inputtext" />
  </div>
</template>

<script>
import FavButton from '../components/FavButton'
import BookList from '../components/BookList'

export default {
  name: 'Home',
  components: {
    FavButton,
    BookList
  },
  data () {
    return {
      inputtext: ''
    }
  },
};
</script>

<style scope>
</style>
