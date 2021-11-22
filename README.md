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
08 - Vue router
  - so far just a root comp (app) with child comp. Now we want to have multiple pages i.e. about, porfolio, etc.
  - setup -- use the vue cli to setup routing for us:
    - manually, +-router, x-linter, 3.x, +-router history mode, +-dedicated config file, x-preset
  - new stuff:  the router in package.json, /src/router/index.js, main.js also uses the router when mounting the injection point; '#app'. also '<router-view/>' in App.vue (template) -> this is where the route component is injected; About or Home, etc.
    - /src/router/index.js -- removed lazyloading of the About comp. imported as usual
  - router links -- see App.vue in teplate '<router-link to="/about">About</router-link>'
  - removed HelloWorld from Home.vue, template, components, and files.
  - folder structure -- the structure can be anything, just keep it consistent. for a small proj the views folder is fine, i.e. a contact page would have Contact.vue in the views folder.
    - if you had a Jobs.vue that listed jobs available but each job also had link for the job details, i.e. a Jobsdetail.vue file. since both are related (jobs) maybe create a /views/jobs folder for all of the 'jobs' components.
  - route parameters -- the URL (path) for the job detail could be '/jobs/123' or '/jobs/377' where 123 or 377 is an id. see index.js for the jobs/id route.
  - dynamic links -- we need to imbed the id into each job so they can be clicked
  - redirects & 404's -- redirect '/all-jobs' to '/jobs' -- see index.js 'redirects' at bottom
    - catchall route (404) -- any URL 'works' but no content, only the nav.
  - programatic navigation -- can push other routes into the web history, see App.vue methods
