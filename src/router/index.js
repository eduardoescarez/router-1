import { createRouter, createWebHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.min.css'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path:"/pokemones",
        name:"pokemones",
        component: () => import('../views/PokemonsView.vue')
    },
    {
        path:"/pokemones/:pokemon",
        name:"pokemon-single",
        component: () => import('../views/PokemonView.vue')
    },
    {
        path:"/favoritos",
        name:"favoritos",
        component: () => import('../views/FavoritosView.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "noencontrado",
        component: () => import("../views/NoEncontradoView.vue"),
    },
  ]
})

export default router
