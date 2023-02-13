<script setup>
import { useFavoritosStore } from "../store/favoritos";
import { storeToRefs } from "pinia";

const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos);
const { remove:eliminaPokemon } = useFavoritos;

</script>

<template>

    <h1>Favoritos</h1>
    <h3 v-if="favoritos.length === 0"> No hay favoritos 😐</h3>

    <ul class="list-group" v-else>
        <li class="list-group-item" v-for="pokemon in favoritos" :key="pokemon.id"><p>{{ pokemon.name }}</p> <button type="button" class="btn btn-outline-danger" @click="eliminaPokemon(pokemon.id)">Eliminar pokemon 😨</button></li>
    </ul>


</template>