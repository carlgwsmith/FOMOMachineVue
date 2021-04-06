<template>
<div>
    <form @submit.prevent="searchSymbol">
      <input type="text" v-model="ticker" name="ticker" placeholder="AAPL">
      <input type="submit" value="FOMO-TIZE ME CAPTAIN" class="btn-primary m-2">
  </form>
  <div class="container">
      {{this.ticker}}
      <div class="stock_name"> {{stockprice}}</div>
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
            stockprice:0,
        }
    },
    methods:{
        searchSymbol () {
    //   this.url = 'https://financialmodelingprep.com/api/v3/stock/real-time-price/' + this.stock
    //   axios.get(this.url)
    //   .then( res => {
    //     this.stockprice = res.data.price,
    //     console.log(this.stockprice)
    //   })
    //   .catch( err => console.log(err))
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
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    },
    formatNumber(number) {
      number = (number/1000000).toFixed(2).replace('.',',')
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    }
}
</script>

<style>

</style>