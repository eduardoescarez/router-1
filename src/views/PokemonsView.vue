<script setup>

import axios from "axios";
import { ref } from "vue";

const pokemons = ref([])

const getData = async () => {
    try {
        const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        console.log(data.results)
    } catch (error) {
        console.log(error)
    }
};

getData();
</script>
<template>
    <h1>Pokemones</h1>
</template>