<template>
    <div class="results">
        <h3>Quiz Complete!</h3>
        <p>You scored {{ score }} out of {{ total }}.</p>
        <p>{{ percentage }}%</p>
        <button @click="$emit('restart')">Restart Quiz</button>
        <button @click="$emit('show-solutions')">View Solutions</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    score: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
});

defineEmits(['restart', 'show-solutions']);

const percentage = computed(() => Math.round((props.score / props.total) * 100));
</script>
