<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container">
            <router-link class="navbar-brand" to="/">
            <img src="@/assets/logo.svg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
            PokeAPI
            </router-link>
            <div>
                <router-link to="/" class="btn btn-outline-primary">Home</router-link>
                <router-link to="/pokemons" class="btn btn-outline-primary">Pokemones</router-link>
            </div>
        </div>
    </nav>


    <div class="container">
        <RouterView />
    </div>
</template>

