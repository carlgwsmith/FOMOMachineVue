<template>
  <div class="home">
    <Banner boldLabel="FOMO" thinLabel="MACHINE"></Banner>
    <p>Submit a stock market ticker and an amount for your inital investment, then we'll get your FOMO Results</p>
    <Search></Search>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "../components/Search.vue";
import Banner from "../components/Banner.vue";

export default {
  name: 'Home',
  components: {
    Search,
    Banner
  }
}
</script>
<style scoped>
p{
    font-size:1.3em;
    color:#6d6d6d;
}
</style>
