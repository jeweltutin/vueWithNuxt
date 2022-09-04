<template>
  <div class="row justify-content-center mt-5">
    <div class="col-6">
      <div class="card">
        <div class="card-header">
          Create an Account
        </div>
        <div class="card-body">
          <form @submit.prevent="userLogin">
            <div class="form-group mb-3">
              <label for="">Name</label>
              <input type="text" class="form-control" name="name" v-model="login.email" placeholder="Your Name">
            </div>
            <div class="form-group mb-3">
              <label for="">Email</label>
              <input type="text" class="form-control" name="email" v-model="login.email" placeholder="Your Email">
            </div>
            <div class="form-group mb-3">
              <label for="">Password</label>
              <input type="password" class="form-control" name="password" v-model="login.password" placeholder="Password">
            </div>
            <div class="form-group d-flex justify-content-between align-items-center">
              <button type="submit" class="btn btn-success">Create</button>
              <nuxt-link :to="{ name: 'login' }">Login</nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data(){
      return {
        login: {
          email: 'admin@gmail.com',
          password: '12345678'
        }

      }
    },
    methods: {
      async userLogin() {
        try {
          let response = await this.$auth.loginWith('local', { data: this.login })
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      }
    }

  }

</script>

<style>

</style>
