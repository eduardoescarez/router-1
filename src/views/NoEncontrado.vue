<script setup>
import Advertencia from '../components/Advertencia.vue';
</script>

<template>
    <div class="container">
        <div class="alert alert-danger gx-5 mt-5" role="alert">
            <h2><Advertencia/> Error 404</h2>
            <p><span class="fw-bold">Aviso:</span> Esta pagina no existe, puede ir a <router-link to="/pokemones" class="alert-link">la lista principal</router-link> o <router-link to="/pokemones" class="alert-link">al inicio</router-link>.</p>
        </div>
    </div>
</template>