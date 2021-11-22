<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetail', params: { id: job.id }}">
        <h2>{{ job.title }}</h2>
      </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {title: 'Mouser', id: 1, details: 'bogus'},
                {title: 'Meower', id: 12, details: 'bogus'},
                {title: 'Murrer', id: 35, details: 'bogus'},
                {title: 'Purrer', id: 467, details: 'bogus'},
                {title: 'Squinkiss', id: 53, details: 'bogus'},
            ]
        }
    }

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