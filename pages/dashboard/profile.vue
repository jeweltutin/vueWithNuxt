<template>
  <div>
    <div class="card">
      <div class="card-header">
        Profile
      </div>
      <div class="card-body">
        <form action="" @submit.prevent="updateProfile" @keydown="profile_data.onKeydown($event)">
          <div class="form-group mb-3">
            <label for="">Name</label>
            <input type="text" class="form-control" name="name" v-model="profile_data.name" placeholder="Your Name">
            <div class="errorShow" v-if="profile_data.errors.has('name')" v-html="profile_data.errors.get('name')" />
          </div>
          <div class="form-group mb-3">
            <label for="">Email</label>
            <input type="text" class="form-control" name="email" v-model="profile_data.email" placeholder="Your Email">
            <div class="errorShow" v-if="profile_data.errors.has('email')" v-html="profile_data.errors.get('email')" />
          </div>
          <div class="form-group mb-3">
            <label for="">Password</label>
            <input type="password" class="form-control" name="password" v-model="profile_data.password" placeholder="Password">
            <div class="errorShow" v-if="profile_data.errors.has('password')" v-html="profile_data.errors.get('password')" />
          </div>
          <button type="submit" class="btn btn-success" :disabled="profile_data.busy">
            Update Profile
          </button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      profile_data: this.$vform({
          name: '',
          email: '',
          password: ''
        }),
    }
  },
  methods: {
    async updateProfile(){
      try {
          //let response = await this.$auth.loginWith('local', { data: this.login })
          let response  = await this.profile_data.post('/auth/profile');
          this.profile_data.password = '';
          await this.$auth.fetchUser();
          //console.log(response);
          //console.log(response.access_token)
          this.$toast.success({
              title:'Success',
              message:'Profile updated Successfully.'
          })
        } catch (err) {
          console.log(err)
        }
    },
    getUser(){
      let user = this.$store.state.auth.user;
      console.log(user);

      this.profile_data.name = user.name;
      this.profile_data.email = user.email;
      this.profile_data.password = user.password;
    }
  },
  mounted() {
    this.getUser();
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
