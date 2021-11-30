### Vue3 tut: net ninja Vue.js 3

-- https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=1

---
- 01 - Intro
  - like React can be inserted into an existing site (CDN) or you can create an SPA.
  - Vue3 features:
    - omposition API -- reusability and setup() function
    - multiple root elements (React does not allow this)
    - teleport component - render content from one component in a different place in the DOM. good for modals
    - suspense component - handles async, provide fallback content i.e. spinner, progress bar, etc.
    - typescript support - optional
  - vscode: liveserver, vetur (Vue tooling), material icons (optional)
- 11 - composition API part 2
  - using props in setup()
  - using lifecycle hooks inside setup(), we import from vue and the names change from 'mounted' to 'onmounted' or 'updated' to 'onupdated', etc. see PostList.vue
  - fetching data in setup() -- created /data/db.json file and installed the json-server, created HomeB.vue to 'fetch' data inside setup.
  - reusable composable functions -- scenario: very big app with loads of components and we want to use the same data that is 'fetched' inside the setup many times in the various components thus you would have to repeat the setup code in each of the many components to make it work -- not very efficient!
    - place the code into it's own function/file and import where ever it is needed.
    - created /src/composables/getPosts.js (note a JS file not a vue file!) and populate with the contents of the Home.vue setup() funtion -> HomeC.vue
    - also output the tags in SinglePost.vue to get the tags in db.json
  - create a details component; a route for the compoent, shows the entire 'body' not just the snippit. created /views/Details.vue, /src/composables/getPost.js and use the getPost function inside Details.vue