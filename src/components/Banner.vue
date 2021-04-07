<template>
  <h1 class="bannerText">{{label}}</h1>
</template>

<script>
export default {
    data: () =>({

    }),
    props: {
        label: String,
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
}
</style>