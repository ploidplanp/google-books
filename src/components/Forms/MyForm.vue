<template>
  <div class="container">
      <div class="mt-3 mb-3">
        <!-- filter radio group -->
        <h4>Filter {{filtertype}}</h4>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="Partial" name="filter">
          <label class="form-check-label">Partial</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="Full" name="filter">
          <label class="form-check-label">Full</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="Free_eBooks" name="filter">
          <label class="form-check-label">Free eBooks</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="Paid_eBooks" name="filter">
          <label class="form-check-label">Paid eBooks</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="eBooks" name="filter">
          <label class="form-check-label">eBooks</label>
        </div>
      </div>
      <!-- print type radio -->
      <h4>Print Type {{printtype}}</h4>
      <div class="form-check">
        <input class="form-check-input" type="radio" v-model="printtype" value="All">
        <label class="form-check-label">All</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" v-model="printtype" value="Books">
        <label class="form-check-label">Books</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" v-model="printtype" value="Magazines">
        <label class="form-check-label">Magazines</label>
      </div>
      <hr>
      <button @click="applyFilter" class="btn btn-apply">Apply</button>
      <button @click="clearFilter" class="btn btn-light">clear</button>
  </div>
</template>

<script>

export default {
  name: 'MyForm',
  data () {
    return {
      filtertype: '',
      printtype: ''
    }
  },
  methods: {
    clearFilter() {
      // to clear filter select
      this.filtertype = ''
      this.printtype = ''
    },
    applyFilter() {
      console.log('apply')
    }
  }
};
</script>

<style scope>
.btn-apply{
  background-color: #75cfb8;
  color: white;
}
</style>
