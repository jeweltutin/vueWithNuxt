<template>
  <div class="row justify-content-center mt-5">
    <div class="col-6">
      <div class="card">
        <div class="card-header">
          Create an Account
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group mb-3">
              <label for="">Name</label>
              <input type="text" class="form-control" name="name" v-model="registerForm.name" placeholder="Your Name">
            </div>
            <div class="form-group mb-3">
              <label for="">Email</label>
              <input type="text" class="form-control" name="email" v-model="registerForm.email" placeholder="Your Email">
            </div>
            <div class="form-group mb-3">
              <label for="">Password</label>
              <input type="password" class="form-control" name="password" v-model="registerForm.password" placeholder="Password">
            </div>
            <div class="form-group d-flex justify-content-between align-items-center">
                <button type="submit" class="btn btn-success">Create an account</button>
                <nuxt-link :to="{ name: 'login' }">Account Login</nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    auth: 'guest',
    data(){
      return {
        registerForm: {
          name: '',
          email: '',
          password: ''
        }

      }
    },
    methods: {
      async registerUser() {
        try {
          let data = await this.$axios.$post('auth/register', this.registerForm);
          console.log(data)

          await this.$auth.setUserToken(data.access_token);
        } catch (err) {
          console.log(err)
        }
      }
    }

  }

</script>

<style>

</style>
