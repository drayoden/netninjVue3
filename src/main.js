import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // do not have to explicitly import the index.js file, this is default

createApp(App).use(router).mount('#app')
