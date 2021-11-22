import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import Jobdetail from '../views/jobs/Jobsdetail.vue'
import PNF404 from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'BogusPants',
    component: Home
  },
  {
    path: '/bogus',  //shows in the address bar
    name: 'About',   // using the 'name' for the route, see App.vue
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetail',
    component: Jobdetail,
    props: true,
  },

  // redirect
  {
    path: '/all-jobs', 
    redirect: '/jobs',
  }, 

  // catchall - 404

  {
    path: '/:catchAll(.*)', // this is not a function -> RegEx! 
    name: '404NotFound',
    component: PNF404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // use the browser URL history
  routes
})

export default router
