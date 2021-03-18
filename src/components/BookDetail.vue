<template>
  <div class="container">
    <div v-if="data.length" class="row mt-5" >
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
          <button type="button" class="btn" id="btn-add">♥ Add to Favorite</button>
          <a :href="data.volumeInfo.previewLink" class="btn" id="btn-preview" target="_blank">Preview</a>
        </div>
    </div>
    <div v-else class="jumbotron mt-5 text-center">
      <p>the book which id {{ id }} does not exist</p>
    </div>
  </div>
</template>

<script>
import { fetchDetail } from '../api/index'

export default {
  name: 'Information',
  props: {
    book_id: String
  },
  data () {
      return {
        data: {},
        id: this.$props.book_id,
        urlTest: 'https://books.google.co.th/books?id=6mR_zQEACAAJ&dq=flowers&hl=th&cd=1&source=gbs_api',
      }
  },
  created () {
    fetchDetail(this.$props.book_id).then((res) => {
      this.data = res.data
      console.log(this.data)
    }).catch(error => console.log(error))
  }
};
</script>

<style scope>
img {
    width: 50%;
}

.jubbotron {
  background-color: tomato;
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
