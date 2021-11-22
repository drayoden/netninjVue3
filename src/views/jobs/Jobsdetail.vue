<template>
    <h1>Jobs detail page</h1>
    <!-- the params.<name> 'name' must match the route parameter in index.js, here we use 'id', could be 'slug' or anything!  -->
    <!-- <p>job id: {{ $route.params.id }}</p>  -->

    <!-- another way of doing the same as above only the id is stored in the data below -->
    <p>job id: {{ id }}</p> 

  
</template>

<script>
export default {
    props: ['id'],  // this replaces the param.id below, we now just send the id as a prop 
                    // from Jobs.vue, see job/:id route in index.js; 'props: true' 
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>