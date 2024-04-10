import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apple_production_data: [],
    apple_capacity_data: [],
    apple_consumption_data: [],
    fruit_price_data: [],
    apple_efficiency_data: [],
  },
  mutations: {
    setAppleProductionData(state, data) {
      state.apple_production_data = data
    },
    setAppleCapacityData(state, data) {
      state.apple_capacity_data = data
    },
    setAppleConsumptionData(state, data) {
      state.apple_consumption_data = data
    },
    setFruitPriceData(state, data) {
      state.fruit_price_data = data
    },
    setAppleEfficiencyData(state, data) {
      state.apple_efficiency_data = data
    }
  },
  actions: {
  },
  modules: {
  }
})
