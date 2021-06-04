import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/where',
    name: 'Where',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Where.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import(/* webpackChunkName: "productos" */ '../views/Productos.vue')
  },
  {
    path:'/crud',
    name: 'Crud',
    component: () => import(/* webpackChunkName: "" */ '../views/Crud.vue')
  },
  {
    path:'/detalle/:id',
    name: 'Detalle',
    component: () => import(/* webpackChunkName: "" */ '../views/Detalle.vue')
  },
  {
    path:'/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: ""*/ '../views/Editar.vue')
  },
  {
    path:'/create',
    name: 'Create',
    component: () => import('../views/Crear.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
