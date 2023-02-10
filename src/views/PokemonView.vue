<script setup>
import { useRoute, useRouter } from "vue-router";
import FlechaAtras from "../components/FlechaAtras.vue"
import { useGetData } from "../composables/getData"

const ruta = useRoute();
const rutaAtras = useRouter();

const volverAtras = () => {
    rutaAtras.push('/pokemones');
}

const {getData, data, loading, errorGeneral} = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${ruta.params.pokemon}`);
</script>

<template>
    <p v-if="loading">Cargardo información</p>
    <div class="alert alert-danger mt-2" v-if="errorGeneral">{{ errorGeneral }}</div>
    <div v-if="data" class="container"> 
        
        <div v-if="data">
            <div class="row">
                <div class="col d-flex align-items-center" ><button @click="volverAtras" type="button" class="btn btn-outline-primary"><FlechaAtras/> Volver a la lista</button></div>
                <div class="col"><img :src="data.sprites?.front_default" alt=""/></div>
            </div>
            <div class="row">
                <div class="col"><h1>Nombre del pokemon</h1></div>
                <div class="col"><h1> {{ $route.params.pokemon }}</h1></div>
            </div>
            <div class="row">
                <div class="col"><h2>Tipo</h2></div>
                <div class="col"><ul class="list-group"><li v-for="types in data.types" class="list-group-item list-group-item-action">{{ types.type.name }}</li></ul></div>
            </div>
            <div class="row">
                <div class="col"><h2>Movimientos</h2></div>
                <div class="col"><ul class="list-group"><li v-for="moves in data.moves" class="list-group-item list-group-item-action">{{ moves.move.name }}</li></ul></div>
            </div>
        </div>
    </div>
</template>