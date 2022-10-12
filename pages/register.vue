<template>
  <div class="row justify-content-center mt-5">
    <div class="col-6">
      <div class="card">
        <div class="card-header">
          Create an Account
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser"  @keydown="registerForm.onKeydown($event)">
            <div class="form-group mb-3">
              <label for="">Name</label>
              <input type="text" class="form-control" name="name" v-model="registerForm.name" placeholder="Your Name">
              <div class="errorShow" v-if="registerForm.errors.has('name')" v-html="registerForm.errors.get('name')" />
            </div>
            <div class="form-group mb-3">
              <label for="">Email</label>
              <input type="text" class="form-control" name="email" v-model="registerForm.email" placeholder="Your Email">
              <div class="errorShow" v-if="registerForm.errors.has('email')" v-html="registerForm.errors.get('email')" />
            </div>
            <div class="form-group mb-3">
              <label for="">Password</label>
              <input type="password" class="form-control" name="password" v-model="registerForm.password" placeholder="Password">
              <div class="errorShow" v-if="registerForm.errors.has('password')" v-html="registerForm.errors.get('password')" />
            </div>
            <div class="form-group d-flex justify-content-between align-items-center">
                <button type="submit" class="btn btn-success" :disabled="registerForm.busy">Create an account</button>
                <nuxt-link :to="{ name: 'login' }">Account Login</nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  //import Form from 'vform'
  export default {
    auth: 'guest',
    data(){
      return {
        registerForm: this.$vform({
          name: '',
          email: '',
          password: ''
        }),

      }
    },
    methods: {
      async registerUser() {
        try {
          //let data = await this.$axios.$post('auth/register', this.registerForm);
          let data = await this.registerForm.post('auth/register');
          //console.log(data);
          console.log(data.data.access_token);

          await this.$auth.setUserToken(data.data.access_token);

          this.$toast.success({
              title:'Success',
              message:'Registration Successfull!'
          })
        } catch (err) {
          console.log(err)
        }
      }
    }

  }

</script>

<style>
.errorShow {
    color: red;
    font-size: 13px;
    padding-top: 6px;
}
</style>
