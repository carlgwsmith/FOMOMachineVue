<template>
  <div>
      <ul id="nav" class="text-right">
        <router-link to="/">Home</router-link>
        <router-link to="/result">Results</router-link>
        <router-link to="/about">About</router-link>
      </ul>
  </div>
</template>

<script>
export default {
computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout';
    }
  }
}
</script>

<style>
ul#nav a{
  display: inline;
  padding: 10px 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  margin: 10px;
      box-shadow: 2px 2px 6px #eaeaea, -6px -6px 5px #ffffff;
}
#nav {
  padding: 30px;
}
.text-right{
  text-align:right;
}
#nav a {
  font-weight: bold;
  color: #adadad;
  text-decoration: none !important;
}

#nav a.router-link-exact-active {
  background: #1C9DFF;
  background: -webkit-linear-gradient(to right, #1C9DFF 0%, #A66BFF 100%);
  background: -moz-linear-gradient(to right, #1C9DFF 0%, #A66BFF 100%);
  background: linear-gradient(to right, #1C9DFF 0%, #A66BFF 100%);
  color:white;
  box-shadow: 2px 2px 5px rgb(187, 187, 187);
}

</style>