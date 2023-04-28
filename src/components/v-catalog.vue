<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">{{ title }}</h2>
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
    ...mapGetters(['PRODUCTS'])
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
  width: 60%;
  padding: 16px;
  border-radius: 16px 0 0 16px;
  background-color: #9966CC;
}

.items__wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 8px;
}
</style>
