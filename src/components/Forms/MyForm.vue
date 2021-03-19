<template>
  <div class="container">
      <div class="mt-3 mb-3">
        <!-- filter radio group -->
        <h4>Filter: {{filtertype}}</h4>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="partial" name="filter">
          <label class="form-check-label">Partial</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="full" name="filter">
          <label class="form-check-label">Full</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="free-ebooks" name="filter">
          <label class="form-check-label">Free eBooks</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="paid-ebooks" name="filter">
          <label class="form-check-label">Paid eBooks</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="filtertype" value="ebooks" name="filter">
          <label class="form-check-label">eBooks</label>
        </div>
      </div>
      <!-- print type radio -->
      <h4>Print Type: {{printtype}}</h4>
      <div class="form-check">
        <input class="form-check-input" type="radio" v-model="printtype" value="all">
        <label class="form-check-label">All</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" v-model="printtype" value="books">
        <label class="form-check-label">Books</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" v-model="printtype" value="magazines">
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
    
    // to clear filter select
    clearFilter() {
      this.filtertype = ''
      this.printtype = ''
      this.$emit('filtertype', this.filtertype)
      this.$emit('printtype', this.printtype)
    },
    // to apply Filter : sent to Parent # Home.vue
    applyFilter() {
      this.$emit('filtertype', this.filtertype)
      this.$emit('printtype', this.printtype)
    },
  }
};
</script>

<style scope>
.btn-apply{
  background-color: #75cfb8;
  color: white;
}
</style>
