<template>
    <div class="post">
        <router-link :to="{ name: 'Details', params: {id: post.id}}">
            <h3>{{ post.title }}</h3>
        </router-link>
        
        <!-- too much content, using the entire 'body' attribute, use 'snippit' below -->
        <!-- <p>{{ post.body }}</p> -->
        <p>{{ snippit }}</p>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>

    </div>
</template>

<script>
import { computed } from 'vue'

export default {

    props: ['post'], 

    setup(props) {
        const snippit = computed( () => {

            // returns the firs 100 chars of the long body text: 
            return props.post.body.substring(0,100) + '....'
        })

        return{ snippit }
    }, 

}
</script>

<style>

</style>