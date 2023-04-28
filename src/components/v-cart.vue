<template>
  <div class="v-cart">
    <h2 class="cart__title">{{ title }}</h2>
    <vCartItem
      v-for="item in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart"
    />
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions(['DELETE_FROM_CARD']),
    deleteFromCart(data) {
      this.DELETE_FROM_CARD(data)
      // console.log(data)
    }
  },
  data() {
    return {
      title: 'Your cart'
    }
  }
}
</script>

<style>
.v-cart {
  width: 40%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 0 16px 16px 0;
  background-color: #9966CC;
}
.cart__title {
  color: #330099;
}
</style>
