<template>
    <footer>
        <h4>Quiz Footer </h4>

        <QuizFooterLinks :quiz="quiz" />
    </footer>
</template>

<script setup>
import QuizFooterLinks from './QuizFooterLinks.vue';

defineProps({
    quiz: {
        type: Object,
        required: true,
    },
});
</script>