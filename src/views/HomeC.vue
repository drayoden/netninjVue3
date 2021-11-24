// HomeC.vue -- copy to Home.vue to run tut

<template>
  <div class="home">
    <h1>home</h1>
    <p>{{ name }}</p>

    <input type="text" v-model="search">
    <p>search term: {{ search }}</p>
    <div v-for="n in matchNames" :key="n">{{ n }}</div>
    <button @click="hClick">OK</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, ref, watch, watchEffect } from 'vue'

export default {
  name: 'Home',

  // setup using computed values
  setup() {
  
    const name = computed( () => {
      return 'stormy'
    })

    const search = ref('')
    const names = ref(['stormy','forrest','tinny','isabell','tanisha','snooper'])

    // let's 'watch' the search ref (above). the function will fire each time there is a change to search
    // watch(search, () => {
    //   console.log('-- watch --') 
    // })
    
    // watchEffect(() => {
    //   console.log('--watchEffect 1--')  // fires when setup() first runs -- only once.
    //   console.log('--watchEffect--', search.value)  // now it runs everytime 'search' changes
    // })

    // how to stop 'watching'...
    const stopW = watch(search, () => {
      console.log('-- watch --') 
    })
    
    const stopWE = watchEffect(() => {
      console.log('--watchEffect 1--')  // fires when setup() first runs -- only once.
      console.log('--watchEffect--', search.value)  // now it runs everytime 'search' changes
    })

    const matchNames = computed( () => {
      return names.value.filter( (name) => name.includes(search.value))
    })

    const hClick = () => {
      stopW()
      stopWE()
    }

    return { name, names, search, matchNames, hClick }

  
  }, 

}
</script>
