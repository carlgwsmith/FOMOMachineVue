<template>
<div>
<b-form @submit.prevent="secondFunction(getEarlyPrice, getNews, getCompanyInfo);">
    <b-form-group>
        <input type="text" v-model="ticker" name="ticker" placeholder="Enter Stock Ticker" v-uppercase>
        <currency-input v-model="fomoamount" name="fomoamount" currency="USD"></currency-input>
    </b-form-group>
    <b-form-group class='submit'>
        <b-button type="submit" class="submitBtn">
            Give Me FOMO
        <b-spinner label="Loading..." v-if="showLoad" style="padding-left:10px;"></b-spinner>
        </b-button>
    </b-form-group>
  </b-form>
</div>
</template>

<script>
//import func from 'vue-editor-bridge';
import axios from 'axios';

export default {
    data() {
        return {
            showLoad: false,
            ticker:'',
            stockPrice:0,
            firstTradeDate:0,
            tickerObject: {},
            stockWebsite:'',
            earlyPrice:0,
            earlyDate:'',
            fomoamount:0,
            news:{},
            priceHistory:[],
            companyName: '',
        }
    },
    methods:{

                function1(callback){
            setTimeout(callback(), 7000);
        },
        function2(callback2){
            setTimeout(callback2(), 1000);
        },
        // function3(callback3){
        //     setTimeout(callback3(), 3000);
        // },
        function4(callback4){
            setTimeout(callback4(), 1000);
        },
        function5(callback5){
            setTimeout(callback5(), 1000)
        },

        secondFunction(callback2, callback4, callback5){
            this.showLoad = true;
            this.function2(callback2);
            //this.function3(callback3);
            this.function4(callback4);
            this.function5(callback5);
            this.function1(this.searchSymbol);
        },
        getCompanyInfo(){
            const options = {
                method: 'GET',
                url: 'https://stock-market-data.p.rapidapi.com/stock/company-info',
                params: {ticker_symbol: this.ticker},
                headers: {
                    'x-rapidapi-key': '576a270f4emshce03cc0d892e394p15648fjsnddb66ef301e9',
                    'x-rapidapi-host': 'stock-market-data.p.rapidapi.com'
                }
                };

                axios.request(options).then(function (response) {
                    console.log(response.data);
                    this.companyName = response.data.company_profile['Company Name'];
                    this.stockWebsite = response.data.company_profile['Website']
                }.bind(this)).catch(function (error) {
                    console.error(error);
                });
        },
        getEarlyPrice(){
            const options = {
                method: 'GET',
                url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/hi/history/'+this.ticker+'/3mo',
                params: {diffandsplits: 'true'},
                headers: {
                'x-rapidapi-key': '576a270f4emshce03cc0d892e394p15648fjsnddb66ef301e9',
                'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
                }
                };

                axios.request(options).then(function (response) {
                this.earlyDate = response.data.items[Object.keys(response.data.items)[0]].date;
                this.earlyPrice = response.data.items[Object.keys(response.data.items)[0]].close;
                console.log('success 1');
                console.log(response.data);
                this.priceHistory = response.data.items;
                }.bind(this)).catch(function (error) {
                console.error(error);
                });
        },
        // getStockWebsite(){
        //     const options = {
        //         method: 'GET',
        //         url: 'https://yahoo-finance-low-latency.p.rapidapi.com/v11/finance/quoteSummary/' + this.ticker,
        //         params: {modules: 'defaultKeyStatistics,assetProfile'},
        //         headers: {
        //             'x-rapidapi-key': '576a270f4emshce03cc0d892e394p15648fjsnddb66ef301e9',
        //             'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com'
        //         }
        //         };

        //         axios.request(options).then(function (response) {
        //             console.log('does this call work?:' + response.data.quoteSummary.result[0].assetProfile.website)
        //             this.stockWebsite = response.data.quoteSummary.result[0].assetProfile.website;
        //             console.log('success 2');
        //         }.bind(this)).catch(function (error) {
        //             console.error(error);
        //         });
        // },
        getNews(){
            const options = {
                method: 'GET',
                url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news/' + this.ticker,
                headers: {
                    'x-rapidapi-key': '576a270f4emshce03cc0d892e394p15648fjsnddb66ef301e9',
                    'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
                }
                };

                axios.request(options).then(function (response) {
                   this.news = response.data.item;
                   console.log('success 3');
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
                    console.log('success 4');
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
        stockWebsite: this.stockWebsite,
        earliestDate: this.earlyDate,
        earliestPrice: this.earlyPrice,
        fomoAmount: this.fomoamount,
        news: this.news,
        priceHistory: this.priceHistory,
        companyName: this.companyName
      }
      this.$store.commit('setState', payload);
    }
}
</script>

<style>
input[type="text" i]{
    border: 2px solid #e0dfdf;
    border-radius:10px 0 0px 10px;
    padding: 15px;
    background-color: #f3f3f3;
    font-size: 22px;
    color:#6d6d6d;
}
input[type="text" i]:focus {
    outline: none;
    border: 2px solid #c3cdd4 !important;
    background-color: #e0e0e0 !important;
}
input[inputmode="decimal" i]{
    border-radius:0px 10px 10px 0px;
    border: 2px solid #e0dfdf;
    padding: 15px;
    background-color: #f3f3f3;
    font-size: 22px;
    color:#6d6d6d;
}
input[inputmode="decimal" i]:focus {
    outline: none;
    border: 2px solid #c3cdd4 !important;
    background-color: #e0e0e0 !important;
}
.submitBtn{
    border-radius:10px !important;
    padding: 15px 40px !important;
    border: 2px solid #e0dfdf !important;
     background: #1C9DFF;
  background: -webkit-linear-gradient(to right, #1C9DFF 0%, #A66BFF 100%);
  background: -moz-linear-gradient(to right, #1C9DFF 0%, #A66BFF 100%);
  background: linear-gradient(to right, #1C9DFF 0%, #A66BFF 100%);
  color:white !important;
    font-weight: 500 !important;
    font-family: 'MuseoModerno', cursive !important;
    font-size: 28px !important;
}
.submitBtn:hover{
    border: 2px solid #cccbcb;
     background: #1C9DFF;
  background: -webkit-linear-gradient(to right, #2da3fd 0%, #af79ff 100%);
  background: -moz-linear-gradient(to right, #2da3fd 0%, #af79ff 100%);
  background: linear-gradient(to right, #2da3fd 0%, #af79ff 100%);
  color:white;
}
.submitBtn:focus {
    outline: none;
    border: 2px solid #5bb2ec !important;
    background-color: #d2edff !important;
}
.submit{
    display: block;
    padding-top: 2px;
} */
.btn-primary{
    color:#fff !important;
    font-family: 'MuseoModerno', cursive !important;
    font-weight: 200 !important;
}
.color-change-3x {
	-webkit-animation: color-change-3x 3s linear infinite alternate both;
    animation: color-change-3x 3s linear infinite alternate both;
}
@-webkit-keyframes color-change-3x {
  0% {
    background: #19dcea;
  }
  50% {
    background: #196dea;
  }
  100% {
    background: #05e6ae;
  }
}
@keyframes color-change-3x {
  0% {
    background: #196dea;
  }
  50% {
    background: #2cc3ff;
  }
  100% {
    background: #05e6ae;
  }
}
</style>