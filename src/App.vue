<template>
  <div id="app">
    <div class="container">
      <!-- <nav>
        <router-link to="/search">Search</router-link>
        <router-link to="/payment">Payment</router-link>
      </nav>-->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
