<template>
  <footer class="v-main-footer">
    <div class="container">
      <h2 class="footer__title">{{ footerTitle }}</h2>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerTitle: 'Edge is reached!'
    }
  },
  name: 'v-main-footer'
}
</script>

<style>
footer {
  padding: 8px 0;
  background-color: blueviolet;
}

.footer__title {
  color:#330066;
  text-align: left;
}
</style>
