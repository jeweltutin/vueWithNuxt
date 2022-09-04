<template>
  <div>
    <div class="card">
      <div class="card-header">
        Dashboard
      </div>
      <div class="card-body py-5">
        <h5 class="text-success" py-3 v-if="loggedId">Welcome, {{ user.name }}</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ratione reprehenderit officiis aspernatur optio quae debitis aperiam,
        earum consequuntur quibusdam cumque culpa rerum dolorem dicta magnam ex provident impedit. Ut, fugit.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loggedId(){
      return this.$auth.loggedIn;   // Access using auth
      //return this.$store.state.auth.loggedIn;   //// Access using vuex
    },
    user(){
      return this.$auth.user;
      //return this.$store.state.auth.user;
    }
  }
}
</script>

<style>

</style>
