<template>
    <header>
        <h2>{{ state.name }}</h2>
        <p>Welcome to {{ state.name }} quiz!</p>
    </header>
</template>

<script setup>
import { state } from '../../router/stores/quizStore';


</script>
