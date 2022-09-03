<template>
  <div class="row justify-content-center">
    <div class="col-6">
      <div class="card">
        <div class="card-header">
          Login Page
        </div>
        <div class="card-body">
          <form @submit.prevent="userLogin">
            <div class="form-group mb-3">
              <label for="">Email</label>
              <input type="text" class="form-control" name="email" v-model="login.email">
            </div>
            <div class="form-group mb-3">
              <label for="">Password</label>
              <input type="password" class="form-control" name="password" v-model="login.password">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-success">Login</button>
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
