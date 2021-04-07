<template>
<div>
    <form @submit.prevent="searchSymbol(); emitData();">
      <input type="text" v-model="ticker" name="ticker" placeholder="AAPL">
      <input type="submit" value="FOMO-TIZE ME CAPTAIN" class="btn-primary m-2">
  </form>
  <div class="container">
      {{this.ticker}}
    </div>
</div>
</template>

<script>
//import func from 'vue-editor-bridge';
import axios from 'axios';

export default {
    data() {
        return {
            ticker:'',
            stockPrice:0,
            firstTradeDate:0,
            tickerObject: {},
        }
    },
    methods:{
        searchAndEmit(){

        },
       searchSymbol () {
    const options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data',
        params: {symbol: this.ticker, region: 'US'},
        headers: {
            'x-rapidapi-key': '576a270f4emshce03cc0d892e394p15648fjsnddb66ef301e9',
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            this.tickerObject = response.data;
            this.stockPrice = response.data.prices[0].close;
            this.firstTradeDate = response.data.firstTradeDate;
            console.log(response.data);
            this.$router.push('/Results');
        }.bind(this)).catch(function (error) {
            console.error(error);
        });
    }
    },
    beforeDestroy() {
        const payload = {
        ticker: this.ticker,
        stockPrice: this.stockPrice,
        firstTradeDate: this.firstTradeDate
      }
      console.log('payload: ' + payload);
      console.log(payload.stockPrice)
      this.$store.commit('setState', payload);
    }
}
</script>

<style>

</style>