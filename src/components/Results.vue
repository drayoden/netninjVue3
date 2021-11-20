<template>
  <p>Reaction Time: {{ score }}ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'], 

    data() {
        return {
            rank: null
        }
    },

    mounted() {
        if(this.score < 300) {
            this.rank = '-- Forrest reflexes --'
        } else if(this.score < 400) {
            this.rank = '-- Stormy reflexes --'
        } else {
            this.rank = '-- Sloth reflexes --'
        }

    },
}
</script>

<style>

.rank {
    font-size: 1.4em;
    color: crimson;
    font-weight: bold;
}

</style>