<template>
  <h1>Mooses are beautiful!</h1>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click</button>

  <!-- example of teleport; note div is changed to 'teleport' and we tell it where to render (to=".modals") where modals is the class in index.html -->
  <teleport to=".modals" v-if="showModal">
  <!-- <div v-if="showModal"> -->
    <!-- pass 'prop' to the Modal component, also listen for the custom event 'close' to fire tModal -->
    <!-- <Modal header="The fuzzyness is non-ending!" content="The fuzzballs have left the building!" theme="sale" @close="tModal" /> -->
    <!-- changed Modal to use slots: -->
    <Modal theme="sale" @close="tModal">
      
      <!-- this is a 'named' slot -->
      <template v-slot:links>
        <a href="#">sign up for fuzz</a>
        <a href="#">more fuzz</a>
      </template>  

      <!-- put any html div, h1, etc here and it will be injected into the '<slot></slot>' placeholder in Modal.vue (default directive) -->
      <!-- if this content is not here the 'default' content will be used; see the default content inside the slot placehoder in Modal.vue -->
      <h1>Fuzzy Butt Nose</h1>
      <p>moose pants!</p>
    </Modal>
  <!-- </div>  teleport example -->
  </teleport>

  <div v-if="showModal2">
    <Modal @close="tModal2">
      <h1>Modal2</h1>
      <p>Fuzziness is fun!</p>
    </Modal>
  </div>

  <button @click="tModal">modal</button>
  <button @click="tModal2">modal2</button>

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
      title: 'Mooses are fuzzy!', 
      showModal: false, 
      showModal2: false,
    }
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    
    tModal() {
      this.showModal = !this.showModal
    },

    tModal2() {
      this.showModal2 = !this.showModal2
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
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #aaa;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
