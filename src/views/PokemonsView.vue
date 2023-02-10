<script setup>

import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const pokemons = ref([]);

const getData = async () => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        pokemons.value = data.results;
    } catch (error) {
        console.log(error);
    }
};

getData();
</script>
<template>
    <h1>Pokemones</h1>
    <ul class="list-group">
        <li v-for="pokemon in pokemons"><router-link :to="`/pokemones/${pokemon.name}`" class="list-group-item list-group-item-action">{{ pokemon.name }}</router-link> </li>
    </ul>
</template>

<style scoped>

    ul {
    list-style-type: none;
    }
    
</style>
