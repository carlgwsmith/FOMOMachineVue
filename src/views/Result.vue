<template>
<div>
    Symbol: {{ticker}}
    Today's Price: {{stockPrice}}
    First Traded on: {{firstTradeDateReadable}}

</div>
</template>

<script>
export default {
    data: () => ({
        ticker:'',
        stockPrice:0,
        firstTradeDate:0,
        firstTradeDateReadable:''
    }),
    computed: {
    returnState () {
        return this.$store.getters.getState;
        }
    },
    mounted() {
    this.ticker = this.$store.getters.getTicker;
    this.stockPrice = this.$store.getters.getStockPrice;
    this.firstTradeDate = this.$store.getters.getFirstTradeDate;
    },
    updated() {
            var myDate = new Date(this.firstTradeDate *1000);
            console.log('Date:' + myDate);
            this.firstTradeDateReadable = myDate.toLocaleString();
    },
    methods: {
    }

}
</script>

<style>

</style>