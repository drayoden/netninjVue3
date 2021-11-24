// HomeA.vue -- copy to Home.vue to run tut

<template>
  <div class="home">home
    <p ref="p">my name is {{ name }} and I am {{ age }} years old</p>
    <button @click="hClick">OK</button>
    <button @click="age++">age++</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'  // added 'reactive' see 

export default {
  name: 'Home',

  // setup is fired before any other... 
  setup() {
    
    const p = ref(null)

    // not reactive like the regular options data... objects
    // let name = 'stormy'
    // let age = 5

    // these are reactive - can be changed like before
    const name = ref('stormy')
    const age = ref(5)

    const hClick = () => {
      name.value = 'forrest'
      age.value = 5.5
      // console.log(p.value)
      // p.value.classList.add("test")
      // p.value.textContent = "fuzziness forever!"
    }

    // return {name: name, age: age}
    // can be shortend to this:
    return {name, age, hClick, p}
  
  }, 

  // created() {
  //   console.log('created')
  // }, 

  // mounted() {
  //   console.log('mounted')
  // }

}
</script>
