<script setup>
import TabbableTextarea from './TabbableTextarea.vue';
import { ref } from 'vue';

let comment = ref('test value');

setTimeout(() => {
  comment.value = 'it works!';
}, 2000);
</script>

<template>
  <main>
    <div>
      <h1>E21 Page</h1>
    </div>
    <form>
      <TabbableTextarea v-model="comment" style="width: 50%; height: 200px;" />
    </form>
  </main>
</template>

<style scoped>
</style>