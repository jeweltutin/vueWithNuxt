<template>
  <div>
    <TheNavBar></TheNavBar>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>


<script>
import TheNavBar from '~/components/TheNavBar.vue';
import Footer from '../components/Footer.vue';
export default {
    name: "IndexPage",
    components: { TheNavBar, Footer }
}
</script>

<style>
h1{
  margin: 15px 0;
}
h3{
  color: blue;
}
</style>
