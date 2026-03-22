<template>
    <div class="solutions">
        <h3>Solutions</h3>

        <div v-for="(question, index) in questions" :key="index" class="solution-item">
            <h4>{{ index + 1 }}. {{ question.text }}</h4>
            <p><strong>Correct Answer:</strong> {{ question.answer }}</p>
            <p>
                <strong>Your Answer:</strong>
                <span :class="{ correct: userAnswers[index] === question.answer, incorrect: userAnswers[index] !== question.answer }">
                    {{ userAnswers[index] }}
                </span>
            </p>
        </div>

        <button @click="$emit('restart')">Restart Quiz</button>
    </div>
</template>

<script setup>
defineProps({
    questions: {
        type: Array,
        required: true,
    },
    userAnswers: {
        type: Array,
        required: true,
    },
});

defineEmits(['restart']);
</script>

<style scoped>
.correct {
    color: green;
    font-weight: bold;
}

.incorrect {
    color: red;
    font-weight: bold;
}
</style>
