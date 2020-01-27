<template>
  <div id="app">
    <!-- <div id="booking" class="section">
    <div class="section-center">-->
    <div class="container">
      <Search msg="Welcome to Your Vue.js App" />
      <Result />
    </div>
    <!-- </div>
    </div>-->
  </div>
</template>

<script>
import Search from "./components/Search.vue";
// import Result from "./components/Result.vue";

export default {
  name: "app",
  components: {
    Search
    // Result
  }
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
