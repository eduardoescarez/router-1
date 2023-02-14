<script setup>
import { useFavoritosStore } from "../store/favoritos";
import { storeToRefs } from "pinia";

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos);
const { remove:eliminaPokemon } = useFavoritos;

const formatter = (string) => {
    return string
        .split("-")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
};

</script>

<template>

    <h1>Favoritos</h1>
    <h3 v-if="favoritos.length === 0"> Para que esta parte funcione necesitas agregar un favorito antes 😅</h3>

    <ul class="list-group" v-else>
        <li class="list-group-item" v-for="pokemon in favoritos" :key="pokemon.id"><p>{{ formatter(pokemon.name) }}</p> <router-link type="button" class="btn btn-outline-primary m-2" :to="`/pokemones/${pokemon.name}`">Más información 🔍</router-link> <button type="button" class="btn btn-outline-danger" @click="eliminaPokemon(pokemon.id)">Eliminar pokemon 😨</button></li>
    </ul>


</template>