<template>
  <h1>Mooses are beautiful!</h1>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click</button>

  <Modal />

</template>

<script>
import Modal from './components/Modal.vue'

// import HelloWorld from './components/HelloWorld.vue'

export default {
  // name: 'App',
  // components: {
  //   HelloWorld
  // }

  // register the Modal component:
  components: { Modal}, 

  data() {
    return {
      title: 'Mooses are fuzzy!'
    }
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
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
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #aaa;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
