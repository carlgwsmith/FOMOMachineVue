<template>
<div>
    <h1 class="bannerText tracking-in-expand">{{boldLabel}}<span class="thin">{{thinLabel}}</span></h1>
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
  background: -webkit-linear-gradient(to right, #08FFD6 20%, #A66BFF 80%);
  background: -moz-linear-gradient(to right, #08FFD6 20%, #A66BFF 80%);
  background: linear-gradient(to right, #08FFD6 20%, #A66BFF 80%);
    background-clip:text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom:10px;
}
.thin{
    font-family: 'MuseoModerno', cursive;
    font-weight:200;
}
</style>