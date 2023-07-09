import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Persons from '../views/Persons'
import Friseur1View from '../views/Friseur1View.vue'
import Friseur2View from '../views/Friseur2View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/persons',
    name: 'Persons',
    component: Persons
  },
  {
    path: '/friseur1view',
    name: 'Friseur1View',
    component: Friseur1View
  },
  {
    path: '/friseur2view',
    name: 'Friseur2View',
    component: Friseur2View
  }
]
// letzer Durchgang
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
