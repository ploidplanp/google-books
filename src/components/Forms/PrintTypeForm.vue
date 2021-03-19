<template>
  <div class="mt-3 mb-3">
      <h4>Print Type</h4>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="print_type">
      <label class="form-check-label">All</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="print_type">
      <label class="form-check-label">Books</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="print_type">
      <label class="form-check-label">Magazines</label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PrintTypeForm',
  methods: {
  }
};
</script>

<style scope>
</style>