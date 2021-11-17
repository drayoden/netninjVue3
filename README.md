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
- 03 - basics part 2
  - other mouse events
  - output lists, replace single book with an array of books in data (app.js)
  - attribute binding, bind dynamic values to html attribute, i.e. an 'href' attribute can be dynamic.
  - dynamic classes (css)
  - toggle css classes (isFav)
  - computed properties; way to define a data property that is dependent on other data. i.e. a 'filtered' set of books is dependent on the books array (app.js). See filteredBooks function used to display isFav books.