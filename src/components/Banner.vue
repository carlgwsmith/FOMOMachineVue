<template>
<div>
    <h1 class="bannerText">{{boldLabel}}<span class="thin">{{thinLabel}}</span></h1>
    <p>Submit a stock market ticker and we'll get your FOMO Results</p>
</div>
</template>

<script>
export default {
    data: () =>({

    }),
    props: {
        boldLabel: String,
        thinLabel: String,
    }
}
</script>

<style>
.bannerText{
    font-family: 'MuseoModerno', cursive;
    font-size:6em;
    background: #08FFD6;
    background: -webkit-linear-gradient(to right, #08FFD6 0%, #A66BFF 100%);
    background: -moz-linear-gradient(to right, #08FFD6 0%, #A66BFF 100%);
    background: linear-gradient(to right, #08FFD6 0%, #A66BFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom:10px;
}
.thin{
    font-family: 'MuseoModerno', cursive;
    font-weight:200;
}
p{
    font-size:1.3em;
}
</style>