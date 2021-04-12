<template>
<div>
    <img v-bind:src="this.stockLogo" height="50px">
    
</div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        stockWebsite:'',
        stockLogo:''
    }),
    computed: {
    returnState () {
        return this.$store.getters.getState;
        }
    },
    mounted() {
    this.stockWebsite = this.$store.getters.getStockWebsite;
    this.getLogoUrl();
    },
    methods: {
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

</style>