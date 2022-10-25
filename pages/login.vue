<template>
  <div class="row justify-content-center mt-5">
    <div class="col-6">
      <div class="card">
        <div class="card-header">
          Login Page
        </div>
        <div class="card-body">
          <div class="alert alert-danger" v-if="login.errors.errors.account">
            {{ login.errors.errors.account[0] }}
          </div>
          <form @submit.prevent="userLogin" @keydown="login.onKeydown($event)">
            <div class="form-group mb-3">
              <label for="">Email</label>
              <input type="text" class="form-control" name="email" v-model="login.email" placeholder="Enter Email">
              <div class="errorShow" v-if="login.errors.has('email')" v-html="login.errors.get('email')" />
            </div>
            <div class="form-group mb-3">
              <label for="">Password</label>
              <input type="password" class="form-control" name="password" v-model="login.password" placeholder="Enter Password">
              <div class="errorShow" v-if="login.errors.has('password')" v-html="login.errors.get('password')" />
            </div>
            <div class="form-group d-flex justify-content-between align-items-center">
              <button type="submit" class="btn btn-success" :disabled="login.busy">Login</button>
              <nuxt-link :to="{ name: 'register' }">Don't have account? Signup now</nuxt-link>
            </div>
            <div class="mt-3">
              <nuxt-link :to="{ name: 'forgot-password' }">Forgot Password?</nuxt-link>
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
        // login: {
        //   email: 'admin@gmail.com',
        //   password: '12345678'
        // }
        login: this.$vform({
          email: '',
          password: ''
        }),

      }
    },
    methods: {
      async userLogin() {
        try {
          //let response = await this.$auth.loginWith('local', { data: this.login })
          let response  = await this.login.post('/auth/login');
          console.log(response.data.access_token);
          await this.$auth.setUserToken(response.data.access_token);
          //console.log(response.access_token)
          this.$toast.success({
              title:'Success',
              message:'Welcome to website'
          })
        } catch (err) {
          console.log(err)
        }
      }
    }

  }

</script>

<style>

</style>
