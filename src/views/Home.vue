<script setup>

import { ref } from 'vue'

let message = ref('Hello, Vue!')

setTimeout(() => {
  message.value = 'Hello, Vue! (updated)'
}, 2000)

const reverseMessage = () => {
  message.value = message.value.split('').reverse().join('')
}

</script>

<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p><b>{{ message }}</b></p>
  <p><input type="text" v-model="message" /></p>
  <p><button @click="reverseMessage">Reverse Message</button></p>
</template>

<style scoped>
</style>