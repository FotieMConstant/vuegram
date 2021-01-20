<template>
  <div id="login">
    <section>
      <div class="col1">
        <h1 class="vuegram-title">Vuegram</h1>
        <p>
          Welcome to the <a href="#" target="_blank">Vuegram</a> a simple social
          media web app powered by Vue.js and Firebase.
          <br />
          Built by
          <a href="https://twitter.com/fotie_codes" target="_blank"
            >@fotie_code</a
          >
        </p>
      </div>
      <div class="col2">
        <form @submit.prevent>
          <h1>Welcome Back</h1>
          <div>
            <label for="email1">Email</label>
            <input
              v-model.trim="loginForm.email"
              type="text"
              placeholder="you@email.com"
              id="email1"
            />
          </div>
          <div>
            <label for="password1">Password</label>
            <input
              v-model.trim="loginForm.password"
              type="password"
              placeholder="******"
              id="password1"
            />
          </div>
          <button @click="login()" class="button">Log In</button>
          <div class="extras">
            <a>Forgot Password</a>
            <a>Create an Account</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>