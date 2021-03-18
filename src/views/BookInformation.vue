<template>
  <div class="container mt-5">
    <span><back-home-button/><fav-button/></span>
    <h5>{{ params }}</h5>
    <book-detail :book_id="params" />
  </div>
</template>

<script>
import BackHomeButton from '../components/BackHomeButton'
import FavButton from '../components/FavButton'
import BookDetail from '../components/BookDetail'

export default {
  name: "BookInformation",
  components: {
    BackHomeButton,
    FavButton,
    BookDetail
  },
  data () {
    return {
      params: this.$route.params.id
    }
  }
};
</script>

<style scope>
span {
    display: inline;
}
</style>
