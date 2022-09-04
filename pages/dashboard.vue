<template>
  <div class="container">
    <div style="over-flow:hidden;" class="row">
      <div class="col-3">
        <div class="card">
          <div class="card-header">Admin</div>
          <div class="card-body">
            <ul>
              <li><nuxt-link :to="{ name: 'dashboard' }">Dashboard</nuxt-link></li>
              <li><nuxt-link :to="{ name: 'dashboard-profile' }">Profile</nuxt-link></li>
              <li><a href="">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="card">
          <nuxt-child />
        </div>
      </div>
    </div>
  </div>
  </template>

  <script>
  export default {

  }
  </script>

  <style>

  </style>
