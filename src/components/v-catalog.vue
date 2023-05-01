<template>
  <div class="v-catalog">
    <div class="v-cataog__header">
      <h2 class="v-catalog__title">{{ title }}</h2>
      <!-- <router-link :to="{name: 'Cart', params: { cart_data: CART }}"> -->
      <router-link to="/cart">
        <div class="v-catalog__link2card">
          <i class="medium material-icons">shopping_cart</i>
          <span class="badge">{{ CART.length }}</span>
        </div>
      </router-link>
    </div>

    <div class="items__wrapper">
      <vCatalogItem
        v-for="product in PRODUCTS"
        v-bind:key="product.article"
        :product_data="product"
        @articleFromCatalogItem="articleTakeFromCatalogItem"
        @takeToCart="takeToCart"/>
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-catalog',
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  components: { vCatalogItem },
  methods: {
    ...mapActions(['GET_PRODUCTS_BY_API', 'ADD_TO_CART']),
    takeToCart(data) {
      this.ADD_TO_CART(data)
    },
    articleTakeFromCatalogItem(data) {
      console.log(data)
    }
  },
  data() {
    return {
      title: 'Our catalog'
    }
  },
  mounted() {
    this.GET_PRODUCTS_BY_API().then((response) => {
      if (response.data) {
        console.log('Products was get successfuly!')
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style>
.v-catalog {
  padding: 16px;
  background-color: var(--color-light);
}

.v-cataog__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-catalog__link2card > i{
  color: var(--color-darck);
}

.v-catalog__link2card > span {
  background-color: var(--color-semidarck);
}

.items__wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 8px;
}
</style>
