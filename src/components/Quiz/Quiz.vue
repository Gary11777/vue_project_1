<template>
    <QuizHeader :quiz="quiz" />

    <QuizQuestion v-if="currentQuestion" :question="currentQuestion" @answer="onAnswer" />

    <QuizFooter :quiz="quiz" />
</template>

<script>
/** Default quiz payload; import in views e.g. `import Quiz, { quizData } from '.../Quiz.vue'` */
export const quizData = {
    name: 'My First Quiz',
    questions: [
        {
            text: 'What is 2 + 2?',
            options: ['3', '4', '5', '22'],
            answer: '4',
        },
        {
            text: 'Which is a JavaScript framework?',
            options: ['Django', 'Vue', 'Rails', 'Spring'],
            answer: 'Vue',
        },
    ],
};
</script>

<script setup>
import QuizHeader from './QuizHeader.vue';
import QuizQuestion from './QuizQuestion.vue';
import QuizFooter from './QuizFooter.vue';
import { provide} from 'vue';


let props = defineProps({ quiz: Object });

provide('quiz', props.quiz);

</script>