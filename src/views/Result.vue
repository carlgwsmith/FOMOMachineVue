<template>
<div>
    Symbol: {{ticker}}
    Today's Price: {{stockPrice}}
    First Traded on: {{firstTradeDateReadable}}
    Website:{{stockWebsite}}
    <logo-finder/>

</div>
</template>

<script>
import LogoFinder from '../components/LogoFinder.vue';

export default {
    data: () => ({
        ticker:'',
        stockPrice:0,
        firstTradeDate:0,
        firstTradeDateReadable:'',
        ipoClosePrice: 0,
        stockWebsite:'',
        stockLogo:''
    }),
    components:{
        LogoFinder
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
    },
    updated() {
            var myDate = new Date(this.firstTradeDate *1000);
            this.firstTradeDateReadable = myDate.toLocaleString();
    },
    methods: {

    }
}
</script>

<style>

</style>