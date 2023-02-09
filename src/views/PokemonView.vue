<script setup>

import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const ruta = useRoute();
const rutaDos = useRouter();

const pokemonData = ref([]);

const volverAtras = () => {
    rutaDos.push('/pokemons')
}


const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ruta.params.pokemon}`);
        pokemonData.value = data;
    } catch (error) {
        console.log(error);
    }
};

getData();


</script>

<template>
    <img :src="pokemonData.sprites.front_default"/>
    <h1>Nombre del pokemon: {{ $route.params.pokemon }}</h1>

    <p><button @click="volverAtras">Volver atrás</button></p>
</template>