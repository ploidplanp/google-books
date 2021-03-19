<template>
  <div class="container">
    <div class="row mt-5" >
        <div class="col-lg-3 col-md-5 col-sm-12 text-center">
          <img :src="data.volumeInfo.imageLinks.smallThumbnail" alt="">
        </div>
        <div class="col-lg-9 col-md-7 col-sm-12">
          <h5 class="card-title font-weight-bold mt-3">{{ data.volumeInfo.title }}</h5>
          <p class="card-text text-muted">{{ data.volumeInfo.subtitle }}</p>
          <p class="card-text">Authors</p>
          <ul>
            <li v-for="(author, index) in data.volumeInfo.authors" :key="index">{{ author }}</li>
          </ul>
          <p class="card-text text-muted"><i>Description:</i><br>{{ data.volumeInfo.description }}</p>
          <p class="card-text text-muted">Published Date: {{ data.volumeInfo.publishedDate }}</p>
          

          <button type="button" class="btn" id="btn-language">{{ data.volumeInfo.language }}</button>
          <button type="button" class="btn" id="btn-page">{{ data.volumeInfo.pageCount}} pages</button>
          <button @click="addFavorite(data)" class="btn" id="btn-add">♥ Add to Favorite</button>
          <a :href="data.volumeInfo.previewLink" class="btn" id="btn-preview" target="_blank">Preview</a>
        </div>
    </div>
  </div>
</template>

<script>
import { fetchDetail } from '../api/index'
import { mapActions } from 'vuex'

export default {
  name: 'Information',
  props: {
    book_id: String
  },
  data () {
      return {
        data: {},
        id: this.$props.book_id,
        favorites: this.$store.state.favorites
      }
  },
  methods: {
    ...mapActions([
      'addFavorite'
    ]),
  },
  created () {
    // fetch book detail ; called fetchDetail from api
    fetchDetail(this.$props.book_id).then((res) => {
      this.data = res.data
      console.log('fetch detail: ', this.data)
    }).catch(error => console.log(error))
  },
  watch: {
    favorites() {
      console.log('test log favorite:', this.$store.state.favorites)
    }
  }
};
</script>

<style scope>
img {
    width: 50%;
}

#btn-language, #btn-page, #btn-add, #btn-preview {
  color: white;
    margin: 10px;
}

#btn-language {
  background-color: #726a95;
}

#btn-page {
  background-color: #78c4d4;
}

#btn-add {
  background-color: #75cfb8;
}

#btn-preview {
  background-color: #28527a;
}
</style>
