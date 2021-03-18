<template>
  <div>
    <h1>BookItem Props: {{search}}</h1>
    <div v-if="data.length" class="row mt-5" >
        <div v-for="(book, key, index) in data" :key="index" class="col-lg-3 mt-3">
          <div class="card">
            <img class="card-img-top" :src="book.volumeInfo.imageLinks.smallThumbnail" :alt="book.volumeInfo.language">
            <div class="card-body">
              <h5 class="card-title">{{book.volumeInfo.title}}</h5>
              <p class="card-text">{{book.volumeInfo.subtitle}}</p>
              </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { fetchSearch } from '../api/'

export default {
  name: 'BookItem',
  props: {
      search: String
  },
  data() {
      return {
          data: {},
      }
  },
  updated() {
      if(this.$props.search != '') {
        fetchSearch(this.$props.search).then((res) => {
          this.data = res.data.items
        }).catch(error => console.log(error))
      }
  }
};
</script>

<style scope>
</style>
