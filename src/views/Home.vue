<template>
  <div class="home bg-img">
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
.home {
  padding-top:7%;
  width: 100%;
  height: 100%;
  min-height:100vh;
  background: linear-gradient(
      rgb(255, 255, 255), 
      rgba(255, 255, 255, 0.5)
    ), url('../assets/bgchart.jpg') !important;
  background-size: cover !important;
}

/* .bg-img {
  padding-top:10%;
  position: relative;
  width: 100%;
  height: 100%;
  min-height:100vh;
  background: url("https://images.unsplash.com/photo-1439434768192-c60615c1b3c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80") center center no-repeat;
  background-size: cover;
  z-index:-9999;
} */
/* .bg-img:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #55eb94, #9325dc);
  opacity: 0.6;
} */
</style>
