<template>
  <h1>Jobs</h1>
  <!-- the v-if/v-else is not really needed here since nothing will be displayed -->
  <!-- until the jobs array is populated but this seems to be good practice -->
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
        <router-link :to="{ name: 'JobDetail', params: { id: job.id }}">
          <h2>{{ job.title }}</h2>
        </router-link>
    </div>
  </div>
  <div v-else>
    <h4>Loading...</h4>
  </div>

</template>

<script>
export default {
    data() {
        return {
            jobs: [], 
            
            // moved this data to the db.json file to use json-server!
            // jobs: [
            //     {title: 'Mouser', id: 1, details: 'bogus'},
            //     {title: 'Meower', id: 12, details: 'bogus'},
            //     {title: 'Murrer', id: 35, details: 'bogus'},
            //     {title: 'Purrer', id: 467, details: 'bogus'},
            //     {title: 'Squinkiss', id: 53, details: 'bogus'},
            // ]
        }
    }, 

    // use the 'mounted' lifecycle hook to get the data from db.json
    // this fires when the DOM is mounted
    mounted() {
      fetch('http://localhost:3000/jobs')
        .then( r => r.json() )                  // 'r' = response returns a promise
        .then( d => this.jobs = d)            // 'd' = data returned
        .catch( e => console.log(e.message))  // 'e' = error
    }, 

}
</script>

<style>

 .job h2{
    background: #eee;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }

</style>