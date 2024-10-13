<!-- components/Assistant.vue -->
<template>
  <div class="assistant-message">
    {{ content }}
  </div>
</template>

<script setup>
defineProps({
  content: String,
});
</script>
<style scoped>
.assistant-message {
  background-color: #e7e7e7;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  align-items: flex-end;
}
</style>
