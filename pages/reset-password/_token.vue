<template>
  <div class="row justify-content-center mt-5">
      <div class="col-6">
          <div class="card">
              <div class="card-header">
                  Reset Password
              </div>
              <div class="card-body">
                  <form @submit.prevent="resetThePassword" @keydown="resetPassword.onKeydown($event)">
                      <div class="form-group mb-3">
                          <label for="">Enter Email </label>
                          <input type="text" v-model="resetPassword.email" class="form-control" name="email" placeholder="Enter email" :class="{ 'is-invalid': resetPassword.errors.has('email') }">
                          <div class="errorShow" v-if="resetPassword.errors.has('email')" v-html="resetPassword.errors.get('email')" />
                      </div>
                      <div class="form-group mb-3">
                          <label for="">Password </label>
                          <input type="password" v-model="resetPassword.password" class="form-control" name="password" placeholder="Enter password" :class="{ 'is-invalid': resetPassword.errors.has('password') }">
                          <div class="errorShow" v-if="resetPassword.errors.has('password')" v-html="resetPassword.errors.get('password')" />

                      </div>
                      <div class="form-group mb-3">
                          <label for="">Cofirm Password </label>
                          <input type="password" v-model="resetPassword.password_confirmation" class="form-control" name="password_confirmation" placeholder="confirm password" :class="{ 'is-invalid': resetPassword.errors.has('password_confirmation') }">
                          <!-- <has-error :form="resetPassword" field="password_confirmation"></has-error> -->
                          <div class="errorShow" v-if="resetPassword.errors.has('password_confirmation')" v-html="resetPassword.errors.get('password_confirmation')" />

                      </div>
                      <div class="form-group d-flex justify-content-between align-items-center">
                          <button :disabled="resetPassword.busy" type="submit" class="btn btn-success">
                              Update Password
                          </button>
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
          resetPassword: this.$vform({
              email: '',
              password: '',
              password_confirmation: '',
              token: '',
          }),
      }
  },
  methods: {
      async resetThePassword() {
          try {
              await this.resetPassword.post('/auth/password/reset');
              this.$toast.success({
                  title: 'Success!',
                  message: 'Password updated successfully',
              });
              this.$router.push({name: 'login'})
              this.resetPassword.reset();
          } catch (err) {
              console.log(err)
          }
      }
  },
  mounted(){
      let token = this.$route.params.token;
      if(token){
          this.resetPassword.token = token;
      }else {
          this.$router.push('/');
      }
      this.resetPassword.email = this.$route.query.email
  }
}
</script>

<style>
</style>
