<script setup>
const props = defineProps({
    modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

function onTabPress(e) {
    let textarea = e.target;
      // get the caret position/selection
      let val = textarea.value,
      start = textarea.selectionStart,
      end = textarea.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      const newValue = val.substring(0, start) + "\t" + val.substring(end);
      
      // emit the new value to parent
      emit('update:modelValue', newValue);

      // move caret to end of text + tab + 1
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      }, 0);
};
</script>

<template>
    <textarea 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @keydown.tab.prevent="onTabPress"
        @keyup="emit('update:modelValue', e.target.value)"
        placeholder="Type here... (Tab key will insert a tab character)"
    ></textarea>
</template>

<style scoped>
textarea {
    width: 100%;
    min-height: 200px;
    padding: 12px;
    font-size: 14px;
    font-family: monospace;
    border: 2px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}

textarea:focus {
    outline: none;
    border-color: #42b983;
}
</style>