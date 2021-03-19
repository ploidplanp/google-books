<template>
  <div class="container mt-5">
    
    <!-- toggle filter === false (default) -->
    <div v-if="isToggleFilter === false">
      <fav-button />
        <div class="input-group mt-5">
          <input v-model="inputtext" type="text" class="form-control">
          <span class="input-group-text">🔍</span>
        </div>
        <button @click="toggleFilter" class="btn btn-light mt-3">Filter</button>

        <div class="my-btn-group mt-3">
          <select v-model="orderby"  class="form-select-sm" aria-label=".form-select-sm example">
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
          <button @click="viewGrid" class="btn btn-light">Grid</button>
          <button @click="viewList" class="btn btn-light">List</button>
        </div>
        <h3 class="invisible">{{ viewby }}</h3>
        <h3 class="invisible">{{ orderby }}</h3>
        <!-- show book list from search and filter -->
        <book-list :search="inputtext" :filterFilterType="filtertype" :filterPrintType="printtype" :orderBy="orderby" :viewBy="viewby" />
    </div>

    <!-- toggle filter === true -->
    <div v-if="isToggleFilter">
      <div class="row">
        <div class="col-lg-3 col-md-5 col-sm-12">
          <my-form @filtertype="applyFilterType" @printtype="applyPrintType"/>
        </div>
        <div class="col-lg-9 col-md-7 col-sm-12">
          <fav-button />
          <div class="input-group mt-5">
            <input v-model="inputtext" type="text" class="form-control">
            <span class="input-group-text">🔍</span>
          </div>
          <button @click="toggleFilter" class="btn btn-light mt-3">Filter</button>

          <div class="my-btn-group mt-3">
            <select v-model="orderby"  class="form-select-sm" aria-label=".form-select-sm example">
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
            <button @click="viewGrid" class="btn btn-light">Grid</button>
            <button @click="viewList" class="btn btn-light">List</button>
          </div>
          <h3 class="invisible">{{ viewby }}</h3>
          <h3 class="invisible">{{ orderby }}</h3>
          <!-- show book list from search and filter -->
          <book-list :search="inputtext" :filterFilterType="filtertype" :filterPrintType="printtype" :orderBy="orderby" :viewBy="viewby" />
        </div>
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
      inputtext: '',
      filtertype: '',
      printtype: '',
      orderby: 'relevance',
      viewby: 'grid',
      isToggleFilter: false
    }
  },
  methods: {
    applyFilterType(value) {
      this.filtertype = value
    },
    applyPrintType(value) {
      this.printtype = value
    },
    viewGrid() {
      this.viewby = 'grid'
    },
    viewList() {
      this.viewby = 'list'
    },
    toggleFilter() {
      this.isToggleFilter = !this.isToggleFilter
    }
  }
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
