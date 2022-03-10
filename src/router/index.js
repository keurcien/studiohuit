import Vue from 'vue'
import VueRouter from 'vue-router'
import PublicHome from '@/views/PublicHome.vue'
import Gallery from '@/views/Gallery.vue'
import Contact from '@/views/Contact.vue'
import store from '@/store.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PublicHome',
    component: PublicHome
  },
  {
    path: '/galerie',
    name: 'Gallery',
    component: Gallery,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/tarifs',
    name: 'Prices',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Prices.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(store.state.isAuthenticated)
    if (store.state.isAuthenticated) {
      next()
      return
    }
    next('/')
  }
  next()
})

export default router
