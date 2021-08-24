import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Search from '../components/Search.vue'
import Results from '../components/Results.vue'
import Possibilities from '../components/Possibilities.vue'
import Calendar from '../components/Calendar.vue'
import Error from '../components/Error.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  },
  {
    path: '/good_weather',
    name: 'Possibilities',
    component: Possibilities
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
