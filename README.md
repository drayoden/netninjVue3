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
- 10 - composition API part 1
  - so far we have been using the 'options API', i.e. in side the component we export data, methods, computed, and lifecycle hooks. 
  - composition API -- groups all of the above into a setup function. larger projects are more suited for the composition API: organization, code reuse, complex logic, etc. (auth, databases)
  - create new proj: `manually, +Router, -linter, 3x, router history, dedicated config, -save presets` -- remove Hello World (all), About route/files
  - use the setup() hook
  - template refs
  - Refs vs Reactive -- NOTE: created multiple versions of Home.vue: HomeA.vue & HomeB.vue.
    - HomeA.vue has the setup hook for sections 'template refs' & 'refs for reactivity'
    - HomeB.vue has the setup hook for sections 'refs vs reactive' 
  - which one is better?  -- this is dumb, the whole reactive 'thing' just seems like a waste of time!
    - reactive: cannot use primitive values
    - refs: can use primitive values, will work with external composition funtions. used from this point on...
  - computed values -- HomeC.vue for 'computed values' section
  - watch & watchEffect -- HomeC.vue 
    - 
