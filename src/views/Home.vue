<script setup>
import { useFlash } from '../composables/useFlash';

let { flash } = useFlash();
</script>

<template>
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