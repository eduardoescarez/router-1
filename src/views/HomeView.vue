<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from "../store/counter.js";

import TheWelcome from '../components/TheWelcome.vue';

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
