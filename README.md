### Vue3 tut: net ninja Vue.js 3

-- https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=1

---
- 01 - Intro
  - like React can be inserted into an existing site (CDN) or you can create an SPA.
  - Vue3 features:
    - composition API -- reusability and setup() function
    - multiple root elements (React does not allow this)
    - teleport component - render content from one component in a different place in the DOM. good for modals
    - suspense component - handles async, provide fallback content i.e. spinner, progress bar, etc.
    - typescript support - optional
  - vscode: liveserver, vetur (Vue tooling), material icons (optional)
- 05 - Vue CLI and bigger projects part 2 
  - scoped and global styles, all styles so far have been global
  - use 'scoped' in the <style> sections -> performance hit due to all of the data attributes created.
  - could just make the selectors more specific.
  - could create a /assets/global.css -> import it in main.js
  - props - just like react - pass data to component from parent component. see header, content, theme props passed to Modal.vue from App.vue
  - emit custom events - show/hide the modal - see showModal property and the custom event 'close'
  - event modifiers - prevent the modal from closing when you click the modal -- restrict the 'backdrop' element to click on it's self and not a child -- use a click event modifier, i.e.:  @click.right (right-click) -- intellisense will list when you type '@click.' -- used @click.self on the 'backdrop' element! 
  - slots -- what if we wanted to pass an entire form (template) into the Modal component? see Modal.vue -> '<slot></slot>' and App.vue where the template is defined. note 'named' slots -> links.
  - another modal
  - teleport: vue3 -> teleport component -> teleport content to a different location in the DOM even outside the scope of vue (id="app")


