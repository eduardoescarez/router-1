<script setup>
import { storeToRefs } from "pinia";
import { useFavoritosStore } from "@/store/favoritos";
import { useFormatter} from "@/composables/getFormato";

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos);
const { remove:eliminaPokemon } = useFavoritos;

const {formatter} = useFormatter();

</script>

<template>
    <div class="container"><h1>Favoritos</h1></div>
    <div class="container" v-if="favoritos.length === 0"><h3> Para que esta sección funcione necesitas agregar antes un pokemon como favorito 😅</h3></div>
    <div class="container" v-else>
        <div class="row d-flex align-items-center" v-for="pokemon in favoritos" :key="pokemon.id">
            <div class="col-1">
                <img :src="pokemon.sprites.front_default"/>
            </div>
            <div class="col-2 fs-3">
                <p>{{ formatter(pokemon.name) }}</p>
            </div>
            <div class="col-2">
                <router-link type="button" class="btn btn-outline-primary" :to="`/pokemones/${pokemon.name}`">🔍Más información</router-link>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-outline-danger" @click="eliminaPokemon(pokemon.id)">❌ Eliminar pokemon</button>
            </div>
        </div>
    </div>
</template>