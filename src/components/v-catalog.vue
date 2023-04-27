<template>
  <div class="v-catalog">
    <h2 class="v-catalog__title">{{ title }}</h2>
    <div class="items__wrapper">
      <vCatalogItem
        v-for="product in products"
        :key="product.article"
        :product_data="product"
        @articleFromCatalogItem="articleTakeFromCatalogItem"/>
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'

export default {
  name: 'v-catalog',
  components: { vCatalogItem },
  methods: {
    articleTakeFromCatalogItem (data) {
      console.log(data)
    }
  },
  data () {
    return {
      title: 'Our catalog',
      products: [
        {
          image: '1.png',
          name: 'Analyst',
          price: 2100,
          article: 'T1',
          available: true,
          category: 'it products',
          quantity: 0,
          about: 'Hi i`m an Analyst! Nice to meet you!'
        },
        {
          image: '2.png',
          name: 'Designer',
          price: 3150,
          article: 'T2',
          available: true,
          category: 'it products',
          quantity: 0,
          about: 'Hey my friend! Nice to meet you!'
        },
        {
          image: '3.png',
          name: 'Marketer',
          price: 4200,
          article: 'T3',
          available: false,
          category: 'it products',
          quantity: 0,
          about: 'Hello! How have you been?'
        },
        {
          image: '4.png',
          name: 'Developer',
          price: 5300,
          article: 'T4',
          available: true,
          category: 'it products',
          quantity: 0,
          about: 'Nice to meet you! What about Vue?'
        },
        {
          image: '5.png',
          name: 'Business Accelerator',
          price: 6500,
          article: 'T5',
          available: false,
          category: 'it products',
          quantity: 0,
          about: 'Hey! We`ll solve any problems!'
        },
        {
          image: '6.png',
          name: 'Engineer',
          price: 8700,
          article: 'T6',
          available: true,
          category: 'it products',
          quantity: 0,
          about: 'Hi! I`ve many solutions!'
        }
      ]
    }
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
  align-items: center;
  gap: 8px;
}
</style>
