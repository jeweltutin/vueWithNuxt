<template>
    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <NuxtLogo></NuxtLogo>
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li class="scroll-to-section">
                              <NuxtLink class="active" to="/">Home page</NuxtLink>
                            </li>
                            <li class="scroll-to-section">
                              <NuxtLink to="/about">About</NuxtLink>
                            </li>

                        <!--
                            <li class="submenu">
                                <a href="javascript:;">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down Page 1</a></li>
                                    <li><a href="#">Drop Down Page 2</a></li>
                                    <li><a href="#">Drop Down Page 3</a></li>
                                </ul>
                            </li>
                        -->
                            <li class="scroll-to-section">
                              <nuxt-link to="/blog">Blog</nuxt-link>
                            </li>
                            <li class="scroll-to-section">
                              <NuxtLink to="/posts" >Posts</NuxtLink>
                            </li>
                            <li class="scroll-to-section" v-if="loggedIn">
                              <NuxtLink :to="{name: 'dashboard'}" >Dashboard</NuxtLink>
                            </li>
                            <li class="submenu">
                                <a href="javascript:;">API</a>
                                <ul>
                                    <li><a href="#">Features Page 1</a></li>
                                    <li><a href="#">Features Page 2</a></li>
                                    <li><a href="#">Features Page 3</a></li>
                                    <li><a href="#">Features Page 4</a></li>
                                </ul>
                            </li>
                            <!-- <li class=""><a rel="sponsored" href="https://templatemo.com" target="_blank">External URL</a></li> -->
                            <li class="scroll-to-section"><a href="#reservation">Contact Us</a></li>
                            <li class="scroll-to-section" v-if="!loggedIn"><nuxt-link :to="{name: 'login'}">Login</nuxt-link> </li>
                            <li class="scroll-to-section" v-if="!loggedIn"><nuxt-link :to="{name: 'register'}">Register</nuxt-link> </li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- ***** Header Area End ***** -->
</template>

<script>
import NuxtLogo from "./NuxtLogo.vue";
export default{
  components: {
    NuxtLogo
  },
  computed: {
    loggedIn(){
      return this.$auth.loggedIn;   // Access using auth
      //return this.$store.state.auth.loggedIn;   //// Access using vuex
    }
  }
}
</script>
