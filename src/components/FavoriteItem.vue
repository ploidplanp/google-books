<template>
  <div>
    <div class="card col-lg-3 mt-3">
      <img class="card-img-top" :src="imgTest" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">A Panda Bear's Board Game</h5>
        <p class="card-text">Ailuropoda Melanoleuca</p>
        <button type="button" class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FavoriteItem',
  data () {
      return {
          imgTest: 'http://books.google.com/books/content?id=1-JFDXinJ_kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
      }
  }
};
</script>

<style scope>
</style>
