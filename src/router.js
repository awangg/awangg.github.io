import VueRouter from 'vue-router'

import Landing from './pages/Landing'

const routes = [
  { path: '/', component: Landing }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router