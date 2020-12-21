import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: [],
    restaurant: [],
    cords: [],
    categories: [],
  },
  mutations: {
    setRestaurants(state, data) {
      state.restaurants = data
    },
    setRestaurant(state, data) {
      state.restaurant = data
    },
    setCords(state, coords) {
      state.cords = coords
    },
    setCategories(state, categories) {
      state.categoires = categories
    },
  },
  getters: {},
  actions: {
    async fetchRestaurant(context) {
      const response = await fetch('http://192.168.87.53:3002/api/restaurant')
      const data = await response.json()
      context.commit('setRestaurants', data)
    },
    async fetchSingleRestaurant(context, id) {
      const response = await fetch(
        `http://192.168.87.53:3002/api/restaurant/${id}?scopes=hours,categories`
      )
      const data = await response.json()
      context.commit('setRestaurant', data)
      context.commit('setCords', data.location.coordinates)
      context.commit('setCategories', data.categoires)
    },
  },
  modules: {},
})
