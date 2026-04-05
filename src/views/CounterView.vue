<script setup>
import { counter } from '../router/stores/counterStore';
</script>

<template>
    <div>
        <h2>
            {{ counter.count }}
        </h2>
        <button @click="counter.decrement()">Decrement</button>
        <button @click="counter.increment()">Increment</button>
        <button @click="counter.reset()">Reset</button>
    </div>
</template>