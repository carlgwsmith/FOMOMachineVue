<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand to="/" >FOMO Machine</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item text="Home" to="'home'" right>HOME</b-nav-item>
          <b-nav-item text="About" to="/about" right>ABOUT</b-nav-item>
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

</style>