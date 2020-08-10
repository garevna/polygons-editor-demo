import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/polygons',
    name: 'polygons',
    component: () => import('@/views/Polygons.vue'),
    meta: {
      reload: true
    }
  },
  {
    path: '/markers',
    name: 'markers',
    component: () => import('@/views/Markers.vue'),
    meta: {
      reload: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// eslint-disable-next-line no-unused-vars
// router.afterEach((to, from) => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   })
// })

export default router
