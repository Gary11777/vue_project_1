<script setup>
import { useFlash } from '../composables/useFlash';

let { flash } = useFlash();
</script>

<template>
  <main>
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
    <p>
      <button @click="flash('Success', 'It Works On The About Page!', 'info')">Click me</button>
    </p>
  </main>
</template>

<style scoped>
</style>