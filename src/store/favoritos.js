import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([]);

    const add = (pokemon) => {
        favoritos.value.push(pokemon)
    }

    return {
        favoritos,
        add
    };


});