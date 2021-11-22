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
07 - Forms & Inputs
  - create new proj: `vue create .` -- same options as before: manual, x-Linter, 3x, dedicated file, x-preset, Enter.
  - delete all 'HelloWorld' stuff - vue file, App.vue: template, imports, components.
  - create simple form/input for email
  - 2-way data binding -- every character typed into the email field updates the email: property (v-model)
  - select properties -- v-model as well
  - check boxes -- v-model also, magic!
  - keyboard events -- place each skill into the skills array but clear the input field when a comma; ',' is typed. see v-for in the 'skills' input field
  - delete skill -- use @click on each skill element to fire 'deleteMe' - use filter to get new array.
  - submit forms -- validate password, submit to console.
    - normal submit behavior is to reset the page, we want to prevent that with vue. see 'form' @submit.prevent, submitForm method - prevents default behavior and the data can be verified before submitting 
