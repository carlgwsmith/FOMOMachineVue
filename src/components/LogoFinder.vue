<template>
<div>
    <a :href="this.stockWebsite" target="_blank"><img v-bind:src="this.stockLogo" height="80px"></a>
    
</div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        stockWebsite:'',
        stockLogo:'https://via.placeholder.com/50x50'
    }),
    computed: {
    returnState () {
        return this.$store.getters.getState;
        }
    },
    mounted() {
    this.stockWebsite = this.$store.getters.getStockWebsite;
    this.ticker = this.$store.getters.getTicker;
    console.log(this.$store.getters.getTicker)
    this.getStockWebsite(this.ticker)
    setTimeout(() => {
        this.getLogoUrl();
    }, 1000);
    },
    methods: {
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
                    console.log('success 2');
                }.bind(this)).catch(function (error) {
                    console.error(error);
                });
        },
        getLogoUrl(){
            var shortSite = this.stockWebsite.substring(11);
            console.log(shortSite);
            const options = {
            method: 'POST',
            url: 'https://api.brandfetch.io/v1/logo',
            headers: {
            'x-api-key': 'NYYDCkzuzN0ALpVlDLUCOA4Gr334Zq14aXHKevb0',
            'content-type': 'application/json'
            },
            data: {domain: shortSite}
            };

            axios.request(options).then(function (response) {
            console.log(response.data);
            console.log(response.data.response.icon.image);
            this.stockLogo = response.data.response.icon.image
            }.bind(this)).catch(function (error) {
            console.error(error);
            });
        }
    }
}
</script>

<style>
img {
    border-radius:10px;
    box-shadow:2px 2px 5px rgba(73, 73, 73, 0.26);
    border:3px solid #f3f3f3;
}
</style>