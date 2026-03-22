<script setup>
import Quiz, { quizData } from '../components/Quiz/Quiz.vue';
</script>

<template>
    <main>
        <Quiz :quiz="quizData" />
    </main>
</template>