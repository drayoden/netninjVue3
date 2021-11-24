// HomeB.vue -- copy to Home.vue to run tut

<template>
  <div class="home">
    <h1>home</h1>
    <h2>Refs</h2>
    <p>{{ felineOne.name }} - {{ felineOne.age }}</p>
    <button @click="updateFelineOne">OK</button>
    <h2>Reactive</h2>
    <p>{{ felineTwo.name }} - {{ felineTwo.age }}</p>
    <button @click="updateFelineTwo">OK</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'  // added 'reactive'  

export default {
  name: 'Home',

  // setup is for 'refs vs reactive' section
  setup() {
    const felineOne = ref({ name: 'stormy', age: 5 })
    const felineTwo = reactive({ name: 'forrest', age: 6 })


    // note the difference in using ref/reactive here when we update the age properties:
    const updateFelineOne = () => {
      felineOne.value.age = 5.5
    }

    const updateFelineTwo = () => {
      felineTwo.age = 5.6
    }

    return { felineOne, updateFelineOne, felineTwo, updateFelineTwo }

  
  }, 

  // created() {
  //   console.log('created')
  // }, 

  // mounted() {
  //   console.log('mounted')
  // }

}
</script>
