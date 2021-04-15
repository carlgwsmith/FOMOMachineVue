import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticker:'',
    stockPrice:0,
    firstTradeDate: 0,
    stockWebsite:'',
    earliestPrice: 0,
    earliestDate:'',
  },
  mutations: {
    setState(state, payload){
      state.ticker = payload.ticker;
      state.stockPrice = payload.stockPrice;
      state.firstTradeDate = payload.firstTradeDate;
      state.stockWebsite = payload.stockWebsite;
      state.earliestPrice = payload.earliestPrice;
      state.earliestDate = payload.earliestDate;
    },
    setTicker(state, payload){
      state.ticker = payload.ticker
    },
    setStockPrice(state, payload){
      state.stockPrice = payload.stockPrice
    },
    setFirstTradeDate(state, payload){
      state.firstTradeDate = payload.firstTradeDate
    },
    setStockWebsite(state, payload){
      state.stockWebsite = payload.stockWebsite;
    },
    setEarliestPrice(state, payload){
      state.earliestPrice = payload.earliestPrice;
    },
    setEarliestDate(state, payload){
      state.earliestDate = payload.earliestDate;
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
    },
    getStockWebsite(state){
      return state.stockWebsite
    },
    getEarliestPrice(state){
      return state.earliestPrice
    },
    getEarliestDate(state){
      return state.earliestDate
    }
  }
})
