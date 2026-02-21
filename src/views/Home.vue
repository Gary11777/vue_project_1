<script setup>
import { useFlash } from '../composables/useFlash';

let { flash } = useFlash();
</script>

<template>
  
  <!-- <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p><b>{{ message }}</b></p>
  <p><input type="text" v-model="message" /></p>
  <p><button @click="reverseMessage">Reverse Message</button></p> -->
  <main>
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
    <p>
      <button @click="flash('Test Title', 'It Works!')">Click me</button>
    </p>
  </main>
</template>

<style scoped>
</style>