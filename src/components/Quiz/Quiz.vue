<template>
    <QuizHeader />

    <QuizQuestion />

    <QuizFooter />
</template>

<script setup>
import QuizHeader from './QuizHeader.vue';
import QuizQuestion from './QuizQuestion.vue';
import QuizFooter from './QuizFooter.vue';

defineProps({
    quiz: {
        type: Object,
        required: true,
    },
});
</script>