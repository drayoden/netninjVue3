<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'

export default {

    // accept the 'posts' prop
    props: ['posts'],

    components: {SinglePost}, 

    setup(props) {
        // console.log(props)
        // console.log(props.posts)

        // onmounted hook
        onMounted( () =>  console.log('onMounted...'))
        onUnmounted( () => console.log('onUnmounted...'))
        onUpdated( () => console.log('onUpdated...'))
    }, 

    // the options API still works:
    mounted() {
        console.log('mounted using options API...')
    }, 

}
</script>

<style>

</style>