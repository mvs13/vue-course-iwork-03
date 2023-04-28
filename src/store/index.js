import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: []
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  },
  mutations: {
    SET_PRODUCT_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      const indexForAdd = state.cart.findIndex(item => item.article === product.article)
      console.log(indexForAdd)
      if (indexForAdd >= 0) {
        state.cart[indexForAdd].quantity++
      } else {
        product.quantity = 1
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, article) => {
      const indexForDelete = state.cart.find(item => item.article === article)
      state.cart.splice(indexForDelete, 1)
    }
  },
  actions: {
    GET_PRODUCTS_BY_API({ commit }) {
      return axios('http://localhost:3000/products', { method: 'GET' })
        .then((products) => {
          commit('SET_PRODUCT_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CARD({ commit }, article) {
      commit('REMOVE_FROM_CART', article)
    }
  },
  modules: {
  }
})
