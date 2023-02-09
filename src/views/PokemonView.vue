<script setup>

import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const ruta = useRoute();
const rutaDos = useRouter();


const back = () => {
    rutaDos.push('/pokemons')
}


const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ruta.params.pokemon}`);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getData();


</script>

<template>
    <h1>Nombre del pokemon: {{ $route.params.pokemon }}</h1>

    <p><button @click="back">Volver atrás</button></p>
</template>