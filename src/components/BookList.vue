<template>
  <div>
    <h1 class="invisible">{{search}}</h1>
    <!-- <p class="invisible">{{ this.$props.filterFilterType }} {{ this.$props.filterPrintType }}</p> -->
    
    <!-- view as grid -->
    <div v-if="data.length && this.$props.viewBy == 'grid'" class="row mt-5" >
        <div v-for="(book, key, index) in data" :key="index" class="col-lg-3 mt-3">
          <div class="card">
            <img class="card-img-top" :src="book.volumeInfo.imageLinks.smallThumbnail" :alt="book.volumeInfo.language">
            <div class="card-body">
              <h5 class="card-title my-book-title" @click="goToBookInfoID(book.id)">{{book.volumeInfo.title}}</h5>
              <p class="card-text">{{book.volumeInfo.subtitle}}</p>
              </div>
            </div>
        </div>
    </div>

    <!-- view as list -->
    <!-- <div v-if="data.length && this.props.viewBy == 'list'">
      <div v-for="(book, key, index) in data" :key="index">
        <div class="row card">
          <div class="col-lg-5 col-md-4 col-sm-3">
            <img class="card-img-top" :src="book.volumeInfo.imageLinks.smallThumbnail" :alt="book.volumeInfo.language">
          </div>
          <div class="col-lg-7 col-md-8 col-sm-9">
            <h5 class="card-title my-book-title" @click="goToBookInfoID(book.id)">{{book.volumeInfo.title}}</h5>
              <p class="card-text">{{book.volumeInfo.subtitle}}</p>
          </div>
        </div>
      </div>
    </div> -->
</div>
</template>

<script>
import { fetchSearch, fetchFilter } from '../api'

export default {
  name: 'BookItem',
  props: {
      search: String,
      filterFilterType: String,
      filterPrintType: String,
      orderBy: String,
      viewBy: String
  },
  data() {
      return {
          data: {},
      }
  },
  methods: {
    // go to path /book-info/:id to view book information
    goToBookInfoID(book_id) {
      this.$router.push(`/book-info/${book_id}`)
    }
  },
  updated() {
    if(this.$props.search != '' && (this.$props.filterFilterType == '' && this.$props.filterPrintType == '')) {
      fetchSearch(this.$props.search, this.$props.orderBy).then((res) => {
        this.data = res.data.items
      }).catch(error => console.log(error))
    }else {
      fetchFilter(this.$props.search, this.$props.filterFilterType, this.$props.filterPrintType, this.$props.orderBy).then((res) => {
        this.data = res.data.items
      }).catch(error => console.log(error))
    }
  }
};
</script>

<style scope>
.my-book-title:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
