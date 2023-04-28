<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src="require('../assets/images/'+product_data.image)" :alt="product_data.name">
    <h3 class="v-catalog-item__name">{{ product_data.name }}</h3>
    <p class="v-catelog-item__about">{{ product_data.about }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <button class="v-catalog-item__take_btn" @click="takeToCart">Take me</button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    sendDataToCatalog() {
      this.$emit('articleFromCatalogItem', this.product_data.article)
    },
    takeToCart() {
      this.$emit('takeToCart', this.product_data)
    }
  },
  data() {
    return {
      name: 'Some One'
    }
  }
}
</script>

<style>
.v-catalog-item{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #330099;
  padding: 20px;
  margin: 20px;
  border-radius: 16px;
  color:wheat;
  background-color: #330066;
}

.v-catalog-item__name {
  color: #9966CC;
}

.v-catalog-item__take_btn {
  padding: 4px 8px;
  border: none;
  border-radius: 8px;
  background-color: #9966CC;
  color: #330099;
}
</style>
