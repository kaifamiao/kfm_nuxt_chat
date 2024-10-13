<!-- components/SelectModel.vue -->
<template>
  <select v-model="model">
    <option value="gqwen2">qwen2</option>
    <option value="llama3">llama3</option>
    <option value="gpt-4">GPT-4</option>
  </select>
</template>

<script setup>
import { computed } from 'vue';
import { useSelectModelStore } from '~/store/selectModel';

const selectModelStore = useSelectModelStore();

const model = computed({
  get: () => selectModelStore.selectedModel,
  set: (value) => selectModelStore.setModel(value),
});
</script>
