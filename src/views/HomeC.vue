// HomeC.vue -- copy to Home.vue

<template>
  <div class="home">
    <h1>home</h1>
    <div v-if="error">{{ error }}</div>

    <!-- display 'loading' message until the data is ready -->
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>...Loading...</div>

  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',

  components: { PostList },

  // setup using computed values
  setup() {
    // destructure the data returned from getPosts...
    const {posts, error, load} = getPosts()

    // invoke the load function as before
    load()

    return { posts, error }
  }, 

}
</script>
