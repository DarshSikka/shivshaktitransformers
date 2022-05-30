import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/achievements',
    name: 'achievements', 
    component: ()=>import("../views/AchievementsView.vue")
  },
  {
    path: '/updates', 
    name: 'updates',
    component: ()=>import("../views/UpdatesView.vue")
  },
  {
    path: '/update/:id',
    name: 'update', 
    component: ()=>import("../views/UpdateView.vue"),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
