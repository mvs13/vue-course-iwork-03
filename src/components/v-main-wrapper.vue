<template>
  <div class="container">
    <div class="v-main-wrapper">
      <vCatalog/>
      <vCart/>
    </div>
  </div>
</template>

<script>
import vCatalog from './v-catalog.vue'
import vCart from './v-cart.vue'

export default {
  name: 'v-main-wrapper',
  components: { vCatalog, vCart },
  data () {
    return {}
  }
}
</script>

<style>
.v-main-wrapper {
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  gap: 8px;
  background-color: #6633CC;
}
</style>
