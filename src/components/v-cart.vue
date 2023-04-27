<template>
  <div class="v-cart">
    <h2 class="cart__title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'v-cart',
  data () {
    return {
      title: 'Your cart'
    }
  }
}
</script>

<style>
.v-cart {
  width: 40%;
  border-radius: 0 16px 16px 0;
  background-color: #9966CC;
}
.cart__title {
  color: #330099;
}
</style>
