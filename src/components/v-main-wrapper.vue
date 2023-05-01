<template>
  <div class="container">
    <div class="v-main-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  computed: {
    ...mapGetters(['CART'])
  },
  data() {
    return {}
  }
}
</script>

<style>
@import '~normalize.css/normalize.css';
@import '~materialize-css/dist/css/materialize.min.css';
.v-main-wrapper {
  /* display: flex; */
  padding: 8px;
  margin-bottom: 16px;
  gap: 8px;
  background-color: #6633CC;
}
</style>
