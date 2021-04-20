<template>
  <div id="app">
    <Navigation/>
  <router-view/>
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue"

export default {
  components:{
    Navigation
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    background-color: #f7f7f7;
}
</style>
