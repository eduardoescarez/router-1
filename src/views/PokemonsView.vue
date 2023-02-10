<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "../composables/getData"


const {getData, data, loading} = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");


</script>
<template>
    <h1>Pokemones</h1>
    <p v-if="loading">Cargardo información</p>
    <div v-if="data">
        <ul class="list-group">
            <li v-for="pokemon in data.results"><router-link :to="`/pokemones/${pokemon.name}`" class="list-group-item list-group-item-action">{{ pokemon.name }}</router-link> </li>
        </ul>
    </div>

</template>

<style scoped>

    ul {
    list-style-type: none;
    }
    
</style>
