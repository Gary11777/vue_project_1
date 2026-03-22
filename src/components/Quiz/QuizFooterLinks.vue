<template>
    <div>
        <h5>{{ quiz.name }}</h5>
    </div>

    <ul>
        <li><a href="#">Get a Job</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>
</template>

<script setup>
import { inject } from 'vue';

defineProps({
    quiz: {
        type: Object,
        required: true,
    },
});


/** Ref from Quiz.vue (template auto-unwraps refs) */
let quizName = inject('quiz');

</script>
