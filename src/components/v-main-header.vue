<template>
  <header class="v-main-header">
    <div class="container">
      <h2 class="header__title">{{ headerTitle }}</h2>
    </div>
  </header>
</template>

<script>
export default {
  name: 'v-main-header',
  data () {
    return {
      headerTitle: 'A few steps from the edge of the universe...'
    }
  }
}
</script>

<style>
header{
  padding: 8px 0px;
  background-color: blueviolet;
}
.header__title {
  color: #330066;
  font-weight: bold;
  text-align: left;
}
</style>
