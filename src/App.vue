<template>
  <div id="app">
    <ul id="nav" class="text-right">
      <router-link to="/">Home</router-link>
      <router-link to="/result">Results</router-link>
      <router-link to="/about">About</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    background-color: #f7f7f7;
}
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
