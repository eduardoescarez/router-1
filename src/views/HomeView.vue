<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from "@/store/counter.js";

const useCounter = useCounterStore();

const { increment } =  useCounter;
const { count, double } = storeToRefs(useCounter);
</script>

<template>
    <div class="container">
        <h1>Bienvenido a PokeAPI</h1>
        <div class="row">
            <div class="col">
                <p>Esta es un proyecto del curso de Vue 3 en Udemy de <a href="https://bluuweb.github.io/">bluuweb!</a>, con algunas ✨cosas más✨, todo desarrollado con <a href="https://vuejs.org/">Vue 3</a>, <a href="https://getbootstrap.com/">Bootstrap 5</a>, y <a href="https://axios-http.com">Axios</a></p>
                <p>Esto proporciona una base inicial, pero seguramente ire actualizando el proyecto poco a poco 😁</p>
            </div>
            <div class="col-3">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Contador</button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>Contador : {{ count }}</p>
                                <p>Doble : {{ double }}</p>
                                <button @click="increment" class="btn btn-outline-info">Incrementa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
