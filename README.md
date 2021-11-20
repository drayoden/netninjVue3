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
- 06 - reaction time game -- two components: Block, Results
  - `vue create .`
    - manual, x-linter, 3x, dedicated config, x-save preset
  - delete: /components/HelloWorld.vue -- remove refs in App.vue
  - created the Block component
  - lifecycle hooks -- to set the delay
    - see lifecycle diagram: https://v3.vuejs.org/guide/instance.html#lifecycle-diagram
      - there are four basic steps: create, mount, update, unmount
      - each step has two lifecycle hooks: beforeCreate, created; beforeMount, mounted, etc...
  - create the reaction timer (when the green block is clicked)
  - custom events with data -- we need get the reaction time from the Block comp back to App.vue and then display it with the Results comp
    - we 'emit' the data from Block (as before) 
  - create and display the results via the Results comp -- remember the ':'
  - finishing touches -- rank the user based on the score