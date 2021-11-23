<template>
    <!-- without the 'v-if' here 'job' is still null, we have to wait for the fetch to   -->
    <!-- retrieve the job vaules first -->
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <!-- the params.<name> 'name' must match the route parameter in index.js, here we use 'id', could be 'slug' or anything!  -->
        <!-- <p>job id: {{ $route.params.id }}</p>  -->

        <!-- another way of doing the same as above only the id is stored in the data below -->
        <p>job id: {{ id }}</p> 
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <h4>Loading...</h4>
    </div>
 
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

    data() {
        return {
            job: null
        }
    },

    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
          .then( r => r.json() )
          .then( d => this.job = d)
          .then( e => console.log(e.message))
    }, 
}
</script>

<style>

</style>