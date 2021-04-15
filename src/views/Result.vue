<template>
<div class="container">
    <div class="row">
    <div class="col-sm-6">
        If you had invested: $1000 in {{ticker}} on {{earliestDate}} at ${{earliestPrice}}
        you would now have ${{formatPrice(earliestPrice * 1000)}}.
    </div>
    <div class="col-sm-6">
        <div class="ticker-card">
            <!-- <logo-finder/> -->
            <p class="ticker">{{ticker}}</p>
            <p class="subtitle">Current Price Per Share: <span class="price">${{stockPrice.toFixed(2)}}</span></p>
            <p class="subtitle">First Traded on {{firstTradeDateReadable}}</p>
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
    },
    updated() {
            var myDate = new Date(this.firstTradeDate *1000);
            this.firstTradeDateReadable = myDate.toLocaleString();
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
</style>