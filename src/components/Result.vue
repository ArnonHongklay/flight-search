<template>
  <div class="row bg">
    <div class="col-12">
      <h3>Result</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

.bg {
  background: #fff;
}
</style>
