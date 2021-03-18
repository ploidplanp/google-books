<template>
  <div class="container mt-5">
    <span><back-home-button/><fav-button/></span>
    
  </div>
</template>

<script>
import BackHomeButton from '../components/BackHomeButton'
import FavButton from '../components/FavButton'

export default {
  name: "BookInformation",
  components: {
    BackHomeButton,
    FavButton,
  },
};
</script>

<style scope>
span {
    display: inline;
}
</style>
