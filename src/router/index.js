import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path:"/pokemones",
        name:"pokemones",
        component: () => import('@/views/PokemonsView.vue')
    },
    {
        path:"/pokemones/:pokemon",
        name:"pokemon-single",
        component: () => import('@/views/SinglePokemonView.vue')
    },
    {
        path:"/favoritos",
        name:"favoritos",
        component: () => import('@/views/FavoritesView.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "noencontrado",
        component: () => import("@/views/NotFoundView.vue"),
    },
  ]
})

export default router
