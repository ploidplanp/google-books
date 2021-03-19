<template>
  <div class="mt-3 mb-3">
    <h4>Filter</h4>
    <div class="form-check">
      <input class="form-check-input" type="radio" value="partial" name="filter">
      <label class="form-check-label">Partial</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" value="full" name="filter">
      <label class="form-check-label">Full</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" value="free_eBooks" name="filter">
      <label class="form-check-label">Free eBooks</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" value="paid_eBooks" name="filter">
      <label class="form-check-label">Paid eBooks</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" value="eBooks" name="filter">
      <label class="form-check-label">eBooks</label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FilterForm',
  methods: {
  }
};
</script>

<style scope>
</style>
