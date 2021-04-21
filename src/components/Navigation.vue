<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand to="/" active-class="none" class="tracking-in-expand">FOMO Machine</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item text="Home" to="/" right :active='$route.name =="Home"'>HOME</b-nav-item>
          <b-nav-item text="About" to="/about" right :active='$route.name =="About"'>ABOUT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
li.nav-item > a {
    padding: 10px 20px !important;
    background-color: #f7f7f7;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 2px 2px 6px #eaeaea, -6px -6px 5px #ffffff;
}
a.nav-link.router-link-exact-active.router-link-active.active {
  background: #1C9DFF;
  background: -webkit-linear-gradient(to right, #1C9DFF 0%, #A66BFF 100%);
  background: -moz-linear-gradient(to right, #1C9DFF 0%, #A66BFF 100%);
  background: linear-gradient(to right, #1C9DFF 0%, #A66BFF 100%);
  color:white;
  box-shadow: 2px 2px 5px rgb(187, 187, 187);
}
a.nav-link.router-link-exact-active.router-link-active.active:hover {
  background: #1C9DFF;
  background: -webkit-linear-gradient(to right, #2da3fd 0%, #af79ff 100%);
  background: -moz-linear-gradient(to right, #2da3fd 0%, #af79ff 100%);
  background: linear-gradient(to right, #2da3fd 0%, #af79ff 100%);
  color:white;
  box-shadow: 2px 2px 5px rgb(187, 187, 187);
}
.navbar-brand{
  font-family: 'MuseoModerno', cursive;
  font-weight:500;
  background: #08FFD6;
  background: -webkit-linear-gradient(to right, #08FFD6 0%, #A66BFF 100%);
  background: -moz-linear-gradient(to right, #08FFD6 0%, #A66BFF 100%);
  background: linear-gradient(to right, #08FFD6 0%, #A66BFF 100%);
  -webkit-background-clip: text;
  background-clip:text;
  -webkit-text-fill-color: transparent;
}
.tracking-in-expand {
	-webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>