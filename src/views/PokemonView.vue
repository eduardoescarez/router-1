<script setup>

import axios from "axios";
import { ref } from "vue";

const dataPokemon = ref([]);


const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        dataPokemon.value = data
        console.log(dataPokemon.value);
    } catch (error) {
        console.log(error);
    }
};

getData();


</script>

<template>
    <h1>Nombre del pokemon: {{ $route.params.pokemon }}</h1>
</template>