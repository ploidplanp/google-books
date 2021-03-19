<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-4 col-md-5 col-sm-12">
        <my-form/>
      </div>
      <div class="col-lgl-8 col-md-7 col-sm-12">
        <fav-button />
        <div class="input-group mt-5">
          <input v-model="inputtext" type="text" class="form-control">
          <span class="input-group-text">🔍</span>
        </div>
        <div class="my-btn-group mt-3">
          <button class="btn btn-light">Grid</button>
          <button class="btn btn-light">List</button>
        </div>
        <book-list :search="inputtext" />
      </div>
      </div>
    </div>
</template>

<script>
import FavButton from '../components/Buttons/FavButton'
import BookList from '../components/BookList'
import MyForm from '../components/Forms/MyForm'

export default {
  name: 'Home',
  components: {
    FavButton,
    BookList,
    MyForm
  },
  data () {
    return {
      inputtext: ''
    }
  },
};
</script>

<style scope>
.my-btn-group {
  float: right;
}

.btn-light {
  margin: 5px
}
</style>
