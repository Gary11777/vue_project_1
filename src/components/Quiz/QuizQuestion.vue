<template>
    <div class="question" v-if="question">
        <h3>{{ question.text }}</h3>

        <ul>
            <li v-for="(option, index) in question.options" :key="index">
                <button @click="$emit('answer', option)">{{ option }}</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    question: {
        type: Object,
        required: false,
        default: null,
    },
});

defineEmits(['answer']);
</script>
