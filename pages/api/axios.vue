<template>
 <div class="blog-page">
    <div class="container">
      <h2>Latest Posts</h2>
      <div class="articles">
        <div class="article" v-for="planet of planets" :key="planet">

          <div class="article-inner">
              <!-- <img src="assets/blog/blog-2.jpg" alt="" /> -->
              <!-- <img :src="require(`~/files/blog/${article.img}`)" alt="Blog Image" /> -->
              <img :src="planet.image" alt="Blog Image" />
              <div class="detail">
                <h3>{{ planet.title }}</h3>
                <br/>
                <p>
                  {{ planet.description }}
                </p>
                <br/>
                <p><strong>Radious:</strong> {{ planet.radius }}</p>
              </div>
            </div>

          </div>
          <div v-if="error" class="text-red-700">
            <ErrorAlert :message="error.message" />
            {{ error.message }}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  async asyncData(){
    try {
      const api = 'https://api.nuxtjs.dev/planets'
      const planets = await axios.get(api).then((response) => {
      return response.data
    })
    return { planets }

    } catch (error) {
      return { error }
    }

  }

}
</script>

<style>

</style>
