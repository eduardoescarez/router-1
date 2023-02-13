import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([]);

    const add = (pokemon) => {
        favoritos.value.push(pokemon);
    };

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id);
    }

    return {
        favoritos,
        add,
        remove
    };


});