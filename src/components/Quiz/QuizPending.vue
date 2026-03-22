<template>
    <div class="pending">
        <h3>Quiz Not Started</h3>
        <p>Click the button below to begin the quiz.</p>
        <button @click="$emit('start')">Start Quiz</button>
    </div>
</template>

<script setup>
defineEmits(['start']);
</script>
