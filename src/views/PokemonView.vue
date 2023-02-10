<script setup>

import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import FlechaAtras from "../components/FlechaAtras.vue"

const ruta = useRoute();
const rutaDos = useRouter();

const pokemonData = ref([]);

const volverAtras = () => {
    rutaDos.push('/pokemones');
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
    <div class="container"> 
        
        <div v-if="pokemonData">
            <div class="row">
                <div class="col d-flex align-items-center" ><button @click="volverAtras" type="button" class="btn btn-outline-primary"><FlechaAtras/> Volver a la lista</button></div>
                <div class="col"><img :src="pokemonData.sprites?.front_default" alt=""/></div>
            </div>
            <div class="row">
                <div class="col"><h1>Nombre del pokemon</h1></div>
                <div class="col"><h1> {{ $route.params.pokemon }}</h1></div>
            </div>
            <div class="row">
                <div class="col"><h2>Tipo</h2></div>
                <div class="col"><ul class="list-group"><li v-for="types in pokemonData.types" class="list-group-item list-group-item-action">{{ types.type.name }}</li></ul></div>
            </div>
            <div class="row">
                <div class="col"><h2>Movimientos</h2></div>
                <div class="col"><ul class="list-group"><li v-for="moves in pokemonData.moves" class="list-group-item list-group-item-action">{{ moves.move.name }}</li></ul></div>
            </div>
        </div>

        <div v-else>
            <div class="alert alert-danger gx-5 mt-5" role="alert">
                <h2>Pokemon no existe</h2>
                <p><span class="fw-bold">Aviso:</span> Este pokemon no existe, seleccione <router-link to="/pokemones" class="alert-link">uno de la lista principal</router-link> </p>
            </div>
        </div>
    </div>
</template>