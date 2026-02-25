<script setup>

import { ref, onMounted } from 'vue';

let textarea = ref(null);

function onTabPress(e) {
    let t = textarea.value;
      // get the caret position/selection
      let val = t.value,
      start = t.selectionStart,
      end = t.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      t.value = val.substring(0, start) + "\t" + val.substring(end);

      // move caret to end of text + tab + 1
      t.selectionStart = t.selectionEnd = start + 1;

      // prevent the browser from adding a newline character
      e.preventDefault();
};


</script>

<template>
  <main>
    <div>
      <h1>E21 Page</h1>
    </div>
    <form>
      <textarea ref="textarea" @keydown.tab="onTabPress" style="width: 50%; height: 200px;">Hi there</textarea>
    </form>
  </main>
</template>

<style scoped>
</style>