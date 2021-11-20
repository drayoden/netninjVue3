<template>
  <!-- only show the green block if showBlock is true -->
  <div class="block" v-if="showBlock" @click="stopTimer">
      click me
  </div>
</template>



<script>
export default {
    props: ['delay'],

    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        }
    },

    // lifecycle hooks:
    mounted() {
        console.log('mounted')
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
            // console.log(this.delay)
        }, this.delay);
    },             


    // only fires if you remove the <Block... component from App.vue and save
    // unmounted() {
    //     console.log('unmounted')
    // }

    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        }, 

        stopTimer() {
            clearInterval(this.timer)
            console.log(this.reactionTime)

            // emit data for App.vue:
            this.$emit('end', this.reactionTime)
        }, 
    }
    
}
</script>



<style>

.block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white; 
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}


</style>