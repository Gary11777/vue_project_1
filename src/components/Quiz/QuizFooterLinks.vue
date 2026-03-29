<template>
    <div>
        <h5>{{ state.name }}</h5>
        <button @click="state.name = 'A New Quiz'">Change Quiz Name</button>
    </div>

    <ul>
        <li><a href="#">Get a Job</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>
</template>

<script setup>
import { state } from '../../router/stores/quizStore';
</script>
