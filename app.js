const app = Vue.createApp({
    // data or functions

    data() {
        return {
            url: 'http://newleafdesign.com', 
            showBooks: true,        // used with the v-if directive in index.html
            // title: 'fuzzy pants',
            //author: 'stormy',
            //age: 5, 

            books: [
                {title: 'Fuzzy Butt Times', author: 'stormy', img: 'assets/stormy.jpeg', isFav: true},
                {title: 'Being Knuckles', author: 'forrest', img: 'assets/forrest.jpeg', isFav: true},
                {title: 'Run Forrest Run', author: 'forrest', img: 'assets/forrest.jpeg', isFav: false},
                {title: 'Living with Pillow Paws', author: 'stormy', img: 'assets/stormy.jpeg', isFav: true},
                {title: 'Fuzz... How to Live With It', author: 'stormy', img: 'assets/stormy.jpeg', isFav: true},
                {title: 'The Pear Shaped Squinkiss', author: 'forrest', img: 'assets/forrest.jpeg', isFav: false},
                {title: 'Being Bully', author: 'forrest', img: 'assets/forrest.jpeg', isFav: true},
                {title: 'Fur Balls...', author: 'stormy', img: 'assets/stormy.jpeg', isFav: false},
            ],

            // handleMousemove
            x:0,
            y:0, 
        }
    },

    // JS filter
    computed: {
        filteredBooks() {
            return this.books.filter( (book) => book.isFav)
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
        },

        handleEvent(e, data) {
            console.log(e.type)
            if (data) {
                console.log(data)
            }
        }, 

        handleMousemove(e) {
            this.x = e.offsetX  // relative to the box
            this.y = e.offsetY
        },

        tFav(book) {
            book.isFav = !book.isFav
        },


    }
})

app.mount('#app')