// HomeB.vue -- copy to Home.vue

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
import { ref } from 'vue'

export default {
  name: 'Home',

  components: { PostList },

  // setup using computed values
  setup() {
  
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts')
        // console.log(data)
        if (!data.ok) {
          throw Error('Oops! No Data!')
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    return { posts, error }
  }, 

}
</script>
