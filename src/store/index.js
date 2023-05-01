import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: [],
    amount: 0
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
    AMOUNT(state) {
      return state.amount
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
    },
    SET_AMOUNT: (state) => {
      state.amount = 0
      state.cart.forEach(function (item, index, array) {
        state.amount += item.price * item.quantity
      })
    },
    SET_QUANTITY_UP: (state, article) => {
      console.log(article)
      const indexForUp = state.cart.findIndex(item => item.article === article)
      if (indexForUp >= 0) {
        state.cart[indexForUp].quantity++
      }
    },
    SET_QUANTITY_DOWN: (state, article) => {
      const indexForDown = state.cart.findIndex(item => item.article === article)
      console.log(indexForDown)
      if (indexForDown >= 0 && state.cart[indexForDown].quantity > 1) {
        state.cart[indexForDown].quantity--
      }
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
      commit('SET_AMOUNT')
    },
    DELETE_FROM_CARD({ commit }, article) {
      commit('REMOVE_FROM_CART', article)
      commit('SET_AMOUNT')
    },
    UPDATE_AMOUNT({ commit }) {
      commit('SET_AMOUNT')
    },
    INCREASE_QUANTITY_IN_CART({ commit }, article) {
      commit('SET_QUANTITY_UP', article)
      commit('SET_AMOUNT')
    },
    DECREASE_QUANTITY_IN_CART({ commit }, article) {
      commit('SET_QUANTITY_DOWN', article)
      commit('SET_AMOUNT')
    }
  },
  modules: {
  }
})
