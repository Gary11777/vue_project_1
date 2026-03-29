<script setup>
import Quiz from '../components/Quiz/Quiz.vue';
import { state } from '../router/stores/quizStore';


</script>

<template>
    <main>
        <Quiz :quiz="state" />
    </main>
</template>