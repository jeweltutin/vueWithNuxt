<template>
  <section style="padding-top: 100px;" class="section" id="post">
    <div class="container">
      <div class="row">
        <h1 class="title">Posts list:</h1>
        <!-- <article>
          <h1 class="title">What is Balut?</h1>
          <p>
            In Vue, mustaches are only used for text interpolation.
            To bind an attribute to a dynamic value, we use the v-bind directive:
          </p>
        </article> -->
        <table>
          <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          </tr>
          <tr v-for="post in posts" :key="post.id">
            <td width="60px">
              {{ post.id }}
            </td>
            <td width="300px">
              <nuxt-link :to="{name: 'posts-id', params: {id: post.id}}">
                {{ post.title }}
              </nuxt-link>
            </td>
            <td >
              {{ post.content }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>

</template>

<script>
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
    }
  }

</script>


<style scoped>
.container {
  justify-content: left;
  align-items: left;
  text-align: left;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 1px;
  color: #444;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
}
.links {
  padding-top: 15px;
}

table td {
  border: 1px solid red;
  padding: 20px;
}
</style>
