<template>
  <h2>Test Application</h2>
  <div :style="buttonStyle">
    <button class="btn btn-dark btn-sm">Login / Signup</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      buttonStyle: {
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
