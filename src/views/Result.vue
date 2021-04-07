<template>
<div>
    Symbol: {{ticker}}
    Today's Price: {{stockPrice}}
    First Traded on: {{firstTradeDateReadable}}
    {{getIpo}}

</div>
</template>

<script>
export default {
    data: () => ({
        ticker:'',
        stockPrice:0,
        firstTradeDate:0,
        firstTradeDateReadable:''
        ipoClosePrice: 0,
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
        getIpo (){
            //converter firstTradeDate for use in API
            var s = new Date(this.firstTradeDate).toISOString();
            var res = s.substring(0, 10)
            console.log('RES: '+ res);

            const options = {
            method: 'GET',
            //url: 'https://eodhistoricaldata.com/api/eod/' + this.ticker + '.US?api_token=606d1b402eb7b6.11619858',
            url:'https://eodhistoricaldata.com/api/eod/'+this.ticker+'.US?from='+res+'&to='+res+'&api_token=606d1b402eb7b6.11619858&period=d&fmt=json'
            headers: {
                'x-rapidapi-key': '576a270f4emshce03cc0d892e394p15648fjsnddb66ef301e9',
                'x-rapidapi-host': 'eod-historical-data.p.rapidapi.com'
            }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);

            }).catch(function (error) {
                console.error(error);
            });
        }
    }

}
</script>

<style>

</style>