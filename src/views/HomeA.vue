// HomeA.vue -- copy to Home.vue

<template>
  <div class="home">
    <h1>home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <!-- toggle the 'onMounted' and 'onUnmounted' hooks in PostList.vue -->
    <button @click="showPosts = !showPosts">tPosts</button>
    <!-- if we change the data (pop) this fires the 'onUpdated' hook in PostList.vue -->
    <button @click="posts.pop()">dPost</button>
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
  
    const posts = ref([
      // note lorem ipsum is very long; using a 'snipit' in SinglePost.vue
      {title: 'welcome to the fuzzy blog', body: 'Lorem id1 ipsum dolor sit amet consectetur, adipisicing elit. Iusto at possimus ullam obcaecati dignissimos impedit sit! Similique, neque eum nulla tenetur nesciunt sit at qui numquam nobis maxime quos vitae, eos velit mollitia vero modi, nam deserunt sequi! Accusantium, corporis exercitationem ratione, dicta qui quos voluptatum rem soluta laudantium nisi quasi id debitis iste tenetur atque perspiciatis esse minima officia? Ea in temporibus excepturi soluta laborum libero sunt facere officiis! At hic adipisci recusandae sunt animi sed sit modi similique, asperiores qui inventore architecto illum incidunt ut reprehenderit quaerat quo voluptate dolores perferendis sapiente vel? Animi vero officia molestiae necessitatibus!', id: 1},
      {title: 'top five ways to clean the fuzz', body: 'Lorem id2 ipsum dolor sit amet consectetur, adipisicing elit. Iusto at possimus ullam obcaecati dignissimos impedit sit! Similique, neque eum nulla tenetur nesciunt sit at qui numquam nobis maxime quos vitae, eos velit mollitia vero modi, nam deserunt sequi! Accusantium, corporis exercitationem ratione, dicta qui quos voluptatum rem soluta laudantium nisi quasi id debitis iste tenetur atque perspiciatis esse minima officia? Ea in temporibus excepturi soluta laborum libero sunt facere officiis! At hic adipisci recusandae sunt animi sed sit modi similique, asperiores qui inventore architecto illum incidunt ut reprehenderit quaerat quo voluptate dolores perferendis sapiente vel? Animi vero officia molestiae necessitatibus!', id: 1},
    ])

    const showPosts = ref(true)
    
    return { posts, showPosts }
  }, 

}
</script>
