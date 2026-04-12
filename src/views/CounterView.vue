<script setup>
import { useCounterStore } from '@/router/stores/CounterStore';

let counter = useCounterStore();
</script>

<template>
    <div>
        <h2>
            {{ counter.count }}
        </h2>
        <button @click="counter.decrement()">Decrement</button>

        <button 
        @click="counter.increment()"
        :disabled="! counter.remaining"
        >Increment ({{ counter.remaining }} remaining)</button>
        
        <button @click="counter.reset()">Reset</button>
        <p :style="{ color: counter.remainingColor }">
            {{ counter.remainingText }}
        </p>
    </div>
</template>