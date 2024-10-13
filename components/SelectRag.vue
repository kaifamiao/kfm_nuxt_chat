<!-- components/SelectRag.vue -->
<template>
  <select v-model="rag">
    <option value="rag-1">rag-1</option>
    <option value="rag-2">rag-2</option>
    <option value="rag-3">rag-3</option>
    <option value="rag-4">rag-4</option>
  </select>
</template>

<script setup>
import { useSelectRagStore } from '~/store/selectRag';

const selectRagStore = useSelectRagStore();
const rag = computed({
  get: () => selectRagStore.selectedRag,
  set: (value) => selectRagStore.setRag(value),
});
</script>
