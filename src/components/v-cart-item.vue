<template>
  <div class="col s12 m7 v-card-item">
    <div class="card horizontal">
      <div class="card-image">
          <img
            :src="require('../assets/images/'+cart_item_data.image)"
            :alt="cart_item_data.name"
          >
        </div>
      <div class="card-stacked">
        <div class="card-content">
        <span class="card-title v-cart-item__name">{{ cart_item_data.name }}</span>
        <p class="v-cart-item__price">{{ cart_item_data.price }}</p>
        <p class="v-cart-item__article">{{ cart_item_data.article }}</p>
        <p class="v-cart-item__about">{{ cart_item_data.about }}</p>
      </div>

      <div class="card-action">
          <div class="v-cart-item__quantity">
            <p>Quantuty is <span>{{ cart_item_data.quantity }}</span></p>
          </div>
          <div class="v-cart-item__controls">
            <button class="btn" @click="increaseQuantityInCart">
              <i class="large material-icons left">add_circle</i>
              increase
            </button>
            <button class="btn" @click="decreaseQuantityInCart">
              <i class="large material-icons left">remove_circle</i>
              decrease
            </button>
            <button class="btn" @click="deleteFromCart">
              <i class="large material-icons left">delete_forever</i>
              delete
            </button>
          </div>
        </div>
      </div>
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
    },
    increaseQuantityInCart() {
      this.$emit('increaseQuantityInCart', this.cart_item_data.article)
    },
    decreaseQuantityInCart() {
      this.$emit('decreaseQuantityInCart', this.cart_item_data.article)
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
    // display: flex;
    // flex-direction: column;
    // gap: 6px;
  }
}

.v-cart-item__descr h3, p{
  margin: 0;
  margin-bottom: 10px;
  text-align: left;
}
</style>
