<script setup>
import { useStorage } from '../composables/useStorage';

let { val: food, clear: clearFood } = useStorage('food', 'tacos');
let { val: age, clear: clearAge } = useStorage('age', 25);

function clearAll() {
  clearFood();
  clearAge();
}
</script>

<template>
  <main>
    <div>
      <h1>E20 Composable Example: Local Storage</h1>
    </div>
    <p>
      What is your favorite food? <input type="text" v-model="food"><br /><br />
      How old are you? <input type="number" v-model="age"><br /><br />
      <button @click="clearAll">Clear All</button>
    </p>
  </main>
</template>

<style scoped>
</style>