<template>
    <div class="container">
      <div class="row">
        <article>
          <h1>Post Details</h1>
          <h2>{{post.title}}</h2>
          <p>
            {{post.content}}
          </p>
        </article>

        <aside>
          <h3>Posts you may might enjoy</h3>
          <ul>
            <li v-for="related in relatedPosts" :key="related.id">
              <!--<a :href="`/posts/${related.id}`">{{related.title}}</a>-->
              <!--<nuxt-link :to="`/posts/${related.id}`"> -->
              <nuxt-link :to="{name: 'posts-id', params: {id: related.id}}">
                {{related.title}}
              </nuxt-link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
</template>

<script>
  import {
    computed
  } from 'vue';

  export default {
    data() {
      return {
        id: this.$route.params.id,
        posts: [
          {
            id: 'fst',
            title: 'First Title',
            content: 'This article is focused on laravel 9 flash message example. you will learn how to implement flash message in laravel 9.Here you will learn laravel 9 flash message from the controller. This tutorial will give you a simple example of laravel 9 flash message notification'
          },
          {
            id: '2',
            title: 'Second Title',
            content: 'This article is focused on laravel 9 flash message example. you will learn how to implement flash message in laravel 9.Here you will learn laravel 9 flash message from the controller. This tutorial will give you a simple example of laravel 9 flash message notification'
          },
          {
            id: '3',
            title: 'Third Title',
            content: 'This article is focused on laravel 9 flash message example. you will learn how to implement flash message in laravel 9.Here you will learn laravel 9 flash message from the controller. This tutorial will give you a simple example of laravel 9 flash message notification'
          },
          {
            id: '4',
            title: 'Forth Title',
            content: 'This article is focused on laravel 9 flash message example. you will learn how to implement flash message in laravel 9.Here you will learn laravel 9 flash message from the controller. This tutorial will give you a simple example of laravel 9 flash message notification'
          }

        ]
      }
    },

    computed: {
      post() {
        return this.posts.find(post => post.id === this.id)
      },
      relatedPosts(){
        return this.posts.filter(post => post.id !== this.id)
      }
    }

  }

</script>

<style scoped>
article{
  max-width: 70%;
}
</style>
