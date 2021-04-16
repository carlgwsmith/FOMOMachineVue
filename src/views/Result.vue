<template>
<div class="container">
    <div class="row">
    <div class="col-sm-6">
        <div class="ticker-card fade-in">
            <!-- <logo-finder/> -->
            <p class="ticker">{{ticker}}</p>
            <p class="subtitle">Current Price Per Share: <span class="price">${{stockPrice.toFixed(2)}}</span></p>
            <p class="subtitle">First Traded on {{firstTradeDateReadable}}</p>
        </div>
    </div>
    <div class="col-sm-6 fomoBlock slide-in-right">
        <div class="fomoMsg">
            If you had invested: ${{formatPrice(fomoAmount)}} in {{ticker}} on {{earliestDate}} at ${{earliestPrice}}
            you would now have ${{formatPrice(earliestPrice * fomoAmount)}}.
        </div>
    </div>
    </div>
</div>
</template>

<script>
//import LogoFinder from '../components/LogoFinder.vue';

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
    }),
    components:{
        //LogoFinder
    },
    computed: {
    returnState () {
        return this.$store.getters.getState;
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
    },
    updated() {
            var myDate = new Date(this.firstTradeDate *1000);
            this.firstTradeDateReadable = myDate.toLocaleString();
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
}
</script>

<style>
.ticker-card{
        background-color: #f7f7f7;
    box-shadow: 2px 2px 6px #eaeaea, -6px -6px 5px #ffffff;
    padding: 40px 20px;
}
.ticker{
    font-size:3em;
    font-weight:600;
    color: #828282;
    margin-bottom:5px;
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