<template>
  <h2>This is Detailed Page</h2>
</template>

<script>
import { handleAuth, isLoggedIn } from "../utils/auth";

export default {
  name: "Details",
  beforeMount() {
    handleAuth();
    if (!isLoggedIn()) this.$router.push("/");
  },
};
</script>
