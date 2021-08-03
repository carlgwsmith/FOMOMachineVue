<template>
<div class="container-xl">
    <div class="row" style="padding-top:40px;">
      <div class="col-sm-12">
        <h2 class="titleSection">{{ticker}} Results</h2>
      </div>
    </div>
    <div class="row">
    <div class="col-sm-6">
        <div class="ticker-card fade-in">
            <p class="ticker-title">{{companyName}}</p>
            <logo-finder style="margin-bottom:20px" v-if="isMounted"/>
            <p class="subtitle">Current Price Per Share: <span class="price">${{stockPrice.toFixed(2)}}</span></p>
            <p class="subtitle">First Traded on {{firstTradeDateReadable}}</p>
        </div>
    </div>
    <div class="col-sm-6 fomoBlock slide-in-right">
        <div class="fomoMsg">
          <h1 style="font-weight:800;font-size:65px;">DANG!</h1>
            If you had invested: <strong>${{formatPrice(fomoAmount)}}</strong> in <strong>{{ticker}}</strong> on {{earliestDate}} at ${{earliestPrice}}
            you would now have ${{formatPrice(earliestPrice * fomoAmount)}}.
            That's a {{percentageIncrease(earliestPrice, stockPrice)}}% change.
        </div>
    </div>
    </div>
    <div class="row" style="padding-top: 20px; margin-top: 30px;">
      <div class="col-sm-12">
        <h2 class="titleSection">How {{ticker}} Looks Over-Time</h2>
      </div>
      <div class="col-sm-12 pb-4">
        <History-Chart-View />
      </div>
    </div>
    <div class="row news">
      <div class="col-sm-12">
        <h2 class="titleSection">Latest {{ticker}} News</h2>
      </div>
      <div class="col-sm-4 newsCard" v-for="(item, index) in news" :key="item.title">
        <div v-if="index < 6">
          <p class="newsDate">{{item.pubDate}}</p>
          <a :href="item.link" target="_blank">
          <p class="newsTitle">{{item.title | truncate(60,'...')}}</p>
          <p class="newsDesc">{{item.description | truncate(300,'...')}}</p>
          </a>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import HistoryChartView from '../components/historyChartView.vue';
import LogoFinder from '../components/LogoFinder.vue';

export default {
    data: () => ({
        ticker:'',
        stockPrice:0,
        firstTradeDate:0,
        firstTradeDateReadable:'',
        ipoClosePrice: 0,
        stockWebsite:'',
        stockLogo:'',
        earliestDate:'',
        earliestPrice:0,
        fomoAmount: 0,
        news:{},
        priceHistory:{},
        companyName:'Company Name Inc',
        isMounted: false
    }),
    components:{
        HistoryChartView,
        LogoFinder
    },
    computed: {
    returnState () {
        this.loading();
        return this.$store.getters.getState;
        },
    loading () {
      return(<template><div>Loading...</div></template>)
    }
    },
    mounted() {
    this.ticker = this.$store.getters.getTicker;
    this.stockPrice = this.$store.getters.getStockPrice;
    this.firstTradeDate = this.$store.getters.getFirstTradeDate;
    this.stockWebsite = this.$store.getters.getStockWebsite;
    this.earliestDate = this.$store.getters.getEarliestDate;
    this.earliestPrice = this.$store.getters.getEarliestPrice;
    this.fomoAmount = this.$store.getters.getFomoAmount;
    this.news = this.$store.getters.getNews;
    this.priceHistory = this.$store.getters.getPriceHistory;
    this.companyName = this.$store.getters.getCompanyName;
    this.isMounted = true;
    },
    updated() {
            var myDate = new Date(this.firstTradeDate *1000);
            this.firstTradeDateReadable = myDate.toLocaleString();
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        percentageIncrease (earliestPrice, currentPrice){
          let difference = currentPrice - earliestPrice;
          let percentage = (difference / earliestPrice);
          return (percentage * 100).toFixed(2)
        }
    }
}
</script>

<style>
.ticker-card{
        background-color: #f7f7f7;
    box-shadow: 2px 2px 6px #eaeaea, -6px -6px 5px #ffffff;
    padding: 40px 20px;
    border:6px solid #71eabb;
    border-radius:10px;
}
.ticker-title{
    font-size: 2.25rem;
    font-weight: 200;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0 0 10px 0;
    color: #828282;
}
.ticker{
    font-size:3em;
    font-weight:600;
    color: #828282;
    margin-bottom:5px;
    border-top:1px solid #dadada;
    padding-top:5px;
    margin-top:10px;
}
.title{
  border-bottom:1px solid #f3f3f3;
  margin-bottom:20px;
  color:#828282;
  font-family: 'MuseoModerno', cursive;
  text-align: center;
  font-size:65px;
}
.titleSection{
  border-bottom:1px solid #f3f3f3;
  margin-bottom:20px;
  color:#828282;
  font-family: 'MuseoModerno', cursive;
  text-align: left;
}
.price{
    font-weight:700;
}
.subtitle{
    color:#828282;
}
.fomoMsg{
    font-size:2em;
    color: #828282;
    text-align: left;
    padding-left: 15px;
}
.news{
  padding-top:20px;
  margin-top:20px;
}
.newsCard{
  margin-bottom:30px;
}
.newsTitle{
  font-size:15px;
  font-weight:800;
  margin-bottom:4px;
  border-bottom:1px solid #f3f3f3;
  text-align:left;
}
.newsDate{
  font-size:11px;
  font-weight:900;
  text-align:left;
  color:rgb(196, 196, 196);
  margin-bottom:0px;
}
.newsDesc{
  font-size: 10px;
  font-weight:400;
  text-align:left;
}
.fomoBlock{
    margin:auto;
}
/* CSS ANIMATIONS */
.slide-in-right {
	-webkit-animation: slide-in-right 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s both;
	animation: slide-in-right 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) 1s both;
}
.fade-in {
	-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<style scoped>
a {
    color: #2c9eff;
    text-decoration: none;
    background-color: transparent;
}
</style>