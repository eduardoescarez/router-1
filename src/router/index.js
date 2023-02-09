import { createRouter, createWebHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // linkActiveClass: "active",
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path:"/pokemons",
        name:"pokemons",
        component: () => import('../views/PokemonsView.vue')
    },
    {
        path:"/pokemons/:pokemon",
        name:"pokemon-single",
        component: () => import('../views/PokemonView.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "noencontrado",
        component: () => import("../views/NoEncontrado.vue"),
    },
  ]
})

export default router
