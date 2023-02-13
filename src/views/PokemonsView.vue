<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "../composables/getData";


const {getData, data, loading, errorGeneral} = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");


</script>
<template>
    
    <h1>Pokemones</h1>
    <p v-if="loading">Cargardo información</p>
    <div class="alert alert-danger mt-2 " v-if="errorGeneral">{{ errorGeneral }}</div>
    <div v-if="data">
        <div class="d-flex justify-content-center">
            <div class="btn-group m-2" role="group">
                <button class="btn btn-primary" @click="getData(data.previous)" :disabled="!data.previous">Anterior</button>
                <button class="btn btn-primary" @click="getData(data.next)" :disabled="!data.next">Siguiente</button>
            </div>
        </div>
        <div class="list-group m-2">
            <router-link v-for="pokemon in data.results" class="list-group-item list-group-item-action" :to="`/pokemones/${pokemon.name}`" >{{ pokemon.name }}</router-link>
        </div>
        
        
    </div>

</template>

<style scoped>

</style>
