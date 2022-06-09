import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import { getAuth} from "firebase/auth";
import About from '../views/About.vue'
import Bus from '../views/Bus.vue'
import ticket from '../views/ticket.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'




const routes = [
  
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Bus',
    name:'Bus',
    component: Bus,
    meta:{
      requiresAuth:true
    } 
  },
  {
    path:'/ticket',
    name:'ticket',
    component: ticket,
    
  },
  {
    path:'/login',
    name:'login',
    component: login
  },
  {
    path:'/signup',
    name:'signup',
    component: signup
  },
  
 
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  //const authenticatedUSer = firebase.auth().currentUser;
 // const auth = getAuth();
 const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const authenticatedUSer = auth.currentUser;
  if(requiresAuth && !authenticatedUSer) {
    next('login');
  }
  else {
    next();
  }

})




export default router
