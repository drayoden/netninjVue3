<template>
  <div id="nav">
    <!-- this internalizes the routes instead of using an anchor tag -->
    
    <!-- uses the path to route, see index.js; the 'name' does not matter -->
    <router-link to="/">Home</router-link> |
    
    
    <!-- use an object for the route -- using the 'name' of the route from index.js, the 'path' does not matter -->
    <router-link :to="{ name: 'About'}">About</router-link> |
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link>
  </div>

  <button @click="redirect">redir</button>
  <button @click="back">back</button>  
  <button @click="forward">forw</button>

  <router-view/>
</template>


<script>

export default {
  methods:  {
    redirect() {
      this.$router.push({ name: "BogusPants" })
    },
    back() {
      this.$router.go(-1)  // number of steps to go back in the web history
    },
    forward() {
      this.$router.go(1)
    },
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
