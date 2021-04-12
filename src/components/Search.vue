<template>
<div>
    <form @submit.prevent="searchSymbol(); getStockWebsite();">
      <input type="text" v-model="ticker" name="ticker" placeholder="AAPL">
      <input type="submit" value="CHECK SYMBOL" class="btn-primary m-2">
  </form>
</div>
</template>

<script>
//import func from 'vue-editor-bridge';
import axios from 'axios';

export default {
    data() {
        return {
            ticker:'AAPL',
            stockPrice:0,
            firstTradeDate:0,
            tickerObject: {},
            stockWebsite:'',
        }
    },
    methods:{
        getStockWebsite(){
            const options = {
                method: 'GET',
                url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v11/finance/quoteSummary/' + this.ticker,
                params: {modules: 'defaultKeyStatistics,assetProfile'},
                headers: {
                    'x-rapidapi-key': '576a270f4emshce03cc0d892e394p15648fjsnddb66ef301e9',
                    'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com'
                }
                };

                axios.request(options).then(function (response) {
                    console.log('does this call work?:' + response.data.quoteSummary.result[0].assetProfile.website)
                    this.stockWebsite = response.data.quoteSummary.result[0].assetProfile.website;
                }.bind(this)).catch(function (error) {
                    console.error(error);
                });
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
        firstTradeDate: this.firstTradeDate,
        stockWebsite: this.stockWebsite
      }
      this.$store.commit('setState', payload);
    }
}
</script>

<style>
input[type="text" i]{
    border: 2px solid #e0dfdf;
    padding: 15px;
    border-radius: 10px 0 0 10px;
    background-color: #f3f3f3;
}
input[type="text" i]:focus {
    outline: none;
    border: 2px solid #c3cdd4 !important;
    background-color: #e0e0e0 !important;
}
input[type="submit" i]{
    padding: 15px;
    border-radius: 0 10px 10px 0;
    border: 2px solid #e0dfdf;
    border-left: none !important;
    background-color: #69f2d9;
    color: #5a5959;
    font-weight: 700;
}
input[type="submit" i]:focus {
    outline: none;
    border: 2px solid #5bb2ec !important;
    background-color: #d2edff !important;
}
</style>