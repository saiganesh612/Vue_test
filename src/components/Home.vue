<template>
  <div :style="buttonStyle">
    <button class="btn btn-dark btn-sm">Login / Signup</button>
  </div>
</template>

<script>
export default {
  name: "Home",
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
};
</script>
