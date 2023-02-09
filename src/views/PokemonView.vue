<script setup>

import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const ruta = useRoute();
const rutaDos = useRouter();

const pokemonData = ref([]);

const volverAtras = () => {
    rutaDos.push('/pokemons');
}


const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ruta.params.pokemon}`);
        pokemonData.value = data;
    } catch (error) {
        console.log(error);
        pokemonData.value = null;
    }
};

getData();


</script>

<template>
    <div v-if="pokemonData">
    <img :src="pokemonData.sprites?.front_default" alt=""/>
    <h1>Nombre del pokemon: {{ $route.params.pokemon }}</h1>
    </div>
    <div v-else>
        No existe el pokemon
    </div>

    <p><button @click="volverAtras">Volver atrás</button></p>
</template>