<template>
    <header>
        <h2>{{ quiz.name }}</h2>
        <p>Total Questions: {{ quiz.questions?.length ?? 0 }}</p>
    </header>
</template>

<script setup>
import { inject } from 'vue';

defineProps({
    quiz: {
        type: Object,
        required: true,
    },
});

let key = inject('key');
</script>
