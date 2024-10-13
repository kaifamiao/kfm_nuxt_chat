<!-- components/SelectList.vue -->
<template>
  <select v-model="list">
    <option value="list1">列表 1</option>
    <option value="list2">列表 2</option>
    <option value="list3">列表 3</option>
    <option value="list4">列表 4</option>
    <option value="list5">列表 5</option>
  </select>
</template>

<script setup>
import { useSelectListStore } from '~/store/selectList';

const selectListStore = useSelectListStore();
const list = computed({
  get: () => selectListStore.list,
  set: (value) => selectListStore.setList(value),
});
</script>
