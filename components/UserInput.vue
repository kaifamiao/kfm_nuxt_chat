<!-- components/UserInput.vue -->
<template>
  <div class="user-message">
    {{ content }}
  </div>
</template>

<script setup>
defineProps({
  content: String,
});
</script>

<style scoped>
.user-message {
    background-color: #95ec69;
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    align-items: flex-end;
  }
</style>
