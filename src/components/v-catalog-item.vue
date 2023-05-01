<template>
  <div class="v-catalog-item">
    <div class="card medium">
      <div class="card-image">
        <img :src="require('../assets/images/'+product_data.image)" :alt="product_data.name">
        <a
          class="btn-floating halfway-fab waves-effect waves-light red"
          @click="takeToCart"
        >
          <i class="material-icons">add_circle_outline</i>
        </a>
      </div>
      <div class="card-content">
        <h3 class="card-title v-catalog-item__title">{{ product_data.name }}</h3>
        <p class="v-catelog-item__about">
          {{ product_data.about }}
        </p>
        <p class="v-catalog-item__price">
          {{ product_data.price }}
          <span class="tooltipped" data-position="right" data-tooltip="Galactic Credit Standard">GCS</span>
        </p>
      </div>
    </div>
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

<style scoped>
.v-catalog-item{
  /* display: flex;
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
  background-color: #330066; */
}
</style>
