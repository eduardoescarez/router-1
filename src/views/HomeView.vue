<script setup>
import { storeToRefs } from 'pinia';
import TheWelcome from '../components/TheWelcome.vue';
import { useCounterStore } from "../store/counter.js";

const useCounter = useCounterStore();

const { increment } =  useCounter;
const { count, double } = storeToRefs(useCounter);
</script>

<template>
    <div>
        <h2>Home counter : {{ count }}</h2>
        <h2>Double : {{ double }}</h2>
        <button @click="increment">Increment</button>
    </div>
    <TheWelcome />

</template>
