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
body{
    background-image: url('https://images.unsplash.com/photo-1439434768192-c60615c1b3c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
    background-size: cover;
    color: white;
}
.home{
  margin-top:10%;
}
</style>
