const app = Vue.createApp({
    // data or functions

    data() {
        return {
            showBooks: true,        // used with the v-if directive in index.html
            title: 'fuzzy pants',
            author: 'stormy',
            age: 5
        }
    },

    methods: {

        // no args passed:
        /* 
        changeTitle() {
            // note the use of 'this' to get access to the title property
            this.title = "Moose toes are fabulous!"
        }
        */

        // arg passed in app.js
        changeTitle(t) {
            // note the use of 'this' to get access to the title property
            this.title = t
        },

        tBooks() {
            this.showBooks = !this.showBooks
        }


    }
})

app.mount('#app')