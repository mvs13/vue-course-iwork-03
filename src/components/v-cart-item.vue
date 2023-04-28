<template>
  <div class="v-cart-item">
    <div class="v-catr-item__imagebox">
      <img
        class="v-cart-item__image"
        :src="require('../assets/images/'+cart_item_data.image)"
        :alt="cart_item_data.name"
      />
    </div>
    <div class="v-cart-item__descr">
      <h3 class="v-cart-item__name">{{ cart_item_data.name }}</h3>
      <p class="v-cart-item__price">{{ cart_item_data.price }}</p>
      <p class="v-cart-item__article">{{ cart_item_data.article }}</p>
      <p class="v-cart-item__about">{{ cart_item_data.about }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Quantuty is <span>{{ cart_item_data.quantity }}</span></p>
    </div>
    <div class="v-cart-item__controls">
      <button>+</button>
      <button>-</button>
      <button @click="deleteFromCart">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart', this.cart_item_data.article)
    }
  },
  data() {
    return {
      title: 'Cart Item'
    }
  }
}
</script>

<style scoped lang="scss">
.v-cart-item {
  padding: 10px;
  display: flex;
  gap: 6px;
  background-color: blueviolet;
  border-radius: 16px;
  &__imagebox {
    width: 20%;
  }
  &__image {
    width: 100%;
  }
  &__controls {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}

.v-cart-item__descr h3, p{
  margin: 0;
  margin-bottom: 10px;
  text-align: left;

}
</style>
