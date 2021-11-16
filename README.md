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
- 02 - basics part 1
  - use the CDN to insert/inject a component into a site, see docs
  - creating a vue app
  - data and templates
  - click events
  - conditional rendering, see showBooks, v-if, v-else, v-show directives, etc. (expensive)
    - v-if,v-else removes/injects to the DOM as needed, v-show uses css (display: none;) to hide an element (less expensive)