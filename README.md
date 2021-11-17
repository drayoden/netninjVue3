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
- 04 - Vue CLI and bigger projects
  - so far we have only controlled a part of the page. now we look at creating full web sites; multiple components and routes, etc.
  - we use the CLI to start building a full Vue website, aka SPA. We can then use modern JS features, live dev server, optimize code for production
  - requirements: node.js, use npm to install the Vue CLI -- `sudo npm install -g @vue/cli` -- this installs globally ('-g-') so you need to use 'sudo'
  - NOTE: purged all files to start a new project, except for README.md.
  - Vue prompts:
    - `create project in current directory?`  -- y
    - Manually select features
      - `choose Vue version`
      - `babel`
      - deselect `Linter/Formatter`  -> Enter
    - select `3.x` -> Enter
    - select `in dedicated config files`
    - `save this as preset...` -- n
  - creates all the regular files/folders; node_modules, public/, src/, package files, .gitignore and others.
    - /public/index.html -> see the 'id="app"' -> where our code is injected.
    - /src/main.js -> the kickstart file that uses the id="app" to inject our code and uses (imports) the App.vue file.
    - /src/App.vue -> template, script and style sections. All vue files (components) must have at least the template section
  - run the dev server: `npm run serve` -- 'serve' referrs to the 'script' inside package.json 
  - template refs
    - see handleClick method, references the input field with ref="name" -> this.$refs.name
  - multiple components
    - App.vue (root component) - just like the react (App.js) structure. 
    - you may have other components nested under the root (children):
              
              App.vue
             /   |   \
    Header.vue   |    Footer.vue
            Article.vue
            /         \
    Content.vue    Comments.vue         
    
    - deleted /components/HellowWorld.vue
    - created /components/Modal.vue -- not required, can be anywhere. just following the default structure for now.
      - import the Modal component into the App (root) component, register it in the 'export' and add it to the template '<Modal />'


  


