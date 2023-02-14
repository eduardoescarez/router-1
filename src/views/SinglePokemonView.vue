<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFormatter} from "@/composables/getFormato";
import { useFavoritosStore } from "@/store/favoritos";
import FlechaAtras from "@/components/FlechaAtras.vue";
import html2pdf from "html2pdf.js";

const ruta = useRoute();
const rutaAtras = useRouter();
const useFavoritos = useFavoritosStore();

const volverAtras = () => {
    rutaAtras.push('/pokemones');
}

const { add, findPokemon } = useFavoritos;
const { getData, data, loading, errorGeneral } = useGetData();
const { formatter } = useFormatter();

const exportToPDF = () => {
    html2pdf(document.getElementById("element-to-convert"), {
            margin: 1,
            filename: `${ruta.params.pokemon}.pdf`,
            });
}


getData(`https://pokeapi.co/api/v2/pokemon/${ruta.params.pokemon}`);

</script>

<template>
    <div class="container">
        <p v-if="loading">Cargardo información</p>
        <div class="alert alert-danger mt-2" v-if="errorGeneral">{{ errorGeneral }}</div>
    </div>
    <div v-if="data" class="container"> 
            <div class="row">
                <div class="col d-flex align-items-center" >
                    <button @click="volverAtras" class="btn btn-outline-primary"><FlechaAtras/> Volver a la lista</button>
                    <button @click="add(data)" :disabled="findPokemon(data.name)" class="btn btn-outline-primary m-2"> Marcar como favorito</button>
                    <button @click="exportToPDF" class="btn btn-outline-info m-2">Exportar a PDF</button>
                </div>
            </div>
            <div id="element-to-convert">
                <div class="row d-flex align-items-center">
                    <div class="col-5"><h1>Información del Pokemon</h1></div>
                    <div class="col-1"><img :src="data.sprites?.front_default"/></div>
                    <div class="col"><h1> {{ formatter($route.params.pokemon) }}</h1></div>
                </div>
                <div class="row mt-2">
                    <div class="col"><h2>Tipo</h2></div>
                </div>
                <div class="row row-cols-5">
                    <div v-for="types in data.types" class="col m-1 p-2 border border-1 rounded-2">{{ formatter(types.type.name) }}</div>
                </div>
                <div class="row mt-2">
                    <div class="col"><h2>Movimientos</h2></div>
                </div>
                <div class="row row-cols-5">
                    <div v-for="moves in data.moves" class="col m-1 p-2 border border-1 rounded-2">{{ formatter(moves.move.name) }}</div>
                </div>
            </div>
    </div>
</template>