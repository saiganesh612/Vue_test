<template>
  <div>
    <form id="form" @submit.prevent="submitData">
      <div>
        <label for="age">Age: </label>
        <input
          type="number"
          placeholder="Enter your age"
          v-model.number="formValues.Age"
        />
      </div>
      <div>
        <label for="gender">Gender: </label>
        <select id="gender" v-model="formValues.Gender">
          <option value="">Select you Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label for="residence">Residence: </label>
        <input
          type="text"
          id="residence"
          list="states"
          v-model="formValues.Residence"
        />

        <datalist id="states">
          <option value="Telangana" />
          <option value="Andhra Pradesh" />
          <option value="Karnataka" />
          <option value="Tamil Nadu" />
          <option value="Kerala" />
          <option value="Maharastra" />
          <option value="Madhya Pradesh" />
          <option value="Rajasthan" />
          <option value="Jammu and Kashmir" />
          <option value="Delhi" />
          <option value="Gujarat" />
        </datalist>
      </div>

      <div>
        <button>Submit</button>
      </div>
    </form>

    <div v-if="errMssg">{{ errMssg }}</div>
  </div>
</template>

<script>
import { handleAuth, isLoggedIn } from "../utils/auth";
import axios from "axios";

export default {
  name: "Details",
  beforeMount() {
    handleAuth();
    if (!isLoggedIn()) this.$router.push("/");
  },
  data() {
    return {
      formValues: {
        Age: null,
        Gender: "",
        Residence: "",
      },
      errMssg: "",
    };
  },
  methods: {
    submitData() {
      if (this.formValues.Age < 18) {
        this.errMssg =
          "Sorry - only candidates above 18 years of age are allowed";

        window.location.reload();
      } else {
        const scriptUrl =
          "https://script.google.com/macros/s/AKfycbxouWKEphWzZWD5bqgss1bZ2-W2ZsVLA29A5JmDjZL5u13x8KQPgq7Tv1RKMaI4F2Ca/exec";

        const proxy = "https://cors-anywhere.herokuapp.com/";
        axios({
          method: "post",
          url: proxy + scriptUrl,
          data: JSON.stringify(this.formValues),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          mode: "no-cors",
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));

        console.log(this.formValues);
      }
    },
  },
};
</script>

<style scoped>
/* #form {
  display: flex;
  justify-content: center;
} */

#form > div {
  width: fit-content;
}
</style>
