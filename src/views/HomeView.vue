<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useCounterStore } from "../store/counter.js"

const useCounter = useCounterStore()
</script>

<template>
    <div>
        <h2>Home counter : {{ useCounter.count }}</h2>
        <h2>Double : {{ useCounter.double }}</h2>
        <button @click="useCounter.increment">Increment</button>
    </div>
    <TheWelcome />

</template>
