<template>
  <div class="container mt-5">
    <span><back-button/><fav-button/></span>
    <book-detail :book_id="params" />
  </div>
</template>

<script>
import BackButton from '../components/Buttons/BackButton'
import FavButton from '../components/Buttons/FavButton'
import BookDetail from '../components/BookDetail'

export default {
  name: "BookInformation",
  components: {
    BackButton,
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
