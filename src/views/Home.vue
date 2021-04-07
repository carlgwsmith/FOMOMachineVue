<template>
  <div class="home">
    <Banner boldLabel="FOMO" thinLabel="MACHINE"></Banner>
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
