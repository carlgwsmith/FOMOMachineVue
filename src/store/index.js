import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticker:'',
    stockPrice:0,
    firstTradeDate: 0,
  },
  mutations: {
    setState(state, payload){
      state.ticker = payload.ticker;
      state.stockPrice = payload.stockPrice;
      state.firstTradeDate = payload.firstTradeDate;
    },
    setTicker(state, payload){
      state.ticker = payload.ticker
    },
    setStockPrice(state, payload){
      state.stockPrice = payload.stockPrice
    },
    setFirstTradeDate(state, payload){
      state.firstTradeDate = payload.firstTradeDate
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getState(state){
      return state;
    },
    getTicker(state){
      return state.ticker
    },
    getStockPrice(state){
      return state.stockPrice
    },
    getFirstTradeDate(state){
      return state.firstTradeDate
    }
  }
})
