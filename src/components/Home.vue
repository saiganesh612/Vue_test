<template>
  <div :style="buttonStyle">
    <div v-if="!loggedIn">
      <button class="btn btn-dark btn-sm" @click="loginUser">
        Login / Signup
      </button>
    </div>
    <div v-else>
      <button class="btn btn-dark btn-sm" @click="logout">LogOut</button>
    </div>
  </div>
</template>

<script>
import { login, isLoggedIn, logUserOut } from "../utils/auth";

export default {
  name: "Home",
  data() {
    return {
      buttonStyle: {
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      loggedIn: isLoggedIn(),
    };
  },
  methods: {
    loginUser: () => login(),
    logout() {
      logUserOut();
      this.loggedIn = false;
    },
  },
};
</script>
