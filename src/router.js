import VueRouter from 'vue-router'

import Splash from './pages/Splash'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

const routes = [
  { path: '/', component: Splash },
  { path: '/profile', component: About },
  { path: '/experience', component: Experience },
  { path: '/projects', component: Projects }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router