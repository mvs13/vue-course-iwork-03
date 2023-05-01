<template>
  <div class="v-cart">
    <h2 class="v-cart__title">{{ title }}</h2>
    <p>Your cart is filled to {{ AMOUNT }}</p>
    <vCartItem
      v-for="item in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart"
      @increaseQuantityInCart="increaseQuantityInCart"
      @decreaseQuantityInCart="decreaseQuantityInCart"
    />
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions, mapGetters } from 'vuex'

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
    ...mapActions(['DELETE_FROM_CARD', 'DECREASE_QUANTITY_IN_CART', 'INCREASE_QUANTITY_IN_CART']),
    deleteFromCart(data) {
      this.DELETE_FROM_CARD(data)
      // console.log(data)
    },
    increaseQuantityInCart(data) {
      this.INCREASE_QUANTITY_IN_CART(data)
    },
    decreaseQuantityInCart(data) {
      this.DECREASE_QUANTITY_IN_CART(data)
    }
  },
  computed: {
    ...mapGetters(['CART', 'AMOUNT'])
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
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--color-main);
  background-color: var(--color-semilight);
}
.v-cart__title {
  color: var(--color-darck);
}
</style>
